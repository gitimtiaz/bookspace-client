const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Easy Discovery",
    description:
      "Search, filter by genre, sort by popularity — find exactly what you feel like reading in seconds.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Secure Purchases",
    description:
      "Payments powered by Stripe. Buy once, access forever. No subscriptions, no hidden fees.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Support Writers",
    description:
      "Every purchase goes directly to the writer. Indie authors keep full control of their work.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Chapter Tracking",
    description:
      "Pick up right where you left off. Reading progress saved automatically across all your devices.",
  },
];

export default function WhyChooseBookSpace() {
  return (
    <section className="bg-parchment dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-moss">
            Why BookSpace
          </span>
          <h2 className="mt-1 font-display text-2xl font-semibold text-ink dark:text-parchment sm:text-3xl">
            A Better Way to Read
          </h2>
          <p className="mt-2 text-sm text-ink/60 dark:text-parchment/60">
            Built for readers who care about independent fiction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-xl border border-ink/10 bg-darkCream/40 p-5 dark:border-parchment/10 dark:bg-white/[0.03]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10 text-forest dark:bg-moss/10 dark:text-moss">
                {feature.icon}
              </span>
              <h3 className="font-display text-base font-semibold text-ink dark:text-parchment">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/60 dark:text-parchment/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
