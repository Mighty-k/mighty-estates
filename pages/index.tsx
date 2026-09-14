import Head from "next/head";
import Link from "next/link";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListingCard from "../components/ListingCard";
import SearchCard from "../components/SearchCard";
import { sampleListings } from "../lib/sampleData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mighty Estates | Premium Real Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mighty Estates helps buyers and renters discover premium homes, apartments, and commercial properties."
        />
      </Head>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="arch-hero min-h-[85vh] flex items-center relative overflow-hidden">
          <div className="arch-hero-graphic" />
          <div className="geo-shape geo-shape-1" />
          <div className="geo-shape geo-shape-2" />
          <div className="geo-shape geo-shape-3" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/90 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ledger-tint/90 backdrop-blur-sm rounded-pill mb-6 border border-ledger/20 animate-slide-up opacity-0">
                <span className="w-2 h-2 bg-ledger rounded-pill animate-pulse" />
                <span className="text-ledger text-xs font-semibold uppercase tracking-wider">
                  Premium Real Estate
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 animate-slide-up opacity-0 stagger-1">
                Find a property<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ledger-tint via-white to-gold-tint">
                  that defines you.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-2 max-w-xl mb-10 leading-relaxed animate-slide-up opacity-0 stagger-2">
                Discover exceptional homes, apartments, and commercial spaces curated for the discerning buyer.
              </p>
              <div className="animate-slide-up opacity-0 stagger-3">
                <SearchCard />
              </div>
              <div className="mt-10 flex items-center gap-6 animate-slide-up opacity-0 stagger-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="w-10 h-10 rounded-pill border-2 border-ink bg-ledger flex items-center justify-center text-white text-xs font-semibold shadow-soft"
                    >
                      {item * 2}k+
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Trusted by 2,500+ clients</div>
                  <div className="text-slate-2 text-xs">Rating: 4.9/5 from reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics / Stats Section */}
        <section className="bg-ink py-16 geo-grid relative border-y border-line/20">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2,500+", label: "Properties", icon: "🏠" },
                { value: "150+", label: "Neighborhoods", icon: "📍" },
                { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                { value: "15+", label: "Years Experience", icon: "🏆" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center group animate-slide-up opacity-0"
                  style={{ animationDelay: i * 100 + "ms" }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-control bg-ledger/30 text-white mb-3 group-hover:bg-ledger transition-colors">
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-2 uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-6 bg-paper">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-ledger text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                  Browse By Type
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                  Explore Categories
                </h2>
              </div>
              <div className="accent-line w-24 hidden md:block" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <CategoryCard title="Buy" subtitle="Homes and condos" icon="home" href="/buy" accent />
              <CategoryCard title="Rent" subtitle="Apartments and houses" icon="building" href="/rent" />
              <CategoryCard title="Commercial" subtitle="Office and retail" icon="briefcase" href="/commercial" />
              <CategoryCard title="New Listings" subtitle="Recently added" icon="sparkle" href="/new-listings" />
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-20 px-6 bg-paper-2 geo-grid border-t border-line/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-ledger text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                  Handpicked Selection
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                  Featured Properties
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleListings.slice(0, 6).map((listing, i) => (
                <div
                  key={listing.id}
                  className="animate-slide-up opacity-0"
                  style={{ animationDelay: i * 100 + "ms" }}
                >
                  <ListingCard listing={listing} />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ledger text-white font-medium rounded-control hover:bg-ledger-dim transition-all shadow-soft active:translate-y-[1px]"
              >
                View All Properties
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 px-6 bg-paper">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-ink rounded-structural overflow-hidden shadow-float border border-line/20 p-10 md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-ledger-dim/80" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-ledger/20 rounded-pill blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-gold/15 rounded-pill blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-ledger-tint/20 rounded-pill mb-4 border border-ledger-tint/30">
                  <span className="w-1.5 h-1.5 bg-gold rounded-pill" />
                  <span className="text-gold-tint text-xs font-semibold uppercase tracking-wider">
                    Start Today
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to list your property?
                </h2>
                <p className="text-slate-2 text-base md:text-lg mb-8 leading-relaxed">
                  Join thousands of property owners who trust Mighty Estates to connect them with qualified buyers and renters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-ledger text-white font-medium rounded-control hover:bg-ledger-dim transition-all shadow-soft text-center active:translate-y-[1px]"
                  >
                    List Your Property
                  </Link>
                  <Link
                    href="/agents"
                    className="px-8 py-4 bg-ledger-tint/15 hover:bg-ledger-tint/25 text-white font-medium rounded-control transition-all border border-white/20 text-center active:translate-y-[1px]"
                  >
                    Talk to an Agent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
