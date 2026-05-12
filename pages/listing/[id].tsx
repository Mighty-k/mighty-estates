import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Listing } from "../../types/listing";
import { sampleListings } from "../../lib/sampleData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = { listing: Listing };

export default function ListingPage({ listing }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const allImages = [listing.mainImage, ...(listing.images || [])];

  return (
    <>
      <Head>
        <title>{listing.title} | Mighty Estates</title>
        <meta name="description" content={listing.summary || listing.description} />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-charcoal-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-charcoal-500">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-accent transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-charcoal-800">{listing.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 group">
                <Image
                  src={allImages[selectedImage]}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent" />
                {listing.badges && listing.badges.includes("new") && (
                  <div className="absolute left-4 top-4">
                    <span className="px-3 py-1.5 bg-accent text-white text-xs font-semibold uppercase tracking-wider rounded-full">New Listing</span>
                  </div>
                )}
                {listing.featured && (
                  <div className="absolute left-4 top-4">
                    <span className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full">Featured</span>
                  </div>
                )}
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="absolute right-4 top-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
                >
                  <svg className={`w-6 h-6 transition-colors ${isSaved ? "text-accent fill-accent" : "text-charcoal-600"}`} fill={isSaved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal-900/70 text-white text-sm rounded-full backdrop-blur">
                  {selectedImage + 1} / {allImages.length}
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all ${selectedImage === i ? "ring-2 ring-accent ring-offset-2" : "opacity-60 hover:opacity-100"}`}
                  >
                    <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-charcoal-100 p-6 sticky top-8">
                <div className="mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-2">{listing.title}</h1>
                  <p className="text-charcoal-500 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {listing.address.line1}, {listing.address.city}
                    {listing.address.region && `, ${listing.address.region}`}
                  </p>
                </div>

                <div className="text-3xl font-bold text-accent mb-6">
                  {listing.priceCurrency}{listing.price.toLocaleString()}
                  <span className="text-base font-normal text-charcoal-500 ml-1">{listing.type === "commercial" ? "/year" : ""}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-charcoal-100">
                  {listing.bedrooms && (
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-charcoal-900">{listing.bedrooms}</div>
                      <div className="text-xs text-charcoal-500 uppercase tracking-wide">Bedrooms</div>
                    </div>
                  )}
                  {listing.bathrooms && (
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-charcoal-900">{listing.bathrooms}</div>
                      <div className="text-xs text-charcoal-500 uppercase tracking-wide">Bathrooms</div>
                    </div>
                  )}
                  {listing.sizeSqm && (
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-charcoal-900">{listing.sizeSqm}</div>
                      <div className="text-xs text-charcoal-500 uppercase tracking-wide">Sq Meters</div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <button className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25">
                    Request Tour
                  </button>
                  <button className="w-full py-4 bg-charcoal-900 hover:bg-charcoal-800 text-white font-semibold rounded-xl transition-all">
                    Contact Agent
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-charcoal-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">ME</span>
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-900">Mighty Estates</div>
                      <div className="text-sm text-charcoal-500">Verified Agent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white rounded-2xl shadow-lg border border-charcoal-100 p-8">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-6">About This Property</h2>
                <p className="text-charcoal-600 leading-relaxed text-lg">
                  {listing.description || listing.summary || `This is a stunning ${listing.type} located in the heart of ${listing.address.city}. With ${listing.bedrooms} bedrooms and ${listing.bathrooms} bathrooms, this property offers ample living space of ${listing.sizeSqm} square meters. Perfect for families or professionals seeking a comfortable and luxurious living experience.`}
                </p>
              </section>

              {listing.amenities && listing.amenities.length > 0 && (
                <section className="bg-white rounded-2xl shadow-lg border border-charcoal-100 p-8">
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Amenities & Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {listing.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-charcoal-50 rounded-xl">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-charcoal-700 font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="bg-white rounded-2xl shadow-lg border border-charcoal-100 p-8">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Property Type", value: listing.type.charAt(0).toUpperCase() + listing.type.slice(1) },
                    { label: "Status", value: listing.status.charAt(0).toUpperCase() + listing.status.slice(1) },
                    { label: "City", value: listing.address.city },
                    { label: "Region", value: listing.address.region || "N/A" },
                    ...(listing.sizeSqm ? [{ label: "Area", value: `${listing.sizeSqm} sqm` }] : []),
                    ...(listing.bedrooms ? [{ label: "Bedrooms", value: listing.bedrooms.toString() }] : []),
                    ...(listing.bathrooms ? [{ label: "Bathrooms", value: listing.bathrooms.toString() }] : []),
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between p-4 bg-charcoal-50 rounded-xl">
                      <span className="text-charcoal-500">{item.label}</span>
                      <span className="font-semibold text-charcoal-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg border border-charcoal-100 p-8">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Location</h2>
                <div className="aspect-video bg-charcoal-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-charcoal-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-charcoal-500">View on map</p>
                    <p className="text-sm text-charcoal-400 mt-1">{listing.address.line1}, {listing.address.city}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl p-8 text-white sticky top-8">
                <h3 className="text-xl font-bold mb-4">Ready to make this property yours?</h3>
                <p className="text-charcoal-300 mb-6">Schedule a viewing with one of our expert agents today.</p>
                <div className="space-y-3">
                  <button className="w-full py-3.5 bg-accent hover:bg-accent-dark font-semibold rounded-xl transition-all">
                    Book a Viewing
                  </button>
                  <button className="w-full py-3.5 bg-white/10 hover:bg-white/20 font-semibold rounded-xl transition-all backdrop-blur">
                    Call Agent
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-charcoal-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+234 800 000 0000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-3">You Might Like</p>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900">Similar Properties</h2>
              </div>
              <Link href="/search" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-accent transition-colors group">
                View all<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sampleListings.filter(l => l.id !== listing.id).slice(0, 3).map((l) => (
                <Link key={l.id} href={`/listing/${l.id}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <Image src={l.mainImage} alt={l.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-900 group-hover:text-accent transition-colors">{l.title}</h3>
                  <p className="text-charcoal-500 text-sm mt-1">{l.address.city}</p>
                  <p className="text-accent font-bold mt-2">{l.priceCurrency}{l.price.toLocaleString()}</p>
                </Link>
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