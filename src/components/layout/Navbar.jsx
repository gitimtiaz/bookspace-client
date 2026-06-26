"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import NavSearch from "@/components/layout/NavSearch";
import UserMenu from "@/components/layout/UserMenu";
import { NAV_LINKS, USER_MENU_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isLoggedIn = false;

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-parchment/95 backdrop-blur transition-shadow dark:bg-ink/95",
        isScrolled
          ? "border-b border-ink/10 shadow-sm dark:border-parchment/10"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative pb-1 text-sm font-medium transition-colors",
                  isActive
                    ? "text-forest after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-forest"
                    : "text-ink/70 hover:text-ink dark:text-parchment/70 dark:hover:text-parchment"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            onClick={() => setIsSearchOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-parchment/70 dark:hover:bg-parchment/5 dark:hover:text-parchment"
            aria-label="Toggle search"
            aria-expanded={isSearchOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>

          <ThemeToggle />

          {isLoggedIn ? (
            <UserMenu userName="Reader" />
          ) : (
            <Button href="/login" size="sm" className="ml-2">
              Login
            </Button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink dark:text-parchment md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Desktop search bar */}
      {isSearchOpen && (
        <div className="hidden border-t border-ink/10 px-4 py-3 sm:px-6 dark:border-parchment/10 md:block">
          <NavSearch className="mx-auto max-w-md" />
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-ink/10 px-4 pb-4 dark:border-parchment/10 md:hidden">
          <div className="pt-3">
            <NavSearch />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-forest/10 text-forest"
                      : "text-ink/70 hover:bg-ink/5 dark:text-parchment/70 dark:hover:bg-parchment/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-3">
            <ThemeToggle />
            {isLoggedIn ? (
              <div className="flex flex-col gap-1 rounded-lg border border-ink/10 p-2 dark:border-parchment/10">
                {USER_MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-ink/5 dark:text-parchment/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Button href="/login" size="sm" className="flex-1">
                Login
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
