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
    subtitle: "Escritórios, depósitos, lojas e muito mais",
    desc: "Os contêineres Multiteiner são unidades ISO transformadas para uso comercial e industrial. Disponíveis em 20 e 40 pés, com acabamento interno completo, instalações elétricas, hidráulicas e climatização. Pronta-entrega em todo o Brasil.",
    icon: Building2,
    badge: "Mais vendido",
    uses: ["Escritório de obra", "Depósito", "Loja", "Refeitório", "Enfermaria", "Sala de aula"],
    href: "/produtos/conteineres",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/conteineres_97f0bba9.png",
  },
  {
    slug: "modulos",
    title: "Módulos Habitacionais",
    subtitle: "Acomodações completas e modulares",
    desc: "Módulos habitacionais são soluções completas de acomodação, compostas por múltiplos contêineres integrados. Incluem dormitórios, banheiros, refeitórios e áreas de lazer. Ideais para obras de longa duração, operações remotas e grandes eventos.",
    icon: Users,
    badge: null,
    uses: ["Alojamento de trabalhadores", "Base de operações", "Acampamento industrial", "Estrutura para eventos"],
    href: "/produtos/modulos",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/modulos_7c6d7b76.png",
  },
  {
    slug: "offshore",
    title: "Offshore",
    subtitle: "Certificados para operações marítimas",
    desc: "Contêineres e módulos certificados DNV para uso em plataformas marítimas e ambientes extremos. Atendem todas as normas internacionais de segurança para operações offshore, com estrutura reforçada e acabamentos resistentes à corrosão.",
    icon: Shield,
    badge: "Certificado DNV",
    uses: ["Plataformas de petróleo", "Embarcações", "Terminais portuários", "Operações costeiras"],
    href: "/produtos/offshore",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/offshore_a96872ad.png",
  },
  {
    slug: "frigorificos",
    title: "Frigoríficos",
    subtitle: "Controle de temperatura -20°C a +20°C",
    desc: "Contêineres frigoríficos para armazenamento e transporte de produtos que requerem controle de temperatura. Utilizados em eventos, indústria alimentícia, farmacêutica e logística. Ampla capacidade e controle preciso de temperatura.",
    icon: Zap,
    badge: null,
    uses: ["Armazenamento de alimentos", "Medicamentos", "Eventos e festivais", "Logística refrigerada"],
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
