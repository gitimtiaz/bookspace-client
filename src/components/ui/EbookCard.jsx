import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";

// Gradient cover placeholders keyed by genre.
// Must use full hardcoded class strings - Tailwind can't build dynamic class names at runtime.
const GENRE_GRADIENTS = {
  Isekai: "from-[#1a3a2a] to-[#123524]",
  Fantasy: "from-[#1e4020] to-[#2a5c1e]",
  "Slice of Life": "from-[#3a5c2a] to-[#85A947]",
  Romance: "from-[#4a2a3a] to-[#7a3a5a]",
  Thriller: "from-[#1a1a2a] to-[#2a2a4a]",
  Horror: "from-[#1a0a0a] to-[#2a1010]",
  "Sci-Fi": "from-[#0a1a2a] to-[#1a3a5a]",
  Mystery: "from-[#1a1a1a] to-[#3a3a2a]",
  default: "from-[#123524] to-[#3E7B27]",
};

function CoverPlaceholder({ title, genre }) {
  const gradient = GENRE_GRADIENTS[genre] || GENRE_GRADIENTS.default;
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
      <span className="font-display text-3xl font-semibold text-parchment/70">
        {initials}
      </span>
    </div>
  );
}

export default function EbookCard({ ebook }) {
  const { _id, title, writerId, genre, price, coverImageUrl, format, ratingAvg } = ebook;
  const writerName = typeof writerId === "object" ? writerId.name : "Unknown Writer";

  return (
    <Link
      href={`/ebooks/${_id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white/60 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-parchment/10 dark:bg-parchment/5"
    >
      {/* Cover */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink/5 dark:bg-parchment/5">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder title={title} genre={genre} />
        )}

        {/* Genre badge */}
        <div className="absolute left-2 top-2">
          <Badge variant="ink" className="text-[10px]">
            {genre}
          </Badge>
        </div>

        {/* Serialized badge */}
        {format === "serialized" && (
          <div className="absolute right-2 top-2">
            <Badge variant="moss" className="text-[10px]">
              Serial
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-ink group-hover:text-forest dark:text-parchment dark:group-hover:text-moss">
          {title}
        </h3>
        <p className="text-xs text-ink/60 dark:text-parchment/60">
          {writerName}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm font-semibold text-forest">
            ${price.toFixed(2)}
          </span>
          {ratingAvg && (
            <span className="flex items-center gap-1 text-xs text-ink/50 dark:text-parchment/50">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-moss text-moss">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {ratingAvg.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
