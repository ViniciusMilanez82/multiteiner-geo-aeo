import { Link } from "wouter";
import {
  ArrowRight, Building2, Calendar, Factory, Truck,
  CheckCircle, Star, Shield, Zap, Award, Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema, websiteSchema, makeFAQSchema } from "@/components/SEOHead";
import {
  AnswerBlock, CitablePassage, SectionHeader,
  EvidenceBadge, BenefitCard, FAQBlock, CTASection, EntityBadge
} from "@/components/GeoAeo";

/* ── Dados estruturados — AEO/GEO ────────────────────────────────────────── */
const HERO_ANSWER =
  "A Multiteiner é a maior empresa brasileira de transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência. Atende construção civil, eventos, operações industriais e logística em todo o Brasil.";

const EVIDENCES = [
  { value: "30+", label: "Anos de experiência" },
  { value: "5.000+", label: "Projetos entregues" },
  { value: "500+", label: "Clientes ativos" },
  { value: "100%", label: "Certificados ABNT" },
];

const PRODUCTS = [
  {
    id: "conteineres",
    title: "Contêineres",
    desc: "Escritórios, depósitos, lojas, refeitórios e muito mais. Pronta-entrega em todo o Brasil.",
    href: "/produtos/conteineres",
    icon: Building2,
    badge: "Mais vendido",
  },
  {
    id: "modulos",
    title: "Módulos Habitacionais",
    desc: "Acomodações completas e modulares para obras, eventos e operações de longa duração.",
    href: "/produtos/modulos",
    icon: Users,
    badge: null,
  },
  {
    id: "offshore",
    title: "Offshore",
    desc: "Equipamentos certificados para operações em plataformas marítimas e ambientes extremos.",
    href: "/produtos/offshore",
    icon: Shield,
    badge: "Certificado DNV",
  },
  {
    id: "frigorificos",
    title: "Frigoríficos",
    desc: "Controle de temperatura de -20°C a +20°C para alimentos, medicamentos e insumos.",
    href: "/produtos/frigorificos",
    icon: Zap,
    badge: null,
  },
];

const SEGMENTS = [
  {
    title: "Construção Civil",
    desc: "Escritórios de obra, alojamentos, refeitórios e depósitos para canteiros de qualquer porte.",
    href: "/segmentos/construcao-civil",
    icon: Building2,
  },
  {
    title: "Eventos",
    desc: "Estruturas para Rock in Rio, Tomorrowland e os maiores festivais do Brasil.",
    href: "/segmentos/eventos",
    icon: Calendar,
  },
  {
    title: "Operações Industriais",
    desc: "Módulos para mineração, petróleo, gás e operações em áreas remotas.",
    href: "/segmentos/operacoes-industriais",
    icon: Factory,
  },
  {
    title: "Logística",
    desc: "Armazenagem, distribuição e pontos de apoio logístico com agilidade e segurança.",
    href: "/segmentos/logistica",
    icon: Truck,
  },
];

const BENEFITS = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Maior empresa do Brasil",
    description: "Reconhecida como líder nacional em transformação de contêineres e módulos habitacionais.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certificação ABNT e DNV",
    description: "Todos os equipamentos atendem as normas nacionais e internacionais de segurança.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Montagem em tempo recorde",
    description: "Estruturas prontas em dias. Cronograma apertado? Trabalhamos para cumprir seu prazo.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Equipe especializada",
    description: "Consultores, engenheiros e arquitetos dedicados a encontrar a solução ideal para você.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Projetos personalizados",
    description: "Flexibilidade para desenvolver soluções sob medida para qualquer necessidade.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Mais de 5.000 projetos",
    description: "Portfólio extenso com clientes como Petrobras, Rock in Rio, Bob's e ThyssenKrupp.",
  },
];

