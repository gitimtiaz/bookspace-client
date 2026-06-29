import Skeleton from "@/components/ui/Skeleton";

export default function EbookCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white/60 dark:border-parchment/10 dark:bg-parchment/5">
      {/* Cover */}
      <Skeleton className="aspect-[3/4] w-full rounded-none" />

      {/* Info */}
      <div className="flex flex-col gap-2 p-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="mt-1 flex items-center justify-between">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-3 w-8" />
        </div>
      </div>
    </div>
  );
}
