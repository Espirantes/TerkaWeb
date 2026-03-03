const NEWS_ITEMS = [
  {
    date: "28. února 2026",
    title: "Jarní zahradní slavnost",
    excerpt:
      "Zveme všechny klienty i jejich rodiny na tradiční jarní slavnost v naší zahradě. Připraveny jsou soutěže, občerstvení a hudební vystoupení.",
  },
  {
    date: "15. února 2026",
    title: "Nová rehabilitační místnost",
    excerpt:
      "S radostí oznamujeme otevření nově zrekonstruované rehabilitační místnosti s moderním vybavením pro fyzioterapii.",
  },
  {
    date: "3. února 2026",
    title: "Výtvarná výstava klientů",
    excerpt:
      "V prostorách společenské místnosti probíhá výstava výtvarných prací našich klientů. Výstava potrvá do konce března.",
  },
] as const;

export function News() {
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
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <time className="text-sm font-medium text-accent">
                {item.date}
              </time>
              <h3 className="mt-2 text-xl font-bold text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-text-light">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
