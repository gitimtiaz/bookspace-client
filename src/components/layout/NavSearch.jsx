"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";

export default function NavSearch({ className }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(
      trimmed ? `/browse?search=${encodeURIComponent(trimmed)}` : "/browse"
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search ebooks or writers..."
        className="w-full rounded-lg border border-ink/15 bg-white/60 py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
      />
    </form>
  );
}
