import Link from "next/link";
import { DUMMY_TOP_WRITERS } from "@/lib/dummyData";

export default function WriterInfoCard({ writerId, writerName }) {
  // Look up from top writers if available, otherwise use basic info
  const writerData = DUMMY_TOP_WRITERS.find((w) => w._id === writerId);

  const initials = writerName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const bio =
    writerData?.bio ??
    "An independent writer publishing original fiction on BookSpace.";

  const totalEbooks = writerData?.totalEbooks ?? 1;
  const totalSales = writerData?.totalSales ?? 0;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-ink/10 bg-parchment p-5 dark:border-parchment/10 dark:bg-ink sm:flex-row sm:items-start">
      {/* Avatar */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest/15 text-lg font-semibold text-forest dark:bg-moss/15 dark:text-moss">
        {initials}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2">
        <div>
          <h3 className="font-display text-base font-semibold text-ink dark:text-parchment">
            {writerName}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-parchment/60">
            {bio}
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-4 text-sm">
          <div>
            <span className="font-semibold text-ink dark:text-parchment">
              {totalEbooks}
            </span>
            <span className="ml-1 text-ink/50 dark:text-parchment/50">
              {totalEbooks === 1 ? "ebook" : "ebooks"}
            </span>
          </div>
          {totalSales > 0 && (
            <div>
              <span className="font-semibold text-ink dark:text-parchment">
                {totalSales.toLocaleString()}
              </span>
              <span className="ml-1 text-ink/50 dark:text-parchment/50">
                readers
              </span>
            </div>
          )}
        </div>
      </div>

      {/* View profile */}
      {writerId && (
        <Link
          href={`/writers/${writerId}`}
          className="shrink-0 rounded-lg border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-forest hover:text-forest dark:border-parchment/15 dark:text-parchment/70 dark:hover:border-moss dark:hover:text-moss"
        >
          View Profile →
        </Link>
      )}
    </div>
  );
}
