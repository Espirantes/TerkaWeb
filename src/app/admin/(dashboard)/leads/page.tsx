"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  type Lead,
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

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<LeadStatus | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    const supabase = createClient();
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) ?? []);
  }

  async function updateStatus(id: string, status: LeadStatus) {
    const supabase = createClient();
    await supabase.from("leads").update({ status }).eq("id", id);
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status } : l)),
    );
  }

  const filtered =
    filter === "all" ? leads : leads.filter((l) => l.status === filter);

  const statusCounts = ALL_STATUSES.reduce(
    (acc, s) => {
      acc[s] = leads.filter((l) => l.status === s).length;
      return acc;
    },
    {} as Record<LeadStatus, number>,
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-text">Leady z formuláře</h1>
      <p className="mt-1 text-sm text-text-light">
        Zprávy odeslané přes kontaktní formulář na webu.
      </p>

      {/* Status filter tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            filter === "all"
              ? "bg-primary text-white"
              : "bg-secondary text-text-light hover:bg-secondary/80"
          }`}
        >
          Vše ({leads.length})
        </button>
        {ALL_STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === s
                ? "bg-primary text-white"
                : "bg-secondary text-text-light hover:bg-secondary/80"
            }`}
          >
            {LEAD_STATUS_LABELS[s]} ({statusCounts[s]})
          </button>
        ))}
      </div>

      {/* Leads list */}
      <div className="mt-6 space-y-3">
        {filtered.map((lead) => (
          <div
            key={lead.id}
            className="rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className="flex cursor-pointer items-center gap-4 px-6 py-4"
              onClick={() =>
                setExpandedId(expandedId === lead.id ? null : lead.id)
              }
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-text">{lead.name}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${LEAD_STATUS_COLORS[lead.status]}`}
                  >
                    {LEAD_STATUS_LABELS[lead.status]}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-text-light">
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {lead.email}
                  </a>
                  {lead.phone && <span>{lead.phone}</span>}
                  <span>
                    {new Date(lead.created_at).toLocaleDateString("cs-CZ")}
                  </span>
                </div>
              </div>
              <svg
                className={`h-5 w-5 shrink-0 text-text-light transition-transform ${
                  expandedId === lead.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {expandedId === lead.id && (
              <div className="border-t border-secondary px-6 py-4">
                {lead.message && (
                  <p className="mb-4 whitespace-pre-wrap text-sm text-text">
                    {lead.message}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-sm font-medium text-text-light">
                    Změnit stav:
                  </span>
                  {ALL_STATUSES.map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(lead.id, s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                        lead.status === s
                          ? LEAD_STATUS_COLORS[s]
                          : "bg-secondary/50 text-text-light hover:bg-secondary"
                      }`}
                    >
                      {LEAD_STATUS_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-text-light">
            {filter === "all"
              ? "Zatím žádné leady."
              : `Žádné leady se stavem "${LEAD_STATUS_LABELS[filter]}".`}
          </p>
        )}
      </div>
    </div>
  );
}
