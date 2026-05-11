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
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-charcoal-900 truncate leading-tight">{listing.title}</h3>
            <p className="text-sm text-charcoal-500 mt-1 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {listing.address.city}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-semibold text-charcoal-900">{listing.priceCurrency}{listing.price.toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-charcoal-100 flex items-center gap-4 text-sm text-charcoal-600">
          {listing.bedrooms && <div className="flex items-center gap-1.5"><span>{listing.bedrooms} bd</span></div>}
          {listing.bathrooms && <div className="flex items-center gap-1.5"><span>{listing.bathrooms} ba</span></div>}
          {listing.sizeSqm && <div className="flex items-center gap-1.5"><span>{listing.sizeSqm} m2</span></div>}
          <div className="ml-auto text-xs text-charcoal-400 uppercase tracking-wide">{listing.type}</div>
        </div>
      </div>
    </article>
  );
}
export default memo(ListingCard);