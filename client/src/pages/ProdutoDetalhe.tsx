import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeProductSchema, makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, SpecTable, CTASection, FAQBlock } from "@/components/GeoAeo";

const PRODUCTS: Record<string, {
  title: string; subtitle: string; desc: string; answer: string;
  specs: { label: string; value: string; highlight?: boolean }[];
  faq: { question: string; answer: string }[];
}> = {
  conteineres: {
    title: "Contêineres Transformados",
    subtitle: "Escritórios, depósitos, lojas e muito mais",
    desc: "Contêineres ISO 20 e 40 pés transformados para uso comercial e industrial.",
    answer: "Os contêineres Multiteiner são unidades ISO (20 ou 40 pés) transformadas com acabamento interno completo, instalações elétricas e hidráulicas, climatização e esquadrias. Disponíveis para locação ou venda, com entrega e montagem em todo o Brasil. Certificados conforme normas ABNT.",
    specs: [
      { label: "Comprimento (20 pés)", value: "6,06 m", highlight: true },
      { label: "Comprimento (40 pés)", value: "12,19 m", highlight: true },
      { label: "Largura", value: "2,44 m" },
      { label: "Altura interna", value: "2,39 m" },
      { label: "Capacidade de carga", value: "até 28.000 kg" },
      { label: "Material", value: "Aço Corten" },
      { label: "Certificação", value: "ABNT NBR" },
      { label: "Disponibilidade", value: "Pronta-entrega" },
    ],
    faq: [
      { question: "Qual o prazo de entrega de um contêiner?", answer: "Para unidades em estoque, o prazo de entrega é de 3 a 7 dias úteis após confirmação do pedido, dependendo da localização. Projetos personalizados têm prazo variável conforme complexidade." },
      { question: "É possível personalizar o contêiner?", answer: "Sim. A Multiteiner oferece personalização completa: layout interno, revestimentos, esquadrias, instalações especiais, pintura e branding. Nossa equipe de engenheiros e arquitetos desenvolve o projeto conforme sua necessidade." },
      { question: "O contêiner precisa de fundação?", answer: "Sim, mas de forma simplificada. Geralmente são utilizados blocos de concreto ou sapatas pontuais. Nossa equipe orienta sobre o tipo de fundação adequado para cada projeto." },
    ],
  },
  modulos: {
    title: "Módulos Habitacionais",
    subtitle: "Acomodações completas e modulares",
    desc: "Soluções completas de acomodação compostas por múltiplos contêineres integrados.",
    answer: "Os módulos habitacionais Multiteiner são soluções completas de acomodação, formadas pela integração de múltiplos contêineres. Incluem dormitórios, banheiros, refeitórios, áreas de lazer e toda a infraestrutura necessária. Ideais para obras de longa duração, operações remotas e grandes eventos.",
    specs: [
      { label: "Capacidade por módulo", value: "8 a 200+ pessoas", highlight: true },
      { label: "Configurações", value: "Dormitório, refeitório, banheiro, lazer" },
      { label: "Instalações", value: "Elétrica, hidráulica, HVAC" },
      { label: "Prazo de montagem", value: "3 a 15 dias" },
      { label: "Norma", value: "ABNT NBR 15575" },
      { label: "Modalidade", value: "Locação ou venda" },
    ],
    faq: [
      { question: "Qual a capacidade máxima de um módulo habitacional?", answer: "Não há limite fixo — os módulos são escaláveis. A Multiteiner já entregou complexos para mais de 500 pessoas, com dormitórios, refeitórios, banheiros e áreas de lazer integrados." },
      { question: "Módulos habitacionais são adequados para regiões remotas?", answer: "Sim. Os módulos Multiteiner são projetados para operações em áreas remotas, com infraestrutura autossuficiente (energia, água, esgoto) e resistência a condições climáticas adversas." },
    ],
  },
  offshore: {
    title: "Contêineres Offshore",
    subtitle: "Certificados para operações marítimas",
    desc: "Contêineres e módulos certificados DNV para uso em plataformas marítimas e ambientes extremos.",
    answer: "Os contêineres offshore Multiteiner são certificados DNV (Det Norske Veritas) para uso em plataformas marítimas, embarcações e terminais portuários. Possuem estrutura reforçada, acabamentos resistentes à corrosão marinha e atendem todas as normas internacionais de segurança para operações offshore.",
    specs: [
      { label: "Certificação", value: "DNV 2.7-1 / EN 12079", highlight: true },
      { label: "Material", value: "Aço de alta resistência" },
      { label: "Tratamento", value: "Anticorrosivo marinho" },
      { label: "Capacidade de içamento", value: "Certificada por cálculo" },
      { label: "Inspeção", value: "Periódica obrigatória" },
      { label: "Aplicação", value: "Plataformas, navios, portos" },
    ],
    faq: [
      { question: "O que é a certificação DNV para contêineres offshore?", answer: "A certificação DNV (Det Norske Veritas) é o padrão internacional de segurança para equipamentos utilizados em operações marítimas. Garante que o contêiner foi projetado, fabricado e testado para suportar as condições de içamento e uso em plataformas e embarcações." },
      { question: "Com que frequência os contêineres offshore precisam ser inspecionados?", answer: "A norma DNV 2.7-1 exige inspeção periódica a cada 2 anos, ou antes, caso o equipamento tenha sofrido danos ou impactos. A Multiteiner oferece serviço de inspeção e recertificação." },
    ],
  },
  frigorificos: {
    title: "Contêineres Frigoríficos",
    subtitle: "Controle de temperatura -20°C a +20°C",
    desc: "Contêineres frigoríficos para armazenamento e transporte de produtos que requerem controle de temperatura.",
    answer: "Os contêineres frigoríficos Multiteiner oferecem controle preciso de temperatura de -20°C a +20°C, com capacidade para alimentos, medicamentos, insumos industriais e qualquer produto que exija refrigeração. Disponíveis para locação em eventos, indústria alimentícia, farmacêutica e logística.",
    specs: [
      { label: "Faixa de temperatura", value: "-20°C a +20°C", highlight: true },
      { label: "Comprimento", value: "20 ou 40 pés" },
      { label: "Capacidade volumétrica", value: "28 m³ (20 pés)" },
      { label: "Sistema de refrigeração", value: "Thermo King / Carrier" },
      { label: "Alimentação elétrica", value: "380V trifásico" },
      { label: "Monitoramento", value: "Temperatura em tempo real" },
    ],
    faq: [
      { question: "Qual a faixa de temperatura dos frigoríficos Multiteiner?", answer: "Os contêineres frigoríficos Multiteiner operam de -20°C a +20°C, cobrindo desde congelados profundos até resfriados. A temperatura é controlada com precisão de ±1°C e pode ser monitorada remotamente." },
      { question: "Os frigoríficos são adequados para eventos?", answer: "Sim. Os frigoríficos Multiteiner são amplamente utilizados em grandes eventos como Rock in Rio e Tomorrowland para armazenamento de alimentos e bebidas. Entrega e retirada com logística própria." },
    ],
  },
};

