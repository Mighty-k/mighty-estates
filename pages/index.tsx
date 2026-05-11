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
        <section className="arch-hero min-h-[85vh] flex items-center">
          <div className="arch-hero-graphic" />
          <div className="geo-shape geo-shape-1" />
          <div className="geo-shape geo-shape-2" />
          <div className="geo-shape geo-shape-3" />
          <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-4 animate-slide-up opacity-0">Premium Real Estate</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up opacity-0 stagger-1">Find a property<br /><span className="text-charcoal-300">that defines you.</span></h1>
              <p className="text-lg text-charcoal-300 max-w-xl mb-10 animate-slide-up opacity-0 stagger-2">Curated homes, apartments, and commercial spaces presented with architectural precision and timeless design.</p>
              <div className="animate-slide-up opacity-0 stagger-3"><SearchCard /></div>
            </div>
          </div>
        </section>
        <section className="bg-charcoal-900 py-12 geo-grid">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[{value:"2,500+",label:"Properties"},{value:"150+",label:"Neighborhoods"},{value:"98%",label:"Client Satisfaction"},{value:"15+",label:"Years Experience"}].map((stat,i) => (
                <div key={stat.label} className="text-center animate-slide-up opacity-0" style={{animationDelay:i*100+"ms"}}>
                  <div className="text-3xl md:text-4xl font-semibold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-charcoal-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-3">Browse By Type</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-charcoal-900">Explore Categories</h2>
              </div>
              <div className="accent-line w-24 hidden md:block" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <CategoryCard title="Buy" subtitle="Homes and condos" icon="home" href="/buy" accent />
              <CategoryCard title="Rent" subtitle="Apartments and houses" icon="building" href="/rent" />
              <CategoryCard title="Commercial" subtitle="Office and retail" icon="briefcase" href="/commercial" />
              <CategoryCard title="New Listings" subtitle="Recently added" icon="sparkle" href="/new-listings" />
            </div>
          </div>
        </section>
        <section className="py-20 px-6 bg-charcoal-50 geo-grid">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-3">Handpicked Selection</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-charcoal-900">Featured Properties</h2>
              </div>
              <Link href="/search" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-accent transition-colors group">View all<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleListings.map((listing,i) => (<div key={listing.id} className="animate-slide-up opacity-0" style={{animationDelay:i*100+"ms"}}><ListingCard listing={listing} /></div>))}
            </div>
          </div>
        </section>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-charcoal-900 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-charcoal-900" />
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
              <div className="relative px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to list your property?</h2>
                  <p className="text-charcoal-300 max-w-lg">Join thousands of property owners who trust Mighty Estates to connect them with qualified buyers and renters.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/list-property" className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-center">List Your Property</Link>
                  <Link href="/agents" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-center backdrop-blur">Contact an Agent</Link>
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
