import Head from "next/head";
import CategoryShowcase from "../components/CategoryShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sampleListings } from "../lib/sampleData";

const listings = sampleListings.filter(
  (listing) => listing.featured || listing.badges?.includes("new"),
);

export default function NewListingsPage() {
  return (
    <>
      <Head>
        <title>New Listings | Mighty Estates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CategoryShowcase
        eyebrow="New Listings"
        title="Fresh properties worth a first look"
        description="A concise feed of newly listed and featured properties so users can move quickly without losing context."
        listings={listings.length > 0 ? listings : sampleListings.slice(0, 3)}
        accent="#14532d"
      />
      <Footer />
    </>
  );
}