export default function ProdutoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS[slug ?? ""];

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>Produto não encontrado</h1>
            <Link href="/produtos" className="btn-navy inline-flex">
              <ArrowLeft className="w-4 h-4" /> Ver todos os produtos
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
        title={product.title}
        description={product.answer}
        canonical={`https://www.multiteiner.com.br/produtos/${slug}`}
        schema={[
          makeProductSchema({ name: product.title, description: product.answer }),
          makeBreadcrumbSchema([
            { name: "Início", url: "https://www.multiteiner.com.br" },
            { name: "Produtos", url: "https://www.multiteiner.com.br/produtos" },
            { name: product.title, url: `https://www.multiteiner.com.br/produtos/${slug}` },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <Link href="/produtos" className="inline-flex items-center gap-1.5 text-sm mb-6 transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.62)" }}>
            <ArrowLeft className="w-4 h-4" /> Todos os produtos
          </Link>
          <span className="entity-badge mb-4 inline-block">Produto</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
            {product.title}
          </h1>
          <p className="text-lg" style={{ color: "#F2C200" }}>{product.subtitle}</p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question={`O que é ${product.title}?`}
            answer={product.answer}
          />
        </div>
      </section>

      {/* Specs + Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeader badge="Especificações" title="Dados técnicos" />
              <SpecTable title="Especificações Técnicas" rows={product.specs} />
            </div>
            <div>
              <SectionHeader badge="FAQ" title="Perguntas frequentes" />
              <FAQBlock items={product.faq} />
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
        title={`Precisa de ${product.title}?`}
        subtitle="Fale com nossos consultores e receba uma proposta personalizada."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
