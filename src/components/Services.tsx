const SERVICES = [
  {
    icon: "🏠",
    title: "Ubytování",
    description:
      "Jednolůžkové i dvoulůžkové pokoje s vlastním sociálním zařízením, nábytek na míru, televizí a Wi-Fi.",
  },
  {
    icon: "🍽️",
    title: "Stravování",
    description:
      "Celodenní stravování 5× denně, dietní i diabetická strava. Čerstvé suroviny od lokálních dodavatelů.",
  },
  {
    icon: "🏥",
    title: "Zdravotní péče",
    description:
      "Nepřetržitá zdravotní služba, pravidelné lékařské vizity, podávání léků a spolupráce se specialisty.",
  },
  {
    icon: "💪",
    title: "Rehabilitace",
    description:
      "Fyzioterapie, ergoterapie a cvičení pod vedením odborníků. Moderně vybavená rehabilitační místnost.",
  },
  {
    icon: "🎨",
    title: "Volnočasové aktivity",
    description:
      "Výtvarné dílny, hudební terapie, zahradničení, výlety a společenské hry. Každý den něco nového.",
  },
  {
    icon: "📋",
    title: "Sociální poradenství",
    description:
      "Pomoc s vyřízením příspěvku na péči, komunikace s úřady a podpora při řešení životních situací.",
  },
] as const;

export function Services() {
  return (
    <section id="sluzby" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            Naše služby
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Poskytujeme komplexní péči, která pokrývá všechny potřeby našich
            klientů.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-text">
                {service.title}
              </h3>
              <p className="mt-3 text-text-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
