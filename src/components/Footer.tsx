const FOOTER_LINKS = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#tym", label: "Tým" },
  { href: "#cenik", label: "Ceník" },
  { href: "#galerie", label: "Galerie" },
  { href: "#aktuality", label: "Aktuality" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Footer() {
  return (
    <footer className="bg-text py-12 text-white/80">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              Domov důchodců Řepy
            </h3>
            <p className="mt-3 text-sm">
              Žalanského 68/54
              <br />
              163 00 Praha 17 — Řepy
            </p>
            <p className="mt-2 text-sm">
              Tel:{" "}
              <a href="tel:+420222333444" className="hover:text-white">
                +420 222 333 444
              </a>
            </p>
            <p className="text-sm">
              E-mail:{" "}
              <a href="mailto:info@ddrepy.cz" className="hover:text-white">
                info@ddrepy.cz
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Navigace</h3>
            <nav className="mt-3 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Provozní hodiny</h3>
            <div className="mt-3 space-y-1 text-sm">
              <p>Recepce: Po—Pá 7:00 — 19:00</p>
              <p>Návštěvy: Denně 9:00 — 18:00</p>
              <p>Zdravotní služba: 24/7</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Domov důchodců Řepy. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
