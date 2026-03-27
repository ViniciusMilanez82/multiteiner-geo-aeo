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
    url: "https://www.multiteiner.com.br/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Maior empresa brasileira em transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência em soluções para construção civil, eventos, operações industriais e logística.",
  foundingDate: "1990",
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
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-0000-0000",
    contactType: "sales",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
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
      "@type": "Offer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      seller: { "@id": "https://www.multiteiner.com.br/#organization" },
    },
  };
}

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
    author: { "@id": "https://www.multiteiner.com.br/#organization" },
    publisher: { "@id": "https://www.multiteiner.com.br/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": post.url },
  };
}
