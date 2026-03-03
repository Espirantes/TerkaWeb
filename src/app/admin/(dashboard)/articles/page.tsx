import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function ArticlesPage() {
  const supabase = await createClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text">Články</h1>
        <Link
          href="/admin/articles/new"
          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Nový článek
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary bg-primary/5">
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Název
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Stav
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Datum
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-text">
                Akce
              </th>
            </tr>
          </thead>
          <tbody>
            {(articles ?? []).map((article) => (
              <tr key={article.id} className="border-b border-secondary/50">
                <td className="px-6 py-4 font-medium text-text">
                  {article.title}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      article.is_published
                        ? "bg-primary/10 text-primary"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {article.is_published ? "Publikováno" : "Koncept"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-text-light">
                  {article.published_at
                    ? new Date(article.published_at).toLocaleDateString("cs-CZ")
                    : "—"}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/articles/${article.id}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Upravit
                  </Link>
                </td>
              </tr>
            ))}
            {(articles ?? []).length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-text-light">
                  Zatím žádné články.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
