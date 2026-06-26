import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-forest">
      <Spinner size="lg" />
      <p className="font-display text-sm text-ink/50">Loading BookSpace…</p>
    </div>
  );
}
