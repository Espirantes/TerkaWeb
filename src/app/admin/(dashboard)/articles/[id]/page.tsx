"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";

export default function ArticleEditorPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isNew = id === "new";

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [publishedAt, setPublishedAt] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (isNew) return;
    const supabase = createClient();
    supabase
      .from("articles")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setExcerpt(data.excerpt ?? "");
          setContent(data.content ?? "");
          setIsPublished(data.is_published);
          setPublishedAt(
            data.published_at
              ? new Date(data.published_at).toISOString().slice(0, 16)
              : "",
          );
        }
      });
  }, [id, isNew]);

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    const payload = {
      title,
      excerpt: excerpt || null,
      content: content || null,
      is_published: isPublished,
      published_at: publishedAt ? new Date(publishedAt).toISOString() : null,
    };

    if (isNew) {
      await supabase.from("articles").insert(payload);
    } else {
      await supabase.from("articles").update(payload).eq("id", id);
    }

    router.push("/admin/articles");
    router.refresh();
  }

  async function handleDelete() {
    if (!confirm("Opravdu smazat článek?")) return;
    setDeleting(true);
    const supabase = createClient();
    await supabase.from("articles").delete().eq("id", id);
    router.push("/admin/articles");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold text-text">
        {isNew ? "Nový článek" : "Upravit článek"}
      </h1>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Název
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
            Perex (krátký popis)
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-secondary bg-white px-4 py-3 text-text outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Obsah
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full rounded-xl border border-secondary bg-white px-4 py-3 text-text outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Datum publikace
          </label>
          <input
            type="datetime-local"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            className="rounded-xl border border-secondary bg-white px-4 py-3 text-text outline-none focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <label htmlFor="published" className="text-sm font-medium text-text">
            Publikováno
          </label>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSave}
            disabled={saving || !title}
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark disabled:opacity-50"
          >
            {saving ? "Ukládání..." : "Uložit"}
          </button>
          <button
            onClick={() => router.push("/admin/articles")}
            className="rounded-xl border border-secondary px-6 py-3 font-semibold text-text-light hover:bg-secondary"
          >
            Zrušit
          </button>
          {!isNew && (
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="ml-auto rounded-xl px-6 py-3 font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              Smazat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
