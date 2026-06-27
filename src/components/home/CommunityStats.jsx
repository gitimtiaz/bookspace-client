const STATS = [
  {
    value: "2,400+",
    label: "Ebooks Published",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    value: "380+",
    label: "Independent Writers",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "18,000+",
    label: "Active Readers",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    value: "45,000+",
    label: "Purchases Made",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function CommunityStats() {
  return (
    <section className="bg-darkCream/40 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-moss">
            By the Numbers
          </span>
          <h2 className="mt-1 font-display text-2xl font-semibold text-ink dark:text-parchment sm:text-3xl">
            A Growing Community
          </h2>
          <p className="mt-2 text-sm text-ink/60 dark:text-parchment/60">
            Readers and writers choosing independent fiction every day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-ink/10 bg-parchment p-6 text-center dark:border-parchment/10 dark:bg-ink"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest dark:bg-moss/10 dark:text-moss">
                {stat.icon}
              </span>
              <p className="font-display text-3xl font-semibold text-ink dark:text-parchment">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
