import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Building2, Ship, Music, Factory, Pickaxe,
  MapPin, Calendar, Users, CheckCircle, Filter
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema, makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CTASection } from "@/components/GeoAeo";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

/* ── Dados dos Cases ─────────────────────────────────────────────────────── */
const CASES = [
  {
    id: "rock-in-rio",
    title: "Rock in Rio",
    subtitle: "Cidade do Rock — Rio de Janeiro",
    category: "eventos",
    year: "2011–2024",
    client: "Rock World",
    location: "Rio de Janeiro, RJ",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/case-rockinrio-RmpPi55ycFo2zSGJ3wY7eQ.webp",
    icon: Music,
    stats: [
      { label: "Contêineres", value: "200+" },
      { label: "Edições", value: "7" },
      { label: "Área total", value: "4.800 m²" },
      { label: "Público", value: "700 mil" },
    ],
    description: "Desde 2011, a Multiteiner é fornecedora oficial do Rock in Rio. Mais de 200 contêineres transformados em lojas, camarins, estúdios de TV, praças de alimentação e áreas VIP. Estruturas de até 3 andares com ar-condicionado, iluminação profissional e acabamento de alto padrão. Montagem completa em 45 dias e desmontagem em 15 dias.",
    highlights: [
      "Estruturas de até 3 andares empilhados",
      "Lojas Bob's, Coca-Cola, Heineken e Samsung",
      "Camarins climatizados para artistas internacionais",
      "Estúdios de TV para Globo e Multishow",
      "Praças de alimentação com capacidade para 2.000 pessoas",
    ],
    products: ["Contêineres Dry 20' e 40'", "Contêineres High Cube 40'", "Módulos Habitacionais"],
  },
  {
    id: "petrobras-offshore",
    title: "Petrobras — Operações Offshore",
    subtitle: "Plataformas da Bacia de Campos e Pré-Sal",
    category: "industria",
    year: "2005–2024",
    client: "Petrobras",
    location: "Bacia de Campos e Santos",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/case-petrobras-offshore-YXRdwHUjrWG63DjoBgLnMA.webp",
    icon: Ship,
    stats: [
      { label: "Contêineres", value: "500+" },
      { label: "Plataformas", value: "30+" },
      { label: "Certificação", value: "DNV 2.7-1" },
      { label: "Anos", value: "19" },
    ],
    description: "Parceria de quase duas décadas com a Petrobras para fornecimento de contêineres offshore certificados DNV 2.7-1. Salas de controle, oficinas, almoxarifados e alojamentos para plataformas da Bacia de Campos e do Pré-Sal. Todos os equipamentos passam por inspeção rigorosa com certificação internacional.",
    highlights: [
      "Certificação DNV 2.7-1 para uso offshore",
      "Salas de controle com painéis à prova de explosão",
      "Oficinas equipadas para manutenção em alto-mar",
      "Almoxarifados com controle de umidade",
      "Alojamentos com ar-condicionado e isolamento acústico",
    ],
    products: ["Contêineres Offshore DNV", "Módulos de Controle", "Almoxarifados Certificados"],
  },
  {
    id: "canteiro-mrv",
    title: "MRV Engenharia — Canteiros de Obras",
    subtitle: "Empreendimentos residenciais em São Paulo",
    category: "construcao",
    year: "2018–2024",
    client: "MRV Engenharia",
    location: "São Paulo, SP",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/case-canteiro-obras-DNDUA3FGyHG7MMbG5uSmcG.webp",
    icon: Building2,
    stats: [
      { label: "Módulos", value: "350+" },
      { label: "Obras", value: "12" },
      { label: "Trabalhadores", value: "3.000" },
      { label: "Área", value: "8.400 m²" },
    ],
    description: "Fornecimento de módulos habitacionais para canteiros de obras da MRV em São Paulo. Escritórios administrativos, alojamentos para trabalhadores, refeitórios com capacidade para 250 pessoas, vestiários com chuveiros e ambulatórios. Todos em conformidade com a NR-18 e entregues prontos para uso em até 30 dias.",
    highlights: [
      "Conformidade total com NR-18",
      "Refeitórios para 250 pessoas com cozinha industrial",
      "Alojamentos com 4 a 8 leitos por módulo",
      "Vestiários com chuveiros e armários individuais",
      "Ambulatório equipado conforme exigência legal",
    ],
    products: ["Módulos Habitacionais 20' e 40'", "Módulos Sanitários", "Módulos Refeitório"],
  },
  {
    id: "carnaval-rio",
    title: "Carnaval do Rio de Janeiro",
    subtitle: "Sambódromo da Marquês de Sapucaí",
    category: "eventos",
    year: "2010–2024",
    client: "Prefeitura do Rio / Liesa",
    location: "Rio de Janeiro, RJ",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/case-carnaval-UaHYABRYZtZrets65GkJaS.webp",
    icon: Music,
    stats: [
      { label: "Contêineres", value: "150+" },
      { label: "Edições", value: "14" },
      { label: "Área", value: "3.600 m²" },
      { label: "Público", value: "1 milhão" },
    ],
    description: "Desde 2010, a Multiteiner fornece a infraestrutura de contêineres para o Carnaval do Rio. Estúdios de transmissão para a TV Globo, postos médicos, camarotes VIP, bilheterias e áreas de apoio logístico ao longo do Sambódromo. Montagem em 20 dias e operação 24h durante os desfiles.",
    highlights: [
      "Estúdios de TV para transmissão ao vivo da Globo",
      "Postos médicos equipados com UTI móvel",
      "Camarotes VIP com ar-condicionado e vista privilegiada",
      "Bilheterias e centros de credenciamento",
      "Áreas de apoio logístico para escolas de samba",
    ],
    products: ["Contêineres Dry 20' e 40'", "Contêineres High Cube", "Módulos Especiais"],
  },
  {
    id: "vale-mineracao",
    title: "Vale — Complexo de Mineração",
    subtitle: "Operações em Carajás e Minas Gerais",
    category: "industria",
    year: "2012–2024",
    client: "Vale S.A.",
    location: "Carajás, PA / Itabira, MG",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/case-mineracao-Vqe5FzeAp3NKrj7XN67Cuw.webp",
    icon: Pickaxe,
    stats: [
      { label: "Módulos", value: "400+" },
      { label: "Minas", value: "5" },
      { label: "Trabalhadores", value: "4.500" },
      { label: "Área", value: "12.000 m²" },
    ],
    description: "Fornecimento de vilas modulares completas para operações de mineração da Vale em Carajás (PA) e Minas Gerais. Alojamentos para 4.500 trabalhadores, refeitórios industriais, escritórios administrativos, ambulatórios e áreas de lazer. Infraestrutura completa com rede elétrica, hidráulica e esgoto integradas.",
    highlights: [
      "Vilas modulares para 4.500 trabalhadores",
      "Refeitórios industriais para 500 refeições/turno",
      "Escritórios administrativos climatizados",
      "Ambulatórios com sala de emergência",
      "Áreas de lazer com TV, internet e jogos",
    ],
    products: ["Módulos Habitacionais 40' HC", "Módulos Refeitório", "Módulos Escritório"],
  },
];

