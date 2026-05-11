import Head from "next/head";
import CategoryShowcase from "../components/CategoryShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sampleListings } from "../lib/sampleData";

const listings = sampleListings.filter(
  (listing) => listing.type === "house" || listing.type === "apartment",
);

export default function BuyPage() {
  return (
    <>
      <Head>
        <title>Buy Homes | Mighty Estates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CategoryShowcase
        eyebrow="Buy"
        title="Homes designed for long-term living"
        description="Explore elegant homes and apartments curated for buyers who want clarity, quality, and confidence in every search."
        listings={listings}
        accent="#0b4dd6"
      />
      <Footer />
    </>
  );
}
