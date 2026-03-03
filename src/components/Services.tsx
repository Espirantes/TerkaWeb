interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  items?: ServiceItem[];
}

const FALLBACK_ITEMS: ServiceItem[] = [
  { icon: "\u{1F3E0}", title: "Ubytování", description: "Jednolůžkové i dvoulůžkové pokoje s vlastním sociálním zařízením, nábytek na míru, televizí a Wi-Fi." },
  { icon: "\u{1F37D}\u{FE0F}", title: "Stravování", description: "Celodenní stravování 5\u00D7 denně, dietní i diabetická strava. Čerstvé suroviny od lokálních dodavatelů." },
  { icon: "\u{1F3E5}", title: "Zdravotní péče", description: "Nepřetržitá zdravotní služba, pravidelné lékařské vizity, podávání léků a spolupráce se specialisty." },
  { icon: "\u{1F4AA}", title: "Rehabilitace", description: "Fyzioterapie, ergoterapie a cvičení pod vedením odborníků. Moderně vybavená rehabilitační místnost." },
  { icon: "\u{1F3A8}", title: "Volnočasové aktivity", description: "Výtvarné dílny, hudební terapie, zahradničení, výlety a společenské hry. Každý den něco nového." },
  { icon: "\u{1F4CB}", title: "Sociální poradenství", description: "Pomoc s vyřízením příspěvku na péči, komunikace s úřady a podpora při řešení životních situací." },
];

export function Services({ title, subtitle, items }: ServicesProps) {
  const services = items ?? FALLBACK_ITEMS;

  return (
    <section id="sluzby" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            {title ?? "Naše služby"}
          </h2>
          <p className="mt-4 text-lg text-text-light">
            {subtitle ?? "Poskytujeme komplexní péči, která pokrývá všechny potřeby našich klientů."}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
