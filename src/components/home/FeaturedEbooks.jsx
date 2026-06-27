import Link from "next/link";
import EbookCard from "@/components/ui/EbookCard";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

export default function FeaturedEbooks() {

  const ebooks = DUMMY_EBOOKS.slice(0, 6);

  return (
    <section className="bg-darkCream/40 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-moss">
              Hand-picked
            </span>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink dark:text-parchment sm:text-3xl">
              Featured Ebooks
            </h2>
          </div>
          <Link
            href="/browse"
            className="text-sm font-medium text-forest hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook._id} ebook={ebook} />
          ))}
        </div>
      </div>
    </section>
  );
}
