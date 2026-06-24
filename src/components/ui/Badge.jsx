import { cn } from "@/lib/cn";

const variants = {
  forest: "bg-forest/10 text-forest border border-forest/20",
  moss: "bg-moss/15 text-ink border border-moss/30",
  ink: "bg-ink text-parchment",
  outline: "border border-ink/20 text-ink",
};

export default function Badge({ children, variant = "moss", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
