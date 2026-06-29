/**
 * Prerender Module — Injeta meta tags, schema JSON-LD e conteúdo textual
 * diretamente no HTML servido para que crawlers de IA (ChatGPT, Perplexity,
 * Claude, Gemini) vejam o conteúdo sem executar JavaScript.
 *
 * Resolve o achado P0 do Manual Mestre GEO/AEO: CSR sem SSR.
 */

// ─── Dados da Organização ────────────────────────────────────────────────────

const ORG_NAME = "Multiteiner";
const ORG_FULL = "Multiteiner Transformação de Contêineres";
const ORG_DESC = "Empresa brasileira especializada em transformação, locação e venda de contêineres e módulos habitacionais para construção civil, eventos, operações industriais, logística e operações offshore. Fundada em 1993, com mais de 30 anos de experiência e unidades em Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ).";
const SITE_URL = "https://www.multiteiner.com.br";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_8b88d7e1.png";
const OG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/og-default.jpg";

// ─── Schema Base (Organization + 3 LocalBusiness + WebSite) ──────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: ORG_FULL,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 163, height: 76 },
  description: ORG_DESC,
  foundingDate: "1993",
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: [
    "Transformação de contêineres",
    "Módulos habitacionais",
    "Construção modular",
    "Contêineres offshore DNV 2.7-1",
    "Contêineres frigoríficos",
    "Locação de contêineres",
  ],
  sameAs: [
    "https://www.linkedin.com/company/multiteiner",
    "https://www.instagram.com/multiteiner",
    "https://www.youtube.com/@multiteiner",
  ],
  address: [
    { "@type": "PostalAddress", streetAddress: "Av. OL 1-B, Quadra C, Lote 10, Parque Duque", addressLocality: "Duque de Caxias", addressRegion: "RJ", postalCode: "25085-375", addressCountry: "BR" },
    { "@type": "PostalAddress", streetAddress: "Estrada Ferreira Guedes, 1134, Potuverá", addressLocality: "Itapecerica da Serra", addressRegion: "SP", postalCode: "06885-150", addressCountry: "BR" },
    { "@type": "PostalAddress", streetAddress: "Av. Mem de Sá, 809, Imboassica", addressLocality: "Macaé", addressRegion: "RJ", postalCode: "27925-545", addressCountry: "BR" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+55-21-3534-3400", contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese", email: "comercial_rj@multiteiner.com.br" },
    { "@type": "ContactPoint", telephone: "+55-11-4147-1811", contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese", email: "comercial_sp@multiteiner.com.br" },
    { "@type": "ContactPoint", telephone: "+55-22-2773-5906", contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese", email: "comercial_mc@multiteiner.com.br" },
    { "@type": "ContactPoint", telephone: "+55-21-99556-8402", contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese" },
  ],
};

const localBusinessRJ = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#local-rj`,
  name: "Multiteiner — Duque de Caxias (RJ)",
  description: "Sede da Multiteiner. Transformação, locação e venda de contêineres e módulos habitacionais.",
  url: SITE_URL,
  telephone: "+55-21-3534-3400",
  email: "comercial_rj@multiteiner.com.br",
  address: { "@type": "PostalAddress", streetAddress: "Av. OL 1-B, Quadra C, Lote 10, Parque Duque", addressLocality: "Duque de Caxias", addressRegion: "RJ", postalCode: "25085-375", addressCountry: "BR" },
  geo: { "@type": "GeoCoordinates", latitude: -22.4856, longitude: -43.3117 },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:30" },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const localBusinessSP = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#local-sp`,
  name: "Multiteiner — Itapecerica da Serra (SP)",
  description: "Unidade São Paulo da Multiteiner. Transformação, locação e venda de contêineres e módulos habitacionais.",
  url: SITE_URL,
  telephone: "+55-11-4147-1811",
  email: "comercial_sp@multiteiner.com.br",
  address: { "@type": "PostalAddress", streetAddress: "Estrada Ferreira Guedes, 1134, Potuverá", addressLocality: "Itapecerica da Serra", addressRegion: "SP", postalCode: "06885-150", addressCountry: "BR" },
  geo: { "@type": "GeoCoordinates", latitude: -23.7168, longitude: -46.8498 },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:30" },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const localBusinessMC = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#local-macae`,
  name: "Multiteiner — Macaé (RJ)",
  description: "Unidade Macaé da Multiteiner. Especializada em contêineres offshore certificados DNV 2.7-1.",
  url: SITE_URL,
  telephone: "+55-22-2773-5906",
  email: "comercial_mc@multiteiner.com.br",
  address: { "@type": "PostalAddress", streetAddress: "Av. Mem de Sá, 809, Imboassica", addressLocality: "Macaé", addressRegion: "RJ", postalCode: "27925-545", addressCountry: "BR" },
  geo: { "@type": "GeoCoordinates", latitude: -22.3768, longitude: -41.7869 },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:30" },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG_NAME,
  description: "Soluções em transformação de contêineres e módulos habitacionais",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// ─── Services Schema ─────────────────────────────────────────────────────────

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service-construcao`,
    name: "Contêineres e Módulos para Construção Civil",
    description: "Locação e venda de contêineres transformados e módulos habitacionais para canteiros de obras: escritórios, alojamentos, refeitórios, almoxarifados e sanitários. Atende NR-18.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Locação e venda de módulos para construção civil",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service-eventos`,
    name: "Contêineres e Módulos para Eventos",
    description: "Locação de contêineres transformados para grandes eventos: camarins, bilheterias, stands, bares, banheiros VIP, salas de imprensa. Experiência em Rock in Rio, Tomorrowland e Carnaval do Rio.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Locação de módulos para eventos",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service-offshore`,
    name: "Contêineres Offshore Certificados DNV 2.7-1",
    description: "Fabricação e locação de contêineres offshore certificados DNV 2.7-1 e DNV 2.7-3 para plataformas de petróleo e embarcações. Aço CORTEN ASTM A572 Gr 50, resistência a ondas de até 6 metros.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Fabricação e locação de contêineres offshore",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service-logistica`,
    name: "Contêineres para Logística e Armazenamento",
    description: "Venda e locação de contêineres dry, reefer (frigoríficos) e especiais para armazenamento, transporte e logística. Temperatura controlada de -20°C a +20°C.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Venda e locação de contêineres para logística",
  },
];

