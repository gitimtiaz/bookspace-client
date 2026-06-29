import EbookCard from "@/components/ui/EbookCard";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

export default function RelatedEbooks({ currentId, genre, writerId }) {
  const related = DUMMY_EBOOKS.filter((e) => {
    if (e._id === currentId) return false;
    const sameGenre = e.genre === genre;
    const sameWriter =
      typeof e.writerId === "object" && e.writerId._id === writerId;
    return sameGenre || sameWriter;
  }).slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section className="bg-darkCream/40 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-moss">
              You might also like
            </span>
            <h2 className="mt-1 font-display text-xl font-semibold text-ink dark:text-parchment sm:text-2xl">
              Related Ebooks
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {related.map((ebook) => (
            <EbookCard key={ebook._id} ebook={ebook} />
          ))}
        </div>
      </div>
    </section>
  );
}
