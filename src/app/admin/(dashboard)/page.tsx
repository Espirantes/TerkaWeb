import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  type LeadStatus,
  LEAD_STATUS_LABELS,
  LEAD_STATUS_COLORS,
} from "@/lib/supabase/types";

const ALL_STATUSES: LeadStatus[] = [
  "nove",
  "v_reseni",
  "podpis_smlouvy",
  "dokonceno",
  "zruseno",
];

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [articlesCount, leadsRes] = await Promise.all([
    supabase.from("articles").select("id", { count: "exact", head: true }),
    supabase.from("leads").select("status"),
  ]);

  const leads = (leadsRes.data ?? []) as { status: LeadStatus }[];
  const totalLeads = leads.length;
  const statusCounts = ALL_STATUSES.reduce(
    (acc, s) => {
      acc[s] = leads.filter((l) => l.status === s).length;
      return acc;
    },
    {} as Record<LeadStatus, number>,
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-text">Dashboard</h1>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/articles"
          className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-medium text-text-light">Články</p>
          <p className="mt-2 text-3xl font-bold text-primary">
            {articlesCount.count ?? 0}
          </p>
        </Link>
        <Link
          href="/admin/leads"
          className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-medium text-text-light">Leady celkem</p>
          <p className="mt-2 text-3xl font-bold text-primary">{totalLeads}</p>
        </Link>
        {statusCounts.nove > 0 && (
          <Link
            href="/admin/leads"
            className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-sm font-medium text-text-light">Nové leady</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {statusCounts.nove}
            </p>
          </Link>
        )}
      </div>

      {/* Lead pipeline */}
      <h2 className="mt-10 text-lg font-bold text-text">Pipeline leadů</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {ALL_STATUSES.map((s) => (
          <div
            key={s}
            className="rounded-xl bg-white p-4 shadow-sm"
          >
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${LEAD_STATUS_COLORS[s]}`}
            >
              {LEAD_STATUS_LABELS[s]}
            </span>
            <p className="mt-2 text-2xl font-bold text-text">
              {statusCounts[s]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
