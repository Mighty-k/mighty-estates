import { useState, useMemo } from "react";
import Head from "next/head";
import { sampleListings } from "../lib/sampleData";
import ListingCard from "../components/ListingCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nigerianCities = [
  "All Cities",
  "Lekki",
  "Victoria Island",
  "Ikoyi",
  "Banana Island",
  "Ikeja",
  "Surulere",
  "Lagos Island",
  "Sangotedo",
  "Maitama",
  "Asokoro",
  "Gwarinpa",
  "Port Harcourt",
  "Ibadan",
  "Enugu",
  "Kano",
];

const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "commercial", label: "Commercial" },
  { value: "land", label: "Land" },
];

const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "0-25000000", label: "Under ₦25M" },
  { value: "25000000-50000000", label: "₦25M - ₦50M" },
  { value: "50000000-80000000", label: "₦50M - ₦80M" },
  { value: "80000000-120000000", label: "₦80M - ₦120M" },
  { value: "120000000-9999999999", label: "₦120M+" },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredListings = useMemo(() => {
    return sampleListings.filter((listing) => {
      const matchesSearch =
        searchQuery === "" ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.address.city
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (listing.address.region &&
          listing.address.region
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));

      const matchesCity =
        selectedCity === "All Cities" || listing.address.city === selectedCity;

      const matchesType =
        selectedType === "all" || listing.type === selectedType;

      const matchesPrice =
        selectedPrice === "all" ||
        (() => {
          const [min, max] = selectedPrice.split("-").map(Number);
          return listing.price >= min && listing.price <= max;
        })();

      return matchesSearch && matchesCity && matchesType && matchesPrice;
    });
  }, [searchQuery, selectedCity, selectedType, selectedPrice]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCity("All Cities");
    setSelectedType("all");
    setSelectedPrice("all");
  };

  return (
    <>
      <Head>
        <title>Search Properties | Mighty Estates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-screen bg-paper py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ledger-tint rounded-pill mb-3 border border-ledger/10">
              <span className="w-1.5 h-1.5 bg-ledger rounded-pill" />
              <span className="text-ledger text-xs font-semibold uppercase tracking-wider">
                Property Search
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-2">
              Find Your Perfect Property
            </h1>
            <p className="text-base text-slate">
              Search through <span className="font-semibold text-ledger">all</span> our premium properties across Nigeria
            </p>
          </div>

          <div className="bg-white rounded-structural border border-line shadow-soft p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-paper-2 border border-line rounded-control text-ink placeholder:text-slate-2 input-arch text-sm font-medium"
                />
              </div>
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="md:hidden px-6 py-3.5 bg-paper-2 text-ink rounded-control flex items-center justify-center gap-2 font-medium border border-line"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filters
              </button>
            </div>

            <div
              className={`mt-6 pt-6 border-t border-line ${
                isFiltersOpen ? "block" : "hidden md:block"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    City
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-4 py-3 bg-paper-2 border border-line rounded-control text-ink cursor-pointer input-arch appearance-none text-sm font-medium"
                    >
                      {nigerianCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-3 bg-paper-2 border border-line rounded-control text-ink cursor-pointer input-arch appearance-none text-sm font-medium"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Price Range
                  </label>
                  <div className="relative">
                    <select
                      value={selectedPrice}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      className="w-full px-4 py-3 bg-paper-2 border border-line rounded-control text-ink cursor-pointer input-arch appearance-none text-sm font-medium"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={clearFilters}
                  className="text-sm text-slate hover:text-ledger transition-colors font-medium"
                >
                  Clear all filters
                </button>
                <button className="px-6 py-3 bg-ledger text-white font-medium rounded-control hover:bg-ledger-dim transition-all shadow-soft active:translate-y-[1px] text-sm">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-ledger text-white rounded-pill text-xs font-mono font-semibold shadow-soft">
                {filteredListings.length}
              </span>
              <span className="text-slate text-sm">properties found</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-control border border-line shadow-soft">
              <span className="text-xs text-slate">Sort by:</span>
              <select className="text-sm border-none bg-transparent focus:outline-none cursor-pointer font-medium text-ink">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing, index) => (
                <div
                  key={listing.id}
                  className="animate-slide-up opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <ListingCard listing={listing} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-structural border border-line shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-paper-2 rounded-pill mb-4 text-slate">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">
                No properties found
              </h3>
              <p className="text-slate mb-6 max-w-md mx-auto text-sm">
                We couldn&apos;t find any properties matching your criteria. Try
                adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-ledger text-white font-medium rounded-control hover:bg-ledger-dim transition-all shadow-soft text-sm"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
