import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchCard() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("any");


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/search?q=" + encodeURIComponent(location));
  };


  return (
    <form onSubmit={handleSearch} className="relative z-10">
      <div className="bg-white rounded-xl shadow-arch-medium p-2 md:p-3">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, neighbourhood, or postcode" className="w-full pl-12 pr-4 py-3.5 bg-charcoal-50 rounded-lg text-charcoal-900 placeholder:text-charcoal-400 input-arch border-0" />
          </div>
          <div className="relative">
            <select value={type} onChange={(e) => setType(e.target.value)} className="appearance-none w-full md:w-44 px-4 py-3.5 bg-charcoal-50 rounded-lg text-charcoal-900 cursor-pointer input-arch border-0 pr-10">
              <option value="any">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="commercial">Commercial</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal-400"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
          </div>
          <button type="submit" className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors">Search</button>
        </div>
      </div>
    </form>
  );
}
