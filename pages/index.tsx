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
        <meta name="description" content="Mighty Estates helps buyers and renters discover premium homes, apartments, and commercial properties." />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        <section className="arch-hero min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="arch-hero-graphic" />
          <div className="geo-shape geo-shape-1" />
          <div className="geo-shape geo-shape-2" />
          <div className="geo-shape geo-shape-3" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-transparent to-charcoal-900/80 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 animate-slide-up opacity-0">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent text-sm font-medium tracking-wide">Premium Real Estate</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-white leading-[0.95] tracking-tight mb-8 animate-slide-up opacity-0 stagger-1">
                Find a property<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">that defines you.</span>
              </h1>
              <p className="text-xl text-charcoal-200 max-w-xl mb-12 leading-relaxed animate-slide-up opacity-0 stagger-2">
                Discover exceptional homes, apartments, and commercial spaces curated for the discerning buyer.
              </p>
              <div className="animate-slide-up opacity-0 stagger-3">
                <SearchCard />
              </div>
              <div className="mt-12 flex items-center gap-8 animate-slide-up opacity-0 stagger-4">
                <div className="flex -space-x-3">
                  {['/M.png','/M.png','/M.png'].map((src,i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal-900 bg-charcoal-800 flex items-center justify-center text-white text-xs font-medium">{(i+1)*2}+</div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">Trusted by 2,500+ clients</div>
                  <div className="text-charcoal-400 text-sm">Rating: 4.9/5 from reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-charcoal-900 py-16 geo-grid relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[{value:"2,500+",label:"Properties",icon:"🏠"},{value:"150+",label:"Neighborhoods",icon:"📍"},{value:"98%",label:"Client Satisfaction",icon:"⭐"},{value:"15+",label:"Years Experience",icon:"🏆"}].map((stat,i) => (
                <div key={stat.label} className="text-center group animate-slide-up opacity-0" style={{animationDelay:i*100+"ms"}}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-charcoal-800 mb-4 group-hover:bg-accent/20 transition-colors">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-charcoal-400 uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 px-6 bg-gradient-to-b from-white to-charcoal-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-3">Browse By Type</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900">Explore Categories</h2>
              </div>
              <div className="accent-line w-24 hidden md:block" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <CategoryCard title="Buy" subtitle="Homes and condos" icon="home" href="/buy" accent />
              <CategoryCard title="Rent" subtitle="Apartments and houses" icon="building" href="/rent" />
              <CategoryCard title="Commercial" subtitle="Office and retail" icon="briefcase" href="/commercial" />
              <CategoryCard title="New Listings" subtitle="Recently added" icon="sparkle" href="/new-listings" />
            </div>
          </div>
        </section>
        <section className="py-24 px-6 bg-charcoal-50 geo-grid">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-3">Handpicked Selection</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900">Featured Properties</h2>
              </div>
              <Link href="/search" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-accent transition-colors group">View all<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleListings.slice(0,6).map((listing,i) => (<div key={listing.id} className="animate-slide-up opacity-0" style={{animationDelay:i*100+"ms"}}><ListingCard listing={listing} /></div>))}
            </div>
            <div className="text-center mt-12">
              <Link href="/search" className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-900 text-white font-semibold rounded-lg hover:bg-charcoal-800 transition-colors">
                View All Properties
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-charcoal-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
              <div className="relative px-10 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">Start Today</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">Ready to list your property?</h2>
                  <p className="text-charcoal-300 text-lg max-w-lg mb-8">Join thousands of property owners who trust Mighty Estates to connect them with qualified buyers and renters.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-center">List Your Property</Link>
                    <Link href="/agents" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur border border-white/10 text-center">Talk to an Agent</Link>
                  </div>
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
