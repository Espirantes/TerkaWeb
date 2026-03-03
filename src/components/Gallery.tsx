const GALLERY_ITEMS = [
  { label: "Zahrada a okolí", color: "bg-primary/20" },
  { label: "Společenská místnost", color: "bg-accent/20" },
  { label: "Jídelna", color: "bg-primary/15" },
  { label: "Jednolůžkový pokoj", color: "bg-accent/15" },
  { label: "Rehabilitační místnost", color: "bg-primary/10" },
  { label: "Terasa", color: "bg-accent/10" },
] as const;

export function Gallery() {
  return (
    <section id="galerie" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">Galerie</h2>
          <p className="mt-4 text-lg text-text-light">
            Nahlédněte do prostor našeho domova.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex aspect-[4/3] items-center justify-center rounded-2xl ${item.color}`}
            >
              <span className="text-lg font-medium text-text-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-light">
          Fotografie budou doplněny. Pro osobní prohlídku nás kontaktujte.
        </p>
      </div>
    </section>
  );
}
