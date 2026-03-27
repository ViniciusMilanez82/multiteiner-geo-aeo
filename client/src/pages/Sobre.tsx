import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema, makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, CitablePassage, AnswerBlock, EvidenceBadge, BenefitCard, CTASection } from "@/components/GeoAeo";
import { Award, Shield, Users, Zap, Building2, CheckCircle, MapPin, Anchor, Target, Eye, Heart } from "lucide-react";
import { Link } from "wouter";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/slide_01_801ee9e9.jpg";

const TIMELINE = [
  {
    year: "1993",
    title: "Fundação em Duque de Caxias",
    desc: "A Multiteiner é fundada em Duque de Caxias (RJ), com foco em comércio e locação de contêineres marítimos para o mercado industrial e de construção civil.",
  },
  {
    year: "2000",
    title: "Expansão para São Paulo",
    desc: "Abertura da unidade de Itapecerica da Serra (SP), ampliando a capacidade de atendimento ao maior mercado consumidor do Brasil.",
  },
  {
    year: "2008",
    title: "Certificação Offshore",
    desc: "A Multiteiner passa a oferecer contêineres certificados DNV para o setor de petróleo e gás, atendendo à crescente demanda do pré-sal.",
  },
  {
    year: "2011",
    title: "Rock in Rio",
    desc: "Início da parceria com o Rock in Rio — um dos maiores festivais do mundo. A Multiteiner fornece estruturas modulares para toda a infraestrutura do evento.",
  },
  {
    year: "2012",
    title: "Rio+20",
    desc: "Fornecimento de módulos habitacionais e escritórios para a Conferência das Nações Unidas sobre Desenvolvimento Sustentável (Rio+20).",
  },
  {
    year: "2015",
    title: "Unidade em Macaé + Tomorrowland",
    desc: "Abertura da unidade de Macaé (RJ) para atender ao polo de petróleo do norte fluminense. Participação no Tomorrowland Brasil.",
  },
  {
    year: "2016",
    title: "Olimpíadas Rio 2016",
    desc: "Participação nas Olimpíadas do Rio de Janeiro, fornecendo estruturas modulares para instalações temporárias dos jogos.",
  },
  {
    year: "Hoje",
    title: "Referência nacional",
    desc: "Com três unidades e mais de 30 anos de história, a Multiteiner é referência nacional em comércio e locação de contêineres e módulos habitacionais.",
  },
];

const VALUES = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Missão",
    description: "Prestar serviços de acomodações temporárias com praticidade e eficiência, garantindo conforto e agilidade nas soluções de habitação, em harmonia com o meio ambiente, visando lucro e a valorização contínua dos empregados.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Visão",
    description: "Inovar sempre com soluções inteligentes para acomodações buscando ser e manter a marca referência no segmento, atuando em todo o Brasil e cujas ações envolvam respeito e conservação do meio ambiente.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Valores",
    description: "Condutas alicerçadas em qualidade, segurança e excelência nos nossos produtos. Ética, seriedade e transparência em todos os aspectos da empresa. Inovação baseada em ciência. Criatividade para fazer o impossível.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excelência técnica",
    description: "Todos os equipamentos são certificados e atendem as normas ABNT, ISO e internacionais de segurança, incluindo a certificação DNV para uso offshore.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Agilidade",
    description: "Montagem e desmontagem rápidas. Orçamento respondido em até 24 horas úteis. Cronograma apertado? Trabalhamos para cumprir seu prazo.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Sustentabilidade",
    description: "Reutilização de contêineres reduz o impacto ambiental, gera até 90% menos resíduos que a construção convencional e contribui para uma obra mais sustentável.",
  },
];

