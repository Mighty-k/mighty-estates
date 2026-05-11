import Link from "next/link";
import ListingCard from "./ListingCard";
import { Listing } from "../types/listing";

type Props = {
  title: string;
  eyebrow: string;
  description: string;
  listings: Listing[];
  accent: string;
};

export default function CategoryShowcase({
  title,
  eyebrow,
  description,
  listings,
  accent,
}: Props) {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 mb-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] font-semibold text-brand-700">
          {eyebrow}
        </p>
        <div className="mt-3 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl font-display leading-tight">{title}</h1>
            <p className="text-slate-600 mt-3 max-w-2xl">{description}</p>
          </div>
          <div
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: accent, color: "white" }}
          >
            Curated collection
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/"
            className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50"
          >
            Back to home
          </Link>
          <Link
            href="/agents"
            className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50"
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
