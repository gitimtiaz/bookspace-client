import Link from "next/link";
import BookStackIllustration from "@/components/home/BookStackIllustration";

const STATS = [
  { value: "2,400+", label: "Ebooks" },
  { value: "380+", label: "Writers" },
  { value: "18K+", label: "Readers" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-parchment dark:bg-ink">
      {/* Background glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-forest/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-moss/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28 lg:gap-16">

        {/* Left — copy */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block rounded-full border border-forest/40 bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest dark:border-moss/40 dark:bg-moss/10 dark:text-moss">
            Light Novels · Web Fiction · Serials
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink dark:text-parchment sm:text-5xl lg:text-6xl">
            Discover &amp; Read
            <br />
            <span className="text-forest dark:text-moss">Original Ebooks</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 dark:text-parchment/70 md:mx-0">
            BookSpace connects readers with independent writers publishing
            serialized light novels, web fiction, and one-shot stories — all
            in one place.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/browse"
              className="rounded-lg bg-forest px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-moss"
            >
              Browse Ebooks
            </Link>
            <Link
              href="/register?role=writer"
              className="rounded-lg border border-ink/20 px-6 py-3 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/50 hover:text-ink dark:border-parchment/20 dark:text-parchment/80 dark:hover:border-parchment/50 dark:hover:text-parchment"
            >
              Become a Writer
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex justify-center gap-8 md:justify-start">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-ink dark:text-parchment">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-ink/50 dark:text-parchment/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — illustration */}
        <div className="flex w-full max-w-xs shrink-0 items-center justify-center md:max-w-sm drop-shadow-2xl">
          <BookStackIllustration className="w-full drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
