export default function Navbar() {
  return (
    <header className="border-b border-moss/20 bg-parchment/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-forest transition hover:text-moss"
        >
          BookSpace
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li>
            <a href="/" className="transition hover:text-forest">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-forest">
              All Books
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-forest">
              Writers
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-forest">
              About
            </a>
          </li>
        </ul>

        {/* Placeholder Button */}
        <button
          disabled
          className="rounded-lg bg-forest px-5 py-2 text-sm font-medium text-white opacity-70"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
}