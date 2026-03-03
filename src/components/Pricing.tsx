const PRICING_ROWS = [
  { service: "Jednolůžkový pokoj", price: "18 500 Kč / měsíc" },
  { service: "Dvoulůžkový pokoj", price: "14 200 Kč / měsíc" },
  { service: "Celodenní stravování (5× denně)", price: "5 800 Kč / měsíc" },
  { service: "Základní ošetřovatelská péče", price: "zahrnuto v ceně" },
  { service: "Rehabilitace (individuální)", price: "350 Kč / sezení" },
  { service: "Rehabilitace (skupinová)", price: "150 Kč / sezení" },
  { service: "Praní a žehlení prádla", price: "zahrnuto v ceně" },
  { service: "Kadeřnické služby", price: "dle ceníku poskytovatele" },
] as const;

export function Pricing() {
  return (
    <section id="cenik" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">Ceník</h2>
          <p className="mt-4 text-lg text-text-light">
            Přehled orientačních cen za ubytování a služby.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary bg-primary/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                  Služba
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING_ROWS.map((row, i) => (
                <tr
                  key={row.service}
                  className={
                    i < PRICING_ROWS.length - 1
                      ? "border-b border-secondary/50"
                      : ""
                  }
                >
                  <td className="px-6 py-4 text-text">{row.service}</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl bg-primary/5 p-6 text-center">
          <p className="text-sm text-text-light">
            <strong className="text-text">Příspěvek na péči:</strong> Klienti
            s přiznaným příspěvkem na péči (stupně I–IV) mohou část nákladů
            hradit z tohoto příspěvku. Rádi vám pomůžeme s vyřízením žádosti.
          </p>
        </div>
      </div>
    </section>
  );
}
