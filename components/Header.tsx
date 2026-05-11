import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="glass-arch sticky top-0 z-40 border-b border-charcoal-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md bg-charcoal-900 flex items-center justify-center text-white font-semibold text-sm tracking-wider">
            <img src="/M.png" alt="Mighty Estates" />
          </div>
          <span className="font-display text-lg font-semibold text-charcoal-900">
            Mighty Estates
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/buy"
            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative group"
          >
            Buy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/rent"
            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative group"
          >
            Rent
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/commercial"
            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative group"
          >
            Commercial
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/new-listings"
            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative group"
          >
            New
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/agents"
            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative group"
          >
            Agents
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative group"
          >
            Search
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-charcoal-900 text-white text-sm font-medium rounded-md hover:bg-charcoal-800 transition-colors"
          >
            List Property
          </Link>
          <button
            className="md:hidden p-2 text-charcoal-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-charcoal-100 bg-white px-6 py-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="/buy"
              className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 py-2"
            >
              Buy
            </Link>
            <Link
              href="/rent"
              className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 py-2"
            >
              Rent
            </Link>
            <Link
              href="/commercial"
              className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 py-2"
            >
              Commercial
            </Link>
            <Link
              href="/new-listings"
              className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 py-2"
            >
              New
            </Link>
            <Link
              href="/agents"
              className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 py-2"
            >
              Agents
            </Link>
            <Link
              href="/search"
              className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 py-2"
            >
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