const DIFERENCIAIS = [
  { icon: <Award className="w-6 h-6" />, title: "30+ anos de expertise", description: "Três décadas de experiência em projetos de todos os portes — de escritórios de obra a grandes eventos internacionais." },
  { icon: <MapPin className="w-6 h-6" />, title: "3 unidades estratégicas", description: "Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ). Cobertura nacional com logística otimizada." },
  { icon: <Anchor className="w-6 h-6" />, title: "Certificação DNV offshore", description: "Contêineres certificados DNV 2.7-1 para uso em plataformas offshore. Atendemos Petrobras e operadoras do setor." },
  { icon: <Building2 className="w-6 h-6" />, title: "Portfólio completo", description: "Dry, high cube, frigoríficos, offshore e módulos habitacionais. Venda, locação e manutenção em um único fornecedor." },
  { icon: <Users className="w-6 h-6" />, title: "500+ clientes ativos", description: "Petrobras, Rock in Rio, Coca-Cola, Globo, ThyssenKrupp, Bob's, Tomorrowland. Clientes que confiam e voltam." },
  { icon: <Shield className="w-6 h-6" />, title: "Resposta em 24 horas", description: "Orçamento respondido em até 24 horas úteis. Entrega ágil com frota própria e equipe técnica especializada." },
];

const CLIENTES_DESTAQUE = [
  "Petrobras", "Rock in Rio", "Coca-Cola", "Rede Globo", "ThyssenKrupp",
  "Bob's", "Tomorrowland", "Carnaval do Rio", "Rio+20", "Olimpíadas Rio 2016",
];

