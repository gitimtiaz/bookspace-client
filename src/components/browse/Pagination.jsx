import { cn } from "@/lib/cn";

function getPageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, "...", total];
  }
  if (current >= total - 3) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

const BTN_BASE =
  "flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg border px-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-40";

const BTN_DEFAULT =
  "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink dark:border-parchment/15 dark:text-parchment/70 dark:hover:border-parchment/40 dark:hover:text-parchment";

const BTN_ACTIVE =
  "border-forest bg-forest text-parchment dark:border-moss dark:bg-moss dark:text-ink";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-1"
      aria-label="Pagination"
    >
      {/* Prev */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(BTN_BASE, BTN_DEFAULT)}
        aria-label="Previous page"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Page numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex h-9 w-9 items-center justify-center text-sm text-ink/40 dark:text-parchment/40"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              BTN_BASE,
              page === currentPage ? BTN_ACTIVE : BTN_DEFAULT
            )}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(BTN_BASE, BTN_DEFAULT)}
        aria-label="Next page"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
}