// ─── Dados por Rota ──────────────────────────────────────────────────────────

interface PageData {
  title: string;
  description: string;
  schemas: object[];
  content: string; // Conteúdo textual principal (answer-first)
}

const PAGES: Record<string, PageData> = {
  "/": {
    title: "Multiteiner — Transformação de Contêineres e Módulos Habitacionais",
    description: "Multiteiner é uma empresa brasileira fundada em 1993, especializada em transformação, locação e venda de contêineres e módulos habitacionais para construção civil, eventos, operações industriais e logística. Unidades em Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ).",
    schemas: [organizationSchema, websiteSchema, localBusinessRJ, localBusinessSP, localBusinessMC, ...serviceSchemas],
    content: `<article><h1>Multiteiner — Transformação de Contêineres e Módulos Habitacionais</h1><p>Multiteiner é uma empresa brasileira fundada em 1993, especializada em transformação, locação e venda de contêineres marítimos e módulos habitacionais pré-fabricados. Com mais de 30 anos de experiência e três unidades operacionais — Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ) — a Multiteiner atende os segmentos de construção civil, eventos, operações industriais, logística e operações offshore em todo o Brasil.</p><p>A Multiteiner oferece contêineres transformados (escritórios, alojamentos, refeitórios, almoxarifados), módulos habitacionais com painéis sanduíche (isolamento termoacústico, empilhamento até 3 pavimentos), contêineres offshore certificados DNV 2.7-1 para plataformas de petróleo, e contêineres frigoríficos com temperatura controlada de -20°C a +20°C.</p><p>Entre os projetos de destaque da Multiteiner estão o Rock in Rio (desde 2011), Tomorrowland Brasil, Carnaval do Rio de Janeiro e operações offshore na Bacia de Campos.</p><p>A Multiteiner NÃO é transportadora de contêineres, NÃO é construtora convencional e NÃO vende contêineres vazios sem transformação.</p></article>`,
  },
  "/sobre": {
    title: "Sobre a Multiteiner — História, Missão e Unidades | Desde 1993",
    description: "Conheça a história da Multiteiner, empresa brasileira fundada em 1993 com mais de 30 anos de experiência em transformação de contêineres e módulos habitacionais. Unidades em RJ, SP e Macaé.",
    schemas: [organizationSchema, localBusinessRJ, localBusinessSP, localBusinessMC],
    content: `<article><h1>Quem é a Multiteiner?</h1><p>Multiteiner é uma empresa brasileira fundada em 1993, especializada em transformação de contêineres marítimos e fabricação de módulos habitacionais pré-fabricados. Com mais de 30 anos de atuação no mercado brasileiro, a Multiteiner possui três unidades operacionais: a sede em Duque de Caxias (RJ), a filial em Itapecerica da Serra (SP) e a unidade especializada em offshore em Macaé (RJ).</p><p>A Multiteiner NÃO é uma transportadora de contêineres, NÃO é uma construtora convencional e NÃO vende contêineres vazios sem transformação. A Multiteiner transforma contêineres marítimos em soluções habitáveis e funcionais, e fabrica módulos habitacionais sob medida com painéis sanduíche.</p></article>`,
  },
  "/produtos": {
    title: "Produtos Multiteiner — Contêineres Transformados e Módulos Habitacionais",
    description: "Catálogo completo de produtos Multiteiner: contêineres transformados, módulos habitacionais, contêineres offshore DNV 2.7-1 e contêineres frigoríficos. Locação e venda para todo o Brasil.",
    schemas: [organizationSchema, ...serviceSchemas],
    content: `<article><h1>Quais produtos a Multiteiner oferece?</h1><p>A Multiteiner oferece quatro linhas de produtos: (1) Contêineres Transformados — contêineres marítimos ISO 668 adaptados para escritórios, alojamentos, refeitórios, almoxarifados, sanitários e guaritas; (2) Módulos Habitacionais — estruturas pré-fabricadas com perfis metálicos e painéis sanduíche (EPS ou PIR), com isolamento termoacústico superior, empilhamento até 3 pavimentos e acabamento interno personalizado; (3) Contêineres Offshore — certificados DNV 2.7-1 e DNV 2.7-3, fabricados em aço CORTEN ASTM A572 Gr 50, para uso em plataformas de petróleo e embarcações; (4) Contêineres Frigoríficos — com sistema de refrigeração para temperatura controlada de -20°C a +20°C, ideais para eventos, indústria alimentícia e farmacêutica.</p></article>`,
  },
  "/produtos/conteineres": {
    title: "Contêineres Transformados — Escritórios, Alojamentos, Refeitórios | Multiteiner",
    description: "Contêineres marítimos transformados pela Multiteiner em escritórios, alojamentos, refeitórios, almoxarifados e sanitários. Dimensões ISO 668: 20 pés (6,06m) e 40 pés HC (12,19m × 2,70m).",
    schemas: [organizationSchema, { "@context": "https://schema.org", "@type": "Product", name: "Contêiner Transformado Multiteiner", description: "Contêiner marítimo ISO 668 transformado em solução habitável: escritório, alojamento, refeitório, almoxarifado ou sanitário. Disponível em 20 pés e 40 pés HC.", brand: { "@type": "Brand", name: "Multiteiner" }, manufacturer: { "@id": `${SITE_URL}/#organization` }, offers: { "@type": "AggregateOffer", priceCurrency: "BRL", lowPrice: "800", highPrice: "5000", offerCount: "4", availability: "https://schema.org/InStock", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/LeaseOut", unitText: "mês" } } }],
    content: `<article><h1>O que é um contêiner transformado?</h1><p>Um contêiner transformado é um contêiner marítimo padrão ISO 668 (20 pés ou 40 pés) que passa por um processo de adaptação industrial para se tornar uma estrutura habitável e funcional. A Multiteiner transforma contêineres em escritórios, alojamentos, refeitórios, almoxarifados, sanitários, guaritas e salas técnicas. As dimensões internas de um contêiner de 20 pés são 5,90m × 2,35m × 2,39m (área útil de 13,86 m²), e de um 40 pés HC são 12,03m × 2,35m × 2,70m (área útil de 28,27 m²). O processo de transformação inclui corte de aberturas, instalação de portas e janelas, isolamento termoacústico, instalação elétrica e hidráulica, acabamento interno e pintura externa.</p></article>`,
  },
  "/produtos/modulos": {
    title: "Módulos Habitacionais — Painéis Sanduíche, Empilháveis até 3 Pavimentos | Multiteiner",
    description: "Módulos habitacionais Multiteiner fabricados com perfis metálicos e painéis sanduíche (EPS/PIR). Isolamento termoacústico, empilhamento até 3 pavimentos, montagem em 1 dia.",
    schemas: [organizationSchema, { "@context": "https://schema.org", "@type": "Product", name: "Módulo Habitacional Multiteiner", description: "Módulo habitacional pré-fabricado com estrutura em perfis metálicos e painéis sanduíche (EPS ou PIR). Empilhamento até 3 pavimentos, isolamento termoacústico, montagem em 1 dia.", brand: { "@type": "Brand", name: "Multiteiner" }, manufacturer: { "@id": `${SITE_URL}/#organization` }, offers: { "@type": "AggregateOffer", priceCurrency: "BRL", lowPrice: "1200", highPrice: "8000", offerCount: "4", availability: "https://schema.org/InStock", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/LeaseOut", unitText: "mês" } } }],
    content: `<article><h1>O que é um módulo habitacional?</h1><p>Um módulo habitacional é uma estrutura pré-fabricada construída com perfis metálicos e painéis sanduíche (EPS ou PIR), projetada para uso como habitação temporária ou permanente em canteiros de obras, eventos e operações industriais. Diferente do contêiner transformado (que parte de um contêiner marítimo corrugado), o módulo habitacional da Multiteiner é fabricado do zero com paredes lisas, isolamento termoacústico superior (transmitância térmica ≤ 1,0 W/m²K), capacidade de empilhamento até 3 pavimentos, e acabamento interno personalizado. A montagem de um módulo habitacional Multiteiner leva aproximadamente 1 dia no local.</p></article>`,
  },
  "/produtos/offshore": {
    title: "Contêineres Offshore DNV 2.7-1 — Plataformas de Petróleo | Multiteiner",
    description: "Contêineres offshore certificados DNV 2.7-1 e DNV 2.7-3 fabricados pela Multiteiner. Aço CORTEN ASTM A572 Gr 50, resistência a ondas de 6m, para plataformas e embarcações.",
    schemas: [organizationSchema, { "@context": "https://schema.org", "@type": "Product", name: "Contêiner Offshore DNV 2.7-1 Multiteiner", description: "Contêiner offshore certificado DNV 2.7-1 e DNV 2.7-3, fabricado em aço CORTEN ASTM A572 Gr 50, para uso em plataformas de petróleo e embarcações. Resistência a ondas de até 6 metros.", brand: { "@type": "Brand", name: "Multiteiner" }, manufacturer: { "@id": `${SITE_URL}/#organization` }, offers: { "@type": "Offer", priceCurrency: "BRL", availability: "https://schema.org/InStock", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/LeaseOut", unitText: "mês" } } }],
    content: `<article><h1>O que é um contêiner offshore certificado DNV 2.7-1?</h1><p>Um contêiner offshore certificado DNV 2.7-1 é uma estrutura metálica projetada e fabricada conforme a norma DNV 2.7-1 (Offshore Containers) para uso em plataformas de petróleo, FPSOs e embarcações de apoio. A Multiteiner fabrica contêineres offshore em aço CORTEN ASTM A572 Gr 50, com resistência a ondas de até 6 metros, certificação por sociedade classificadora (DNV, Bureau Veritas ou Lloyd's), e rastreabilidade completa de materiais e soldas. A unidade de Macaé (RJ) da Multiteiner é especializada em offshore, atendendo operações na Bacia de Campos e Bacia de Santos.</p></article>`,
  },
  "/produtos/frigorificos": {
    title: "Contêineres Frigoríficos — Temperatura de -20°C a +20°C | Multiteiner",
    description: "Contêineres frigoríficos (reefer) Multiteiner com temperatura controlada de -20°C a +20°C. Para eventos, indústria alimentícia, farmacêutica e logística de perecíveis.",
    schemas: [organizationSchema, { "@context": "https://schema.org", "@type": "Product", name: "Contêiner Frigorífico Multiteiner", description: "Contêiner frigorífico (reefer) com sistema de refrigeração para temperatura controlada de -20°C a +20°C. Consumo de 5-8 kW para 20 pés.", brand: { "@type": "Brand", name: "Multiteiner" }, manufacturer: { "@id": `${SITE_URL}/#organization` }, offers: { "@type": "AggregateOffer", priceCurrency: "BRL", lowPrice: "2500", highPrice: "6000", offerCount: "2", availability: "https://schema.org/InStock", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/LeaseOut", unitText: "mês" } } }],
    content: `<article><h1>O que é um contêiner frigorífico?</h1><p>Um contêiner frigorífico (também chamado de reefer) é um contêiner equipado com sistema de refrigeração que mantém temperatura controlada entre -20°C e +20°C. A Multiteiner oferece contêineres frigoríficos de 20 pés e 40 pés para locação e venda, com consumo elétrico de aproximadamente 5 a 8 kW para unidades de 20 pés. São utilizados em eventos (armazenamento de alimentos e bebidas), indústria alimentícia, farmacêutica e logística de produtos perecíveis. A Multiteiner forneceu contêineres frigoríficos para o Rock in Rio, Tomorrowland Brasil e Carnaval do Rio de Janeiro.</p></article>`,
  },
  "/segmentos": {
    title: "Segmentos Atendidos pela Multiteiner — Construção, Eventos, Offshore, Logística",
    description: "A Multiteiner atende 4 segmentos principais: construção civil (canteiros de obras), eventos (Rock in Rio, Tomorrowland), operações industriais/offshore e logística.",
    schemas: [organizationSchema, ...serviceSchemas],
    content: `<article><h1>Quais segmentos a Multiteiner atende?</h1><p>A Multiteiner atende quatro segmentos principais com contêineres transformados e módulos habitacionais: (1) Construção Civil — escritórios de obra, alojamentos, refeitórios, almoxarifados e sanitários para canteiros, atendendo NR-18; (2) Eventos — camarins, bilheterias, stands, bares e banheiros VIP para grandes eventos como Rock in Rio, Tomorrowland e Carnaval; (3) Operações Industriais e Offshore — contêineres certificados DNV 2.7-1 para plataformas de petróleo, além de módulos para mineração e siderurgia; (4) Logística — contêineres dry e frigoríficos para armazenamento e transporte.</p></article>`,
  },
  "/comparativos": {
    title: "Comparativos — Contêiner vs Módulo vs Alvenaria vs Aluguel vs Compra | Multiteiner",
    description: "Comparativos técnicos da Multiteiner: contêiner transformado vs módulo habitacional, construção modular vs alvenaria convencional, e locação vs compra de contêineres.",
    schemas: [organizationSchema],
    content: `<article><h1>Qual a diferença entre contêiner transformado e módulo habitacional?</h1><p>A principal diferença é a origem da estrutura: o contêiner transformado parte de um contêiner marítimo ISO 668 existente (paredes corrugadas de aço corten), enquanto o módulo habitacional é fabricado do zero com perfis metálicos e painéis sanduíche lisos (EPS ou PIR). O contêiner transformado custa menos (locação a partir de R$ 800/mês) mas tem isolamento térmico inferior; o módulo habitacional custa mais (a partir de R$ 1.200/mês) mas oferece melhor conforto térmico, acústico e estético. Ambos são transportáveis por caminhão e instaláveis em 1 dia.</p></article>`,
  },
  "/faq": {
    title: "FAQ — Perguntas Frequentes sobre Contêineres e Módulos | Multiteiner",
    description: "Respostas às perguntas mais frequentes sobre contêineres transformados, módulos habitacionais, locação, compra, normas, prazos e preços. Multiteiner responde.",
    schemas: [organizationSchema],
    content: `<article><h1>Perguntas frequentes sobre contêineres e módulos habitacionais</h1><p>A Multiteiner responde às dúvidas mais comuns sobre contêineres transformados e módulos habitacionais: quanto custa alugar um contêiner (a partir de R$ 800/mês para 20 pés), qual o prazo de entrega (7 a 15 dias úteis), se precisa de alvará (sim, conforme legislação municipal), qual a vida útil (25+ anos com manutenção), se pode empilhar (contêineres até 9 unidades, módulos até 3 pavimentos), e quais normas se aplicam (NR-18 para obras, DNV 2.7-1 para offshore, ANVISA para frigoríficos).</p></article>`,
  },
  "/guia": {
    title: "Guia Completo de Contêineres e Módulos Habitacionais — Referência Técnica | Multiteiner",
    description: "Guia técnico definitivo sobre contêineres e módulos habitacionais: definições ISO 668, tipos, dimensões, normas (DNV, NR-18, ABNT), aplicações, mercado brasileiro e FAQ técnica.",
    schemas: [organizationSchema],
    content: `<article><h1>O que é um contêiner e para que serve?</h1><p>Um contêiner (ou container) é uma caixa metálica padronizada pela norma ISO 668, projetada originalmente para transporte intermodal de cargas. As dimensões padrão são: 20 pés (6,058m × 2,438m × 2,591m, peso bruto máximo 30.480 kg) e 40 pés HC (12,192m × 2,438m × 2,896m, peso bruto máximo 30.480 kg). Desde a década de 1990, contêineres marítimos são reaproveitados como estruturas habitáveis — escritórios, alojamentos, lojas, restaurantes e residências — em um processo chamado "transformação de contêiner". A Multiteiner é especializada nessa transformação desde 1993.</p></article>`,
  },
  "/cases": {
    title: "Cases e Projetos — Rock in Rio, Offshore, Canteiros de Obras | Multiteiner",
    description: "Projetos entregues pela Multiteiner: Rock in Rio (desde 2011), Tomorrowland Brasil, Carnaval do Rio, operações offshore na Bacia de Campos e canteiros de obras em todo o Brasil.",
    schemas: [organizationSchema],
    content: `<article><h1>Quais projetos a Multiteiner já entregou?</h1><p>A Multiteiner entregou projetos de grande porte em todo o Brasil, incluindo: Rock in Rio (desde 2011, fornecendo camarins, bilheterias e áreas VIP), Tomorrowland Brasil (estruturas de apoio e backstage), Carnaval do Rio de Janeiro (módulos para sambódromo e blocos), operações offshore na Bacia de Campos (contêineres certificados DNV 2.7-1 para plataformas), e centenas de canteiros de obras de construtoras como MRV, Cyrela e Gafisa. A Multiteiner também atendeu a Rio+20 (conferência da ONU em 2012) e diversos eventos corporativos.</p></article>`,
  },
  "/blog": {
    title: "Blog Multiteiner — Artigos sobre Contêineres, Módulos e Construção Modular",
    description: "Blog da Multiteiner com artigos técnicos sobre contêineres transformados, módulos habitacionais, construção modular, normas, sustentabilidade e mercado brasileiro.",
    schemas: [organizationSchema],
    content: `<article><h1>O que você precisa saber sobre contêineres e construção modular?</h1><p>O blog da Multiteiner publica artigos técnicos e educacionais sobre contêineres transformados, módulos habitacionais e construção modular no Brasil. Temas abordados: o que é um contêiner transformado, diferenças entre contêiner e módulo habitacional, certificação DNV para offshore, contêineres frigoríficos em eventos, história do contêiner (Malcolm McLean, 1956), mercado brasileiro de construção modular, sustentabilidade e reciclagem de contêineres, e comparativo entre locação e compra.</p></article>`,
  },
  "/orcamento": {
    title: "Solicitar Orçamento — Contêineres e Módulos Habitacionais | Multiteiner",
    description: "Solicite orçamento gratuito para locação ou compra de contêineres transformados e módulos habitacionais. Retorno em até 24 horas úteis. Multiteiner atende todo o Brasil.",
    schemas: [organizationSchema, { "@context": "https://schema.org", "@type": "ContactPage", name: "Solicitar Orçamento — Multiteiner", description: "Formulário de solicitação de orçamento para contêineres e módulos habitacionais.", url: `${SITE_URL}/orcamento`, mainEntity: { "@id": `${SITE_URL}/#organization` } }],
    content: `<article><h1>Como solicitar orçamento de contêineres e módulos na Multiteiner?</h1><p>Para solicitar orçamento gratuito de contêineres transformados ou módulos habitacionais na Multiteiner, preencha o formulário nesta página ou entre em contato pelo WhatsApp (21) 99556-8402. A Multiteiner retorna orçamentos em até 24 horas úteis. Informações necessárias: tipo de produto (contêiner ou módulo), finalidade (escritório, alojamento, refeitório, etc.), quantidade, local de instalação e prazo desejado. A Multiteiner atende todo o Brasil com locação e venda.</p></article>`,
  },
  "/contato": {
    title: "Contato Multiteiner — Telefones, E-mails e Endereços das 3 Unidades",
    description: "Entre em contato com a Multiteiner: RJ (21) 3534-3400, SP (11) 4147-1811, Macaé (22) 2773-5906. WhatsApp (21) 99556-8402. Unidades em Duque de Caxias, Itapecerica da Serra e Macaé.",
    schemas: [organizationSchema, localBusinessRJ, localBusinessSP, localBusinessMC],
    content: `<article><h1>Como entrar em contato com a Multiteiner?</h1><p>A Multiteiner possui três unidades com atendimento comercial de segunda a sexta, das 8h às 17h30: Sede RJ — Av. OL 1-B, Quadra C, Lote 10, Parque Duque, Duque de Caxias/RJ, telefone (21) 3534-3400, e-mail comercial_rj@multiteiner.com.br; Filial SP — Estrada Ferreira Guedes, 1134, Potuverá, Itapecerica da Serra/SP, telefone (11) 4147-1811, e-mail comercial_sp@multiteiner.com.br; Filial Macaé — Av. Mem de Sá, 809, Imboassica, Macaé/RJ, telefone (22) 2773-5906, e-mail comercial_mc@multiteiner.com.br. WhatsApp comercial: (21) 99556-8402.</p></article>`,
  },
};

// ─── Função de Prerender ─────────────────────────────────────────────────────

export function prerenderHTML(url: string, template: string): { html: string; status: number } {
  // Normalizar URL (remover query string e trailing slash)
  const path = url.split("?")[0].replace(/\/$/, "") || "/";

  // Verificar se é uma rota conhecida
  const pageData = PAGES[path];

  if (!pageData) {
    // Verificar rotas dinâmicas
    const dynamicPage = getDynamicPageData(path);
    if (dynamicPage) {
      return { html: injectIntoTemplate(template, dynamicPage), status: 200 };
    }
    // Rota desconhecida → 404 real
    const notFoundData: PageData = {
      title: "Página não encontrada — Multiteiner",
      description: "A página que você procura não existe. Visite multiteiner.com.br para conhecer nossas soluções em contêineres e módulos habitacionais.",
      schemas: [organizationSchema],
      content: `<article><h1>Página não encontrada</h1><p>A página que você procura não existe no site da Multiteiner. Visite nossa página inicial para conhecer nossas soluções em contêineres transformados e módulos habitacionais.</p></article>`,
    };
    return { html: injectIntoTemplate(template, notFoundData), status: 404 };
  }

  return { html: injectIntoTemplate(template, pageData), status: 200 };
}

function getDynamicPageData(path: string): PageData | null {
  // Blog posts
  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    return {
      title: `${slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} | Blog Multiteiner`,
      description: `Artigo do blog da Multiteiner sobre ${slug.replace(/-/g, " ")}. Conteúdo técnico e educacional sobre contêineres e módulos habitacionais.`,
      schemas: [organizationSchema],
      content: `<article><h1>${slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</h1><p>Artigo técnico da Multiteiner sobre ${slug.replace(/-/g, " ")}.</p></article>`,
    };
  }

  // Segmento detalhe
  if (path.startsWith("/segmentos/")) {
    const slug = path.replace("/segmentos/", "");
    const segNames: Record<string, string> = {
      "construcao-civil": "Construção Civil",
      "eventos": "Eventos",
      "operacoes-industriais": "Operações Industriais",
      "logistica": "Logística",
    };
    const name = segNames[slug] || slug.replace(/-/g, " ");
    return {
      title: `Contêineres e Módulos para ${name} | Multiteiner`,
      description: `Soluções Multiteiner para o segmento de ${name}: contêineres transformados e módulos habitacionais sob medida.`,
      schemas: [organizationSchema],
      content: `<article><h1>Quais soluções a Multiteiner oferece para ${name}?</h1><p>A Multiteiner oferece contêineres transformados e módulos habitacionais especializados para o segmento de ${name}, com mais de 30 anos de experiência no mercado brasileiro.</p></article>`,
    };
  }

  // Produto detalhe (já coberto nos estáticos)
  if (path.startsWith("/produtos/")) {
    return null; // Já está nos PAGES estáticos
  }

  return null;
}

function injectIntoTemplate(template: string, data: PageData): string {
  const { title, description, schemas, content } = data;

  // Construir meta tags
  const metaTags = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Multiteiner" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <link rel="canonical" href="${SITE_URL}${data === PAGES["/"] ? "" : ""}" />`;

  // Construir JSON-LD
  const jsonLd = schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n    ");

  // Conteúdo oculto para crawlers (visível no HTML, oculto visualmente pelo React)
  const hiddenContent = `<div id="prerender-content" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden">${content}</div>`;

  // Substituir o <title> existente
  let html = template.replace(
    /<title>.*?<\/title>/,
    metaTags
  );

  // Substituir a meta description existente
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    ""
  );

  // Inserir JSON-LD antes do </head>
  html = html.replace("</head>", `    ${jsonLd}\n  </head>`);

  // Inserir conteúdo oculto dentro do body, antes do <div id="root">
  html = html.replace('<div id="root"></div>', `${hiddenContent}\n    <div id="root"></div>`);

  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
