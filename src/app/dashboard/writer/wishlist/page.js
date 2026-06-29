import Link from "next/link";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import EbookCard from "@/components/ui/EbookCard";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

// TODO: replace with fetch("/api/bookmarks") when backend is ready
const BOOKMARKED = DUMMY_EBOOKS.filter((e) =>
  ["ebook_03", "ebook_09", "ebook_12"].includes(e._id)
);

export default function WriterWishlistPage() {
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
          <p className="font-display text-lg font-semibold text-ink dark:text-parchment">No bookmarks yet</p>
          <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">Save ebooks while browsing to find them here.</p>
          <Link href="/browse" className="mt-4 text-sm font-medium text-forest hover:underline dark:text-moss">Browse Ebooks →</Link>
        </div>
      )}
    </div>
  );
}
