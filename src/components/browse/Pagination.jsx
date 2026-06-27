export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  // Don't render if only one page
  if (totalPages <= 1) return null;

  // Generate page numbers
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-ink/15 px-3 py-2 text-sm text-ink transition-colors hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-50 dark:border-parchment/15 dark:text-parchment dark:hover:border-moss dark:hover:text-moss"
      >
        Previous
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-10 min-w-10 rounded-lg border text-sm font-medium transition-colors ${
            currentPage === page
              ? "border-forest bg-forest text-parchment dark:border-moss dark:bg-moss dark:text-ink"
              : "border-ink/15 text-ink hover:border-forest hover:text-forest dark:border-parchment/15 dark:text-parchment dark:hover:border-moss dark:hover:text-moss"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-ink/15 px-3 py-2 text-sm text-ink transition-colors hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-50 dark:border-parchment/15 dark:text-parchment dark:hover:border-moss dark:hover:text-moss"
      >
        Next
      </button>
    </div>
  );
}