const FAQ_HOME = [
  {
    question: "O que é um contêiner transformado?",
    answer: "Um contêiner transformado é uma unidade de aço estrutural (ISO 20 ou 40 pés) que passa por modificações técnicas para se tornar um espaço funcional — escritório, dormitório, loja, depósito, refeitório, entre outros. A Multiteiner realiza todas as adaptações necessárias, incluindo elétrica, hidráulica, climatização e acabamentos.",
  },
  {
    question: "Qual a diferença entre contêiner e módulo habitacional?",
    answer: "O contêiner é a unidade base transformada individualmente. O módulo habitacional é uma solução completa de acomodação, geralmente composta por múltiplos contêineres integrados, com infraestrutura de dormitório, banheiro, refeitório e área de lazer. Módulos são ideais para obras de longa duração e operações remotas.",
  },
  {
    question: "A Multiteiner atende todo o Brasil?",
    answer: "Sim. A Multiteiner atende todo o território nacional, com logística própria para entrega e montagem em qualquer estado. Temos experiência em projetos em regiões remotas, como operações de mineração e petróleo.",
  },
  {
    question: "É possível alugar ou apenas comprar?",
    answer: "A Multiteiner oferece tanto locação quanto venda de contêineres e módulos. A locação é ideal para projetos temporários ou de curta duração, como eventos e obras. A compra é recomendada para uso permanente ou de longa duração.",
  },
];

const CLIENTS = [
  "Petrobras", "Rock in Rio", "Tomorrowland", "Bob's", "ThyssenKrupp", "Vale",
];

