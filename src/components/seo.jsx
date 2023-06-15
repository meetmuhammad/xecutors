import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
      Xecutors | Accelerate your startup
        {/* {pageTitle && `${pageTitle} Xecutors`} */}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Unlock the potential of your startup with Xecutors subscription-based digital solutions and gain access to opportunities for angel investment." />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.svg" />
    </Head>
  </>
);

export default SEO;