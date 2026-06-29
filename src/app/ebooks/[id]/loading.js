import Skeleton from "@/components/ui/Skeleton";

export default function EbookDetailLoading() {
  return (
    <div className="min-h-screen bg-parchment dark:bg-ink">

      {/* Hero skeleton */}
      <div className="bg-darkCream/40 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          {/* Breadcrumb */}
          <Skeleton className="mb-6 h-3 w-48" />

          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Cover skeleton */}
            <Skeleton className="mx-auto aspect-[3/4] w-full max-w-[200px] shrink-0 rounded-2xl md:mx-0 md:w-52 lg:w-60" />

            {/* Info skeleton */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-9 w-24" />
              <div className="flex gap-3">
                <Skeleton className="h-12 w-40 rounded-xl" />
                <Skeleton className="h-12 w-12 rounded-xl" />
              </div>
              <Skeleton className="h-24 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Description skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Skeleton className="mb-4 h-7 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-3/4" />
      </div>
    </div>
  );
}
