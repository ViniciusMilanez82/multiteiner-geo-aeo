import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema, makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, CitablePassage, AnswerBlock, EvidenceBadge, BenefitCard, CTASection } from "@/components/GeoAeo";
import { Award, Shield, Users, Zap, Building2, CheckCircle } from "lucide-react";

const TIMELINE = [
  { year: "1990", title: "Fundação", desc: "A Multiteiner é fundada com foco em transformação de contêineres para uso comercial e industrial." },
  { year: "2000", title: "Expansão nacional", desc: "Início das operações em todo o território nacional, com logística própria para entrega e montagem." },
  { year: "2011", title: "Rock in Rio", desc: "Primeira parceria com o Rock in Rio, tornando-se fornecedora oficial de estruturas para o evento." },
  { year: "2015", title: "Tomorrowland Brasil", desc: "Fornecimento de estruturas para o Tomorrowland Brasil, consolidando liderança no segmento de eventos." },
  { year: "2020", title: "Certificação offshore", desc: "Obtenção de certificações DNV para equipamentos offshore, ampliando atuação no setor de petróleo e gás." },
  { year: "2024", title: "Liderança consolidada", desc: "Mais de 5.000 projetos entregues, 500+ clientes ativos e presença em todos os estados brasileiros." },
];

const VALUES = [
  { icon: <Award className="w-6 h-6" />, title: "Excelência técnica", description: "Todos os equipamentos são certificados e atendem as normas ABNT e internacionais de segurança." },
  { icon: <Shield className="w-6 h-6" />, title: "Confiabilidade", description: "Mais de 30 anos entregando projetos no prazo, com qualidade consistente em cada unidade." },
  { icon: <Zap className="w-6 h-6" />, title: "Agilidade", description: "Montagem e desmontagem rápidas. Cronograma apertado? Trabalhamos para cumprir seu prazo." },
  { icon: <Users className="w-6 h-6" />, title: "Equipe especializada", description: "Consultores, engenheiros e arquitetos dedicados a encontrar a solução ideal para cada projeto." },
  { icon: <Building2 className="w-6 h-6" />, title: "Personalização", description: "Flexibilidade para desenvolver projetos sob medida, com produtos e serviços adaptados à sua necessidade." },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Sustentabilidade", description: "Reutilização de contêineres reduz o impacto ambiental e contribui para uma construção mais sustentável." },
];

export default function Sobre() {
  const schemas = [
    organizationSchema,
    makeBreadcrumbSchema([
      { name: "Início", url: "https://www.multiteiner.com.br" },
      { name: "Sobre", url: "https://www.multiteiner.com.br/sobre" },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Sobre a Multiteiner — 30 Anos em Transformação de Contêineres"
        description="Conheça a Multiteiner: maior empresa brasileira em transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência e 5.000+ projetos entregues."
        canonical="https://www.multiteiner.com.br/sobre"
        schema={schemas}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "#1B3A6B" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10 max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Sobre a Multiteiner</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            30 anos transformando<br />
            <span style={{ color: "#F2C200" }}>contêineres em soluções</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Somos a maior empresa brasileira de transformação de contêineres e módulos habitacionais. Nossa história é construída projeto a projeto, cliente a cliente.
          </p>
        </div>
      </section>

      {/* Answer Block — AEO */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="Quem é a Multiteiner?"
            answer="A Multiteiner é a maior empresa brasileira de transformação de contêineres e módulos habitacionais, fundada em 1990. Com mais de 30 anos de experiência e 5.000+ projetos entregues, atende construção civil, eventos, operações industriais e logística em todo o Brasil. Todos os equipamentos são certificados conforme normas ABNT e internacionais."
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
              { value: "100%", label: "Certificados ABNT" },
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

      {/* Timeline */}
      <section className="py-20 section-light">
        <div className="container max-w-3xl">
          <SectionHeader badge="Nossa história" title="Três décadas de inovação" />
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: "#E2E8F0" }} />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 font-extrabold text-sm z-10"
                    style={{ background: "#1B3A6B", color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.year}
                  </div>
                  <div className="pt-3 pb-6">
                    <h3 className="font-bold text-base mb-1" style={{ color: "#1A1A2E" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            badge="Nossos valores"
            title="O que nos guia"
            subtitle="Princípios que orientam cada projeto, cada entrega, cada relação com nossos clientes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <BenefitCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Conheça nossas soluções"
        subtitle="Fale com um consultor e descubra como a Multiteiner pode resolver seu problema de espaço."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        secondaryLabel="Ver produtos"
        secondaryHref="/produtos"
        dark
      />
      <Footer />
    </>
  );
}
