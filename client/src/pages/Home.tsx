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
  EvidenceBadge, BenefitCard, FAQBlock, CTASection
} from "@/components/GeoAeo";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

/* ── Dados estruturados — AEO/GEO ────────────────────────────────────────── */
const HERO_ANSWER =
  "A Multiteiner é a maior empresa brasileira de transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência. Atende construção civil, eventos, operações industriais e logística em todo o Brasil.";

const EVIDENCES = [
  { value: "30+", label: "Anos de experiência" },
  { value: "5.000+", label: "Projetos entregues" },
  { value: "500+", label: "Clientes ativos" },
  { value: "3", label: "Unidades no Brasil" },
];

const PRODUCTS = [
  {
    id: "conteineres",
    title: "Contêineres",
    desc: "Escritórios, depósitos, lojas, refeitórios e muito mais. Pronta-entrega em todo o Brasil.",
    href: "/produtos/conteineres",
    icon: Building2,
    badge: "Mais vendido",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/conteineres_97f0bba9.png",
  },
  {
    id: "modulos",
    title: "Módulos Habitacionais",
    desc: "Acomodações completas e modulares para obras, eventos e operações de longa duração.",
    href: "/produtos/modulos",
    icon: Users,
    badge: null,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/modulos_7c6d7b76.png",
  },
  {
    id: "offshore",
    title: "Offshore",
    desc: "Equipamentos certificados para operações em plataformas marítimas e ambientes extremos.",
    href: "/produtos/offshore",
    icon: Shield,
    badge: "Certificado DNV",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/offshore_a96872ad.png",
  },
  {
    id: "frigorificos",
    title: "Frigoríficos",
    desc: "Controle de temperatura de -20°C a +20°C para alimentos, medicamentos e insumos.",
    href: "/produtos/frigorificos",
    icon: Zap,
    badge: null,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/frigorificos_e320a8f7.png",
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
    answer: "Sim. A Multiteiner atende todo o território nacional, com logística própria para entrega e montagem em qualquer estado. Possui três unidades: Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ).",
  },
  {
    question: "É possível alugar ou apenas comprar?",
    answer: "A Multiteiner oferece tanto locação quanto venda de contêineres e módulos. A locação é ideal para projetos temporários ou de curta duração, como eventos e obras. A compra é recomendada para uso permanente ou de longa duração.",
  },
];