export default function Sobre() {
  const schemas = [
    organizationSchema,
    makeBreadcrumbSchema([
      { name: "Início", url: "https://www.multiteiner.com.br" },
      { name: "Sobre", url: "https://www.multiteiner.com.br/sobre" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre a Multiteiner",
      description: "A Multiteiner é uma empresa brasileira com 30 anos de experiência em comércio e locação de contêineres e módulos habitacionais, fundada em 1993 em Duque de Caxias (RJ).",
      url: "https://www.multiteiner.com.br/sobre",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sobre a Multiteiner — 30 Anos em Contêineres e Módulos Habitacionais"
        description="Conheça a Multiteiner: fundada em 1993, com 3 unidades no Brasil (RJ, SP e Macaé), 500+ clientes e projetos para Rock in Rio, Petrobras, Olimpíadas e mais. Referência nacional em contêineres."
        canonical="https://www.multiteiner.com.br/sobre"
        schema={schemas}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#1B3A6B" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('${HERO_IMG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="entity-badge mb-4 inline-block">Sobre a Multiteiner</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                30 anos transformando<br />
                <span style={{ color: "#F2C200" }}>contêineres em soluções</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.78)" }}>
                Desde 1993, a Multiteiner é referência nacional em comércio e locação de contêineres marítimos e módulos habitacionais. Três unidades no Brasil, mais de 5.000 projetos entregues e clientes como Petrobras, Rock in Rio e Olimpíadas.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "30+", label: "Anos de experiência" },
                  { value: "3", label: "Unidades no Brasil" },
                  { value: "5.000+", label: "Projetos entregues" },
                  { value: "500+", label: "Clientes ativos" },
                ].map((n) => (
                  <div key={n.label} className="text-center p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="text-2xl font-extrabold mb-1" style={{ color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}>{n.value}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{n.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={HERO_IMG}
                alt="Pátio de contêineres da Multiteiner — Duque de Caxias RJ"
                className="rounded-2xl w-full object-cover shadow-2xl"
                style={{ height: 380, border: "3px solid rgba(242,194,0,0.3)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Answer Block — AEO */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="O que é a Multiteiner?"
            answer="A Multiteiner é uma empresa brasileira fundada em 1993, especializada em comércio e locação de contêineres marítimos e módulos habitacionais. Com sede em Duque de Caxias (RJ) e unidades em Itapecerica da Serra (SP) e Macaé (RJ), atende empresas de construção civil, petróleo e gás, eventos, logística e indústria em todo o Brasil. É a única empresa do setor com contêineres certificados DNV para uso offshore."
          />
        </div>
      </section>

      {/* Evidências */}
      <section className="py-16" style={{ background: "#1B3A6B" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl overflow-hidden border border-white/10">
            {[
              { value: "30+", label: "Anos de experiência" },
              { value: "5.000+", label: "Projetos entregues" },
              { value: "500+", label: "Clientes ativos" },
              { value: "100%", label: "Certificados ABNT/DNV" },
            ].map((e) => (
              <EvidenceBadge key={e.label} value={e.value} label={e.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Citação — GEO */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <CitablePassage
            text="Só a Multiteiner tem a solução completa em acomodações para o seu negócio. Possuímos mais de 30 anos de experiência na transformação de contêineres e módulos habitacionais, oferecendo os melhores resultados para o seu problema de espaço. Todos os nossos contêineres são certificados e atendem as rigorosas normas de segurança nacionais e internacionais."
            source="Multiteiner — Missão e valores"
          />
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 section-light">
        <div className="container">
          <SectionHeader
            badge="Identidade"
            title="Missão, Visão e Valores"
            subtitle="Os princípios que guiam cada decisão e cada projeto da Multiteiner há 30 anos."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <BenefitCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <SectionHeader badge="Nossa história" title="Três décadas de inovação" subtitle="De uma empresa regional a referência nacional — 30 anos de crescimento e projetos marcantes." />
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: "linear-gradient(to bottom, #F2C200, #1B3A6B)" }} />
            <div className="space-y-6">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-xs z-10"
                    style={{
                      background: i === TIMELINE.length - 1 ? "#F2C200" : "#1B3A6B",
                      color: i === TIMELINE.length - 1 ? "#1B3A6B" : "#F2C200",
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                  >
                    {item.year}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="font-bold text-base mb-1" style={{ color: "#1A1A2E" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 section-light">
        <div className="container">
          <SectionHeader
            badge="Diferenciais"
            title="Por que escolher a Multiteiner?"
            subtitle="Seis razões que explicam por que somos a escolha de empresas como Petrobras, Rock in Rio e Olimpíadas."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIFERENCIAIS.map((d) => (
              <BenefitCard key={d.title} icon={d.icon} title={d.title} description={d.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Clientes em destaque */}
      <section className="py-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl text-center">
          <SectionHeader
            badge="Clientes"
            title="Quem confia na Multiteiner"
            subtitle="Empresas e eventos que escolheram a Multiteiner para seus projetos mais importantes."
            centered
            light
          />
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {CLIENTES_DESTAQUE.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos reais */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <SectionHeader badge="Depoimentos" title="O que dizem nossos clientes" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#F2C200" }}>★</span>)}
              </div>
              <p className="text-sm leading-relaxed italic mb-4" style={{ color: "#475569" }}>
                "Desde a primeira hora, no seu ingresso como fornecedora do RIR, em 2011, a Multiteiner colocou-se muito bem posicionada. E hoje já temos a terceira edição do evento, com a empresa sempre correspondendo às expectativas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "#1B3A6B", color: "#F2C200" }}>RA</div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#1A1A2E" }}>Ricardo Acto</div>
                  <div className="text-xs" style={{ color: "#64748B" }}>Rock in Rio</div>
                </div>
              </div>
            </div>
            <div className="p-7 rounded-2xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#F2C200" }}>★</span>)}
              </div>
              <p className="text-sm leading-relaxed italic mb-4" style={{ color: "#475569" }}>
                "A estrutura da Multiteiner facilita a nossa vida. Em 30 dias, a gente conseguiu montar quatro pontos do Bob's, com 60m² cada um. São parceiros como a Multiteiner que a gente precisa para a montagem de grandes eventos."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "#1B3A6B", color: "#F2C200" }}>AD</div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#1A1A2E" }}>Ana Paula Duarte</div>
                  <div className="text-xs" style={{ color: "#64748B" }}>Bob's — Rock in Rio 2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links internos */}
      <section className="py-12 section-light border-t" style={{ borderColor: "#E2E8F0" }}>
        <div className="container max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#1B3A6B" }}>Explore mais</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Nossos Produtos", href: "/produtos" },
              { label: "Segmentos", href: "/segmentos" },
              { label: "Guia de Contêineres", href: "/guia" },
              { label: "Solicitar Orçamento", href: "/orcamento" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-3 rounded-lg text-center text-sm font-medium transition-all hover:shadow-md"
                style={{ background: "#fff", color: "#1B3A6B", border: "1px solid #E2E8F0" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto para começar seu projeto?"
        subtitle="Fale com um consultor da Multiteiner e receba um orçamento personalizado em até 24 horas úteis."
        primaryLabel="Solicitar Orçamento Gratuito"
        primaryHref="/orcamento"
        secondaryLabel="Falar com a equipe"
        secondaryHref="/contato"
        dark
      />
      <Footer />
    </>
  );
}
