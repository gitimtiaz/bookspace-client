import { cn } from "@/lib/cn";

export default function StatsCard({ label, value, icon, sub, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink/10 bg-darkCream/40 p-4 dark:border-parchment/10 dark:bg-white/[0.03]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-parchment/50">
          {label}
        </p>
        {icon && (
          <span className="text-forest dark:text-moss">{icon}</span>
        )}
      </div>
      <p className="mt-2 font-display text-3xl font-semibold text-ink dark:text-parchment">
        {value}
      </p>
      {sub && (
        <p className="mt-0.5 text-xs text-ink/50 dark:text-parchment/50">
          {sub}
        </p>
      )}
    </div>
  );
}
