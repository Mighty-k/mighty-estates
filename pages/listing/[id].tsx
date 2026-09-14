import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Listing } from "../../types/listing";
import { sampleListings } from "../../lib/sampleData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListingCard from "../../components/ListingCard";

type Props = { listing: Listing };

export default function ListingPage({ listing }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const allImages = [listing.mainImage, ...(listing.images || [])];

  return (
    <>
      <Head>
        <title>{`${listing.title} | Mighty Estates`}</title>
        <meta
          name="description"
          content={listing.summary || listing.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-screen bg-paper py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate">
            <Link href="/" className="hover:text-ledger transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/search"
              className="hover:text-ledger transition-colors"
            >
              Properties
            </Link>
            <span>/</span>
            <span className="text-ink font-medium truncate">
              {listing.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] rounded-structural overflow-hidden mb-4 group shadow-soft border border-line">
                <Image
                  src={allImages[selectedImage]}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex gap-2">
                  {listing.badges && listing.badges.includes("new") && (
                    <span className="badge-arch badge-gold font-semibold shadow-soft">
                      New Listing
                    </span>
                  )}
                  {listing.featured && (
                    <span className="badge-arch badge-accent font-semibold shadow-soft">
                      Featured
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="absolute right-4 top-4 w-10 h-10 rounded-pill bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white hover:scale-105 transition-all shadow-soft"
                  aria-label={isSaved ? "Remove from saved" : "Save listing"}
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      isSaved ? "text-ledger fill-ledger" : "text-slate"
                    }`}
                    fill={isSaved ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-ink/80 text-white text-xs font-mono rounded-pill backdrop-blur">
                  {selectedImage + 1} / {allImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-24 h-20 rounded-control overflow-hidden flex-shrink-0 transition-all border ${
                      selectedImage === i
                        ? "border-ledger outline outline-2 outline-ledger"
                        : "border-line opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Pricing & Actions */}
            <div className="lg:col-span-1">
              <div className="card-arch p-6 sticky top-24">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-slate-2 uppercase">
                      SPEC-ID: {listing.id.toUpperCase()}
                    </span>
                    <span className="badge-arch bg-paper-2 text-slate text-xs uppercase">
                      {listing.type}
                    </span>
                  </div>
                  <h1 className="font-display text-2xl font-bold text-ink mb-2 leading-tight">
                    {listing.title}
                  </h1>
                  <p className="text-slate text-sm flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-ledger shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {listing.address.line1}, {listing.address.city}
                    {listing.address.region && `, ${listing.address.region}`}
                  </p>
                </div>

                <div className="font-display text-3xl font-bold text-ledger mb-6">
                  {listing.priceCurrency}
                  {listing.price.toLocaleString()}
                  <span className="text-sm font-normal text-slate ml-1">
                    {listing.type === "commercial" ? "/year" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-line">
                  {listing.bedrooms && (
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-1 bg-ledger-tint rounded-control flex items-center justify-center text-ledger">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div className="font-display text-base font-bold text-ink">
                        {listing.bedrooms}
                      </div>
                      <div className="text-[11px] text-slate-2 uppercase tracking-wide">
                        Bedrooms
                      </div>
                    </div>
                  )}
                  {listing.bathrooms && (
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-1 bg-ledger-tint rounded-control flex items-center justify-center text-ledger">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                          />
                        </svg>
                      </div>
                      <div className="font-display text-base font-bold text-ink">
                        {listing.bathrooms}
                      </div>
                      <div className="text-[11px] text-slate-2 uppercase tracking-wide">
                        Bathrooms
                      </div>
                    </div>
                  )}
                  {listing.sizeSqm && (
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-1 bg-ledger-tint rounded-control flex items-center justify-center text-ledger">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </div>
                      <div className="font-display text-base font-bold text-ink">
                        {listing.sizeSqm}
                      </div>
                      <div className="text-[11px] text-slate-2 uppercase tracking-wide">
                        Sq Meters
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3.5 bg-ledger hover:bg-ledger-dim text-white font-medium rounded-control transition-all shadow-soft active:translate-y-[1px] text-sm">
                    Request Tour
                  </button>
                  <button className="w-full py-3.5 bg-ledger-tint text-ledger hover:bg-ledger-tint/80 border border-ledger/10 font-medium rounded-control transition-all active:translate-y-[1px] text-sm">
                    Contact Agent
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-line">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-ledger rounded-control flex items-center justify-center text-white font-bold text-sm">
                      ME
                    </div>
                    <div>
                      <div className="font-display font-semibold text-ink text-sm">
                        Mighty Estates
                      </div>
                      <div className="text-xs text-slate">
                        Verified Platform Partner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content & Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="card-arch p-8">
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                  About This Property
                </h2>
                <p className="text-slate leading-relaxed text-base">
                  {listing.description ||
                    listing.summary ||
                    `This is a stunning ${listing.type} located in the heart of ${listing.address.city}. With ${listing.bedrooms} bedrooms and ${listing.bathrooms} bathrooms, this property offers ample living space of ${listing.sizeSqm} square meters. Perfect for families or professionals seeking a comfortable and luxurious living experience.`}
                </p>
              </section>

              {listing.amenities && listing.amenities.length > 0 && (
                <section className="card-arch p-8">
                  <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                    Amenities & Features
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {listing.amenities.map((amenity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 bg-paper-2 rounded-control border border-line/60"
                      >
                        <div className="w-6 h-6 bg-ledger-tint rounded-pill flex items-center justify-center flex-shrink-0 text-ledger">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-ink text-xs font-medium">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="card-arch p-8">
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Property Type",
                      value:
                        listing.type.charAt(0).toUpperCase() +
                        listing.type.slice(1),
                    },
                    {
                      label: "Status",
                      value:
                        listing.status.charAt(0).toUpperCase() +
                        listing.status.slice(1),
                    },
                    { label: "City", value: listing.address.city },
                    { label: "Region", value: listing.address.region || "N/A" },
                    ...(listing.sizeSqm
                      ? [{ label: "Area", value: `${listing.sizeSqm} sqm` }]
                      : []),
                    ...(listing.bedrooms
                      ? [
                          {
                            label: "Bedrooms",
                            value: listing.bedrooms.toString(),
                          },
                        ]
                      : []),
                    ...(listing.bathrooms
                      ? [
                          {
                            label: "Bathrooms",
                            value: listing.bathrooms.toString(),
                          },
                        ]
                      : []),
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between p-3 bg-paper-2 rounded-control text-sm border border-line/60"
                    >
                      <span className="text-slate">{item.label}</span>
                      <span className="font-semibold text-ink">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-ink rounded-structural p-8 text-white shadow-float border border-line/20 sticky top-24">
                <h3 className="font-display text-xl font-bold mb-3">
                  Ready to make this property yours?
                </h3>
                <p className="text-slate-2 text-sm mb-6 leading-relaxed">
                  Schedule a viewing with one of our expert agents today.
                </p>
                <div className="space-y-3">
                  <button className="w-full py-3.5 bg-ledger hover:bg-ledger-dim font-medium rounded-control transition-all text-sm active:translate-y-[1px] shadow-soft">
                    Book a Viewing
                  </button>
                  <button className="w-full py-3.5 bg-paper/10 hover:bg-paper/20 text-white font-medium rounded-control transition-all text-sm backdrop-blur border border-white/20 active:translate-y-[1px]">
                    Call Agent
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-2">
                    <svg
                      className="w-4 h-4 text-ledger-tint"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+234 800 000 0000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          <section className="mt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-ledger text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                  You Might Like
                </p>
                <h2 className="font-display text-3xl font-bold text-ink">
                  Similar Properties
                </h2>
              </div>
              <Link
                href="/search"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-ledger transition-colors group"
              >
                View all
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleListings
                .filter((l) => l.id !== listing.id)
                .slice(0, 3)
                .map((l) => (
                  <div key={l.id}>
                    <ListingCard listing={l} />
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleListings.map((l) => ({ params: { id: l.id } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string;
  const listing = sampleListings.find((l) => l.id === id);

  if (!listing) return { notFound: true };

  return { props: { listing } };
};
