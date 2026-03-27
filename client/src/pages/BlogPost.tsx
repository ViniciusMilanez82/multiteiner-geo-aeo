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
  "historia-conteiner-malcom-mclean": {
    title: "A história do contêiner: como Malcom McLean revolucionou o comércio mundial",
    excerpt: "Em 1956, Malcom McLean colocou 58 caixas de aço num navio e mudou o mundo.",
    category: "História",
    readTime: "7 min",
    date: "2024-04-10",
    tags: ["história", "contêiner", "logística"],
    answer: "O contêiner intermodal foi inventado por Malcom McLean em 1956, quando ele embarcou 58 caixas de aço no navio Ideal X, no porto de Newark (EUA). Essa inovação reduziu o custo de carga marítima em 97% e revolucionou o comércio global. Hoje, mais de 800 milhões de contêineres circulam pelo mundo anualmente.",
    content: `## A história do contêiner: de 1956 até hoje\n\nAntes de 1956, o transporte marítimo de mercadorias era feito por **carga solta** (break-bulk): cada caixa, saco ou barril era carregado manualmente por estivadores. Um navio levava **dias** para ser carregado e descarregado, e o custo de movimentação representava até **60% do valor total do frete**.\n\n### Malcom McLean e o Ideal X (1956)\n\nMalcom Purcell McLean (1913–2001) era um caminhoneiro da Carolina do Norte que ficava frustrado com a demora nos portos. Em 26 de abril de 1956, ele embarcou **58 caixas de aço** (trailers sem rodas) no navio-tanque **Ideal X**, que partiu de Newark (NJ) para Houston (TX).\n\nO resultado foi revolucionário:\n\n- **Custo de carga**: caiu de US$ 5,86/tonelada para US$ 0,16/tonelada\n- **Tempo de carga**: de 5 dias para 8 horas\n- **Furtos**: caíram drasticamente (carga selada)\n- **Danos**: redução de 90% em avarias\n\n### Padronização ISO (1961–1968)\n\nEm 1961, a ISO (International Organization for Standardization) começou a padronizar as dimensões dos contêineres. Em 1968, a **ISO 668** definiu os tamanhos que usamos até hoje:\n\n| Tipo | Comprimento | Largura | Altura | Código ISO |\n|---|---|---|---|---|\n| 20 pés (TEU) | 6,058 m | 2,438 m | 2,591 m | 1CC |\n| 40 pés | 12,192 m | 2,438 m | 2,591 m | 1AA |\n| 40 pés HC | 12,192 m | 2,438 m | 2,896 m | 1AAA |\n\n### O contêiner chega ao Brasil (década de 1970)\n\nO Brasil adotou o contêiner na década de 1970, com a modernização dos portos de Santos e Rio de Janeiro. O Porto de Santos é hoje o maior da América Latina, movimentando mais de **4 milhões de TEUs por ano** (ANTAQ, 2023).\n\n### A transformação de contêineres\n\nA partir dos anos 2000, o contêiner deixou de ser apenas um recipiente de carga e passou a ser **matéria-prima para construção**. Escritórios, lojas, residências, hotéis e até hospitais foram construídos a partir de contêineres reciclados.\n\nA Multiteiner foi pioneira nesse movimento no Brasil, fundada em 1993 com foco na transformação de contêineres para uso em obras, eventos e indústria.\n\n### Dados do mercado atual\n\n- **Frota mundial**: ~50 milhões de contêineres (World Shipping Council, 2023)\n- **Produção anual**: ~5 milhões de novas unidades\n- **Vida útil média**: 12–15 anos em transporte marítimo\n- **Vida útil após transformação**: 20–30 anos adicionais\n- **Mercado de construção modular**: US$ 2,1 bilhões no Brasil (IMARC Group, 2024)`,
    faq: [
      { question: "Quem inventou o contêiner?", answer: "Malcom Purcell McLean (1913–2001), um caminhoneiro americano da Carolina do Norte. Em 26 de abril de 1956, ele embarcou 58 caixas de aço no navio Ideal X, partindo de Newark para Houston, reduzindo o custo de carga em 97%." },
      { question: "Quando o contêiner chegou ao Brasil?", answer: "O contêiner chegou ao Brasil na década de 1970, com a modernização dos portos de Santos e Rio de Janeiro. Hoje, o Porto de Santos movimenta mais de 4 milhões de TEUs por ano." },
      { question: "Quantos contêineres existem no mundo?", answer: "Existem aproximadamente 50 milhões de contêineres em circulação no mundo, segundo o World Shipping Council (2023). Cerca de 5 milhões de novas unidades são produzidas anualmente." },
    ],
  },
  "construcao-modular-brasil-mercado": {
    title: "Construção modular no Brasil: mercado de US$ 2 bi com crescimento acelerado",
    excerpt: "O mercado brasileiro de construção modular deve dobrar até 2030.",
    category: "Mercado",
    readTime: "6 min",
    date: "2024-04-02",
    tags: ["mercado", "construção modular", "tendências"],
    answer: "O mercado brasileiro de construção modular foi avaliado em US$ 2,1 bilhões em 2024 e deve atingir US$ 4,3 bilhões até 2030, com CAGR de 12,8% (IMARC Group). Os principais motores são a demanda por rapidez na construção civil, sustentabilidade e redução de custos.",
    content: `## Construção modular no Brasil: um mercado em explosão\n\nA construção modular — que inclui contêineres transformados e módulos habitacionais pré-fabricados — está vivendo um momento de crescimento acelerado no Brasil.\n\n### Números do mercado\n\n| Indicador | Valor | Fonte |\n|---|---|---|\n| Tamanho do mercado (2024) | US$ 2,1 bilhões | IMARC Group |\n| Projeção 2030 | US$ 4,3 bilhões | IMARC Group |\n| CAGR (2024–2030) | 12,8% | IMARC Group |\n| Participação no PIB construção | ~3% | CBIC |\n| Crescimento anual (Brasil) | 15–20% | Abramat |\n\n### Fatores de crescimento\n\n**1. Velocidade de construção**\nUm módulo habitacional é entregue pronto em 15 a 30 dias, contra 90 a 180 dias da construção convencional. Para obras com prazos apertados, essa diferença é decisiva.\n\n**2. Redução de custos**\nA construção modular gera economia de 20 a 40% em relação à alvenaria convencional, considerando prazo, mão de obra e desperdício de materiais.\n\n**3. Sustentabilidade**\nA construção modular gera até 90% menos resíduos que a alvenaria convencional. Além disso, os módulos podem ser reutilizados e relocados.\n\n**4. Déficit habitacional**\nO Brasil tem um déficit habitacional de 5,8 milhões de moradias (Fundação João Pinheiro, 2023). A construção modular é uma das soluções mais rápidas para reduzir esse déficit.\n\n**5. Grandes eventos e infraestrutura**\nCopa do Mundo, Olimpíadas, Rock in Rio, Tomorrowland — todos usaram construção modular extensivamente. O legado desses eventos acelerou a adoção no país.\n\n### Segmentos que mais crescem\n\n1. **Construção civil**: canteiros de obras, escritórios temporários, alojamentos\n2. **Mineração**: vilas operacionais em áreas remotas\n3. **Eventos**: infraestrutura temporária para festivais e feiras\n4. **Offshore**: módulos certificados para plataformas\n5. **Varejo**: lojas pop-up e quiosques\n\n### Tendências para 2025–2030\n\n- **Modularização 4.0**: integração com IoT, automação e monitoramento remoto\n- **Construção offsite**: fabricação em fábrica com montagem no local\n- **Certificações verdes**: LEED, AQUA e Selo Casa Azul para módulos\n- **Financiamento**: linhas de crédito específicas para construção modular\n- **Normatização**: novas normas ABNT para construção modular`,
    faq: [
      { question: "Qual o tamanho do mercado de construção modular no Brasil?", answer: "O mercado brasileiro de construção modular foi avaliado em US$ 2,1 bilhões em 2024, com projeção de atingir US$ 4,3 bilhões até 2030, segundo o IMARC Group. O crescimento anual é de 12,8%." },
      { question: "A construção modular é mais barata que a convencional?", answer: "Sim, em média 20 a 40% mais barata, considerando prazo de execução, mão de obra e desperdício de materiais. A economia é ainda maior em projetos temporários ou de médio prazo." },
    ],
  },
  "conteiner-sustentabilidade-construcao-verde": {
    title: "Contêiner e sustentabilidade: por que é a opção mais verde da construção",
    excerpt: "Construção em contêiner gera até 90% menos resíduos que a alvenaria convencional.",
    category: "Sustentabilidade",
    readTime: "5 min",
    date: "2024-03-25",
    tags: ["sustentabilidade", "construção verde", "meio ambiente"],
    answer: "A construção em contêiner é uma das opções mais sustentáveis da construção civil: reutiliza estruturas de aço existentes, gera até 90% menos resíduos, consome 60% menos energia na fabricação e permite desmontagem e relocação sem desperdício.",
    content: `## Contêiner e sustentabilidade\n\nA construção civil é responsável por **35% dos resíduos sólidos** gerados no Brasil (ABRELPE, 2023) e por **40% do consumo de recursos naturais** do planeta (UNEP). Nesse contexto, a construção em contêiner surge como uma alternativa concreta para reduzir o impacto ambiental.\n\n### Benefícios ambientais quantificados\n\n| Indicador | Contêiner | Alvenaria | Redução |\n|---|---|---|---|\n| Resíduos de obra | ~0,5 t | ~5 t | 90% |\n| Consumo de água | ~200 L | ~2.000 L | 90% |\n| Energia de fabricação | ~40 kWh/m² | ~100 kWh/m² | 60% |\n| Emissão de CO² | ~30 kg/m² | ~80 kg/m² | 62% |\n| Tempo de obra | 15–30 dias | 90–180 dias | 80% |\n\n*Fonte: estimativas baseadas em dados da CBIC, ABRELPE e UNEP para construções de 30 m².*\n\n### Por que o contêiner é sustentável?\n\n**1. Reutilização de aço existente**\nCada contêiner de 40 pés contém aproximadamente 3,5 toneladas de aço corten. Ao reutilizá-lo na construção, evita-se a extração de minério de ferro e a emissão de CO² da siderurgia.\n\n**2. Construção a seco**\nA transformação de contêineres é um processo predominantemente seco — sem concreto, argamassa ou grandes volumes de água. Isso reduz drasticamente o consumo hídrico e a geração de efluentes.\n\n**3. Redução de resíduos**\nA construção convencional gera em média 150 kg de resíduos por m². A construção em contêiner gera menos de 15 kg/m² — uma redução de 90%.\n\n**4. Desmontagem e relocação**\nDiferente da alvenaria, que precisa ser demolida (gerando entulho), o contêiner pode ser desmontado e relocado integralmente, sem geração de resíduos.\n\n**5. Vida útil estendida**\nUm contêiner marítimo tem vida útil de 12–15 anos no transporte. Após a transformação, ganha mais 20–30 anos de uso — totalizando até 45 anos de vida útil.\n\n### Certificações verdes aplicáveis\n\n- **LEED** (Leadership in Energy and Environmental Design)\n- **AQUA-HQE** (Alta Qualidade Ambiental)\n- **Selo Casa Azul** (Caixa Econômica Federal)\n- **Procel Edifica** (eficiência energética)\n\nA Multiteiner já forneceu módulos para projetos com certificação LEED e AQUA, comprovando que a construção modular é compatível com os mais altos padrões de sustentabilidade.`,
    faq: [
      { question: "Construção em contêiner é sustentável?", answer: "Sim. A construção em contêiner gera até 90% menos resíduos, consome 90% menos água e 60% menos energia que a alvenaria convencional. Além disso, reutiliza aço existente e permite desmontagem sem desperdício." },
      { question: "Contêiner pode ter certificação LEED?", answer: "Sim. Projetos em contêiner podem obter certificação LEED, AQUA-HQE, Selo Casa Azul e Procel Edifica. A Multiteiner já forneceu módulos para projetos certificados." },
    ],
  },
  "aluguel-vs-compra-conteiner": {
    title: "Alugar ou comprar contêiner? Guia definitivo para tomar a decisão certa",
    excerpt: "Análise financeira completa: quando vale mais a pena alugar e quando comprar.",
    category: "Guia Completo",
    readTime: "8 min",
    date: "2024-03-05",
    tags: ["locação", "compra", "financeiro"],
    answer: "A regra geral é: para uso até 18 meses, o aluguel é mais econômico; acima de 18 meses, a compra tende a ser mais vantajosa. O ponto de equilíbrio varia conforme o tipo de contêiner, acabamento e condições de mercado.",
    content: `## Alugar ou comprar contêiner?\n\nEssa é uma das perguntas mais frequentes que recebemos na Multiteiner. A resposta depende de três fatores principais: **prazo de uso**, **tipo de contêiner** e **necessidade de personalização**.\n\n### Regra geral: o ponto de equilíbrio de 18 meses\n\n| Prazo de uso | Recomendação | Motivo |\n|---|---|---|\n| Até 6 meses | Aluguel | Custo total muito menor |\n| 6 a 18 meses | Depende | Avaliar caso a caso |\n| 18 a 36 meses | Compra | Economia no médio prazo |\n| Acima de 36 meses | Compra | Economia significativa |\n\n### Quando alugar\n\n- **Eventos temporários**: festivais, feiras, exposições (dias a semanas)\n- **Obras de curta duração**: até 12 meses\n- **Projetos sazonais**: demanda varia ao longo do ano\n- **Teste de conceito**: validar se o contêiner atende antes de comprar\n- **Sem capital para investimento**: preservar caixa\n\n**Vantagens do aluguel:**\n- Sem investimento inicial alto\n- Manutenção inclusa no contrato\n- Flexibilidade para trocar ou devolver\n- Dedução fiscal como despesa operacional\n\n### Quando comprar\n\n- **Uso permanente**: escritórios, depósitos, lojas fixas\n- **Uso acima de 18 meses**: economia no médio/longo prazo\n- **Personalização intensa**: acabamentos específicos que não fazem sentido em locação\n- **Ativo patrimonial**: valorização do imóvel\n\n**Vantagens da compra:**\n- Custo total menor no longo prazo\n- Personalização completa\n- Ativo patrimonial (depreciação fiscal)\n- Sem mensalidades\n- Valor residual na revenda\n\n### Simulação de custos (contêiner 20 pés escritório)\n\n| Cenário | Aluguel (mensal) | Compra (à vista) | Ponto de equilíbrio |\n|---|---|---|---|\n| Contêiner básico | R$ 800–1.200/mês | R$ 15.000–20.000 | ~18 meses |\n| Contêiner acabado | R$ 1.500–2.500/mês | R$ 35.000–50.000 | ~20 meses |\n| Módulo habitacional | R$ 2.000–3.500/mês | R$ 45.000–70.000 | ~22 meses |\n\n*Valores de referência para a região Sudeste (2024). Consulte a Multiteiner para orçamento atualizado.*\n\n### Dica Multiteiner\n\nSe você não tem certeza do prazo, comece com aluguel. A Multiteiner oferece contratos flexíveis com opção de compra ao final — o valor pago em aluguel pode ser abatido do preço de compra em condições especiais.`,
    faq: [
      { question: "Qual o custo mensal de aluguel de um contêiner?", answer: "O aluguel de um contêiner de 20 pés básico custa entre R$ 800 e R$ 1.200 por mês na região Sudeste. Contêineres com acabamento (escritório, dormitório) custam entre R$ 1.500 e R$ 2.500/mês. Valores variam conforme região e prazo." },
      { question: "Posso comprar o contêiner depois de alugar?", answer: "Sim. A Multiteiner oferece contratos de locação com opção de compra. Em condições especiais, o valor pago em aluguel pode ser abatido do preço de compra." },
      { question: "A partir de quantos meses compensa comprar?", answer: "A regra geral é 18 meses. Acima desse prazo, a compra tende a ser mais econômica. Abaixo de 6 meses, o aluguel é quase sempre mais vantajoso. Entre 6 e 18 meses, depende do tipo e acabamento." },
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
