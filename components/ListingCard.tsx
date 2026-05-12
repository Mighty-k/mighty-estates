import Image from "next/image";
import Link from "next/link";
import { Listing } from "../types/listing";
import { memo, useState } from "react";
type Props = { listing: Listing };
function ListingCard({ listing }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <article className="card-arch group cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/listing/${listing.id}`} className="block">
        <div className="relative aspect-[4/3] bg-charcoal-100 overflow-hidden">
          <Image src={listing.mainImage} alt={listing.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {listing.featured && <span className="badge-arch bg-accent animate-scale-in">Featured</span>}
            {listing.badges && listing.badges.includes("new") && <span className="badge-arch animate-scale-in">New</span>}
            {listing.badges && listing.badges.includes("price-reduced") && <span className="badge-arch bg-emerald-600 animate-scale-in">Reduced</span>}
          </div>
          <button aria-label={isSaved ? "Remove from saved" : "Save listing"} onClick={(e) => { e.preventDefault(); setIsSaved(!isSaved); }} className={"absolute right-3 top-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 " + (isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
            <svg className={"w-5 h-5 transition-colors " + (isSaved ? "text-accent fill-accent" : "text-charcoal-600")} fill={isSaved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-charcoal-900 truncate leading-tight group-hover:text-accent transition-colors">{listing.title}</h3>
            <p className="text-sm text-charcoal-500 mt-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {listing.address.city}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-xl font-bold text-accent">{listing.priceCurrency}{listing.price.toLocaleString()}</div>
          </div>
        </div>
        <div className="pt-4 border-t border-charcoal-100 flex items-center gap-6 text-sm text-charcoal-600">
          {listing.bedrooms && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span className="font-medium">{listing.bedrooms}</span>
              <span className="text-charcoal-400">bd</span>
            </div>
          )}
          {listing.bathrooms && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              <span className="font-medium">{listing.bathrooms}</span>
              <span className="text-charcoal-400">ba</span>
            </div>
          )}
          {listing.sizeSqm && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              <span className="font-medium">{listing.sizeSqm}</span>
              <span className="text-charcoal-400">sqm</span>
            </div>
          )}
          <div className="ml-auto">
            <span className="px-3 py-1 bg-charcoal-100 text-charcoal-600 text-xs font-semibold uppercase tracking-wider rounded-full">{listing.type}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
export default memo(ListingCard);