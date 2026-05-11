import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Listing } from "../../types/listing";
import { sampleListings } from "../../lib/sampleData";

type Props = {
  listing: Listing;
};

export default function ListingPage({ listing }: Props) {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-80 relative rounded-md overflow-hidden">
          <Image
            src={listing.mainImage}
            alt={listing.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-display">{listing.title}</h1>
          <div className="text-brand text-xl font-semibold mt-2">
            {listing.priceCurrency} {listing.price.toLocaleString()}
          </div>
          <p className="text-sm text-slate-600 mt-3">
            {listing.address.line1}, {listing.address.city}
          </p>

          <section className="mt-6 prose">
            <h2>Overview</h2>
            <p>{listing.description ?? listing.summary}</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleListings.map((l) => ({ params: { id: l.id } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string;
  const listing = sampleListings.find((l) => l.id === id);

  if (!listing) return { notFound: true };

  return { props: { listing } };
};
