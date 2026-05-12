import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/M.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Mighty Estates - Find Your Dream Property"
        />
        <meta
          property="og:description"
          content="Discover premium properties for sale and rent. Your trusted partner in real estate."
        />
        <meta property="og:image" content="/M.png" />
        <meta property="og:url" content="https://mighty-estates.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mighty Estates - Find Your Dream Property"
        />
        <meta
          name="twitter:description"
          content="Discover premium properties for sale and rent."
        />
        <meta name="twitter:image" content="/M.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