const CATEGORIES = [
  { id: "todos", label: "Todos os Projetos", icon: Filter },
  { id: "eventos", label: "Eventos", icon: Music },
  { id: "industria", label: "Indústria & Mineração", icon: Factory },
  { id: "construcao", label: "Construção Civil", icon: Building2 },
];

const NUMBERS = [
  { value: "Milhares", label: "Projetos entregues" },
  { value: "Centenas", label: "Clientes ativos" },
  { value: "30+", label: "Anos de experiência" },
  { value: "3", label: "Unidades no Brasil" },
];

/* ── Componente ──────────────────────────────────────────────────────────── */
export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const heroRef = useScrollReveal<HTMLElement>();
  const casesRef = useStaggerReveal<HTMLDivElement>();

  const filteredCases = activeCategory === "todos"
    ? CASES
    : CASES.filter((c) => c.category === activeCategory);

  const schemas = [
    organizationSchema,
    makeBreadcrumbSchema([
      { name: "Início", url: "https://www.multiteiner.com.br" },
      { name: "Cases", url: "https://www.multiteiner.com.br/cases" },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Cases e Projetos — Multiteiner | Rock in Rio, Petrobras, Vale, Carnaval"
        description="Projetos da Multiteiner: Rock in Rio (desde 2011), Petrobras offshore (DNV 2.7-1), canteiros de obras, Carnaval do Rio e operações de mineração. Empresa fundada em 1993 com atuação em todo o Brasil."
        canonical="https://www.multiteiner.com.br/cases"
        schema={schemas}
      />
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden reveal"
        style={{ background: "linear-gradient(135deg, #0F2347 0%, #1B3A6B 50%, #2A4F8F 100%)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ background: "rgba(242,194,0,0.15)", color: "#F2C200", border: "1px solid rgba(242,194,0,0.3)" }}>
              Portfólio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#FFFFFF", fontFamily: "'Barlow Condensed', sans-serif" }}>
              Projetos que <span style={{ color: "#F2C200" }}>transformam</span> o Brasil
            </h1>
            <AnswerBlock answer="Desde 1993, a Multiteiner fornece contêineres transformados e módulos habitacionais para projetos de grande porte — de festivais como Rock in Rio e Carnaval a plataformas offshore da Petrobras e operações de mineração da Vale. Conheça os cases que ilustram nossa atuação." />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {NUMBERS.map((n) => (
                <div key={n.label} className="text-center p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="text-2xl font-extrabold mb-1" style={{ color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}>{n.value}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{n.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b border-border sticky top-0 z-30" style={{ background: "var(--color-background)" }}>
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: isActive ? "#1B3A6B" : "transparent",
                    color: isActive ? "#F2C200" : "#64748B",
                    border: isActive ? "2px solid #1B3A6B" : "2px solid #E2E8F0",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="container">
          <div ref={casesRef} className="space-y-16 stagger-children">
            {filteredCases.map((c, idx) => {
              const Icon = c.icon;
              const isEven = idx % 2 === 0;
              return (
                <article
                  key={c.id}
                  className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  {/* Imagem + Overlay */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={c.img}
                      alt={`Case ${c.title} — Multiteiner`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,35,71,0.85) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(242,194,0,0.2)" }}>
                          <Icon className="w-5 h-5" style={{ color: "#F2C200" }} />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-extrabold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                            {c.title}
                          </h2>
                          <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{c.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {c.stats.map((s) => (
                          <div key={s.label} className="text-center">
                            <div className="text-lg font-extrabold" style={{ color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}>{s.value}</div>
                            <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 md:p-8">
                    <div className={`grid grid-cols-1 ${isEven ? "md:grid-cols-5" : "md:grid-cols-5"} gap-8`}>
                      {/* Descrição */}
                      <div className="md:col-span-3">
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#F0F4FF", color: "#1B3A6B" }}>
                            <MapPin className="w-3 h-3" /> {c.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#FFF8E1", color: "#92400E" }}>
                            <Calendar className="w-3 h-3" /> {c.year}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#F0FDF4", color: "#166534" }}>
                            <Users className="w-3 h-3" /> {c.client}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                          {c.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {c.products.map((p) => (
                            <span key={p} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#F8FAFC", color: "#64748B", border: "1px solid #E2E8F0" }}>
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Destaques */}
                      <div className="md:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#1B3A6B" }}>
                          Destaques do Projeto
                        </h3>
                        <ul className="space-y-2.5">
                          {c.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#22C55E" }} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: "#94A3B8" }}>
                Nenhum case encontrado para esta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Quer um projeto como esses?"
        subtitle="Fale com nossa equipe e receba um orçamento personalizado para o seu projeto. Atendemos todo o Brasil."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        secondaryLabel="Fale Conosco"
        secondaryHref="/contato"
      />

      <Footer />
    </>
  );
}