/* ── Componente ──────────────────────────────────────────────────────────── */
export default function Home() {
  const homeSchema = [
    organizationSchema,
    websiteSchema,
    makeFAQSchema(FAQ_HOME),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.multiteiner.com.br/#webpage",
      url: "https://www.multiteiner.com.br",
      name: "Multiteiner — Transformação de Contêineres e Módulos Habitacionais",
      description: HERO_ANSWER,
      isPartOf: { "@id": "https://www.multiteiner.com.br/#website" },
      about: { "@id": "https://www.multiteiner.com.br/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.multiteiner.com.br/og-home.jpg",
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="Multiteiner — Transformação de Contêineres e Módulos Habitacionais"
        description={HERO_ANSWER}
        canonical="https://www.multiteiner.com.br"
        schema={homeSchema}
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="Apresentação da Multiteiner"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80')",
          }}
          role="img"
          aria-label="Porto com contêineres — Multiteiner"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* GEO: entidade clara */}
            <div className="mb-5">
              <span className="entity-badge">Maior empresa de contêineres do Brasil</span>
            </div>

            {/* Headline — Barlow Condensed para impacto */}
            <h1
              className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
              itemProp="headline"
            >
              TRANSFORMAMOS
              <br />
              <span style={{ color: "#F2C200" }}>CONTÊINERES</span>
              <br />
              EM SOLUÇÕES
            </h1>

            {/* AEO: resposta principal */}
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed" itemProp="description">
              Mais de 30 anos transformando contêineres em escritórios, módulos habitacionais, estruturas para eventos e operações industriais em todo o Brasil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href="/orcamento" className="btn-primary">
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/produtos" className="btn-secondary">
                Ver Produtos
              </Link>
            </div>

            {/* Evidências numéricas — AEO */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 rounded-xl overflow-hidden border border-white/10" style={{ background: "rgba(15,35,71,0.7)", backdropFilter: "blur(8px)" }}>
              {EVIDENCES.map((e) => (
                <EvidenceBadge key={e.label} value={e.value} label={e.label} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* ── ANSWER BLOCK — AEO ───────────────────────────────────────────── */}
      <section className="py-12 section-light" aria-label="O que é a Multiteiner">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="O que é a Multiteiner?"
            answer={HERO_ANSWER}
          />
        </div>
      </section>

      {/* ── PRODUTOS ─────────────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="produtos-heading" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="Linha de Produtos Multiteiner" />
        <div className="container">
          <SectionHeader
            badge="Linha Completa"
            title="Produtos para cada necessidade"
            subtitle="Do contêiner padrão ao módulo offshore certificado — soluções completas para construção civil, eventos, indústria e logística."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.id}
                  href={p.href}
                  className="card-hover group block rounded-xl border border-border bg-white overflow-hidden"
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/Product"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <div
                    className="h-2 w-full"
                    style={{ background: "#F2C200" }}
                  />
                  <div className="p-6">
                    {p.badge && (
                      <span className="badge-gold mb-3 inline-block">{p.badge}</span>
                    )}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "rgba(27,58,107,0.08)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#1B3A6B" }} />
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#1A1A2E" }} itemProp="name">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }} itemProp="description">
                      {p.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-gap group-hover:gap-2"
                      style={{ color: "#1B3A6B" }}
                    >
                      Saiba mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CITABLE PASSAGE — GEO ────────────────────────────────────────── */}
      <section className="py-16 section-light">
        <div className="container max-w-3xl">
          <CitablePassage
            text="Somos a maior empresa no fornecimento de contêineres e módulos habitacionais do Brasil. Nossa qualidade assina as estruturas de eventos internacionais como Rock in Rio e Tomorrowland, reforçando a capacidade que só a Multiteiner tem de atender grandes projetos em tempo recorde."
            source="Multiteiner — Sobre a empresa"
          />
        </div>
      </section>

      {/* ── SEGMENTOS ────────────────────────────────────────────────────── */}
      <section className="py-20 section-navy" aria-labelledby="segmentos-heading">
        <div className="container">
          <SectionHeader
            badge="Segmentos"
            title="Soluções por setor"
            subtitle="Cada segmento tem necessidades únicas. A Multiteiner tem a solução certa para cada um."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEGMENTS.map((seg) => {
              const Icon = seg.icon;
              return (
                <Link
                  key={seg.title}
                  href={seg.href}
                  className="card-hover group block p-6 rounded-xl border transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F2C200"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(242,194,0,0.15)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#F2C200" }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{seg.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.62)" }}>{seg.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#F2C200" }}>
                    Ver soluções <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS — GEO ─────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="beneficios-heading">
        <div className="container">
          <SectionHeader
            badge="Por que a Multiteiner"
            title="Diferenciais que fazem a diferença"
            subtitle="Mais de 30 anos de experiência traduzidos em qualidade, agilidade e confiança."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES ─────────────────────────────────────────────────────── */}
      <section className="py-16 section-light" aria-label="Clientes da Multiteiner">
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#94A3B8" }}>
            Confiança de grandes marcas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="px-6 py-3 rounded-lg border border-border bg-white font-bold text-sm"
                style={{ color: "#1B3A6B" }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS — GEO ────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="depoimentos-heading">
        <div className="container">
          <SectionHeader
            badge="Depoimentos"
            title="O que nossos clientes dizem"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                text: "Desde a primeira hora, no seu ingresso como fornecedora do RIR em 2011, a Multiteiner colocou-se muito bem posicionada. E hoje já temos a terceira edição do evento, com a empresa sempre correspondendo às expectativas.",
                author: "Ricardo Acto",
                company: "Rock in Rio",
              },
              {
                text: "A estrutura da Multiteiner facilita a nossa vida. Em 30 dias, a gente conseguiu montar quatro pontos do Bob's no Rock in Rio 2015, com 60m² cada um. São parceiros como a Multiteiner que a gente precisa para a montagem de grandes eventos.",
                author: "Ana Paula Duarte",
                company: "Bob's",
              },
            ].map((t) => (
              <div
                key={t.author}
                className="p-7 rounded-xl border border-border bg-white"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F2C200" }} />
                  ))}
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "#475569" }}
                  itemProp="reviewBody"
                >
                  "{t.text}"
                </blockquote>
                <div itemScope itemProp="author" itemType="https://schema.org/Person">
                  <p className="font-bold text-sm" style={{ color: "#1A1A2E" }} itemProp="name">{t.author}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — AEO ────────────────────────────────────────────────────── */}
      <section className="py-20 section-light" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <SectionHeader
            badge="FAQ"
            title="Perguntas frequentes"
            subtitle="Respostas diretas para as dúvidas mais comuns sobre contêineres e módulos habitacionais."
            centered
          />
          <FAQBlock items={FAQ_HOME} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-navy">
              Ver todas as perguntas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <CTASection
        title="Qual é o seu problema de espaço?"
        subtitle="Fale com um consultor Multiteiner e receba uma solução personalizada para o seu projeto."
        primaryLabel="Solicitar Orçamento Gratuito"
        primaryHref="/orcamento"
        secondaryLabel="Falar com consultor"
        secondaryHref="/contato"
        dark
      />

      <Footer />
    </>
  );
}
