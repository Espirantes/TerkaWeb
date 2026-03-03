import Image from "next/image";

const VALUES = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Péče s láskou",
    description:
      "Individuální přístup ke každému klientovi. Nasloucháme a přizpůsobujeme péči jeho potřebám.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Komunita",
    description:
      "Bohatý společenský program, kulturní akce a možnost trávit čas s vrstevníky i rodinou.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Bezpečí",
    description:
      "Moderní vybavení, 24hodinová zdravotní služba a bezbariérový přístup v celém areálu.",
  },
] as const;

export function AboutUs() {
  return (
    <section id="o-nas" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80&fit=crop"
              alt="Společný prostor domova důchodců"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text md:text-4xl">
              O nás
            </h2>
            <p className="mt-6 text-lg text-text-light">
              Domov důchodců Řepy funguje již více než 25 let v klidné
              rezidenční čtvrti Prahy 17. Nabízíme důstojné bydlení a
              komplexní péči pro seniory, kteří potřebují pomoc v každodenním
              životě.
            </p>
            <p className="mt-4 text-lg text-text-light">
              Náš areál je obklopen zelení a nabízí příjemné prostředí pro
              odpočinek i aktivní trávení času.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-secondary bg-cream p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-text">
                {value.title}
              </h3>
              <p className="mt-3 text-text-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
