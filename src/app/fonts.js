import { Fraunces, Manrope } from "next/font/google";

// Using --bs-font-* prefix to avoid circular reference with Tailwind v4's
// @theme block, which also uses --font-* as its own CSS variable namespace.
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--bs-font-display",
  display: "swap",
});

export const fontSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--bs-font-sans",
  display: "swap",
});
