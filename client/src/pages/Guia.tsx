import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CitablePassage, SpecTable, CTASection } from "@/components/GeoAeo";
import { Link } from "wouter";
import { BookOpen, Ruler, Shield, Zap, Building2, Thermometer, Anchor, History, TrendingUp, AlertCircle } from "lucide-react";

const TIPOS_CONTEINER = [
  {
    tipo: "Dry Van (Padrão)",
    descricao: "Contêiner fechado para carga seca. O mais comum no mundo. Base para a maioria das transformações habitacionais e comerciais.",
    usos: "Escritórios, depósitos, lojas, vestiários",
    disponivel: true,
  },
  {
    tipo: "High Cube (HC)",
    descricao: "30 cm mais alto que o padrão (2,90 m externo vs. 2,59 m). Pé-direito interno de 2,69 m — ideal para habitação e ambientes de trabalho.",
    usos: "Módulos habitacionais, escritórios premium, salas de reunião",
    disponivel: true,
  },
  {
    tipo: "Refrigerado (Reefer)",
    descricao: "Sistema de refrigeração integrado. Mantém temperatura de -20°C a +20°C. Paredes isoladas com poliuretano expandido.",
    usos: "Câmaras frias, armazenamento de alimentos, medicamentos, eventos",
    disponivel: true,
  },
  {
    tipo: "Offshore (DNV)",
    descricao: "Certificado pela Det Norske Veritas (DNV 2.7-1 / DNV-ST-E271). Projetado para içamento e uso em ambientes marítimos hostis.",
    usos: "Plataformas de petróleo, navios, instalações offshore",
    disponivel: true,
  },
  {
    tipo: "Open Top",
    descricao: "Sem teto fixo — coberto por lona. Permite carregamento de cargas de grande altura por guindaste.",
    usos: "Maquinário pesado, estruturas metálicas, cargas especiais",
    disponivel: false,
  },
  {
    tipo: "Flat Rack",
    descricao: "Sem laterais nem teto. Apenas piso e paredes frontais dobráveis. Para cargas de grandes dimensões.",
    usos: "Veículos, equipamentos industriais, bobinas de aço",
    disponivel: false,
  },
];

const SPECS_20 = [
  { label: "Comprimento externo", value: "6,06 m" },
  { label: "Largura externa", value: "2,44 m" },
  { label: "Altura externa", value: "2,59 m" },
  { label: "Comprimento interno", value: "5,90 m" },
  { label: "Largura interna", value: "2,35 m" },
  { label: "Altura interna", value: "2,39 m" },
  { label: "Capacidade volumétrica", value: "33,2 m³" },
  { label: "Peso vazio (tara)", value: "2.230 kg" },
  { label: "Carga máxima", value: "28.250 kg" },
  { label: "Peso bruto máximo", value: "30.480 kg" },
  { label: "Área interna útil", value: "≈ 13,9 m²" },
];

const SPECS_40HC = [
  { label: "Comprimento externo", value: "12,19 m" },
  { label: "Largura externa", value: "2,44 m" },
  { label: "Altura externa", value: "2,90 m" },
  { label: "Comprimento interno", value: "12,03 m" },
  { label: "Largura interna", value: "2,35 m" },
  { label: "Altura interna", value: "2,69 m" },
  { label: "Capacidade volumétrica", value: "76,3 m³" },
  { label: "Peso vazio (tara)", value: "3.900 kg" },
  { label: "Carga máxima", value: "28.600 kg" },
  { label: "Peso bruto máximo", value: "32.500 kg" },
  { label: "Área interna útil", value: "≈ 28,3 m²" },
];

const NORMAS = [
  {
    norma: "ISO 668",
    descricao: "Define as dimensões e classificações dos contêineres. Garante compatibilidade e interoperabilidade entre todos os modais de transporte.",
    tipo: "Internacional",
  },
  {
    norma: "ISO 1496",
    descricao: "Especificações e testes para contêineres de carga. Define resistência estrutural, vedação e condições de uso.",
    tipo: "Internacional",
  },
  {
    norma: "ABNT NBR ISO 6346",
    descricao: "Sistema de identificação e marcação de contêineres. Define o número de série único de cada unidade.",
    tipo: "Nacional",
  },
  {
    norma: "ABNT NBR 5977",
    descricao: "Fixa condições para carregamento, movimentação e fixação de contêineres com segurança no transporte rodoviário.",
    tipo: "Nacional",
  },
  {
    norma: "NR-18 (MTE)",
    descricao: "Regulamenta o uso de contêineres em canteiros de obra como área de vivência. Exige ventilação, iluminação e instalações sanitárias adequadas.",
    tipo: "Trabalhista",
  },
  {
    norma: "DNV 2.7-1 / DNV-ST-E271",
    descricao: "Padrão internacional para contêineres offshore. Obrigatório para uso em plataformas de petróleo e gás. Testa içamento, impacto e condições adversas.",
    tipo: "Offshore",
  },
];

