import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema, makeFAQSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, FAQBlock, CTASection } from "@/components/GeoAeo";

const FAQ_CATEGORIES = [
  {
    id: "geral",
    label: "Geral",
    items: [
      { question: "O que é um contêiner transformado?", answer: "Um contêiner transformado é uma unidade de aço estrutural (ISO 20 ou 40 pés) que passa por modificações técnicas para se tornar um espaço funcional — escritório, dormitório, loja, depósito, refeitório, entre outros. A Multiteiner realiza todas as adaptações necessárias, incluindo elétrica, hidráulica, climatização e acabamentos." },
      { question: "A Multiteiner atende todo o Brasil?", answer: "Sim. A Multiteiner atende todo o território nacional, com logística própria para entrega e montagem em qualquer estado. Temos experiência em projetos em regiões remotas, como operações de mineração e petróleo." },
      { question: "Qual a diferença entre contêiner e módulo habitacional?", answer: "O contêiner é a unidade base transformada individualmente. O módulo habitacional é uma solução completa de acomodação, geralmente composta por múltiplos contêineres integrados, com infraestrutura de dormitório, banheiro, refeitório e área de lazer." },
      { question: "Os contêineres são certificados?", answer: "Sim. Todos os contêineres e módulos Multiteiner são certificados conforme as normas ABNT aplicáveis. Os equipamentos offshore possuem certificação DNV 2.7-1 e EN 12079, padrões internacionais para uso em plataformas marítimas." },
    ],
  },
  {
    id: "locacao-compra",
    label: "Locação e Compra",
    items: [
      { question: "É possível alugar ou apenas comprar?", answer: "A Multiteiner oferece tanto locação quanto venda. A locação é ideal para projetos temporários ou de curta duração, como eventos e obras. A compra é recomendada para uso permanente ou de longa duração, pois o custo total é menor no longo prazo." },
      { question: "Qual o prazo mínimo de locação?", answer: "O prazo mínimo de locação é de 30 dias. Para projetos de curta duração, como eventos, trabalhamos com contratos específicos. Para obras e operações industriais, os contratos costumam ser de 6 a 24 meses." },
      { question: "O que está incluído na locação?", answer: "A locação inclui o equipamento, entrega, montagem e retirada ao final do contrato. Manutenção preventiva também é responsabilidade da Multiteiner durante o período de locação. Personalizações adicionais podem ser contratadas separadamente." },
      { question: "É possível comprar um contêiner que estava em locação?", answer: "Sim. A Multiteiner oferece a opção de compra de equipamentos que estavam em locação, com desconto no valor já pago. Consulte nossos representantes para verificar disponibilidade e condições." },
    ],
  },
  {
    id: "instalacao",
    label: "Instalação e Montagem",
    items: [
      { question: "Qual o prazo de entrega de um contêiner?", answer: "Para unidades em estoque, o prazo de entrega é de 3 a 7 dias úteis após confirmação do pedido, dependendo da localização. Projetos personalizados têm prazo variável conforme complexidade, geralmente de 15 a 45 dias." },
      { question: "O contêiner precisa de fundação?", answer: "Sim, mas de forma simplificada. Geralmente são utilizados blocos de concreto ou sapatas pontuais. Nossa equipe orienta sobre o tipo de fundação adequado para cada projeto e localização." },
      { question: "Qual o prazo de montagem de um módulo habitacional?", answer: "O prazo de montagem varia conforme o tamanho do projeto: módulos simples (até 5 unidades) levam de 3 a 5 dias; projetos maiores (20+ unidades) podem levar de 10 a 20 dias. A Multiteiner fornece equipe técnica especializada para a montagem." },
      { question: "É necessário alvará para instalar um contêiner?", answer: "Depende da prefeitura e do tipo de uso. Para instalações temporárias em obras, geralmente não é necessário alvará específico. Para uso comercial permanente, pode ser necessário. Nossa equipe orienta sobre os requisitos legais para cada caso." },
    ],
  },
  {
    id: "personalizacao",
    label: "Personalização",
    items: [
      { question: "É possível personalizar o contêiner?", answer: "Sim. A Multiteiner oferece personalização completa: layout interno, revestimentos, esquadrias, instalações especiais, pintura e branding. Nossa equipe de engenheiros e arquitetos desenvolve o projeto conforme sua necessidade." },
      { question: "Quais acabamentos internos estão disponíveis?", answer: "Oferecemos piso vinílico, carpete, cerâmica, forro de PVC ou gesso, paredes em drywall ou MDF, esquadrias de alumínio e vidro, entre outros. O acabamento pode ser personalizado conforme o padrão desejado." },
      { question: "É possível empilhar contêineres?", answer: "Sim. Contêineres ISO são projetados para empilhamento de até 9 unidades carregadas. Para uso como edificação, recomendamos no máximo 2 a 3 andares, com reforço estrutural adequado. Nossa equipe de engenharia realiza o cálculo e projeto." },
    ],
  },
];

const ALL_FAQ = FAQ_CATEGORIES.flatMap((c) => c.items);

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("geral");

  const currentItems = FAQ_CATEGORIES.find((c) => c.id === activeCategory)?.items ?? [];

  return (
    <>
      <SEOHead
        title="FAQ — Perguntas Frequentes sobre Contêineres e Módulos"
        description="Respostas completas sobre contêineres transformados, módulos habitacionais, locação, compra, instalação e personalização. Tudo que você precisa saber sobre as soluções Multiteiner."
        canonical="https://www.multiteiner.com.br/faq"
        schema={[
          makeBreadcrumbSchema([
            { name: "Início", url: "https://www.multiteiner.com.br" },
            { name: "FAQ", url: "https://www.multiteiner.com.br/faq" },
          ]),
          makeFAQSchema(ALL_FAQ),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">FAQ</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Perguntas <span style={{ color: "#F2C200" }}>frequentes</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Respostas diretas para as dúvidas mais comuns sobre contêineres e módulos habitacionais.
          </p>
        </div>
      </section>

      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="O que você precisa saber sobre contêineres Multiteiner"
            answer="A Multiteiner é especialista em transformação de contêineres e módulos habitacionais há mais de 30 anos. Oferecemos locação e venda, com entrega e montagem em todo o Brasil. Todos os equipamentos são certificados ABNT. Atendemos construção civil, eventos, operações industriais e logística."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={
                  activeCategory === cat.id
                    ? { background: "#1B3A6B", color: "#fff" }
                    : { background: "#F1F5F9", color: "#64748B" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          <FAQBlock items={currentItems} />
        </div>
      </section>

      <CTASection
        title="Não encontrou sua resposta?"
        subtitle="Nossa equipe está pronta para responder qualquer dúvida sobre contêineres e módulos."
        primaryLabel="Falar com consultor"
        primaryHref="/contato"
        secondaryLabel="Solicitar orçamento"
        secondaryHref="/orcamento"
        dark
      />
      <Footer />
    </>
  );
}
