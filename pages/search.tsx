import { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
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
        listing.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.address.region && listing.address.region.toLowerCase().includes(searchQuery.toLowerCase()));

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
      </Head>
      <Header />
      <main className="min-h-screen bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
              Find Your Perfect Property
            </h1>
            <p className="text-charcoal-600">
              Search through {sampleListings.length} properties across Nigeria
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-charcoal-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="md:hidden px-4 py-3 bg-charcoal-100 text-charcoal-700 rounded-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
            </div>

            <div className={`mt-4 pt-4 border-t border-charcoal-100 ${isFiltersOpen ? "block" : "hidden md:block"}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">City</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-4 py-2.5 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    {nigerianCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Property Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2.5 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Price Range</label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full px-4 py-2.5 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="text-sm text-charcoal-500 hover:text-charcoal-700 underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-charcoal-600">
              Showing <span className="font-semibold text-charcoal-900">{filteredListings.length}</span> properties
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-charcoal-500">Sort by:</span>
              <select className="text-sm border-none bg-transparent focus:outline-none cursor-pointer">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing, index) => (
                <div
                  key={listing.id}
                  className="animate-slide-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <ListingCard listing={listing} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-charcoal-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-charcoal-700 mb-2">No properties found</h3>
              <p className="text-charcoal-500 mb-4">Try adjusting your filters or search criteria</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}