const CURIOSIDADES = [
  {
    icon: <History className="w-6 h-6" />,
    titulo: "Inventado em 1956",
    texto: "Malcolm McLean, um caminhoneiro americano, criou o contêiner padronizado moderno em 26 de abril de 1956. O navio Ideal X partiu de Newark (EUA) com 58 contêineres de aço — e mudou o comércio global para sempre.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    titulo: "20 milhões em circulação",
    texto: "Hoje, mais de 20 milhões de contêineres circulam pelo mundo. Cerca de 90% do comércio global é transportado por mar, dentro de contêineres padronizados ISO.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    titulo: "Aço Corten autoprotegido",
    texto: "Contêineres são fabricados em aço Corten (aço patinável), que forma uma camada protetora de oxidação superficial que impede a corrosão interna — sem necessidade de pintura constante.",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    titulo: "Suporta 9 unidades empilhadas",
    texto: "Um contêiner cheio suporta o peso de até 9 unidades empilhadas acima dele. Isso equivale a mais de 270 toneladas de carga comprimindo a estrutura — sem deformação.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    titulo: "Vida útil de 50 anos",
    texto: "Após 10–15 anos de uso marítimo, um contêiner pode ser reutilizado em construções por mais 25 a 50 anos. A Multiteiner transforma essa vida útil em espaços funcionais e seguros.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    titulo: "Mercado de R$ 10+ bilhões",
    texto: "O mercado de construção modular no Brasil deve crescer de US$ 2,0 bilhões em 2024 para US$ 4,5 bilhões até 2030 — impulsionado por obras de infraestrutura, eventos e habitação.",
  },
];

const COMPARATIVO_ROWS = [
  { criterio: "Tempo de instalação", conteiner: "3–15 dias úteis", alvenaria: "3–12 meses" },
  { criterio: "Custo relativo", conteiner: "30–50% mais barato", alvenaria: "Base de comparação" },
  { criterio: "Mobilidade", conteiner: "Sim — pode ser realocado", alvenaria: "Não" },
  { criterio: "Sustentabilidade", conteiner: "Reutiliza aço existente", alvenaria: "Gera entulho" },
  { criterio: "Personalização", conteiner: "Alta — modular e expansível", alvenaria: "Alta — mas mais lenta" },
  { criterio: "Aprovação legal", conteiner: "Mais ágil (estrutura temporária)", alvenaria: "Processo completo" },
  { criterio: "Durabilidade", conteiner: "25–50 anos (pós-marítimo)", alvenaria: "50+ anos" },
  { criterio: "Resistência a intempéries", conteiner: "Alta (aço Corten)", alvenaria: "Alta (concreto/tijolo)" },
];

