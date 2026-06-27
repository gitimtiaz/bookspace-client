const GENRES = [
  "All Genres",
  "Isekai",
  "Fantasy",
  "Romance",
  "Slice of Life",
  "Thriller",
  "Mystery",
  "Sci-Fi",
  "Horror",
];

const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const SELECT_CLASS =
  "rounded-lg border border-ink/15 bg-parchment px-3 py-2 text-sm text-ink focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest dark:border-parchment/15 dark:bg-ink dark:text-parchment dark:focus:border-moss";

export default function SearchAndFilters({
  search,
  onSearchChange,
  genre,
  onGenreChange,
  sortBy,
  onSortChange,
  hasActiveFilters,
  onClearFilters,
  resultCount,
}) {
  return (
    <div className="mb-6 space-y-3">
      {/* Search bar */}
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40 dark:text-parchment/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title or writer name…"
          className="w-full rounded-lg border border-ink/15 bg-parchment py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest dark:border-parchment/15 dark:bg-ink dark:text-parchment dark:placeholder:text-parchment/40 dark:focus:border-moss"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink dark:text-parchment/40 dark:hover:text-parchment"
            aria-label="Clear search"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Genre */}
        <select
          value={genre}
          onChange={(e) => onGenreChange(e.target.value)}
          className={SELECT_CLASS}
        >
          {GENRES.map((g) => (
            <option key={g} value={g === "All Genres" ? "all" : g}>
              {g}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className={SELECT_CLASS}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="rounded-lg border border-ink/15 px-3 py-2 text-sm text-ink/60 transition-colors hover:border-ink/40 hover:text-ink dark:border-parchment/15 dark:text-parchment/60 dark:hover:border-parchment/40 dark:hover:text-parchment"
          >
            Clear filters
          </button>
        )}

        {/* Result count */}
        <p className="ml-auto text-sm text-ink/60 dark:text-parchment/60">
          <span className="font-semibold text-ink dark:text-parchment">
            {resultCount}
          </span>{" "}
          {resultCount === 1 ? "ebook" : "ebooks"} found
        </p>
      </div>
    </div>
  );
}
