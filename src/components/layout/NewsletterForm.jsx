"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;

    // Frontend-only placeholder for now - no backend endpoint yet.
    toast.success("You're on the list! We'll send ebook picks your way.");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-lg border border-parchment/20 bg-parchment/5 px-3 py-2 text-sm text-parchment placeholder:text-parchment/40 focus:border-moss focus:outline-none focus:ring-1 focus:ring-moss"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-moss px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-moss/80"
      >
        Subscribe
      </button>
    </form>
  );
}
