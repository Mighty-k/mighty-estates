import Head from "next/head";
import CategoryShowcase from "../components/CategoryShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sampleListings } from "../lib/sampleData";

const listings = sampleListings.filter(
  (listing) => listing.type === "apartment" || listing.type === "house",
);

export default function RentPage() {
  return (
    <>
      <Head>
        <title>Rent Homes | Mighty Estates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CategoryShowcase
        eyebrow="Rent"
        title="Flexible spaces for everyday living"
        description="Browse apartments and houses that are easy to compare, quick to scan, and ready for the next chapter."
        listings={listings}
        accent="#111827"
      />
      <Footer />
    </>
  );
}
