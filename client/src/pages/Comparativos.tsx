import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema, makeFAQSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, ComparisonTable, CTASection } from "@/components/GeoAeo";

const COMPARATIVOS = [
  {
    id: "conteiner-vs-modulo",
    title: "Contêiner vs. Módulo Habitacional",
    question: "Qual a diferença entre contêiner e módulo habitacional?",
    answer: "O contêiner transformado parte de um contêiner marítimo ISO 668 existente (paredes corrugadas de aço corten). O módulo habitacional é fabricado do zero com perfis metálicos e painéis sanduíche (EPS ou PIR), oferecendo paredes lisas, melhor isolamento termoacuústico e empilhamento até 3 pavimentos. Ambos são transportáveis por caminhão e instaláveis em 1 dia.",
    optionA: "Contêiner",
    optionB: "Módulo Habitacional",
    rows: [
      { criteria: "Origem da estrutura", optionA: "Contêiner marítimo ISO 668 reaproveitado", optionB: "Fabricado do zero com perfis metálicos", winner: "tie" as const },
      { criteria: "Paredes", optionA: "Corrugadas (aço corten)", optionB: "Lisas (painéis sanduíche EPS/PIR)", winner: "B" as const },
      { criteria: "Isolamento térmico", optionA: "Inferior (transmitância ≥ 2,5 W/m²K)", optionB: "Superior (transmitância ≤ 1,0 W/m²K)", winner: "B" as const },
      { criteria: "Empilhamento", optionA: "Até 9 unidades (ISO)", optionB: "Até 3 pavimentos", winner: "tie" as const },
      { criteria: "Montagem no local", optionA: "1 dia", optionB: "1 dia", winner: "tie" as const },
      { criteria: "Locação (a partir de)", optionA: "R$ 800/mês (20 pés)", optionB: "R$ 1.200/mês (20 pés)", winner: "A" as const },
      { criteria: "Vida útil", optionA: "25+ anos", optionB: "30+ anos", winner: "B" as const },
    ],
  },
  {
    id: "alvenaria-vs-conteiner",
    title: "Construção Convencional vs. Contêiner",
    question: "Contêiner ou alvenaria: qual é melhor para escritório de obra?",
    answer: "Para escritórios de obra e instalações temporárias, o contêiner é superior à alvenaria em prazo, custo e flexibilidade. A construção convencional é mais adequada para instalações permanentes. O contêiner pode ser montado em 1 a 3 dias, é reutilizável e pode ser relocado conforme o avanço da obra.",
    optionA: "Construção Convencional",
    optionB: "Contêiner Multiteiner",
    rows: [
      { criteria: "Prazo de instalação", optionA: "30 a 90 dias", optionB: "1 a 3 dias", winner: "B" as const },
      { criteria: "Custo inicial", optionA: "Alto", optionB: "Baixo a médio", winner: "B" as const },
      { criteria: "Reutilização", optionA: "Não", optionB: "Sim (100%)", winner: "B" as const },
      { criteria: "Relocação", optionA: "Impossível", optionB: "Simples", winner: "B" as const },
      { criteria: "Durabilidade", optionA: "Alta (permanente)", optionB: "Alta (20+ anos)", winner: "tie" as const },
      { criteria: "Sustentabilidade", optionA: "Baixa (resíduos)", optionB: "Alta (reutilizável)", winner: "B" as const },
      { criteria: "Personalização", optionA: "Muito alta", optionB: "Alta", winner: "A" as const },
    ],
  },
  {
    id: "aluguel-vs-compra",
    title: "Locação vs. Compra de Contêiner",
    question: "É melhor alugar ou comprar um contêiner?",
    answer: "A locação é ideal para projetos temporários (obras, eventos, operações sazonais) com prazo de até 18 meses. A compra é mais vantajosa para uso permanente ou recorrente, pois o custo total é menor no longo prazo. A Multiteiner oferece as duas modalidades com suporte completo.",
    optionA: "Locação",
    optionB: "Compra",
    rows: [
      { criteria: "Investimento inicial", optionA: "Baixo", optionB: "Alto", winner: "A" as const },
      { criteria: "Custo de longo prazo", optionA: "Alto (mensal)", optionB: "Baixo (único)", winner: "B" as const },
      { criteria: "Ideal para", optionA: "Projetos temporários", optionB: "Uso permanente", winner: "tie" as const },
      { criteria: "Manutenção", optionA: "Por conta da Multiteiner", optionB: "Por conta do cliente", winner: "A" as const },
      { criteria: "Flexibilidade", optionA: "Alta (devolução fácil)", optionB: "Baixa (ativo fixo)", winner: "A" as const },
      { criteria: "Patrimônio", optionA: "Não gera", optionB: "Gera ativo", winner: "B" as const },
      { criteria: "Prazo mínimo", optionA: "30 dias", optionB: "Sem prazo mínimo", winner: "B" as const },
    ],
  },
];

const FAQ_COMPARATIVOS = COMPARATIVOS.map((c) => ({
  question: c.question,
  answer: c.answer,
}));

export default function Comparativos() {
  return (
    <>
      <SEOHead
        title="Comparativos — Contêiner vs Módulo, Alvenaria vs Contêiner, Locação vs Compra"
        description="Compare as principais opções em soluções de contêineres: contêiner vs módulo habitacional, construção convencional vs contêiner, locação vs compra. Dados estruturados para sua decisão."
        canonical="https://www.multiteiner.com.br/comparativos"
        schema={[
          makeBreadcrumbSchema([
            { name: "Início", url: "https://www.multiteiner.com.br" },
            { name: "Comparativos", url: "https://www.multiteiner.com.br/comparativos" },
          ]),
          makeFAQSchema(FAQ_COMPARATIVOS),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Comparativos</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Compare e <span style={{ color: "#F2C200" }}>decida melhor</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Dados estruturados para ajudar você a tomar a melhor decisão para o seu projeto.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-10 section-light">
        <div className="container max-w-4xl">
          <div className="rounded-xl border-l-4 p-6" style={{ borderColor: "#F2C200", background: "rgba(242,194,0,0.06)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1B3A6B" }}>Resumo rápido — 3 comparativos</p>
            <ul className="space-y-1.5 text-sm" style={{ color: "#475569" }}>
              <li><strong>Contêiner vs. Módulo:</strong> Contêiner = estrutura corrugada reaproveitada. Módulo = fabricado do zero com painéis sanduíche (melhor isolamento).</li>
              <li><strong>Alvenaria vs. Contêiner:</strong> Contêiner: montagem em 1–3 dias vs. 30–90 dias da alvenaria. 100% relocável.</li>
              <li><strong>Locação vs. Compra:</strong> Locação para projetos temporários; compra quando o uso justifica o investimento inicial.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-20">
            {COMPARATIVOS.map((comp) => (
              <div key={comp.id} id={comp.id}>
                <SectionHeader
                  badge="Comparativo"
                  title={comp.question}
                />
                <AnswerBlock
                  question={comp.question}
                  answer={comp.answer}
                  className="mb-8"
                />
                <ComparisonTable
                  optionA={comp.optionA}
                  optionB={comp.optionB}
                  rows={comp.rows}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ainda tem dúvidas?"
        subtitle="Nossos consultores ajudam você a escolher a melhor solução para o seu projeto."
        primaryLabel="Falar com consultor"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
