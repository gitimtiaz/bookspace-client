export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-6 text-5xl font-bold md:text-7xl">
        Welcome to <span className="text-forest">BookSpace</span>
      </h1>

      <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
        A Place To Find All Your Desired eBooks.
      </p>
    </section>
  );
}