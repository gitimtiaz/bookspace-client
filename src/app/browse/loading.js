import Skeleton from "@/components/ui/Skeleton";

export default function BrowseLoading() {
  return (
    <div className="bg-parchment dark:bg-ink">
      {/* Header skeleton */}
      <div className="bg-darkCream/40 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <Skeleton className="mx-auto h-8 w-48" />
          <Skeleton className="mx-auto mt-3 h-4 w-72" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Skeleton className="mb-6 h-4 w-28" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="aspect-[3/4] w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
