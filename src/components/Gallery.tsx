import Image from "next/image";

const GALLERY_ITEMS = [
  {
    label: "Zahrada a okolí",
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80&fit=crop",
  },
  {
    label: "Společenská místnost",
    src: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80&fit=crop",
  },
  {
    label: "Jídelna",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
  },
  {
    label: "Jednolůžkový pokoj",
    src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80&fit=crop",
  },
  {
    label: "Rehabilitační místnost",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  },
  {
    label: "Terasa",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop",
  },
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
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4">
                <span className="text-lg font-medium text-white">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