const CLIENTS = [
  { name: "Petrobras", img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/cliente_petrobras_324c770e.jpg" },
  { name: "Rock in Rio", img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/cliente_rir_af05545a.jpg" },
  { name: "Coca-Cola", img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/cliente_coca_dff8b804.jpg" },
  { name: "Globo", img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/cliente_globo_3334fb53.jpg" },
  { name: "ThyssenKrupp", img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/cliente_thyssenkrupp_e54452ce.jpg" },
];

/* ── Componente ──────────────────────────────────────────────────────────── */
export default function Home() {
  const answerRef = useScrollReveal<HTMLElement>();
  const productsRef = useStaggerReveal<HTMLDivElement>();
  const citableRef = useScrollReveal<HTMLElement>();
  const segmentsRef = useStaggerReveal<HTMLDivElement>();
  const benefitsRef = useStaggerReveal<HTMLDivElement>();
  const clientsRef = useScrollReveal<HTMLElement>();
  const testimonialsRef = useStaggerReveal<HTMLDivElement>();
  const faqRef = useScrollReveal<HTMLElement>();

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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/slide_01_801ee9e9.jpg')",
          }}
          role="img"
          aria-label="Pátio de contêineres Multiteiner em Duque de Caxias"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="mb-5">
              <span className="entity-badge">Maior empresa de contêineres do Brasil</span>
            </div>

            <h1
              className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
              itemProp="headline"
            >
              TRANSFORMAMOS
              <br />
              <span className="text-gradient-gold" style={{ WebkitTextFillColor: "#F2C200" }}>CONTÊINERES</span>
              <br />
              EM SOLUÇÕES
            </h1>

            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed" itemProp="description">
              Mais de 30 anos transformando contêineres em escritórios, módulos habitacionais, estruturas para eventos e operações industriais em todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href="/orcamento" className="btn-primary">
                Solicitar Orçamento <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/produtos" className="btn-secondary">
                Ver Produtos
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 rounded-xl overflow-hidden border border-white/10" style={{ background: "rgba(15,35,71,0.7)", backdropFilter: "blur(8px)" }}>
              {EVIDENCES.map((e) => (
                <EvidenceBadge key={e.label} value={e.value} label={e.label} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* ── ANSWER BLOCK — AEO ──────────────────────────────────────────── */}
      <section ref={answerRef} className="py-12 section-light reveal" aria-label="O que é a Multiteiner" id="main-content">
        <div className="container max-w-3xl">
          <AnswerBlock question="O que é a Multiteiner?" answer={HERO_ANSWER} />
        </div>
      </section>

      {/* ── PRODUTOS ─────────────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="produtos-heading" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="Linha de Produtos Multiteiner" />
        <div className="container">
          <SectionHeader
            badge="Linha Completa"
            title="Quais produtos a Multiteiner oferece?"
            subtitle="Do contêiner padrão ao módulo offshore certificado — soluções completas para construção civil, eventos, indústria e logística."
          />
          <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.id}
                href={p.href}
                className="card-hover group block rounded-xl border border-border bg-white overflow-hidden"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/Product"
              >
                <meta itemProp="position" content={String(i + 1)} />
                <div className="h-40 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title + " Multiteiner"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="p-5">
                  {p.badge && (
                    <span className="badge-gold mb-2 inline-block">{p.badge}</span>
                  )}
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1A1A2E" }} itemProp="name">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }} itemProp="description">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2" style={{ color: "#1B3A6B" }}>
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITABLE PASSAGE — GEO ────────────────────────────────────────── */}
      <section ref={citableRef} className="py-16 section-light reveal">
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
            title="Quais setores a Multiteiner atende?"
            subtitle="Cada segmento tem necessidades únicas. A Multiteiner tem a solução certa para cada um."
            light
          />
          <div ref={segmentsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
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
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(242,194,0,0.15)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#F2C200" }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{seg.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.62)" }}>{seg.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: "#F2C200" }}>
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
            title="Por que escolher a Multiteiner?"
            subtitle="Mais de 30 anos de experiência traduzidos em qualidade, agilidade e confiança."
          />
          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {BENEFITS.map((b) => (
              <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES ─────────────────────────────────────────────────────── */}
      <section ref={clientsRef} className="py-16 section-light reveal" aria-label="Clientes da Multiteiner">
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#94A3B8" }}>
            Confiança de grandes marcas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center px-4 py-3 rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
                style={{ minWidth: 120, minHeight: 60 }}
              >
                <img
                  src={c.img}
                  alt={`Logo ${c.name} — Cliente Multiteiner`}
                  className="max-h-10 max-w-[120px] object-contain"
                  loading="lazy"
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-xs" style={{ color: "#94A3B8" }}>
            E mais de 500 clientes em todo o Brasil
          </p>
        </div>
      </section>

      {/* ── DEPOIMENTOS — GEO ────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="depoimentos-heading">
        <div className="container">
          <SectionHeader
            badge="Depoimentos"
            title="O que os clientes dizem sobre a Multiteiner?"
            centered
          />
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children">
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
                <blockquote className="text-sm leading-relaxed mb-5 italic" style={{ color: "#475569" }} itemProp="reviewBody">
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
      <section ref={faqRef} className="py-20 section-light reveal" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <SectionHeader
            badge="FAQ"
            title="Dúvidas sobre contêineres e módulos?"
            subtitle="Respostas diretas para as dúvidas mais comuns sobre contêineres e módulos habitacionais."
            centered
          />
          <FAQBlock items={FAQ_HOME} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-navy">
              Ver todas as perguntas <ArrowRight className="w-4 h-4" />
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
