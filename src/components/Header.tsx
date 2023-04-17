import Head from "next/head";
import Script from "next/script";

import Metadata from "@/libs/Metadata";

export default function Header({ metaData }: { metaData: Metadata }) {
  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon-1.jpg" />

        <meta property="description" content={metaData.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={metaData.openGraphTitle ?? metaData.title}
        />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content="/favicon-1.jpg" />
      </Head>

      <Script src="../path/to/flowbite/dist/flowbite.min.js" />
    </div>
  );
}
