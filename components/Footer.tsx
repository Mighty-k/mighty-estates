import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center text-white font-bold">ME</div>
              <span className="font-display text-lg text-white">Mighty Estates</span>
            </div>
            <p className="text-sm text-charcoal-400 max-w-xs">Nigeria's leading real estate platform helping you find your perfect property across Lagos, Abuja, Port Harcourt and beyond.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Properties</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/buy" className="hover:text-white transition-colors">Buy</Link>
              <Link href="/rent" className="hover:text-white transition-colors">Rent</Link>
              <Link href="/commercial" className="hover:text-white transition-colors">Commercial</Link>
              <Link href="/new-listings" className="hover:text-white transition-colors">New Listings</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/agents" className="hover:text-white transition-colors">Our Agents</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-charcoal-500">&copy; 2026 Mighty Estates Nigeria. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
