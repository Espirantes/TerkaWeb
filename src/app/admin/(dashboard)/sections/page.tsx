import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function SectionsPage() {
  const supabase = await createClient();
  const { data: sections } = await supabase
    .from("page_sections")
    .select("*")
    .order("id");

  return (
    <div>
      <h1 className="text-2xl font-bold text-text">Sekce stránek</h1>
      <p className="mt-1 text-sm text-text-light">
        Editace textového obsahu jednotlivých sekcí webu.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(sections ?? []).map((section) => (
          <Link
            key={section.id}
            href={`/admin/sections/${section.id}`}
            className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-text-light">
              {section.id}
            </p>
            <p className="mt-1 text-lg font-bold text-text">
              {section.title ?? section.id}
            </p>
            <p className="mt-1 text-sm text-text-light">
              {section.subtitle ?? "Bez popisku"}
            </p>
            <p className="mt-3 text-xs text-text-light">
              Upraveno:{" "}
              {new Date(section.updated_at).toLocaleDateString("cs-CZ")}
            </p>
          </Link>
        ))}
        {(sections ?? []).length === 0 && (
          <p className="text-text-light">
            Žádné sekce. Spusťte SQL seed pro naplnění dat.
          </p>
        )}
      </div>
    </div>
  );
}
