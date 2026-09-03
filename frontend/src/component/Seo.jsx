import { Helmet } from "react-helmet-async";

const SITE_NAME = "Borofirst";
const SITE_URL = "https://borofirst.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
  title = "BOROFIRST | Smart Financial Solutions & Loans",

  description = 
    "Borofirst provides smart, transparent and customer-focused financial solutions.",

  canonical,

  image = DEFAULT_IMAGE,

  type = "website",

  noIndex = false,
}) => {
  const canonicalUrl =
    canonical || `${SITE_URL}${window.location.pathname}`;

  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow";

  return (
    <Helmet>
      {/* ================================================
          BASIC SEO
      ================================================= */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={robots}
      />

      {/* ================================================
          CANONICAL
      ================================================= */}

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* ================================================
          OPEN GRAPH
      ================================================= */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:image:alt"
        content={title}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* ================================================
          TWITTER / X
      ================================================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
};

export default SEO;