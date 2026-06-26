import { cn } from "@/lib/cn";

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-5 border-2",
  lg: "h-10 w-10 border-4",
};

export default function Spinner({ size = "md", className }) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-current/20 border-t-current",
        sizes[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
}
