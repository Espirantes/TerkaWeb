const TEAM_MEMBERS = [
  {
    name: "Mgr. Jana Nováková",
    role: "Ředitelka",
    description:
      "Vede náš domov s vášní a 20letou zkušeností v sociálních službách.",
  },
  {
    name: "Bc. Marie Dvořáková",
    role: "Vrchní sestra",
    description:
      "Dohlíží na kvalitu zdravotní péče a koordinuje ošetřovatelský tým.",
  },
  {
    name: "Mgr. Petra Svobodová",
    role: "Sociální pracovnice",
    description:
      "Pomáhá klientům a rodinám s administrativou a sociálním poradenstvím.",
  },
  {
    name: "Bc. Tomáš Veselý",
    role: "Fyzioterapeut",
    description:
      "Sestavuje individuální rehabilitační plány a vede skupinová cvičení.",
  },
] as const;

export function Team() {
  return (
    <section id="tym" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            Náš tým
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Profesionální a empatický tým, který se o vás postará s láskou.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-secondary bg-cream p-6 text-center"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                {member.name
                  .split(" ")
                  .filter((part) => part[0] !== part[0].toLowerCase())
                  .slice(-2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-text-light">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
