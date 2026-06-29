import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  noIndex?: boolean;
}

export default function SEOHead({
  title,
  description,
  canonical,
  schema,
  ogImage = "https://www.multiteiner.com.br/og-default.jpg",
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("Multiteiner") ? title : `${title} | Multiteiner`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("description", description);
    if (canonical) setLink("canonical", canonical);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Multiteiner", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large");

    if (schema) {
      document.querySelectorAll('script[data-schema="multiteiner"]').forEach((el) => el.remove());
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-schema", "multiteiner");
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-schema="multiteiner"]').forEach((el) => el.remove());
    };
  }, [fullTitle, description, canonical, schema, ogImage, noIndex]);

  return null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

/* ── Schemas pré-definidos ─────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.multiteiner.com.br/#organization",
  name: "Multiteiner",
  alternateName: "Multiteiner Transformação de Contêineres",
  url: "https://www.multiteiner.com.br",
  logo: {
    "@type": "ImageObject",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_8b88d7e1.png",
    width: 163,
    height: 76,
  },
  description:
    "Empresa brasileira fundada em 1993, especializada em transformação, locação e venda de contêineres e módulos habitacionais para construção civil, eventos, operações industriais e logística. Unidades em Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ).",
  foundingDate: "1993",
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: [
    "Transformação de contêineres",
    "Módulos habitacionais",
    "Acomodação modular",
    "Construção modular",
    "Contêineres offshore",
    "Contêineres frigoríficos",
  ],
  sameAs: [
    "https://www.linkedin.com/company/multiteiner",
    "https://www.instagram.com/multiteiner",
    "https://www.youtube.com/@multiteiner",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. OL 1-B, Quadra C, Lote 10",
      addressLocality: "Duque de Caxias",
      addressRegion: "RJ",
      postalCode: "25085-375",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Estrada Ferreira Guedes, nº 1134, Potuverá",
      addressLocality: "Itapecerica da Serra",
      addressRegion: "SP",
      postalCode: "06885-150",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Mem de Sá, nº 809, Imboassica",
      addressLocality: "Macaé",
      addressRegion: "RJ",
      postalCode: "27925-545",
      addressCountry: "BR",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-21-3534-3400",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
      email: "comercial_rj@multiteiner.com.br",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-21-3534-3434",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-11-4147-1811",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
      email: "comercial_sp@multiteiner.com.br",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-22-2773-5906",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
      email: "comercial_mc@multiteiner.com.br",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-21-99556-8402",
      contactType: "sales",
      contactOption: "https://schema.org/TollFree",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.multiteiner.com.br/#website",
  url: "https://www.multiteiner.com.br",
  name: "Multiteiner",
  description: "Soluções em transformação de contêineres e módulos habitacionais",
  publisher: { "@id": "https://www.multiteiner.com.br/#organization" },
};

export function makeBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function makeFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function makeProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  priceLow?: string;
  priceHigh?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    brand: { "@type": "Brand", name: "Multiteiner" },
    manufacturer: { "@id": "https://www.multiteiner.com.br/#organization" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: product.priceLow || "800",
      highPrice: product.priceHigh || "8000",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      seller: { "@id": "https://www.multiteiner.com.br/#organization" },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/LeaseOut",
        unitText: "mês",
      },
    },
  };
}

export const personAuthorSchema = {
  "@type": "Person",
  "@id": "https://www.multiteiner.com.br/#author-equipe",
  name: "Equipe Técnica Multiteiner",
  url: "https://www.multiteiner.com.br/sobre",
  worksFor: { "@id": "https://www.multiteiner.com.br/#organization" },
};

export function makeBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    image: post.image,
    author: personAuthorSchema,
    publisher: { "@id": "https://www.multiteiner.com.br/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": post.url },
  };
}
