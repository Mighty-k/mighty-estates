import Head from "next/head";
import CategoryShowcase from "../components/CategoryShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sampleListings } from "../lib/sampleData";

const listings = sampleListings.filter(
  (listing) => listing.type === "commercial",
);

export default function CommercialPage() {
  return (
    <>
      <Head>
        <title>Commercial Space | Mighty Estates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CategoryShowcase
        eyebrow="Commercial"
        title="Spaces that support serious business"
        description="Light-filled offices and strategic retail properties for teams, founders, and investors who value location and presence."
        listings={listings}
        accent="#7c2d12"
      />
      <Footer />
    </>
  );
}
