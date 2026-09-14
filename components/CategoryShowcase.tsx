import Link from "next/link";
import ListingCard from "./ListingCard";
import { Listing } from "../types/listing";

type Props = {
  title: string;
  eyebrow: string;
  description: string;
  listings: Listing[];
  accent?: string;
};

export default function CategoryShowcase({
  title,
  eyebrow,
  description,
  listings,
}: Props) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <section className="rounded-structural border border-line bg-white p-8 mb-8 shadow-soft">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ledger">
          {eyebrow}
        </p>
        <div className="mt-3 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              {title}
            </h1>
            <p className="text-slate mt-3 max-w-2xl text-base leading-relaxed">
              {description}
            </p>
          </div>
          <div className="badge-arch badge-accent px-4 py-2 text-xs font-semibold shadow-soft">
            Curated collection
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/"
            className="px-4 py-2 rounded-control border border-line bg-paper-2 text-slate hover:text-ink transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/agents"
            className="px-4 py-2 rounded-control border border-line bg-paper-2 text-slate hover:text-ink transition-colors"
          >
            Meet the agents
          </Link>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </main>
  );
}
