import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Logo({ className }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-forest"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 5.5C3 5.5 5.5 4 9 4.5C10.5 4.7 12 5.3 12 5.3V19C12 19 10.5 18.2 9 18C5.5 17.5 3 19 3 19V5.5Z" />
        <path d="M21 5.5C21 5.5 18.5 4 15 4.5C13.5 4.7 12 5.3 12 5.3V19C12 19 13.5 18.2 15 18C18.5 17.5 21 19 21 19V5.5Z" />
      </svg>
      <span className="font-display text-xl font-semibold text-ink">
        BookSpace
      </span>
    </Link>
  );
}
