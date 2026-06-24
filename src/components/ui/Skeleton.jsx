import { cn } from "@/lib/cn";

export default function Skeleton({ className }) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-ink/10", className)}
      aria-hidden="true"
    />
  );
}
