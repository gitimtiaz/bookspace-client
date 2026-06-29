"use client";

import { useState } from "react";
import { useAuth } from "@/lib/authContext";
import toast from "react-hot-toast";

export default function BookmarkButton({ ebookId }) {
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleToggle() {
    if (!user) {
      toast.error("Login to bookmark ebooks.");
      return;
    }
  
    setIsBookmarked((prev) => !prev);
    toast.success(
      isBookmarked ? "Removed from bookmarks." : "Added to bookmarks!"
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/15 text-ink/60 transition-colors hover:border-forest hover:text-forest dark:border-parchment/15 dark:text-parchment/60 dark:hover:border-moss dark:hover:text-moss"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={isBookmarked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
