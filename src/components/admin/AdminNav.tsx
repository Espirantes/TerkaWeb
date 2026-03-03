"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [newLeadsCount, setNewLeadsCount] = useState(0);

  useEffect(() => {
    const supabase = createClient();

    // Fetch initial count of new leads
    supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("status", "nove")
      .then(({ count }) => setNewLeadsCount(count ?? 0));

    // Subscribe to new inserts on leads table
    const channel = supabase
      .channel("leads-notify")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "leads" },
        () => {
          setNewLeadsCount((prev) => prev + 1);
        },
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "leads" },
        (payload) => {
          const newRow = payload.new as { status?: string };
          const oldRow = payload.old as { status?: string };
          if (oldRow.status === "nove" && newRow.status !== "nove") {
            setNewLeadsCount((prev) => Math.max(0, prev - 1));
          } else if (oldRow.status !== "nove" && newRow.status === "nove") {
            setNewLeadsCount((prev) => prev + 1);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/articles", label: "Články" },
    { href: "/admin/leads", label: "Leady", badge: newLeadsCount },
    { href: "/admin/sections", label: "Sekce" },
  ];

  return (
    <nav className="flex items-center justify-between border-b border-secondary bg-white px-6 py-3">
      <div className="flex items-center gap-6">
        <Link href="/admin" className="font-bold text-primary">
          DD Řepy Admin
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-medium transition-colors ${
              pathname === item.href
                ? "text-primary"
                : "text-text-light hover:text-text"
            }`}
          >
            {item.label}
            {item.badge ? (
              <span className="absolute -right-4 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {item.badge}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="text-sm text-text-light hover:text-text">
          Web
        </Link>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Odhlásit
        </button>
      </div>
    </nav>
  );
}
