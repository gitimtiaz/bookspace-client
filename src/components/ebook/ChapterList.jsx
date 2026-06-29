"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";

const CHAPTER_TITLES = [
  "The Beginning",
  "Into the Unknown",
  "First Encounter",
  "The Hidden Path",
  "Turning Point",
  "Beneath the Surface",
  "A Fragile Alliance",
  "The Weight of Choice",
  "Embers",
  "What Remains",
];

function getTitle(index) {
  return CHAPTER_TITLES[index] ?? `Part ${index + 1}`;
}

const PREVIEW_COUNT = 6;

export default function ChapterList({ totalChapters, isOwned = false }) {
  const [showAll, setShowAll] = useState(false);

  const chapters = Array.from({ length: totalChapters }, (_, i) => ({
    number: i + 1,
    title: getTitle(i),
    isFree: i === 0,
    isNew: i >= totalChapters - 3,
  }));

  const visible = showAll ? chapters : chapters.slice(0, PREVIEW_COUNT);
  const hasMore = totalChapters > PREVIEW_COUNT;

  return (
    <div>
      <div className="space-y-2">
        {visible.map((ch) => (
          <div
            key={ch.number}
            className="flex items-center justify-between rounded-lg border border-ink/10 bg-parchment px-4 py-3 dark:border-parchment/10 dark:bg-ink"
          >
            <div className="flex items-center gap-3">
              {/* Chapter number circle */}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-xs font-semibold text-forest dark:bg-moss/10 dark:text-moss">
                {ch.number}
              </span>
              <div>
                <p className="text-sm font-medium text-ink dark:text-parchment">
                  {ch.title}
                </p>
                <p className="text-[11px] text-ink/50 dark:text-parchment/50">
                  Chapter {ch.number}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {ch.isNew && (
                <Badge variant="moss" className="text-[9px]">
                  NEW
                </Badge>
              )}
              {ch.isFree ? (
                <Badge variant="forest" className="text-[9px]">
                  Free
                </Badge>
              ) : isOwned ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-moss"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-ink/30 dark:text-parchment/30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-3 text-sm font-medium text-forest hover:underline dark:text-moss"
        >
          {showAll
            ? "Show less"
            : `Show all ${totalChapters} chapters`}
        </button>
      )}
    </div>
  );
}
