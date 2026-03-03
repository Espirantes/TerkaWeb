import { createClient } from "@/lib/supabase/server";

export default async function LeadsPage() {
  const supabase = await createClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text">Leady z formuláře</h1>
      <p className="mt-1 text-sm text-text-light">
        Zprávy odeslané přes kontaktní formulář na webu.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary bg-primary/5">
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Datum
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Jméno
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                E-mail
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Telefon
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">
                Zpráva
              </th>
            </tr>
          </thead>
          <tbody>
            {(leads ?? []).map((lead) => (
              <tr key={lead.id} className="border-b border-secondary/50">
                <td className="px-6 py-4 text-sm text-text-light">
                  {new Date(lead.created_at).toLocaleString("cs-CZ")}
                </td>
                <td className="px-6 py-4 font-medium text-text">
                  {lead.name}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {lead.email}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-text-light">
                  {lead.phone || "—"}
                </td>
                <td className="max-w-xs truncate px-6 py-4 text-sm text-text-light">
                  {lead.message || "—"}
                </td>
              </tr>
            ))}
            {(leads ?? []).length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-text-light">
                  Zatím žádné leady.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
