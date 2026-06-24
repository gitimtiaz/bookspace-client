"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-forest text-parchment hover:bg-ink",
  secondary: "bg-moss/15 text-ink border border-moss hover:bg-moss/25",
  outline: "border border-ink text-ink hover:bg-ink hover:text-parchment",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
