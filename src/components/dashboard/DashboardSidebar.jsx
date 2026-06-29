"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAV, ROLE_LABELS } from "@/lib/dashboardNav";
import { cn } from "@/lib/cn";

function isLinkActive(href, pathname, exact) {
  return exact ? pathname === href : pathname.startsWith(href);
}

function UserBadge({ user }) {
  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex items-center gap-3 border-b border-ink/10 p-4 dark:border-parchment/10">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/20 text-sm font-semibold text-forest dark:bg-moss/20 dark:text-moss">
        {initials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink dark:text-parchment">
          {user.name}
        </p>
        <span className="inline-block rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-forest dark:bg-moss/10 dark:text-moss">
          {ROLE_LABELS[user.role] ?? user.role}
        </span>
      </div>
    </div>
  );
}

export default function DashboardSidebar({ user, onLogout }) {
  const pathname = usePathname();
  const links = DASHBOARD_NAV[user.role] ?? DASHBOARD_NAV.reader;

  return (
    <>
      {/* ── Desktop sidebar ─────────────────── */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-ink/10 bg-darkCream/40 dark:border-parchment/10 dark:bg-white/[0.03] md:flex">
        <UserBadge user={user} />

        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3">
          {links.map((link) => {
            const active = isLinkActive(link.href, pathname, link.exact);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-forest/10 text-forest dark:bg-moss/10 dark:text-moss"
                    : "text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-parchment/60 dark:hover:bg-parchment/5 dark:hover:text-parchment"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-ink/10 p-3 dark:border-parchment/10">
          <button
            type="button"
            onClick={onLogout}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink dark:text-parchment/60 dark:hover:bg-parchment/5 dark:hover:text-parchment"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* ── Mobile tab bar ──────────────────── */}
      <div className="sticky top-16 z-30 flex overflow-x-auto border-b border-ink/10 bg-darkCream/40 dark:border-parchment/10 dark:bg-white/[0.03] md:hidden">
        {links.map((link) => {
          const active = isLinkActive(link.href, pathname, link.exact);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex shrink-0 flex-col items-center gap-1 px-4 py-2.5 text-[11px] font-medium transition-colors",
                active
                  ? "border-b-2 border-forest text-forest dark:border-moss dark:text-moss"
                  : "text-ink/60 hover:text-ink dark:text-parchment/60 dark:hover:text-parchment"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
