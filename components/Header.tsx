import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="glass-arch sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-control bg-ledger flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-soft">
            <img src="/M.png" alt="Mighty Estates" className="w-6 h-6 object-contain" />
          </div>
          <span className="font-display text-lg font-semibold text-ink tracking-tight">
            Mighty Estates
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/buy", label: "Buy" },
            { href: "/rent", label: "Rent" },
            { href: "/commercial", label: "Commercial" },
            { href: "/new-listings", label: "New" },
            { href: "/agents", label: "Agents" },
            { href: "/search", label: "Search" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate hover:text-ink transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ledger transition-all duration-150 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-ledger text-white text-sm font-medium rounded-control hover:bg-ledger-dim transition-colors shadow-soft"
          >
            List Property
          </Link>
          <button
            className="md:hidden p-2 text-slate hover:text-ink"
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
        <div className="md:hidden border-t border-line bg-paper px-6 py-4">
          <nav className="flex flex-col gap-3">
            {[
              { href: "/buy", label: "Buy" },
              { href: "/rent", label: "Rent" },
              { href: "/commercial", label: "Commercial" },
              { href: "/new-listings", label: "New" },
              { href: "/agents", label: "Agents" },
              { href: "/search", label: "Search" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate hover:text-ink py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
