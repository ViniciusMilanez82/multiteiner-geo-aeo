import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CTASection, FAQBlock } from "@/components/GeoAeo";

const SEGMENTS: Record<string, {
  title: string; desc: string; answer: string;
  solutions: string[]; clients: string[];
  faq: { question: string; answer: string }[];
}> = {
  "construcao-civil": {
    title: "Construção Civil",
    desc: "Soluções completas para canteiros de obras de qualquer porte — do escritório ao alojamento.",
    answer: "Para construção civil, a Multiteiner fornece escritórios de obra, alojamentos para trabalhadores, refeitórios, depósitos de materiais, enfermarias e salas de reunião. Soluções disponíveis para locação ou venda, com montagem rápida e atendimento em todo o Brasil. Parceira das maiores construtoras do país.",
    solutions: ["Escritório de obra", "Alojamento de trabalhadores", "Refeitório", "Depósito de materiais", "Enfermaria", "Sala de reunião", "Vestiário", "Guarita"],
    clients: ["Odebrecht", "Camargo Corrêa", "MRV", "Cyrela", "Tenda"],
    faq: [
      { question: "Qual o prazo de montagem de um escritório de obra?", answer: "Um escritório de obra padrão pode ser montado em 1 a 3 dias úteis após a entrega. Projetos maiores, com múltiplos módulos, levam de 5 a 15 dias dependendo da complexidade." },
      { question: "É possível alugar contêineres por curto prazo para obras?", answer: "Sim. A Multiteiner oferece locação com prazo mínimo de 30 dias, ideal para obras de curta duração. Para obras longas, a compra pode ser mais vantajosa — nossos consultores orientam sobre a melhor opção." },
    ],
  },
  "eventos": {
    title: "Eventos",
    desc: "Estruturas para os maiores festivais do Brasil — Rock in Rio, Tomorrowland e muito mais.",
    answer: "Para eventos, a Multiteiner fornece camarotes VIP, bares, bilheterias, backstage, frigoríficos e estruturas sanitárias. Com experiência em Rock in Rio desde 2011 e Tomorrowland Brasil, é a parceira de confiança para eventos de grande porte. Montagem e desmontagem ágeis, com logística própria.",
    solutions: ["Camarotes VIP", "Bares e food trucks", "Bilheterias", "Backstage e produção", "Frigoríficos", "Sanitários", "Vestiários", "Posto médico"],
    clients: ["Rock in Rio", "Tomorrowland", "Bob's", "Heineken", "Ambev"],
    faq: [
      { question: "A Multiteiner atende eventos de qualquer porte?", answer: "Sim. Atendemos desde pequenos eventos corporativos até os maiores festivais do Brasil. Nossa capacidade logística permite entregar e montar estruturas em qualquer localidade do país." },
      { question: "Como funciona a locação de frigoríficos para eventos?", answer: "Os frigoríficos são entregues no local do evento, conectados à rede elétrica e prontos para uso. Oferecemos monitoramento de temperatura e suporte técnico durante todo o evento." },
    ],
  },
  "operacoes-industriais": {
    title: "Operações Industriais",
    desc: "Módulos para mineração, petróleo, gás e operações em áreas remotas.",
    answer: "Para operações industriais, a Multiteiner fornece bases de operações, alojamentos remotos, laboratórios de campo, salas de controle e equipamentos offshore certificados DNV. Experiência em mineração, petróleo, gás e operações em áreas remotas de difícil acesso. Soluções robustas para ambientes extremos.",
    solutions: ["Base de operações", "Alojamento remoto", "Laboratório de campo", "Sala de controle", "Equipamentos offshore", "Depósito de insumos", "Módulo administrativo", "Enfermaria"],
    clients: ["Petrobras", "Vale", "ThyssenKrupp", "Anglo American", "Samarco"],
    faq: [
      { question: "Os módulos Multiteiner são adequados para regiões remotas?", answer: "Sim. Os módulos são projetados para operações em áreas remotas, com infraestrutura autossuficiente (energia, água, esgoto) e resistência a condições climáticas adversas. Entregamos em qualquer ponto do Brasil." },
      { question: "Quais certificações os equipamentos offshore possuem?", answer: "Os equipamentos offshore Multiteiner são certificados DNV 2.7-1 e EN 12079, os padrões internacionais para uso em plataformas marítimas. Também realizamos inspeções periódicas e recertificações." },
    ],
  },
  "logistica": {
    title: "Logística",
    desc: "Armazenagem, distribuição e pontos de apoio logístico com agilidade e segurança.",
    answer: "Para logística, a Multiteiner fornece depósitos temporários, centros de distribuição, pontos de apoio, armazenagem refrigerada, escritórios logísticos e guaritas. Soluções flexíveis para operações temporárias ou permanentes, com entrega rápida em todo o Brasil.",
    solutions: ["Depósito temporário", "Centro de distribuição", "Ponto de apoio", "Armazenagem refrigerada", "Escritório logístico", "Portaria e guarita", "Vestiário", "Refeitório"],
    clients: ["DHL", "Fedex", "Correios", "Ambev", "Magazine Luiza"],
    faq: [
      { question: "Contêineres são adequados para armazenagem de longo prazo?", answer: "Sim. Com tratamento adequado e manutenção periódica, contêineres podem ser utilizados para armazenagem por anos. A Multiteiner oferece opções de compra com garantia e suporte técnico." },
      { question: "É possível instalar prateleiras e sistemas de organização nos contêineres?", answer: "Sim. A Multiteiner oferece personalização completa, incluindo instalação de prateleiras, mezaninos, sistemas de iluminação e climatização para otimizar o espaço de armazenagem." },
    ],
  },
};

