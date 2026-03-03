export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-cream to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center md:px-8 md:py-32">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Praha — Řepy
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl">
          Domov, kde se cítíte{" "}
          <span className="text-primary">jako doma</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-light md:text-xl">
          Nabízíme kvalitní péči a příjemné prostředí pro seniory v klidné
          čtvrti Řepy. S láskou a respektem ke každému.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
          >
            Domluvit prohlídku
          </a>
          <a
            href="#o-nas"
            className="rounded-xl border-2 border-primary/20 bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            Více o nás
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { number: "25+", label: "let zkušeností" },
            { number: "80", label: "spokojených klientů" },
            { number: "40+", label: "členů personálu" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/80 px-8 py-6 shadow-sm"
            >
              <div className="text-3xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
