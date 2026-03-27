import { Link } from "wouter";
import { ArrowRight, Building2, Calendar, Factory, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CTASection } from "@/components/GeoAeo";

const SEGMENTS = [
  {
    slug: "construcao-civil",
    title: "Construção Civil",
    desc: "Escritórios de obra, alojamentos, refeitórios e depósitos para canteiros de qualquer porte. A Multiteiner é parceira das maiores construtoras do Brasil.",
    icon: Building2,
    uses: ["Escritório de obra", "Alojamento de trabalhadores", "Refeitório", "Depósito de materiais", "Enfermaria", "Sala de reunião"],
    href: "/segmentos/construcao-civil",
  },
  {
    slug: "eventos",
    title: "Eventos",
    desc: "Estruturas para Rock in Rio, Tomorrowland e os maiores festivais do Brasil. Montagem rápida, desmontagem ágil, qualidade certificada.",
    icon: Calendar,
    uses: ["Camarotes VIP", "Bares e food trucks", "Bilheterias", "Backstage", "Frigoríficos", "Sanitários"],
    href: "/segmentos/eventos",
  },
  {
    slug: "operacoes-industriais",
    title: "Operações Industriais",
    desc: "Módulos para mineração, petróleo, gás e operações em áreas remotas. Soluções certificadas para ambientes extremos.",
    icon: Factory,
    uses: ["Base de operações", "Alojamento remoto", "Laboratório de campo", "Sala de controle", "Offshore", "Depósito de insumos"],
    href: "/segmentos/operacoes-industriais",
  },
  {
    slug: "logistica",
    title: "Logística",
    desc: "Armazenagem, distribuição e pontos de apoio logístico com agilidade e segurança. Soluções temporárias ou permanentes.",
    icon: Truck,
    uses: ["Depósito temporário", "Centro de distribuição", "Ponto de apoio", "Armazenagem refrigerada", "Escritório logístico", "Portaria"],
    href: "/segmentos/logistica",
  },
];

export default function Segmentos() {
  return (
    <>
      <SEOHead
        title="Segmentos — Construção Civil, Eventos, Industrial e Logística"
        description="A Multiteiner atende construção civil, eventos, operações industriais e logística com soluções em contêineres e módulos habitacionais. Conheça as soluções por segmento."
        canonical="https://www.multiteiner.com.br/segmentos"
        schema={makeBreadcrumbSchema([
          { name: "Início", url: "https://www.multiteiner.com.br" },
          { name: "Segmentos", url: "https://www.multiteiner.com.br/segmentos" },
        ])}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Segmentos</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Soluções por <span style={{ color: "#F2C200" }}>setor</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Cada segmento tem necessidades únicas. A Multiteiner tem a solução certa para cada um.
          </p>
        </div>
      </section>

      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="Quais segmentos a Multiteiner atende?"
            answer="A Multiteiner atende quatro segmentos principais: Construção Civil (escritórios de obra, alojamentos, refeitórios), Eventos (Rock in Rio, Tomorrowland, festivais), Operações Industriais (mineração, petróleo, gás, áreas remotas) e Logística (armazenagem, distribuição, pontos de apoio). Soluções disponíveis para locação ou venda em todo o Brasil."
          />
        </div>
      </section>

      <section className="py-20" itemScope itemType="https://schema.org/ItemList">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SEGMENTS.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <Link
                  key={seg.slug}
                  href={seg.href}
                  className="card-hover group block p-8 rounded-xl border border-border bg-white"
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                      <Icon className="w-7 h-7" style={{ color: "#1B3A6B" }} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2" style={{ color: "#1A1A2E" }} itemProp="name">{seg.title}</h2>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }} itemProp="description">{seg.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {seg.uses.map((u) => (
                          <span key={u} className="badge-navy">{u}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#1B3A6B" }}>
                        Ver soluções <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Qual é o seu segmento?"
        subtitle="Fale com um especialista Multiteiner e receba uma solução personalizada."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