export default function SegmentoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const segment = SEGMENTS[slug ?? ""];

  if (!segment) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>Segmento não encontrado</h1>
            <Link href="/segmentos" className="btn-navy inline-flex">
              <ArrowLeft className="w-4 h-4" /> Ver todos os segmentos
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`${segment.title} — Soluções em Contêineres`}
        description={segment.answer}
        canonical={`https://www.multiteiner.com.br/segmentos/${slug}`}
        schema={makeBreadcrumbSchema([
          { name: "Início", url: "https://www.multiteiner.com.br" },
          { name: "Segmentos", url: "https://www.multiteiner.com.br/segmentos" },
          { name: segment.title, url: `https://www.multiteiner.com.br/segmentos/${slug}` },
        ])}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <Link href="/segmentos" className="inline-flex items-center gap-1.5 text-sm mb-6 transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.62)" }}>
            <ArrowLeft className="w-4 h-4" /> Todos os segmentos
          </Link>
          <span className="entity-badge mb-4 inline-block">Segmento</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">{segment.title}</h1>
          <p className="text-lg" style={{ color: "#F2C200" }}>{segment.desc}</p>
        </div>
      </section>

      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question={`Como a Multiteiner atende ${segment.title}?`}
            answer={segment.answer}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeader badge="Soluções" title="O que fornecemos" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {segment.solutions.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 p-3 rounded-lg border border-border bg-white">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#1B3A6B" }} />
                    <span className="text-sm font-medium" style={{ color: "#1A1A2E" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#94A3B8" }}>Clientes neste segmento</p>
                <div className="flex flex-wrap gap-2">
                  {segment.clients.map((c) => (
                    <span key={c} className="badge-navy">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <SectionHeader badge="FAQ" title="Perguntas frequentes" />
              <FAQBlock items={segment.faq} />
              <div className="mt-8">
                <Link href="/orcamento" className="btn-primary inline-flex">
                  Solicitar orçamento <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Soluções para ${segment.title}`}
        subtitle="Fale com um especialista e receba uma proposta personalizada para o seu projeto."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
