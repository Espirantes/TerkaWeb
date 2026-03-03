"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";

export default function SectionEditorPage() {
  const router = useRouter();
  const params = useParams();
  const sectionId = params.id as string;

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [contentJson, setContentJson] = useState("");
  const [saving, setSaving] = useState(false);
  const [jsonError, setJsonError] = useState("");

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("page_sections")
      .select("*")
      .eq("id", sectionId)
      .single()
      .then(({ data }) => {
        if (data) {
          setTitle(data.title ?? "");
          setSubtitle(data.subtitle ?? "");
          setContentJson(JSON.stringify(data.content, null, 2));
        }
      });
  }, [sectionId]);

  async function handleSave() {
    setJsonError("");
    let parsedContent;
    try {
      parsedContent = JSON.parse(contentJson);
    } catch {
      setJsonError("Nevalidní JSON. Zkontrolujte formát.");
      return;
    }

    setSaving(true);
    const supabase = createClient();
    await supabase
      .from("page_sections")
      .update({
        title: title || null,
        subtitle: subtitle || null,
        content: parsedContent,
        updated_at: new Date().toISOString(),
      })
      .eq("id", sectionId);

    router.push("/admin/sections");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold text-text">
        Sekce: {sectionId}
      </h1>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Nadpis
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-secondary bg-white px-4 py-3 text-text outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Podnadpis
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full rounded-xl border border-secondary bg-white px-4 py-3 text-text outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Obsah (JSON)
          </label>
          <textarea
            value={contentJson}
            onChange={(e) => {
              setContentJson(e.target.value);
              setJsonError("");
            }}
            rows={20}
            className="w-full rounded-xl border border-secondary bg-white px-4 py-3 font-mono text-sm text-text outline-none focus:border-primary"
          />
          {jsonError && (
            <p className="mt-1 text-sm text-red-600">{jsonError}</p>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark disabled:opacity-50"
          >
            {saving ? "Ukládání..." : "Uložit"}
          </button>
          <button
            onClick={() => router.push("/admin/sections")}
            className="rounded-xl border border-secondary px-6 py-3 font-semibold text-text-light hover:bg-secondary"
          >
            Zrušit
          </button>
        </div>
      </div>
    </div>
  );
}
