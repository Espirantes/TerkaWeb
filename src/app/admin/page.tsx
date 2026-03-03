import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [articlesCount, leadsCount] = await Promise.all([
    supabase.from("articles").select("id", { count: "exact", head: true }),
    supabase.from("leads").select("id", { count: "exact", head: true }),
  ]);

  const stats = [
    {
      label: "Články",
      count: articlesCount.count ?? 0,
      href: "/admin/articles",
    },
    {
      label: "Leady",
      count: leadsCount.count ?? 0,
      href: "/admin/leads",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text">Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-sm font-medium text-text-light">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-primary">
              {stat.count}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
