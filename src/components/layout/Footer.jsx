import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse Ebooks" },
  { href: "/browse?featured=true", label: "Featured Ebooks" },
  { href: "/writers", label: "Top Writers" },
  { href: "/dashboard", label: "Dashboard" },
];

const SUPPORT_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/faq", label: "FAQ" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#123524" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">

        {/* Brand column */}
        <div>
          <Logo textClassName="text-parchment" />
          <p className="mt-3 text-sm leading-relaxed text-parchment/60">
            Discover, read, and publish original light novels and web fiction
            from independent writers around the world.
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment/20 text-parchment/60 transition-colors hover:border-moss hover:text-moss"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-parchment/50">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-parchment/70 transition-colors hover:text-moss"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-parchment/50">
            Support
          </h3>
          <ul className="mt-4 space-y-2.5">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-parchment/70 transition-colors hover:text-moss"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-parchment/50">
            Stay in the loop
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-parchment/60">
            New chapter alerts and writer picks straight to your inbox.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-parchment/10 px-4 py-5 text-center text-xs text-parchment/40 sm:px-6">
        © {new Date().getFullYear()} BookSpace. All Rights Reserved.
      </div>
    </footer>
  );
}
