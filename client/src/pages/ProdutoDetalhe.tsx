import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeProductSchema, makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, SpecTable, CTASection, FAQBlock } from "@/components/GeoAeo";

const PRODUCTS: Record<string, {
  title: string; subtitle: string; desc: string; answer: string;
  vantagens: string[];
  aplicacoes: string[];
  specs: { label: string; value: string; highlight?: boolean }[];
  faq: { question: string; answer: string }[];
}> = {
  conteineres: {
    title: "Contêineres",
    subtitle: "Escritórios, vestiários, almoxarifados, dormitórios e mais",
    desc: "Contêineres transformados para uso comercial e industrial com mais de 30 anos de experiência.",
    answer: "Temos a solução perfeita para atender a sua necessidade. São mais de 30 anos de experiência no segmento de locação e venda de contêineres. Nosso portfólio contém modelos diversificados: escritórios, vestiários, almoxarifados, dormitórios, entre outros.",
    vantagens: ["Praticidade", "Melhor custo/benefício", "Redução de resíduos após a obra"],
    aplicacoes: ["Obras", "Eventos", "Construções", "Feiras", "Estruturas comerciais"],
    specs: [
      { label: "Medidas 20 pés", value: "6,058m × 2,44m × 2,59m (CxLxA)", highlight: true },
      { label: "Área útil 20 pés", value: "14,78 m²", highlight: true },
      { label: "Medidas 10 pés", value: "3,00m × 2,44m × 2,59m (CxLxA)" },
      { label: "Área útil 10 pés", value: "7,32 m²" },
      { label: "Piso", value: "Antiderrapante, compensado naval pintado" },
      { label: "Teto", value: "Isolamento térmico" },
      { label: "Ar-condicionado", value: "Entrada com suporte e tomada" },
      { label: "Esquadrias (20 pés)", value: "1 porta de acesso / 2 janelas" },
      { label: "Esquadrias (10 pés)", value: "1 porta de acesso / 1 janela" },
      { label: "Instalações elétricas", value: "Até a saída do contêiner" },
      { label: "Hidráulica", value: "Canos PVC aparentes, seção dimensionada ao uso" },
      { label: "Empilhamento máximo", value: "9 pavimentos", highlight: true },
      { label: "Carga admissível do piso", value: "1.800 kg/m² uniformemente distribuídos" },
    ],
    faq: [
      { question: "Quais os tamanhos de contêiner disponíveis na Multiteiner?", answer: "A Multiteiner oferece contêineres de 10 pés (3,00m × 2,44m × 2,59m — área de 7,32 m²) e 20 pés (6,058m × 2,44m × 2,59m — área de 14,78 m²). Ambos podem ser configurados como escritórios, vestiários, almoxarifados ou dormitórios." },
      { question: "Quantos contêineres podem ser empilhados?", answer: "Os contêineres Multiteiner suportam empilhamento de até 9 pavimentos, com carga admissível do piso de 1.800 kg/m² uniformemente distribuídos." },
      { question: "O contêiner vem com ar-condicionado?", answer: "O contêiner vem preparado com entrada para ar-condicionado, incluindo suporte e tomada. A instalação do aparelho pode ser feita conforme a necessidade do cliente." },
    ],
  },
  modulos: {
    title: "Módulos Habitacionais",
    subtitle: "Soluções modulares para diversas aplicações",
    desc: "Módulos habitacionais adaptáveis com praticidade no transporte e montagem.",
    answer: "Os módulos habitacionais podem ser adaptados para diversas aplicações, com praticidade no transporte e montagem. A instalação dos módulos pode ser temporária ou permanente, e eles podem ser empilhados em até três pavimentos.",
    vantagens: ["Baixo custo", "Flexibilidade construtiva", "Rapidez na execução do projeto", "Obras com menor acúmulo de entulhos", "Obra mais limpa e sustentável"],
    aplicacoes: ["Eventos", "Postos de saúde", "Escolas", "Refeitórios", "Escritórios", "Auditórios", "Stand de vendas", "Sanitários", "Dormitórios"],
    specs: [
      { label: "Medidas 20 pés", value: "6,00m × 2,44m × 2,98m (CxLxA)", highlight: true },
      { label: "Área útil 20 pés", value: "14,64 m²", highlight: true },
      { label: "Medidas 10 pés", value: "3,00m × 2,44m × 2,98m (CxLxA)" },
      { label: "Área útil 10 pés", value: "7,32 m²" },
      { label: "Piso", value: "Antiderrapante, compensado naval, revestido com manta vinílica" },
      { label: "Teto", value: "Forração termoacústica" },
      { label: "Paredes", value: "Poliuretano (PU) injetável entre chapas laminadas de aço" },
      { label: "Esquadrias", value: "1 porta de acesso / 2 janelas" },
      { label: "Instalações elétricas", value: "Até a saída do contêiner" },
      { label: "Hidráulica", value: "Canos PVC aparentes, seção dimensionada ao uso" },
      { label: "Empilhamento máximo", value: "3 pavimentos", highlight: true },
      { label: "Carga admissível do piso", value: "140 kg/m² uniformemente distribuídos" },
    ],
    faq: [
      { question: "Qual a diferença entre contêiner e módulo habitacional?", answer: "O módulo habitacional possui paredes em poliuretano (PU) injetável entre chapas laminadas de aço, forração termoacústica no teto e piso revestido com manta vinílica — oferecendo maior conforto térmico e acústico. O contêiner tem estrutura mais robusta com empilhamento de até 9 pavimentos, enquanto o módulo suporta até 3." },
      { question: "Os módulos podem ser usados de forma permanente?", answer: "Sim. A instalação dos módulos habitacionais pode ser temporária ou permanente, adaptando-se a diversas necessidades como postos de saúde, escolas, escritórios e dormitórios." },
      { question: "Quais aplicações são possíveis com módulos habitacionais?", answer: "Os módulos Multiteiner podem ser configurados para eventos, postos de saúde, escolas, refeitórios, escritórios, auditórios, stands de vendas, sanitários e dormitórios." },
    ],
  },
  offshore: {
    title: "Offshore",
    subtitle: "Contêineres certificados para operações marítimas",
    desc: "Contêineres e módulos certificados para uso em plataformas e embarcações no setor petrolífero.",
    answer: "No setor petrolífero, a Multiteiner se destaca por ser uma empresa que, além dos produtos para carga, consegue adaptar e transformar contêineres em diversas vivências nas plataformas, tais como alojamentos, lavanderias e sanitários. Todos os equipamentos são produzidos de acordo com os mais altos padrões de qualidade e seguem todas as normas internacionais (IMO).",
    vantagens: ["Transporte seguro de cargas", "Conforto e segurança aos seus usuários"],
    aplicacoes: ["Transporte de cargas", "Alojamentos", "Cozinhas", "Lavanderias", "Sanitários"],
    specs: [
      { label: "Resistência", value: "Alta resistência estrutural", highlight: true },
      { label: "Operação em mar aberto", value: "Carregamento/descarregamento com ondas de até 6 metros" },
      { label: "Resistência a impacto", value: "Suporta impacto com outros contêineres no convés" },
      { label: "Normas", value: "DNV 2.7-1 e 2.7-3 / EN 12079-1 ou 12079-3", highlight: true },
      { label: "Material", value: "Aço carbono tipo CORTEN (ASTM A 572 Gr 50)" },
      { label: "Içamento", value: "Olhais dimensionados para capacidades de uso com eslingas certificadas" },
      { label: "Manutenção", value: "Profissionais qualificados conforme norma AWS D1.1" },
    ],
    faq: [
      { question: "Quais normas os contêineres offshore da Multiteiner seguem?", answer: "Os contêineres offshore são fabricados conforme regras DNV 2.7-1 e 2.7-3 ou EN 12079-1 e 12079-3, além de seguirem todas as normas internacionais IMO. São construídos em aço carbono tipo CORTEN (ASTM A 572 Gr 50)." },
      { question: "Os contêineres offshore podem ser usados em mar aberto?", answer: "Sim. Os contêineres permitem carregamento e descarregamento em mar aberto a partir do convés de embarcações com ondas de até 6 metros de altura, e suportam impacto com outros contêineres ou partes rígidas da estrutura." },
      { question: "Que tipo de manutenção é necessária para contêineres offshore?", answer: "A manutenção é realizada por profissionais capacitados e qualificados conforme norma AWS D1.1. Inspeções periódicas são obrigatórias conforme as normas DNV." },
    ],
  },
  frigorificos: {
    title: "Frigoríficos",
    subtitle: "Câmaras frigoríficas móveis de -20°C a +20°C",
    desc: "Contêineres frigoríficos para conservação de produtos em baixas temperaturas.",
    answer: "Os contêineres ou câmaras frigoríficas são soluções inteligentes, móveis, práticas e econômicas para conservar os seus produtos em baixas temperaturas. São fáceis de operar e capazes de conservar climatizados, por longo período, quaisquer produtos como, por exemplo, os perecíveis, que necessitam de cuidados especiais, mantendo suas características e qualidades inalteradas.",
    vantagens: ["Durabilidade", "Praticidade e mobilidade (comparado com câmaras frigoríficas tradicionais)", "Eficiência", "Versatilidade — temperatura ajustável para resfriamento, climatização e congelamento"],
    aplicacoes: ["Açougues", "Supermercados", "Sorveterias", "Fábricas de gelo", "Fabricantes de polpa de fruta", "Peixarias"],
    specs: [
      { label: "Capacidade 10 pés", value: "3.048×2.438×2.595mm — 15.000 kg (14 m³)" },
      { label: "Capacidade 20 pés", value: "6.058×2.438×2.595mm — 30.000 kg (28 m³)", highlight: true },
      { label: "Capacidade 40 pés", value: "12.192×2.438×2.595mm — 30.000 kg (55 m³)", highlight: true },
      { label: "Piso", value: "Alumínio tipo estrado em trilho" },
      { label: "Consumo de energia", value: "Aprox. 8,0 kW/hora" },
      { label: "Refrigeração 10/20 pés", value: "MICROLINK III" },
      { label: "Refrigeração 40 pés", value: "CARRIER" },
      { label: "Faixa de temperatura", value: "-20°C a +20°C", highlight: true },
      { label: "Voltagem", value: "220V / 380V ou 440V trifásico" },
      { label: "Limite máximo voltagem", value: "220V=190V; 380V=369V; 440V" },
      { label: "Rede elétrica", value: "Disjuntor 50A — 220V: 4 fios 10mm; 380V: 4 fios 6mm; 440V: 4 fios 6mm" },
      { label: "Certificação", value: "Projeto certificado BV — Normas NR-18, ANVISA" },
    ],
    faq: [
      { question: "Qual a faixa de temperatura dos frigoríficos Multiteiner?", answer: "Os contêineres frigoríficos operam de -20°C a +20°C, cobrindo desde congelamento até climatização. A temperatura é ajustável, podendo se adequar à demanda de cada produto." },
      { question: "Quais tamanhos de frigoríficos estão disponíveis?", answer: "A Multiteiner oferece frigoríficos de 10 pés (14 m³, 15.000 kg), 20 pés (28 m³, 30.000 kg) e 40 pés (55 m³, 30.000 kg). Cada tamanho utiliza sistema de refrigeração adequado à sua capacidade." },
      { question: "Qual a voltagem necessária para operar um frigorífico?", answer: "Os frigoríficos operam em 220V, 380V ou 440V trifásico. A rede elétrica requer disjuntor de 50A, com fiação de 10mm (220V) ou 6mm (380V/440V)." },
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
          <span className="entity-badge mb-4 inline-block">Produto Multiteiner</span>
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
            question={`O que são os ${product.title} da Multiteiner?`}
            answer={product.answer}
          />
        </div>
      </section>

      {/* Vantagens e Aplicações */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeader badge="Vantagens" title="Por que escolher este produto?" />
              <ul className="space-y-3 mt-6">
                {product.vantagens.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#F2C200" }} />
                    <span className="text-base" style={{ color: "#2D2D3A" }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader badge="Aplicações" title="Onde este produto é utilizado?" />
              <ul className="space-y-3 mt-6">
                {product.aplicacoes.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#1B3A6B" }} />
                    <span className="text-base" style={{ color: "#2D2D3A" }}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + FAQ */}
      <section className="py-20 section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <SectionHeader badge="Especificações" title="Quais são as especificações técnicas?" />
              <SpecTable title="Características Técnicas" rows={product.specs} />
            </div>
            <div>
              <SectionHeader badge="FAQ" title="Dúvidas sobre este produto?" />
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
