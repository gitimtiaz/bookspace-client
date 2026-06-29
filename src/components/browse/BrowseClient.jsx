"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EbookCard from "@/components/ui/EbookCard";
import SearchAndFilters from "@/components/browse/SearchAndFilters";
import Pagination from "@/components/browse/Pagination";

const ITEMS_PER_PAGE = 8;

function filterAndSort(ebooks, { search, genre, sortBy }) {
  let result = [...ebooks];

  if (search.trim()) {
    const q = search.toLowerCase();
    result = result.filter(
      (ebook) =>
        ebook.title.toLowerCase().includes(q) ||
        (typeof ebook.writerId === "object" &&
          ebook.writerId.name.toLowerCase().includes(q))
    );
  }

  if (genre !== "all") {
    result = result.filter((ebook) => ebook.genre === genre);
  }

  switch (sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      result.sort((a, b) => b.purchaseCount - a.purchaseCount);
      break;
    default:
      break;
  }

  return result;
}

export default function BrowseClient({ ebooks }) {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [genre, setGenre] = useState(searchParams.get("genre") || "all");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setGenre(searchParams.get("genre") || "all");
  }, [searchParams]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, genre, sortBy]);

  const hasActiveFilters =
    search.trim() !== "" || genre !== "all" || sortBy !== "newest";

  function handleClearFilters() {
    setSearch("");
    setGenre("all");
    setSortBy("newest");
    setPage(1);
  }

  const filtered = filterAndSort(ebooks, { search, genre, sortBy });
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <SearchAndFilters
        search={search}
        onSearchChange={setSearch}
        genre={genre}
        onGenreChange={setGenre}
        sortBy={sortBy}
        onSortChange={setSortBy}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={handleClearFilters}
        resultCount={filtered.length}
      />

      {paginated.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {paginated.map((ebook) => (
              <EbookCard key={ebook._id} ebook={ebook} />
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      ) : (
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
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="mt-4 text-sm font-medium text-forest hover:underline dark:text-moss"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}