"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Commit 5 will move these into lib/navigation.js and add NavSearch + UserMenu
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse Ebooks" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Commit 10 will replace this with real useAuth() session check
  const isLoggedIn = false;

  return (
    <header className="border-b border-ink/10 bg-parchment">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-forest" : "text-ink/70 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop auth button */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <Button variant="outline" size="sm">
              Logout
            </Button>
          ) : (
            <Button href="/login" size="sm">
              Login
            </Button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-ink/10 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-forest/10 text-forest"
                      : "text-ink/70 hover:bg-ink/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-3">
            {isLoggedIn ? (
              <Button variant="outline" size="sm" className="w-full">
                Logout
              </Button>
            ) : (
              <Button href="/login" size="sm" className="w-full">
                Login
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
