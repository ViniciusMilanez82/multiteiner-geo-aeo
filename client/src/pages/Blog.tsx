import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CTASection } from "@/components/GeoAeo";

const POSTS = [
  {
    slug: "o-que-e-conteiner-transformado",
    title: "O que é um contêiner transformado e como funciona?",
    excerpt: "Entenda o processo de transformação de contêineres ISO em espaços funcionais: escritórios, dormitórios, lojas e muito mais. Guia completo com especificações técnicas.",
    category: "Guia Completo",
    readTime: "8 min",
    date: "2024-03-15",
    tags: ["contêiner", "transformação", "guia"],
  },
  {
    slug: "conteiner-vs-construcao-convencional",
    title: "Contêiner vs. construção convencional: qual escolher para seu projeto?",
    excerpt: "Comparativo detalhado entre construção em contêiner e alvenaria convencional: custo, prazo, sustentabilidade e adequação para cada tipo de projeto.",
    category: "Comparativo",
    readTime: "6 min",
    date: "2024-02-28",
    tags: ["comparativo", "construção", "custo"],
  },
  {
    slug: "modulos-habitacionais-obras",
    title: "Módulos habitacionais para obras: tudo que você precisa saber",
    excerpt: "Como planejar e dimensionar módulos habitacionais para canteiros de obras. Capacidade, infraestrutura, normas e melhores práticas.",
    category: "Construção Civil",
    readTime: "10 min",
    date: "2024-02-10",
    tags: ["módulos", "obras", "construção civil"],
  },
  {
    slug: "conteiner-eventos-rock-in-rio",
    title: "Como os contêineres transformaram o Rock in Rio",
    excerpt: "A história da parceria entre Multiteiner e Rock in Rio desde 2011: como os contêineres se tornaram parte essencial da infraestrutura do maior festival da América Latina.",
    category: "Eventos",
    readTime: "5 min",
    date: "2024-01-20",
    tags: ["eventos", "rock in rio", "cases"],
  },
  {
    slug: "offshore-certificacao-dnv",
    title: "Certificação DNV para contêineres offshore: o que você precisa saber",
    excerpt: "Guia completo sobre a certificação DNV 2.7-1 para equipamentos offshore: requisitos, processo de certificação, inspeções periódicas e renovação.",
    category: "Offshore",
    readTime: "7 min",
    date: "2024-01-05",
    tags: ["offshore", "certificação", "DNV"],
  },
  {
    slug: "frigorifico-conteiner-eventos",
    title: "Contêiners frigoríficos em eventos: guia prático",
    excerpt: "Como dimensionar e operar contêiners frigoríficos em eventos de grande porte. Temperatura, capacidade, logística e melhores práticas.",
    category: "Eventos",
    readTime: "6 min",
    date: "2023-12-18",
    tags: ["frigoríficos", "eventos", "logística"],
  },
  {
    slug: "historia-conteiner-malcom-mclean",
    title: "A história do contêiner: como Malcom McLean revolucionou o comércio mundial",
    excerpt: "Em 1956, Malcom McLean colocou 58 caixas de aço num navio e mudou o mundo. A história completa do contêiner e como ele chegou ao Brasil.",
    category: "História",
    readTime: "7 min",
    date: "2024-04-10",
    tags: ["história", "contêiner", "logística"],
  },
  {
    slug: "construcao-modular-brasil-mercado",
    title: "Construção modular no Brasil: mercado de US$ 2 bi com crescimento acelerado",
    excerpt: "O mercado brasileiro de construção modular deve dobrar até 2030. Entenda os fatores que impulsionam esse crescimento e as oportunidades para empresas e projetos.",
    category: "Mercado",
    readTime: "6 min",
    date: "2024-04-02",
    tags: ["mercado", "construção modular", "tendências"],
  },
  {
    slug: "conteiner-sustentabilidade-construcao-verde",
    title: "Contêiner e sustentabilidade: por que é a opção mais verde da construção",
    excerpt: "Construção em contêiner gera até 90% menos resíduos que a alvenaria convencional. Entenda os benefícios ambientais e como obter certificações verdes.",
    category: "Sustentabilidade",
    readTime: "5 min",
    date: "2024-03-25",
    tags: ["sustentabilidade", "construção verde", "meio ambiente"],
  },
  {
    slug: "aluguel-vs-compra-conteiner",
    title: "Alugar ou comprar contêiner? Guia definitivo para tomar a decisão certa",
    excerpt: "Análise financeira completa: quando vale mais a pena alugar e quando comprar um contêiner. Inclui calculadora de custo-benefício por prazo de uso.",
    category: "Guia Completo",
    readTime: "8 min",
    date: "2024-03-05",
    tags: ["locação", "compra", "financeiro"],
  },
];

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog — Guias e Artigos sobre Contêineres e Módulos Habitacionais"
        description="Artigos educacionais sobre transformação de contêineres, módulos habitacionais, certificações, comparativos e cases de sucesso. Conteúdo técnico e prático da Multiteiner."
        canonical="https://www.multiteiner.com.br/blog"
        schema={makeBreadcrumbSchema([
          { name: "Início", url: "https://www.multiteiner.com.br" },
          { name: "Blog", url: "https://www.multiteiner.com.br/blog" },
        ])}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Blog</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Conhecimento sobre <span style={{ color: "#F2C200" }}>contêineres</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Guias técnicos, comparativos e cases de sucesso para ajudar você a tomar as melhores decisões.
          </p>
        </div>
      </section>

      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="O que você encontra no blog da Multiteiner?"
            answer="O blog da Multiteiner publica guias técnicos sobre transformação de contêineres, comparativos entre soluções, cases de sucesso em construção civil, eventos e operações industriais, além de informações sobre certificações e normas. Conteúdo produzido por especialistas com mais de 30 anos de experiência."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeader badge="Artigos" title="Últimas publicações" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover group block rounded-xl border border-border bg-white overflow-hidden"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="h-1.5 w-full" style={{ background: "#F2C200" }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge-gold text-xs">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#94A3B8" }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2
                    className="font-bold text-base leading-snug mb-3 group-hover:underline"
                    style={{ color: "#1A1A2E" }}
                    itemProp="headline"
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }} itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((t) => (
                      <span key={t} className="flex items-center gap-1 text-xs" style={{ color: "#94A3B8" }}>
                        <Tag className="w-3 h-3" />{t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#1B3A6B" }}>
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </span>
                  <meta itemProp="datePublished" content={post.date} />
                  <meta itemProp="author" content="Multiteiner" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto para o próximo passo?"
        subtitle="Fale com nossos especialistas e receba uma solução personalizada."
        primaryLabel="Solicitar Orçamento"
        primaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
