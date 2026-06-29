import { Link } from "wouter";
import { ArrowRight, Building2, Users, Shield, Zap, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema, makeFAQSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CTASection, EntityBadge, FAQBlock } from "@/components/GeoAeo";

const PRODUCTS = [
  {
    slug: "conteineres",
    title: "Contêineres",
    subtitle: "Escritórios, vestiários, almoxarifados, dormitórios e mais",
    desc: "Contêineres marítimos ISO (20 e 40 pés) transformados em escritórios, vestiários, almoxarifados, dormitórios, lojas e depósitos. Fabricados em aço Corten com vida útil de 25 a 50 anos. Disponíveis para locação ou venda, com entrega em todo o Brasil.",
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
    desc: "Módulos fabricados com perfis metálicos e painéis sanduíche (EPS ou PIR), com isolamento térmico e acústico superior. Empilháveis em até 3 pavimentos. Atendem NR-18 e NBR 15575. Instalação temporária ou permanente, com montagem em 3 a 15 dias.",
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
    desc: "Contêineres certificados DNV-ST-E271 (antiga DNV 2.7-1) para operações em plataformas marítimas. Alojamentos, lavanderias, sanitários e cozinhas com testes de içamento dinâmico, impacto e estanqueidade. Conformidade com normas IMO e Petrobras.",
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
    desc: "Câmaras frigoríficas móveis com controle de temperatura de -20°C a +20°C. Equipadas com compressores de alta eficiência, painéis isotérmicos e sistema de monitoramento remoto. Ideais para alimentos, medicamentos, flores e insumos industriais.",
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
        description="Linha de contêineres e módulos habitacionais da Multiteiner: contêineres transformados, módulos habitacionais, offshore certificados DNV e frigoríficos. Locação e venda com entrega em todo o Brasil."
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

      {/* TL;DR + Answer Block */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <div className="rounded-xl border-l-4 p-6 mb-8" style={{ borderColor: "#F2C200", background: "rgba(242,194,0,0.06)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1B3A6B" }}>Resumo rápido</p>
            <ul className="space-y-2 text-sm" style={{ color: "#475569" }}>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1B3A6B" }} /> <span><strong>4 linhas de produtos:</strong> Contêineres, Módulos Habitacionais, Offshore e Frigoríficos</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1B3A6B" }} /> <span><strong>Locação ou venda</strong> com entrega em todo o Brasil</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1B3A6B" }} /> <span><strong>Certificações:</strong> ISO 668, DNV-ST-E271, NR-18, NBR 15575</span></li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#1B3A6B" }} /> <span><strong>Desde 1993</strong> no mercado brasileiro de transformação de contêineres</span></li>
            </ul>
          </div>
          <AnswerBlock
            question="Quais produtos a Multiteiner oferece?"
            answer="A Multiteiner oferece quatro linhas principais: Contêineres transformados (escritórios, depósitos, lojas, vestiários), Módulos Habitacionais (acomodações completas com painéis sanduíche para obras e eventos), Offshore (certificados DNV-ST-E271 para plataformas marítimas) e Frigoríficos (controle de temperatura de -20°C a +20°C). Todos disponíveis para locação ou venda, com entrega e montagem em todo o Brasil."
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
