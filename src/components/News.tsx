import type { Article } from "@/lib/supabase/types";

interface NewsProps {
  articles: Article[];
}

export function News({ articles }: NewsProps) {
  if (articles.length === 0) return null;

  return (
    <section id="aktuality" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            Aktuality
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Co je u nás nového.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <time className="text-sm font-medium text-accent">
                {article.published_at
                  ? new Date(article.published_at).toLocaleDateString("cs-CZ", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : ""}
              </time>
              <h3 className="mt-2 text-xl font-bold text-text">
                {article.title}
              </h3>
              <p className="mt-3 text-text-light">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
