import EbookCard from "@/components/ui/EbookCard";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

export const metadata = {
  title: "Browse Ebooks — BookSpace",
  description: "Discover light novels, web fiction, and serialized stories from independent writers.",
};

export default function BrowsePage() {
  // TODO: replace with fetch("/api/ebooks") + query params when backend is ready
  const ebooks = DUMMY_EBOOKS;
  const total = ebooks.length;

  return (
    <div className="min-h-screen bg-parchment dark:bg-ink">

      {/* Page header */}
      <div className="bg-darkCream/40 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h1 className="font-display text-3xl font-semibold text-ink dark:text-parchment sm:text-4xl">
            Browse Ebooks
          </h1>
          <p className="mt-2 text-sm text-ink/60 dark:text-parchment/60">
            Discover light novels, web fiction, and serialized stories from
            independent writers around the world.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

        {/* Search / filter / sort placeholder — commit 16 */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-ink/60 dark:text-parchment/60">
            Showing{" "}
            <span className="font-semibold text-ink dark:text-parchment">
              {total}
            </span>{" "}
            ebooks
          </p>
        </div>

        {/* Grid */}
        {ebooks.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {ebooks.map((ebook) => (
              <EbookCard key={ebook._id} ebook={ebook} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg
              viewBox="0 0 24 24"
              className="mb-4 h-12 w-12 text-ink/20 dark:text-parchment/20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <h3 className="font-display text-lg font-semibold text-ink dark:text-parchment">
              No ebooks found
            </h3>
            <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