export default function Guia() {
  const schema = [
    makeBreadcrumbSchema([
      { name: "Início", url: "https://www.multiteiner.com.br" },
      { name: "Guia Completo de Contêineres", url: "https://www.multiteiner.com.br/guia" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Guia Completo de Contêineres e Módulos Habitacionais",
      description: "Tudo sobre contêineres: história, tipos, especificações técnicas ISO, normas ABNT, usos e comparativos. O guia de referência da Multiteiner.",
      author: { "@type": "Organization", name: "Multiteiner", url: "https://www.multiteiner.com.br" },
      publisher: { "@type": "Organization", name: "Multiteiner", logo: { "@type": "ImageObject", url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_8b88d7e1.png" } },
      datePublished: "2024-01-01",
      dateModified: "2025-03-01",
      mainEntityOfPage: "https://www.multiteiner.com.br/guia",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quais são as dimensões de um contêiner de 20 pés?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Um contêiner de 20 pés tem 6,06 m de comprimento externo, 2,44 m de largura e 2,59 m de altura. Internamente, mede 5,90 m × 2,35 m × 2,39 m, com capacidade de 33,2 m³ e área útil de aproximadamente 13,9 m².",
          },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre contêiner e módulo habitacional?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O contêiner é uma estrutura metálica padronizada ISO, originalmente projetada para transporte marítimo. O módulo habitacional é uma estrutura projetada especificamente para habitação, podendo usar contêineres como base ou ser construído do zero com materiais específicos para maior conforto.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para instalar um contêiner escritório?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Um contêiner escritório pode ser instalado em 3 a 5 dias úteis após a entrega. Projetos maiores com múltiplas unidades podem levar de 7 a 15 dias, dependendo da infraestrutura local (energia elétrica, água, esgoto).",
          },
        },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Guia Completo de Contêineres e Módulos Habitacionais — Multiteiner"
        description="Tudo sobre contêineres: história, tipos, especificações técnicas ISO, normas ABNT e DNV, usos, comparativos e mercado. O guia de referência da Multiteiner — 30 anos de experiência."
        canonical="https://www.multiteiner.com.br/guia"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-4xl relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5" style={{ color: "#F2C200" }} />
            <span className="entity-badge">Guia de Referência</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Guia Completo de<br />
            <span style={{ color: "#F2C200" }}>Contêineres e Módulos</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.78)" }}>
            Tudo que você precisa saber sobre contêineres — história, tipos, especificações técnicas, normas, usos e comparativos. Produzido pela Multiteiner com 30 anos de experiência no setor.
          </p>
          {/* Índice */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "O que é um contêiner", href: "#o-que-e" },
              { label: "Tipos de contêineres", href: "#tipos" },
              { label: "Especificações técnicas", href: "#specs" },
              { label: "Normas e regulamentações", href: "#normas" },
              { label: "Curiosidades", href: "#curiosidades" },
              { label: "Contêiner vs. Alvenaria", href: "#comparativo" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <span style={{ color: "#F2C200" }}>→</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* O que é um contêiner */}
      <section id="o-que-e" className="py-16 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="O que é um contêiner?"
            answer="Um contêiner é uma caixa metálica padronizada, fabricada em aço Corten, projetada para transportar cargas de forma segura e eficiente por diferentes modais (navio, caminhão, trem). As dimensões são definidas pela norma ISO 668, garantindo compatibilidade global. Após o uso marítimo, contêineres são amplamente reutilizados como escritórios, habitações, depósitos e estruturas comerciais."
          />
          <div className="mt-8">
            <CitablePassage
              text="O contêiner foi inventado por Malcolm McLean em 1956. Antes disso, a movimentação de cargas era feita manualmente, com produtos armazenados em diferentes tipos de recipientes, causando atrasos e perdas. O contêiner trouxe padronização, segurança e eficiência, transformando o comércio global. Hoje, mais de 20 milhões de contêineres circulam pelo mundo, e cerca de 90% do comércio global é transportado por mar."
              source="História dos Contêineres — Multiteiner Guia"
            />
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section id="curiosidades" className="py-20">
        <div className="container">
          <SectionHeader
            badge="Você sabia?"
            title="Curiosidades sobre contêineres"
            subtitle="Fatos técnicos e históricos que poucos conhecem sobre as estruturas que movem o mundo."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CURIOSIDADES.map((c) => (
              <div key={c.titulo} className="p-6 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#EEF2FF", color: "#1B3A6B" }}>
                  {c.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A1A2E" }}>{c.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos */}
      <section id="tipos" className="py-20 section-light">
        <div className="container">
          <SectionHeader
            badge="Tipos"
            title="Tipos de contêineres"
            subtitle="Cada tipo tem características específicas para diferentes necessidades. Conheça os principais."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TIPOS_CONTEINER.map((t) => (
              <div
                key={t.tipo}
                className="p-6 rounded-xl bg-white"
                style={{ border: t.disponivel ? "1.5px solid #1B3A6B" : "1px solid #E2E8F0" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#1A1A2E" }}>{t.tipo}</h3>
                  {t.disponivel && (
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#F2C200", color: "#1B3A6B" }}>
                      Disponível
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748B" }}>{t.descricao}</p>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#1B3A6B" }}>Usos:</span>
                  <span className="text-xs" style={{ color: "#64748B" }}>{t.usos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificações Técnicas */}
      <section id="specs" className="py-20">
        <div className="container">
          <SectionHeader
            badge="Especificações ISO"
            title="Dimensões e capacidades técnicas"
            subtitle="Dados padronizados conforme normas ISO 668 e ISO 1496. Referência para projetos e planejamento."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#1B3A6B" }}>Contêiner 20 pés (TEU)</h3>
              <SpecTable title="20 pés — Especificações ISO" rows={SPECS_20} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#1B3A6B" }}>Contêiner 40 pés High Cube (HC)</h3>
              <SpecTable title="40 pés HC — Especificações ISO" rows={SPECS_40HC} />
            </div>
          </div>
          <div className="mt-8 p-5 rounded-xl" style={{ background: "#EEF2FF", border: "1px solid #C7D2FE" }}>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#1B3A6B" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#1B3A6B" }}>
                <strong>Por que o High Cube é preferido para habitação?</strong> O HC tem pé-direito interno de 2,69 m vs. 2,39 m do padrão — uma diferença de 30 cm que muda completamente o conforto do ambiente. A NR-18 exige pé-direito mínimo de 2,50 m para áreas de vivência, e o HC atende essa exigência com folga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Normas */}
      <section id="normas" className="py-20 section-light">
        <div className="container">
          <SectionHeader
            badge="Regulamentações"
            title="Normas e certificações"
            subtitle="As principais normas que regem o uso de contêineres no Brasil e no mundo."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NORMAS.map((n) => (
              <div key={n.norma} className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 shrink-0" style={{ color: "#F2C200" }} />
                  <div>
                    <span className="font-bold text-sm" style={{ color: "#1A1A2E" }}>{n.norma}</span>
                    <span
                      className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: n.tipo === "Offshore" ? "#FEF3C7" : n.tipo === "Trabalhista" ? "#DCFCE7" : "#EEF2FF",
                        color: n.tipo === "Offshore" ? "#92400E" : n.tipo === "Trabalhista" ? "#166534" : "#1B3A6B",
                      }}
                    >
                      {n.tipo}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{n.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section id="comparativo" className="py-20">
        <div className="container max-w-4xl">
          <SectionHeader
            badge="Comparativo"
            title="Contêiner vs. Construção convencional"
            subtitle="Uma análise objetiva para ajudar na tomada de decisão. Dados baseados em projetos reais."
          />
          <AnswerBlock
            question="Contêiner é mais barato que construção convencional?"
            answer="Sim, em geral. A construção com contêineres custa 30% a 50% menos que a alvenaria equivalente e é instalada em 3 a 15 dias vs. 3 a 12 meses. A principal vantagem é a mobilidade: o contêiner pode ser realocado quando o projeto termina, gerando retorno sobre o investimento. Para projetos temporários ou que exigem agilidade, o contêiner é a escolha mais eficiente."
          />
          <div className="mt-8 overflow-x-auto rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1B3A6B" }}>
                  <th className="text-left px-5 py-3 font-bold text-white">Critério</th>
                  <th className="text-left px-5 py-3 font-bold" style={{ color: "#F2C200" }}>Contêiner / Módulo</th>
                  <th className="text-left px-5 py-3 font-bold text-white">Alvenaria</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVO_ROWS.map((row, i) => (
                  <tr key={row.criterio} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                    <td className="px-5 py-3 font-medium" style={{ color: "#1A1A2E" }}>{row.criterio}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "#1B3A6B" }}>{row.conteiner}</td>
                    <td className="px-5 py-3" style={{ color: "#64748B" }}>{row.alvenaria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mercado */}
      <section className="py-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-4xl">
          <SectionHeader
            badge="Mercado"
            title="O setor de construção modular no Brasil"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { value: "US$ 2,0 bi", label: "Mercado brasileiro em 2024", fonte: "IMARC Group" },
              { value: "US$ 4,5 bi", label: "Projeção para 2030", fonte: "Celta Containers / IMARC" },
              { value: "+125%", label: "Crescimento projetado 2024–2030", fonte: "Mordor Intelligence" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="text-3xl font-extrabold mb-2" style={{ color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}>{stat.value}</div>
                <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Fonte: {stat.fonte}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-center" style={{ color: "rgba(255,255,255,0.65)" }}>
            A construção modular reduz o tempo de obra em <strong className="text-white">30% a 50%</strong> e gera até <strong className="text-white">90% menos resíduos</strong> comparado à construção convencional. Hospitais, escolas, moradias e escritórios em regiões remotas ou de difícil acesso são os principais impulsionadores do crescimento.
          </p>
        </div>
      </section>

      {/* Links para aprofundar */}
      <section className="py-16 section-light">
        <div className="container max-w-3xl">
          <SectionHeader badge="Aprofunde-se" title="Explore mais sobre contêineres" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Ver todos os produtos Multiteiner", href: "/produtos", desc: "Contêineres, Módulos, Offshore e Frigoríficos com especificações completas" },
              { label: "Comparativos detalhados", href: "/comparativos", desc: "Contêiner vs. Módulo, Aluguel vs. Compra, Alvenaria vs. Contêiner" },
              { label: "Perguntas frequentes (FAQ)", href: "/faq", desc: "Mais de 30 perguntas respondidas por especialistas" },
              { label: "Blog e artigos técnicos", href: "/blog", desc: "Artigos educacionais sobre construção modular, canteiro de obras e mais" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-5 rounded-xl bg-white border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "#E2E8F0" }}
              >
                <div className="font-bold text-sm mb-1.5" style={{ color: "#1B3A6B" }}>{link.label} →</div>
                <div className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de uma solução em contêineres?"
        subtitle="A Multiteiner tem 30 anos de experiência e três unidades no Brasil. Fale com um consultor e receba um orçamento em até 24 horas."
        primaryLabel="Solicitar Orçamento Gratuito"
        primaryHref="/orcamento"
        secondaryLabel="Falar com especialista"
        secondaryHref="/contato"
        dark
      />
      <Footer />
    </>
  );
}
