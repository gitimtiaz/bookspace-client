import Link from "next/link";
import Image from "next/image";
import { DUMMY_TOP_WRITERS } from "@/lib/dummyData";

function WriterAvatar({ name, avatarUrl }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={name}
        width={72}
        height={72}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-forest/20 text-lg font-semibold text-forest dark:bg-moss/20 dark:text-moss">
      {initials}
    </div>
  );
}

export default function TopWriters() {
  
  const writers = DUMMY_TOP_WRITERS;

  return (
    <section className="border-y border-ink/10 bg-parchment dark:border-parchment/10 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">

        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-moss">
            Community
          </span>
          <h2 className="mt-1 font-display text-2xl font-semibold text-ink dark:text-parchment sm:text-3xl">
            Top Writers
          </h2>
          <p className="mt-2 text-sm text-ink/60 dark:text-parchment/60">
            The most-read independent authors on BookSpace right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {writers.map((writer, idx) => (
            <Link
              key={writer._id}
              href={`/writers/${writer._id}`}
              className="group relative flex flex-col items-center rounded-xl border border-ink/10 bg-white/60 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-parchment/10 dark:bg-parchment/5"
            >
              {/* Rank badge */}
              <span className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-forest/10 text-xs font-bold text-forest dark:bg-moss/10 dark:text-moss">
                {idx + 1}
              </span>

              <WriterAvatar name={writer.name} avatarUrl={writer.avatarUrl} />

              <h3 className="mt-4 font-display text-base font-semibold text-ink group-hover:text-forest dark:text-parchment dark:group-hover:text-moss">
                {writer.name}
              </h3>

              <p className="mt-1 line-clamp-2 text-xs text-ink/60 dark:text-parchment/60">
                {writer.bio}
              </p>

              <div className="mt-4 flex gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-parchment">
                    {writer.totalEbooks}
                  </p>
                  <p className="text-[10px] uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                    Ebooks
                  </p>
                </div>
                <div className="w-px bg-ink/10 dark:bg-parchment/10" />
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-parchment">
                    {writer.totalSales.toLocaleString()}
                  </p>
                  <p className="text-[10px] uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                    Sales
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/writers"
            className="text-sm font-medium text-forest hover:underline"
          >
            Meet all writers →
          </Link>
        </div>
      </div>
    </section>
  );
}
