import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&fit=crop"
          alt="Domov důchodců Řepy"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-text/60" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center md:px-8 md:py-40">
        <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          Praha — Řepy
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Domov, kde se cítíte{" "}
          <span className="text-accent">jako doma</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
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
            className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
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
              className="rounded-2xl bg-white/15 px-8 py-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
