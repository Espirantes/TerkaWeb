"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/articles", label: "Články" },
  { href: "/admin/leads", label: "Leady" },
  { href: "/admin/sections", label: "Sekce" },
] as const;

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <nav className="flex items-center justify-between border-b border-secondary bg-white px-6 py-3">
      <div className="flex items-center gap-6">
        <Link href="/admin" className="font-bold text-primary">
          DD Řepy Admin
        </Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              pathname === item.href
                ? "text-primary"
                : "text-text-light hover:text-text"
            }`}
          >
            {item.label}
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
