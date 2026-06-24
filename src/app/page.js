export default function Home() {
  return (
    <main className="min-h-screen bg-parchment text-ink">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Welcome to <span className="text-forest">BookSpace</span>
        </h1>
        <span className="mb-6 text-lg md:text-xl">
          A Place To Find All Your Desired eBooks.
        </span>
      </section>
    </main>
  );
}