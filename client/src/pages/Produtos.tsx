import { Link } from "wouter";
import { ArrowRight, Building2, Users, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CTASection, EntityBadge } from "@/components/GeoAeo";

const PRODUCTS = [
  {
    slug: "conteineres",
    title: "Contêineres",
    subtitle: "Escritórios, vestiários, almoxarifados, dormitórios e mais",
    desc: "Temos a solução perfeita para atender a sua necessidade. São mais de 30 anos de experiência no segmento de locação e venda de contêineres. Nosso portfólio contém modelos diversificados: escritórios, vestiários, almoxarifados, dormitórios, entre outros.",
    icon: Building2,
    badge: "Mais vendido",
    uses: ["Obras", "Eventos", "Construções", "Feiras", "Estruturas comerciais"],
    href: "/produtos/conteineres",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/conteineres_97f0bba9.png",
  },
  {
    slug: "modulos",
    title: "Módulos Habitacionais",
    subtitle: "Soluções modulares para diversas aplicações",
    desc: "Os módulos habitacionais podem ser adaptados para diversas aplicações, com praticidade no transporte e montagem. A instalação dos módulos pode ser temporária ou permanente, e eles podem ser empilhados em até três pavimentos.",
    icon: Users,
    badge: null,
    uses: ["Eventos", "Postos de saúde", "Escolas", "Refeitórios", "Escritórios", "Auditórios", "Stand de vendas", "Sanitários", "Dormitórios"],
    href: "/produtos/modulos",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/modulos_7c6d7b76.png",
  },
  {
    slug: "offshore",
    title: "Offshore",
    subtitle: "Certificados para operações marítimas e petrolíferas",
    desc: "No setor petrolífero, a Multiteiner se destaca por adaptar e transformar contêineres em diversas vivências nas plataformas: alojamentos, lavanderias e sanitários. Todos os equipamentos seguem os mais altos padrões de qualidade e normas internacionais (IMO).",
    icon: Shield,
    badge: "Certificado DNV",
    uses: ["Transporte de cargas", "Alojamentos", "Cozinhas", "Lavanderias", "Sanitários"],
    href: "/produtos/offshore",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/offshore_a96872ad.png",
  },
  {
    slug: "frigorificos",
    title: "Frigoríficos",
    subtitle: "Câmaras frigoríficas móveis de -20°C a +20°C",
    desc: "Os contêineres ou câmaras frigoríficas são soluções inteligentes, móveis, práticas e econômicas para conservar produtos em baixas temperaturas. Fáceis de operar, capazes de conservar climatizados quaisquer produtos perecíveis.",
    icon: Zap,
    badge: null,
    uses: ["Açougues", "Supermercados", "Sorveterias", "Fábricas de gelo", "Fabricantes de polpa de fruta", "Peixarias"],
    href: "/produtos/frigorificos",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/frigorificos_e320a8f7.png",
  },
];

export default function Produtos() {
  return (
    <>
      <SEOHead
        title="Produtos — Contêineres, Módulos, Offshore e Frigoríficos"
        description="Linha completa de contêineres e módulos habitacionais da Multiteiner: contêineres transformados, módulos habitacionais, offshore certificados e frigoríficos. Pronta-entrega em todo o Brasil."
        canonical="https://www.multiteiner.com.br/produtos"
        schema={makeBreadcrumbSchema([
          { name: "Início", url: "https://www.multiteiner.com.br" },
          { name: "Produtos", url: "https://www.multiteiner.com.br/produtos" },
        ])}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Linha Completa</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Produtos <span style={{ color: "#F2C200" }}>Multiteiner</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Do contêiner padrão ao módulo offshore certificado — soluções completas para cada necessidade.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="Quais produtos a Multiteiner oferece?"
            answer="A Multiteiner oferece quatro linhas principais: Contêineres transformados (escritórios, depósitos, lojas), Módulos Habitacionais (acomodações completas para obras e eventos), Offshore (certificados DNV para plataformas marítimas) e Frigoríficos (controle de temperatura de -20°C a +20°C). Todos disponíveis para locação ou venda, com entrega em todo o Brasil."
          />
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="Linha de Produtos Multiteiner" />
        <div className="container">
          <div className="space-y-12">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.slug}
                  className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/Product"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  {/* Visual */}
                  <div
                    className="w-full lg:w-2/5 rounded-xl overflow-hidden min-h-56"
                    style={{ border: "1px solid #E2E8F0" }}
                  >
                    <img
                      src={p.img}
                      alt={`${p.title} — Multiteiner`}
                      className="w-full h-full object-cover min-h-56"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    {p.badge && <span className="badge-gold mb-3 inline-block">{p.badge}</span>}
                    <h2 className="text-2xl font-extrabold mb-1" style={{ color: "#1A1A2E" }} itemProp="name">{p.title}</h2>
                    <p className="font-medium mb-4" style={{ color: "#1B3A6B" }}>{p.subtitle}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }} itemProp="description">{p.desc}</p>
                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#94A3B8" }}>Principais usos</p>
                      <div className="flex flex-wrap gap-2">
                        {p.uses.map((u) => (
                          <span key={u} className="badge-navy">{u}</span>
                        ))}
                      </div>
                    </div>
                    <Link href={p.href} className="btn-navy inline-flex">
                      Ver especificações <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Não encontrou o que precisa?"
        subtitle="Nossa equipe desenvolve soluções personalizadas para qualquer necessidade."
        primaryLabel="Falar com consultor"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
