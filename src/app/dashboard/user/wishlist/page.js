import Link from "next/link";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import EbookCard from "@/components/ui/EbookCard";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

// TODO: replace with fetch("/api/bookmarks") when backend is ready
const BOOKMARKED = DUMMY_EBOOKS.filter((e) =>
  ["ebook_02", "ebook_04", "ebook_08", "ebook_12"].includes(e._id)
);

export default function WishlistPage() {
  return (
    <div>
      <DashboardPageHeader
        title="Bookmarks"
        subtitle={`${BOOKMARKED.length} ebooks saved for later`}
      />

      {BOOKMARKED.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {BOOKMARKED.map((ebook) => (
            <EbookCard key={ebook._id} ebook={ebook} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <svg viewBox="0 0 24 24" className="mb-4 h-12 w-12 text-ink/20 dark:text-parchment/20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <p className="font-display text-lg font-semibold text-ink dark:text-parchment">
            No bookmarks yet
          </p>
          <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">
            Save ebooks while browsing to find them here.
          </p>
          <Link
            href="/browse"
            className="mt-4 text-sm font-medium text-forest hover:underline dark:text-moss"
          >
            Browse Ebooks →
          </Link>
        </div>
      )}
    </div>
  );
}
