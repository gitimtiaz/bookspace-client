import { Suspense } from "react";
import BrowseClient from "@/components/browse/BrowseClient";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

export const metadata = {
  title: "Browse Ebooks — BookSpace",
  description:
    "Discover light novels, web fiction, and serialized stories from independent writers.",
};

export default function BrowsePage() {

  const ebooks = DUMMY_EBOOKS;

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

      {/* BrowseClient wrapped in Suspense because it uses useSearchParams */}
      <Suspense>
        <BrowseClient ebooks={ebooks} />
      </Suspense>
    </div>
  );
}