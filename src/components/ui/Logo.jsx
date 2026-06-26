import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Logo({ className, textClassName = "text-ink dark:text-parchment" }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0 text-forest"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 5.5C3 5.5 5.5 4 9 4.5C10.5 4.7 12 5.3 12 5.3V19C12 19 10.5 18.2 9 18C5.5 17.5 3 19 3 19V5.5Z" />
        <path d="M21 5.5C21 5.5 18.5 4 15 4.5C13.5 4.7 12 5.3 12 5.3V19C12 19 13.5 18.2 15 18C18.5 17.5 21 19 21 19V5.5Z" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={cn("font-display text-xl font-semibold", textClassName)}>
          BookSpace
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-widest text-ink/40 dark:text-parchment/40">
          Your Digital Library
        </span>
      </div>
    </Link>
  );
}
