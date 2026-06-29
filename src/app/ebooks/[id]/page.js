"use client";

import Link from "next/link";
import { useAuth } from "@/lib/authContext";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import EbookCard from "@/components/ui/EbookCard";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

const DUMMY_PURCHASES = [
  { _id: "p1", ebookId: "ebook_01", title: "Reborn in the Iron Citadel", writer: "Kaito Maren", date: "2026-05-15", price: 4.99 },
  { _id: "p2", ebookId: "ebook_03", title: "The Hollow Crown Prophecy", writer: "Amir Noel", date: "2026-06-03", price: 5.99 },
  { _id: "p3", ebookId: "ebook_05", title: "Signal Zero", writer: "Priya Voss", date: "2026-06-20", price: 4.49 },
];

const DUMMY_PROGRESS = {
  ebookId: "ebook_01",
  title: "Reborn in the Iron Citadel",
  currentChapter: 12,
  totalChapters: 38,
  lastRead: "2 days ago",
};

const STATS_ICONS = {
  bag: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  bookmark: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

const progress = Math.round((DUMMY_PROGRESS.currentChapter / DUMMY_PROGRESS.totalChapters) * 100);

export default function UserOverviewPage() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] ?? "Reader";

  return (
    <div>
      <DashboardPageHeader
        title={`Welcome back, ${firstName}!`}
        subtitle="Here's what's happening with your reading."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatsCard label="Purchased" value={DUMMY_PURCHASES.length} icon={STATS_ICONS.bag} sub="ebooks owned" />
        <StatsCard label="Bookmarked" value={4} icon={STATS_ICONS.bookmark} sub="saved for later" />
        <StatsCard label="Reading" value={1} icon={STATS_ICONS.book} sub="in progress" className="col-span-2 lg:col-span-1" />
      </div>

      {/* Continue Reading */}
      <div className="mt-8">
        <h2 className="mb-3 font-display text-lg font-semibold text-ink dark:text-parchment">
          Continue Reading
        </h2>
        <div className="rounded-xl border border-ink/10 bg-darkCream/40 p-4 dark:border-parchment/10 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-base font-semibold text-ink dark:text-parchment">
                {DUMMY_PROGRESS.title}
              </p>
              <p className="mt-0.5 text-sm text-ink/60 dark:text-parchment/60">
                Chapter {DUMMY_PROGRESS.currentChapter} of {DUMMY_PROGRESS.totalChapters} · Last read {DUMMY_PROGRESS.lastRead}
              </p>
              {/* Progress bar */}
              <div className="mt-3 h-2 w-full max-w-xs overflow-hidden rounded-full bg-ink/10 dark:bg-parchment/10">
                <div
                  className="h-full rounded-full bg-forest dark:bg-moss transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-ink/50 dark:text-parchment/50">
                {progress}% complete
              </p>
            </div>
            <Link
              href={`/ebooks/${DUMMY_PROGRESS.ebookId}`}
              className="shrink-0 rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-parchment transition-colors hover:bg-moss"
            >
              Continue →
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Purchases */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink dark:text-parchment">
            Recent Purchases
          </h2>
          <Link
            href="/dashboard/user/purchases"
            className="text-sm font-medium text-forest hover:underline dark:text-moss"
          >
            View all →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-ink/10 dark:border-parchment/10">
          <table className="w-full text-sm">
            <thead className="bg-darkCream/40 dark:bg-white/[0.03]">
              <tr>
                {["Ebook", "Writer", "Date", "Price"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 bg-parchment dark:divide-parchment/10 dark:bg-ink">
              {DUMMY_PURCHASES.map((p) => (
                <tr key={p._id} className="hover:bg-ink/[0.02] dark:hover:bg-parchment/[0.02]">
                  <td className="px-4 py-3">
                    <Link href={`/ebooks/${p.ebookId}`} className="font-medium text-ink hover:text-forest dark:text-parchment dark:hover:text-moss">
                      {p.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{p.writer}</td>
                  <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{p.date}</td>
                  <td className="px-4 py-3 font-semibold text-forest">${p.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
