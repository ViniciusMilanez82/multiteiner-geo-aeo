import { useParams, Link } from "wouter";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBlogPostSchema, makeBreadcrumbSchema } from "@/components/SEOHead";
import { AnswerBlock, CTASection, FAQBlock } from "@/components/GeoAeo";

const POSTS: Record<string, {
  title: string; excerpt: string; category: string; readTime: string;
  date: string; tags: string[];
  answer: string;
  content: string;
  faq?: { question: string; answer: string }[];
}> = {
  "o-que-e-conteiner-transformado": {
    title: "O que é um contêiner transformado e como funciona?",
    excerpt: "Entenda o processo de transformação de contêineres ISO em espaços funcionais.",
    category: "Guia Completo",
    readTime: "8 min",
    date: "2024-03-15",
    tags: ["contêiner", "transformação", "guia"],
    answer: "Um contêiner transformado é uma unidade de aço estrutural (ISO 20 ou 40 pés) que passa por modificações técnicas para se tornar um espaço funcional — escritório, dormitório, loja, depósito, refeitório, entre outros. O processo envolve cortes estruturais, instalações elétricas e hidráulicas, isolamento térmico e acabamentos internos.",
    content: `## O que é um contêiner transformado?

Um contêiner transformado é uma unidade de aço estrutural — geralmente de 20 ou 40 pés (6 ou 12 metros) — que passa por um processo de modificação técnica para se tornar um espaço funcional.

O processo de transformação envolve:

1. **Preparação estrutural**: cortes para portas e janelas, reforços metálicos
2. **Isolamento térmico**: lã de vidro ou poliuretano nas paredes, piso e teto
3. **Instalações elétricas**: quadro de distribuição, tomadas, iluminação
4. **Instalações hidráulicas**: quando necessário (banheiros, cozinhas)
5. **Acabamentos internos**: forro, piso, paredes, esquadrias
6. **Climatização**: ar-condicionado, ventilação mecânica
7. **Pintura e acabamento externo**: proteção anticorrosiva e identidade visual

## Tipos de contêineres transformados

### Escritório de obra
O uso mais comum. Inclui mesas, cadeiras, ar-condicionado, iluminação e tomadas. Disponível em 20 ou 40 pés.

### Dormitório
Leitos, armários, tomadas individuais e iluminação. Capacidade de 4 a 12 pessoas por unidade.

### Refeitório
Mesas, cadeiras, bancadas e equipamentos de cozinha. Ideal para canteiros de obras e operações industriais.

### Depósito
Sem acabamento interno, com reforço estrutural e sistema de ventilação. Para materiais e equipamentos.

### Loja e showroom
Acabamento premium, vitrine, iluminação especial e identidade visual da marca.

## Vantagens do contêiner transformado

- **Rapidez**: montagem em 1 a 3 dias
- **Mobilidade**: pode ser relocado conforme necessidade
- **Sustentabilidade**: reutilização de estrutura existente
- **Custo**: menor que construção convencional para uso temporário
- **Durabilidade**: aço corten resiste por 20+ anos com manutenção adequada`,
    faq: [
      { question: "Qual o tamanho padrão de um contêiner transformado?", answer: "Os tamanhos padrão são 20 pés (6,06 x 2,44 m) e 40 pés (12,19 x 2,44 m). A altura interna é de aproximadamente 2,39 m. Também existem versões high cube com 2,69 m de altura interna." },
      { question: "Quanto tempo dura um contêiner transformado?", answer: "Com manutenção adequada, um contêiner transformado dura 20 a 30 anos. O aço corten utilizado na fabricação é altamente resistente à corrosão. Pintura periódica e inspeções regulares garantem a longevidade." },
    ],
  },
  "conteiner-vs-construcao-convencional": {
    title: "Contêiner vs. construção convencional: qual escolher?",
    excerpt: "Comparativo detalhado entre construção em contêiner e alvenaria convencional.",
    category: "Comparativo",
    readTime: "6 min",
    date: "2024-02-28",
    tags: ["comparativo", "construção", "custo"],
    answer: "Para instalações temporárias e de médio prazo, o contêiner é superior à alvenaria em prazo (1-3 dias vs 30-90 dias), custo inicial e flexibilidade. A construção convencional é mais adequada para instalações permanentes que não precisam ser relocadas.",
    content: `## Contêiner vs. construção convencional

A escolha entre contêiner e construção convencional depende principalmente de três fatores: **prazo**, **custo** e **permanência**.

### Quando escolher contêiner

- Projeto temporário ou de médio prazo (até 5 anos)
- Necessidade de instalação rápida (obras, eventos)
- Possibilidade de relocação futura
- Orçamento limitado para instalação inicial
- Necessidade de sustentabilidade

### Quando escolher construção convencional

- Projeto permanente (10+ anos no mesmo local)
- Necessidade de grandes áreas (acima de 200 m²)
- Exigências estéticas específicas
- Regulamentações locais restritivas

### Comparativo de custos

O custo de um contêiner transformado é geralmente 30 a 50% menor que uma construção convencional equivalente, considerando o prazo de uso de até 5 anos. Para uso permanente acima de 10 anos, a construção convencional pode ser mais econômica no longo prazo.`,
    faq: [
      { question: "Contêiner é mais barato que construção convencional?", answer: "Para uso temporário (até 5 anos), sim. O custo inicial de um contêiner transformado é 30 a 50% menor que uma construção convencional equivalente. Para uso permanente acima de 10 anos, os custos tendem a se equiparar." },
    ],
  },
  "modulos-habitacionais-obras": {
    title: "Módulos habitacionais para obras: tudo que você precisa saber",
    excerpt: "Como planejar e dimensionar módulos habitacionais para canteiros de obras.",
    category: "Construção Civil",
    readTime: "10 min",
    date: "2024-02-10",
    tags: ["módulos", "obras", "construção civil"],
    answer: "Módulos habitacionais para obras são conjuntos integrados de contêineres que formam alojamentos completos para trabalhadores. Incluem dormitórios (4 a 8 pessoas por quarto), banheiros, refeitório, área de lazer e infraestrutura completa. O dimensionamento segue as normas NR-18 e NR-24.",
    content: `## Módulos habitacionais para obras

Os módulos habitacionais são a solução mais completa para acomodação de trabalhadores em canteiros de obras de médio e grande porte.

### O que compõe um módulo habitacional

Um módulo habitacional completo inclui:

- **Dormitórios**: quartos com 4 a 8 leitos, armários individuais, tomadas e iluminação
- **Banheiros**: chuveiros, vasos sanitários e lavatórios na proporção exigida pela NR-18
- **Refeitório**: mesas, cadeiras, bancadas e equipamentos de cozinha
- **Área de lazer**: espaço para descanso e atividades recreativas
- **Infraestrutura**: rede elétrica, hidráulica, esgoto e telecomunicações

### Normas aplicáveis

Os módulos habitacionais para obras devem atender:

- **NR-18**: condições e meio ambiente de trabalho na indústria da construção
- **NR-24**: condições sanitárias e de conforto nos locais de trabalho
- **ABNT NBR 15575**: desempenho de edificações habitacionais

### Dimensionamento

O dimensionamento segue a proporção de trabalhadores:

| Trabalhadores | Dormitórios | Banheiros | Refeitório |
|---|---|---|---|
| Até 50 | 7-13 quartos | 5-7 banheiros | 1 módulo |
| 50 a 200 | 13-50 quartos | 7-25 banheiros | 2-4 módulos |
| 200+ | Projeto específico | Projeto específico | Projeto específico |`,
    faq: [
      { question: "Qual a proporção de banheiros por trabalhadores exigida pela NR-18?", answer: "A NR-18 exige 1 vaso sanitário, 1 chuveiro e 1 lavatório para cada grupo de 20 trabalhadores. Para obras com mais de 50 trabalhadores, é necessário separar as instalações por sexo." },
    ],
  },
  "conteiner-eventos-rock-in-rio": {
    title: "Como os contêineres transformaram o Rock in Rio",
    excerpt: "A história da parceria entre Multiteiner e Rock in Rio desde 2011.",
    category: "Eventos",
    readTime: "5 min",
    date: "2024-01-20",
    tags: ["eventos", "rock in rio", "cases"],
    answer: "A Multiteiner é fornecedora oficial do Rock in Rio desde 2011, fornecendo camarotes VIP, bares, bilheterias, backstage e estruturas de apoio. Em cada edição, dezenas de contêineres são montados e desmontados em tempo recorde, demonstrando a agilidade e confiabilidade da empresa para eventos de grande porte.",
    content: `## Multiteiner e Rock in Rio: uma parceria de mais de uma década

Desde 2011, a Multiteiner é parceira oficial do Rock in Rio, o maior festival de música da América Latina.

### O desafio

O Rock in Rio reúne mais de 700.000 pessoas ao longo de 7 dias de evento. A infraestrutura precisa ser montada em semanas e desmontada em dias, com qualidade e segurança impecáveis.

### A solução Multiteiner

Em cada edição do Rock in Rio, a Multiteiner fornece:

- **Camarotes VIP**: estruturas premium com acabamento de alto padrão
- **Bares e food trucks**: unidades funcionais para operação de bebidas e alimentos
- **Bilheterias**: postos de controle de acesso
- **Backstage**: estruturas para artistas e produção
- **Frigoríficos**: armazenamento de alimentos e bebidas em temperatura controlada

### Depoimento

*"Desde a primeira hora, no seu ingresso como fornecedora do RIR em 2011, a Multiteiner colocou-se muito bem posicionada. E hoje já temos a terceira edição do evento, com a empresa sempre correspondendo às expectativas."* — Ricardo Acto, Rock in Rio`,
    faq: [
      { question: "A Multiteiner atende outros festivais além do Rock in Rio?", answer: "Sim. A Multiteiner atende os principais festivais do Brasil, incluindo Tomorrowland Brasil, Lollapalooza e outros eventos de grande porte. Nossa capacidade logística permite atender múltiplos eventos simultaneamente." },
    ],
  },
  "offshore-certificacao-dnv": {
    title: "Certificação DNV para contêineres offshore: o que você precisa saber",
    excerpt: "Guia completo sobre a certificação DNV 2.7-1 para equipamentos offshore.",
    category: "Offshore",
    readTime: "7 min",
    date: "2024-01-05",
    tags: ["offshore", "certificação", "DNV"],
    answer: "A certificação DNV 2.7-1 é o padrão internacional de segurança para contêineres e equipamentos utilizados em operações offshore (plataformas marítimas, navios e terminais portuários). Garante que o equipamento foi projetado, fabricado e testado para suportar as condições específicas de içamento e uso em ambientes marítimos.",
    content: `## Certificação DNV para contêineres offshore

A certificação DNV (Det Norske Veritas) é obrigatória para qualquer equipamento utilizado em operações offshore no Brasil e no mundo.

### O que é a DNV 2.7-1?

A DNV 2.7-1 é a norma internacional que define os requisitos de projeto, fabricação, teste e inspeção de contêineres offshore. É reconhecida pela indústria de petróleo e gás em todo o mundo.

### Requisitos da certificação

Para obter a certificação DNV 2.7-1, o contêiner deve:

1. **Projeto aprovado**: cálculo estrutural validado por engenheiro certificado
2. **Materiais certificados**: aço com certificado de origem e propriedades mecânicas
3. **Fabricação supervisionada**: inspeção durante todo o processo de fabricação
4. **Testes de içamento**: ensaio de carga com fator de segurança 2,5x
5. **Documentação completa**: manual de operação, certificado e placa de identificação

### Inspeções periódicas

Após a certificação inicial, os contêineres offshore devem ser inspecionados:

- **A cada 2 anos**: inspeção visual e funcional
- **A cada 5 anos**: inspeção completa com ensaios não destrutivos
- **Após incidentes**: inspeção imediata após qualquer dano ou impacto`,
    faq: [
      { question: "Todos os contêineres podem ser certificados para uso offshore?", answer: "Não. A certificação offshore exige projeto específico desde a fabricação. Contêineres convencionais não podem ser certificados retroativamente. A Multiteiner fabrica equipamentos offshore desde o projeto, garantindo a certificação DNV." },
    ],
  },
  "frigorifico-conteiner-eventos": {
    title: "Contêineres frigoríficos em eventos: guia prático",
    excerpt: "Como dimensionar e operar contêineres frigoríficos em eventos de grande porte.",
    category: "Eventos",
    readTime: "6 min",
    date: "2023-12-18",
    tags: ["frigoríficos", "eventos", "logística"],
    answer: "Contêineres frigoríficos em eventos são utilizados para armazenamento de alimentos, bebidas e insumos que requerem controle de temperatura. O dimensionamento depende do volume de produtos, temperatura necessária e duração do evento. A Multiteiner oferece frigoríficos de -20°C a +20°C com monitoramento remoto.",
    content: `## Contêineres frigoríficos em eventos

Os contêineres frigoríficos são essenciais para eventos de grande porte, garantindo a conservação de alimentos e bebidas com segurança e eficiência.

### Dimensionamento

O dimensionamento de frigoríficos para eventos considera:

- **Volume de produtos**: em m³ ou toneladas
- **Temperatura necessária**: resfriado (+2°C a +8°C) ou congelado (-18°C a -20°C)
- **Frequência de acesso**: quantas vezes o frigorífico será aberto por hora
- **Temperatura ambiente**: clima local durante o evento

### Regra geral de dimensionamento

Para eventos de grande porte:

| Público diário | Frigoríficos recomendados |
|---|---|
| Até 10.000 pessoas | 1 a 2 unidades 20 pés |
| 10.000 a 50.000 | 3 a 8 unidades |
| 50.000+ | Projeto específico |

### Operação e monitoramento

Os frigoríficos Multiteiner incluem:

- **Monitoramento remoto**: temperatura em tempo real via aplicativo
- **Alarme de temperatura**: notificação automática em caso de desvio
- **Gerador de backup**: para eventos sem rede elétrica estável`,
    faq: [
      { question: "Qual a potência elétrica necessária para um frigorífico de contêiner?", answer: "Um contêiner frigorífico de 20 pés consome em média 5 a 8 kW de energia elétrica em operação normal. Para eventos sem rede elétrica estável, a Multiteiner oferece opção com gerador integrado." },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS[slug ?? ""];

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>Artigo não encontrado</h1>
            <Link href="/blog" className="btn-navy inline-flex">
              <ArrowLeft className="w-4 h-4" /> Ver todos os artigos
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
        title={post.title}
        description={post.excerpt}
        canonical={`https://www.multiteiner.com.br/blog/${slug}`}
        schema={[
          makeBlogPostSchema({
            title: post.title,
            description: post.excerpt,
            url: `https://www.multiteiner.com.br/blog/${slug}`,
            datePublished: post.date,
          }),
          makeBreadcrumbSchema([
            { name: "Início", url: "https://www.multiteiner.com.br" },
            { name: "Blog", url: "https://www.multiteiner.com.br/blog" },
            { name: post.title, url: `https://www.multiteiner.com.br/blog/${slug}` },
          ]),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm mb-6 transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.62)" }}>
            <ArrowLeft className="w-4 h-4" /> Todos os artigos
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-gold">{post.category}</span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              <Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight" itemProp="headline">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Tag className="w-3 h-3" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Answer Block — AEO */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question={post.title}
            answer={post.answer}
          />
        </div>
      </section>

      {/* Article content */}
      <article
        className="py-12"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="author" content="Multiteiner" />
        <div className="container max-w-3xl">
          <div
            className="prose prose-slate max-w-none"
            itemProp="articleBody"
            style={{ color: "#334155" }}
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-4" style="color:#1A1A2E">$1</h2>')
                .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-3" style="color:#1B3A6B">$1</h3>')
                .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1A1A2E">$1</strong>')
                .replace(/\*(.+?)\*/g, '<em>$1</em>')
                .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">$1</li>')
                .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 mb-1"><strong>$1.</strong> $2</li>')
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[h|l|p])/gm, '<p class="mb-4">')
            }}
          />
        </div>
      </article>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <section className="py-12 section-light">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A1A2E" }}>Perguntas frequentes</h2>
            <FAQBlock items={post.faq} />
          </div>
        </section>
      )}

      <CTASection
        title="Precisa de uma solução em contêineres?"
        subtitle="Fale com nossos especialistas e receba uma proposta personalizada."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
