import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { SectionHeader, AnswerBlock, CitablePassage, SpecTable, FAQBlock, CTASection } from "@/components/GeoAeo";
import { Link } from "wouter";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  BookOpen, Ruler, Shield, Zap, Building2, Anchor,
  History, TrendingUp, AlertCircle, Scale, Leaf, Clock,
  Truck, Factory, Calendar, Layers, ChevronRight, HardHat,
  Snowflake, Box, Home as HomeIcon, Warehouse, CheckCircle2,
  ArrowUp, Menu, X
} from "lucide-react";

/* =============================================================================
   GUIA DEFINITIVO — Contêineres e Módulos Habitacionais
   Referência técnica da Multiteiner (desde 1993)
   Dados verificados: ISO 668:2020, NR-18, DNV-ST-E271, NBR 15575, IMARC Group
   ============================================================================= */

// ── Seções do índice (headings como perguntas) ────────────────────────────────
const SECTIONS = [
  { id: "o-que-e", label: "O que é um contêiner?", icon: Box },
  { id: "historia", label: "Quem inventou o contêiner?", icon: History },
  { id: "tipos", label: "Quais os tipos?", icon: Layers },
  { id: "dimensoes", label: "Quais as dimensões ISO?", icon: Ruler },
  { id: "ilustracoes", label: "Plantas baixas", icon: Ruler },
  { id: "modulos", label: "O que é módulo habitacional?", icon: HomeIcon },
  { id: "aplicacoes", label: "Onde são usados?", icon: Building2 },
  { id: "normas", label: "Quais normas regulam?", icon: Shield },
  { id: "vantagens", label: "Quais as vantagens?", icon: Zap },
  { id: "como-escolher", label: "Como escolher?", icon: Scale },
  { id: "mercado", label: "Mercado no Brasil", icon: TrendingUp },
  { id: "faq", label: "Perguntas frequentes", icon: AlertCircle },
];

// ── Tipos de Contêineres ─────────────────────────────────────────────────────
const TIPOS = [
  {
    tipo: "Dry Van (Carga Seca)",
    subtipo: "Standard e High Cube",
    descricao: "Contêiner totalmente fechado, fabricado em aço Corten, com portas em uma das extremidades. É o tipo mais comum no mundo, representando cerca de 90% da frota global. Disponível em 20 e 40 pés. A versão High Cube (HC) é 30,5 cm mais alta que a standard, oferecendo pé-direito interno de 2,65 m — preferida para transformações habitacionais.",
    usos: "Escritórios, depósitos, lojas, vestiários, refeitórios, salas de aula, dormitórios",
    icon: Box,
    multiteiner: true,
  },
  {
    tipo: "Refrigerado (Reefer)",
    subtipo: "Com sistema de refrigeração integrado",
    descricao: "Contêiner com isolamento térmico em poliuretano expandido e sistema de refrigeração acoplado, capaz de manter temperaturas entre −25°C e +25°C. Requer alimentação elétrica externa (trifásica 380V ou 440V).",
    usos: "Câmaras frias, armazenamento de alimentos, medicamentos, eventos gastronômicos",
    icon: Snowflake,
    multiteiner: true,
  },
  {
    tipo: "Offshore (DNV 2.7-1)",
    subtipo: "Certificação DNV-ST-E271",
    descricao: "Contêiner projetado e certificado conforme a norma DNV-ST-E271 para uso em ambientes marítimos. Passa por testes rigorosos de içamento, impacto, empilhamento e estanqueidade. Obrigatório para plataformas de petróleo e gás.",
    usos: "Plataformas de petróleo, navios, FPSOs, instalações offshore",
    icon: Anchor,
    multiteiner: true,
  },
  {
    tipo: "Open Top",
    subtipo: "Sem teto fixo",
    descricao: "Contêiner sem teto rígido, coberto por lona removível. Permite carregamento de cargas de grande altura por guindaste ou ponte rolante. Disponível em 20 e 40 pés.",
    usos: "Maquinário pesado, estruturas metálicas, bobinas, cargas de grandes dimensões",
    icon: Warehouse,
    multiteiner: false,
  },
  {
    tipo: "Flat Rack",
    subtipo: "Sem laterais nem teto",
    descricao: "Contêiner composto apenas por piso reforçado e paredes frontais dobráveis (ou fixas). Projetado para cargas que excedem as dimensões de um contêiner fechado.",
    usos: "Veículos, equipamentos industriais, tubulações, cargas de projeto",
    icon: Truck,
    multiteiner: false,
  },
  {
    tipo: "Tank Container (Tanque)",
    subtipo: "Para líquidos e gases",
    descricao: "Tanque cilíndrico de aço inoxidável montado dentro de uma estrutura ISO padrão. Capacidade típica de 21.000 a 26.000 litros.",
    usos: "Produtos químicos, óleos, combustíveis, sucos, vinhos, gases industriais",
    icon: Factory,
    multiteiner: false,
  },
];

// ── Dimensões ISO 668:2020 ───────────────────────────────────────────────────
const SPECS_20_STANDARD = [
  { label: "Designação ISO", value: "1CC (20 ft standard)" },
  { label: "Comprimento externo", value: '6,058 m (19\' 10,5")', highlight: true },
  { label: "Largura externa", value: "2,438 m (8')" },
  { label: "Altura externa", value: '2,591 m (8\' 6")' },
  { label: "Comprimento interno (mín.)", value: '5,867 m (19\' 3")' },
  { label: "Largura interna (mín.)", value: '2,330 m (7\' 7,73")' },
  { label: "Altura interna (mín.)", value: '2,350 m (7\' 8,5")' },
  { label: "Volume interno", value: "≈ 33,2 m³" },
  { label: "Área interna útil", value: "≈ 13,7 m²" },
  { label: "Peso bruto máximo (MGM)", value: "36.000 kg (79.370 lb)", highlight: true },
];

const SPECS_40_HC = [
  { label: "Designação ISO", value: "1AAA (40 ft high cube)" },
  { label: "Comprimento externo", value: "12,192 m (40')", highlight: true },
  { label: "Largura externa", value: "2,438 m (8')" },
  { label: "Altura externa", value: '2,896 m (9\' 6")' },
  { label: "Comprimento interno (mín.)", value: '11,998 m (39\' 4,375")' },
  { label: "Largura interna (mín.)", value: '2,330 m (7\' 7,73")' },
  { label: "Altura interna (mín.)", value: '2,655 m (8\' 8,5")' },
  { label: "Volume interno", value: "≈ 76,3 m³" },
  { label: "Área interna útil", value: "≈ 28,0 m²" },
  { label: "Peso bruto máximo (MGM)", value: "36.000 kg (79.370 lb)", highlight: true },
];

const SPECS_40_STD = [
  { label: "Designação ISO", value: "1AA (40 ft standard)" },
  { label: "Comprimento externo", value: "12,192 m (40')", highlight: true },
  { label: "Largura externa", value: "2,438 m (8')" },
  { label: "Altura externa", value: '2,591 m (8\' 6")' },
  { label: "Comprimento interno (mín.)", value: '11,998 m (39\' 4,375")' },
  { label: "Largura interna (mín.)", value: '2,330 m (7\' 7,73")' },
  { label: "Altura interna (mín.)", value: '2,350 m (7\' 8,5")' },
  { label: "Volume interno", value: "≈ 67,7 m³" },
  { label: "Área interna útil", value: "≈ 28,0 m²" },
  { label: "Peso bruto máximo (MGM)", value: "36.000 kg (79.370 lb)", highlight: true },
];

// ── Normas ────────────────────────────────────────────────────────────────────
const NORMAS = [
  { norma: "ISO 668:2020", titulo: "Classificação, dimensões e pesos", descricao: "Define as dimensões externas, internas mínimas e pesos brutos máximos dos contêineres Série 1. Sétima edição (2020), preparada pelo Comitê Técnico ISO/TC 104. Garante compatibilidade global entre modais de transporte.", tipo: "Internacional" },
  { norma: "ISO 1496-1:2013", titulo: "Especificações e testes — Carga geral", descricao: "Estabelece requisitos de resistência estrutural, vedação, empilhamento e condições de teste. Define a resistência mínima ao empilhamento de 213.360 kg de massa sobreposta.", tipo: "Internacional" },
  { norma: "ISO 6346", titulo: "Codificação, identificação e marcação", descricao: "Define o sistema de identificação único de cada contêiner: código do proprietário (3 letras), categoria (1 letra), número de série (6 dígitos) e dígito verificador.", tipo: "Internacional" },
  { norma: "DNV-ST-E271", titulo: "Contêineres offshore (antiga DNV 2.7-1)", descricao: "Padrão internacional da Det Norske Veritas para aprovação e certificação de contêineres offshore. Exige testes de içamento dinâmico, impacto, empilhamento e estanqueidade. Obrigatório para plataformas de petróleo e gás.", tipo: "Offshore" },
  { norma: "NR-18 (MTE)", titulo: "Segurança em canteiros de obras", descricao: "Regulamenta condições de segurança e saúde em canteiros de obras. Exige que áreas de vivência atendam requisitos de ventilação, iluminação, pé-direito e instalações sanitárias. Proíbe contêineres de carga sem adaptação.", tipo: "Trabalhista" },
  { norma: "ABNT NBR 15575", titulo: "Norma de desempenho para edificações", descricao: "Estabelece requisitos de desempenho para edificações residenciais, incluindo segurança estrutural, estanqueidade, conforto térmico, acústico e lumínico. Aplicável a módulos habitacionais como moradia permanente.", tipo: "Nacional" },
  { norma: "ABNT NBR 15873", titulo: "Coordenação modular para edificações", descricao: "Regulamenta a construção modular no Brasil, definindo módulos básicos de coordenação dimensional para garantir compatibilidade entre componentes construtivos.", tipo: "Nacional" },
  { norma: "ANVISA RDC 326/2019", titulo: "Boas práticas de armazenamento", descricao: "Regulamenta condições de armazenamento de alimentos e medicamentos, incluindo requisitos de temperatura, higiene e rastreabilidade. Aplicável a contêineres frigoríficos.", tipo: "Sanitária" },
];

// ── Vantagens ─────────────────────────────────────────────────────────────────
const VANTAGENS = [
  { icon: Clock, titulo: "Velocidade de instalação", descricao: "Um contêiner escritório pode ser instalado em 3 a 5 dias úteis após a entrega. Projetos modulares complexos levam de 2 a 6 semanas — contra 6 a 18 meses da construção convencional em alvenaria.", dado: "Até 70% mais rápido" },
  { icon: Scale, titulo: "Economia comprovada", descricao: "A construção com contêineres pode custar de 20% a 40% menos que a alvenaria equivalente, segundo dados do setor. A economia vem da fabricação em série, menor desperdício de material e redução de mão de obra no canteiro.", dado: "20–40% mais econômico" },
  { icon: Leaf, titulo: "Sustentabilidade", descricao: "Cada contêiner reutilizado evita o descarte de aproximadamente 3.500 kg de aço. A construção modular gera até 70% menos resíduos que a convencional e consome menos água e energia durante a montagem.", dado: "Até 70% menos resíduos" },
  { icon: Truck, titulo: "Mobilidade e reutilização", descricao: "Contêineres podem ser transportados por caminhão, trem ou navio e reinstalados em novo local. Ideal para projetos temporários (obras, eventos, emergências) onde a estrutura precisa ser removida ao final.", dado: "100% relocável" },
  { icon: Shield, titulo: "Resistência estrutural", descricao: "Fabricados em aço Corten (aço patinável), contêineres suportam empilhamento de até 9 unidades carregadas (mais de 200 toneladas). A camada de oxidação superficial protege contra corrosão.", dado: "Empilhamento de 9 unidades" },
  { icon: Layers, titulo: "Modularidade e escalabilidade", descricao: "Unidades podem ser combinadas lateral e verticalmente para criar estruturas maiores: escritórios de 2 andares, alojamentos com dezenas de quartos, ou complexos comerciais. A expansão é feita adicionando módulos.", dado: "Expansão por adição" },
];

// ── Comparativo ───────────────────────────────────────────────────────────────
const COMPARATIVO = [
  { criterio: "Tempo de instalação", conteiner: "3 a 15 dias úteis", alvenaria: "3 a 12 meses" },
  { criterio: "Custo relativo", conteiner: "20–40% mais econômico", alvenaria: "Base de comparação" },
  { criterio: "Mobilidade", conteiner: "Sim — pode ser realocado", alvenaria: "Não — estrutura fixa" },
  { criterio: "Sustentabilidade", conteiner: "Reutiliza aço existente, menos resíduos", alvenaria: "Gera entulho significativo" },
  { criterio: "Personalização", conteiner: "Alta — modular e expansível", alvenaria: "Alta — mas mais lenta" },
  { criterio: "Durabilidade", conteiner: "25–50 anos (pós-marítimo)", alvenaria: "50+ anos" },
  { criterio: "Resistência a intempéries", conteiner: "Alta (aço Corten)", alvenaria: "Alta (concreto/tijolo)" },
  { criterio: "Pé-direito (HC)", conteiner: "2,65 m interno", alvenaria: "2,80 m+ (variável)" },
  { criterio: "Resíduos de construção", conteiner: "Até 70% menos", alvenaria: "Significativos" },
  { criterio: "Necessidade de fundação", conteiner: "Mínima (sapatas ou radier)", alvenaria: "Completa (fundação profunda)" },
];

// ── FAQ Técnica Expandida ────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { question: "Quais são as dimensões exatas de um contêiner de 20 pés?", answer: "Conforme a norma ISO 668:2020, um contêiner de 20 pés (designação 1CC) tem dimensões externas de 6,058 m de comprimento, 2,438 m de largura e 2,591 m de altura. As dimensões internas mínimas são 5,867 m × 2,330 m × 2,350 m, com volume interno de aproximadamente 33,2 m³ e área útil de cerca de 13,7 m². O peso bruto máximo é de 36.000 kg." },
  { question: "Quais são as dimensões de um contêiner de 40 pés High Cube?", answer: "O contêiner de 40 pés High Cube (designação ISO 1AAA) tem dimensões externas de 12,192 m × 2,438 m × 2,896 m. Internamente, mede no mínimo 11,998 m × 2,330 m × 2,655 m, com volume de aproximadamente 76,3 m³ e área útil de cerca de 28 m². É 30,5 cm mais alto que o standard, sendo preferido para transformações habitacionais." },
  { question: "Qual a diferença entre contêiner e módulo habitacional?", answer: "O contêiner é uma estrutura metálica padronizada pela ISO 668, originalmente projetada para transporte marítimo intermodal. O módulo habitacional é uma estrutura projetada especificamente para habitação humana, podendo usar um contêiner como base estrutural (contêiner transformado) ou ser construído do zero com perfis metálicos e materiais específicos para conforto térmico, acústico e estético." },
  { question: "Contêiner pode ser usado como moradia permanente?", answer: "Sim, desde que atenda às normas de desempenho aplicáveis. No Brasil, a NBR 15575 estabelece requisitos de segurança estrutural, estanqueidade, conforto térmico, acústico e lumínico para edificações residenciais. O contêiner precisa receber isolamento térmico, tratamento acústico, instalações elétricas e hidráulicas conforme norma, e aprovação do projeto pela prefeitura local." },
  { question: "Quanto custa um contêiner transformado?", answer: "O custo varia conforme o tipo de transformação, acabamento e tamanho. Um contêiner de 20 pés transformado em escritório básico pode custar a partir de R$ 25.000 a R$ 45.000 (valores de referência). Módulos com acabamento premium, ar-condicionado, banheiro e cozinha podem ultrapassar R$ 80.000. A Multiteiner fornece orçamentos personalizados." },
  { question: "Qual a vida útil de um contêiner?", answer: "Um contêiner marítimo novo tem vida útil de transporte de 10 a 15 anos. Após esse período, a estrutura de aço Corten permanece íntegra e pode ser reutilizada em construções por mais 25 a 50 anos, dependendo da manutenção e das condições climáticas." },
  { question: "O que é a certificação DNV 2.7-1 para contêineres offshore?", answer: "A DNV-ST-E271 (anteriormente DNV 2.7-1) é uma norma da Det Norske Veritas que estabelece requisitos técnicos para aprovação e certificação de contêineres offshore e conjuntos de içamento. Inclui testes de içamento dinâmico, impacto lateral, empilhamento e estanqueidade. É obrigatória para qualquer contêiner utilizado em plataformas de petróleo e gás." },
  { question: "Contêiner precisa de fundação?", answer: "Sim, mas de forma simplificada. Diferentemente da alvenaria, que exige fundação profunda, um contêiner pode ser apoiado sobre sapatas isoladas, blocos de concreto ou radier simples. O importante é garantir nivelamento, drenagem adequada e que o solo suporte o peso da estrutura carregada." },
  { question: "É possível empilhar contêineres?", answer: "Sim. Contêineres ISO são projetados para empilhamento. Conforme a ISO 1496-1:2013, a resistência mínima ao empilhamento é de 213.360 kg de massa sobreposta, o que equivale a aproximadamente 9 contêineres carregados empilhados." },
  { question: "Quem inventou o contêiner?", answer: "O contêiner intermodal moderno foi inventado por Malcom McLean (1913–2001), um empresário e caminhoneiro americano. Em 26 de abril de 1956, o navio Ideal X partiu de Newark, Nova Jersey, com 58 contêineres de aço rumo a Houston, Texas. Essa viagem inaugural revolucionou o comércio global." },
  { question: "Qual a diferença entre contêiner de 20 pés e 40 pés?", answer: "O contêiner de 20 pés (TEU) tem 6,058 m de comprimento e área útil de ~13,7 m². O de 40 pés tem 12,192 m e área útil de ~28 m² — exatamente o dobro. O de 20 pés é mais fácil de transportar e posicionar em terrenos menores. O de 40 pés é preferido para escritórios, alojamentos e projetos que exigem ambientes amplos." },
  { question: "O que é aço Corten?", answer: "Aço Corten (ou aço patinável) é uma liga de aço de alta resistência mecânica e à corrosão atmosférica. Quando exposto ao ambiente, forma uma camada de óxido estável (pátina) que protege o metal subjacente contra corrosão progressiva. Contêineres marítimos são fabricados em aço Corten justamente por essa propriedade." },
  { question: "Contêiner é sustentável?", answer: "Sim. A reutilização de contêineres marítimos em construções evita o descarte de aproximadamente 3.500 kg de aço por unidade. A construção modular gera até 70% menos resíduos que a convencional, consome menos água e energia durante a montagem, e permite desmontagem e reutilização futura. O aço é 100% reciclável." },
  { question: "Qual a diferença entre alugar e comprar um contêiner?", answer: "A locação é indicada para projetos temporários (obras, eventos, safras) onde o contêiner será devolvido ao final. A compra é mais vantajosa para uso permanente ou de longo prazo, pois o custo se dilui ao longo dos anos. A Multiteiner oferece ambas as modalidades." },
  { question: "Contêiner tem isolamento térmico?", answer: "O contêiner marítimo padrão (Dry Van) não possui isolamento térmico de fábrica — apenas chapas de aço. Para uso habitacional, é necessário adicionar isolamento térmico (poliuretano, lã de rocha ou EPS) nas paredes, teto e piso. Contêineres refrigerados (Reefer) já possuem isolamento em poliuretano expandido de fábrica." },
  { question: "Quais são as normas brasileiras para contêineres em canteiros de obras?", answer: "A principal norma é a NR-18, do Ministério do Trabalho, que regulamenta condições de segurança e saúde em canteiros de obras. Ela exige que áreas de vivência tenham ventilação adequada, iluminação, pé-direito mínimo, instalações sanitárias e proteção contra intempéries." },
  { question: "Quanto pesa um contêiner vazio?", answer: "O peso vazio (tara) varia conforme o tipo e fabricante. Um Dry Van de 20 pés pesa entre 2.200 e 2.400 kg. Um de 40 pés standard pesa entre 3.700 e 4.000 kg. O 40 pés High Cube pesa entre 3.900 e 4.200 kg. Contêineres refrigerados são mais pesados: um Reefer de 40 pés pesa cerca de 4.800 a 5.200 kg." },
  { question: "É possível instalar ar-condicionado em contêiner?", answer: "Sim. A instalação de ar-condicionado é uma das adaptações mais comuns em contêineres transformados. Podem ser utilizados splits convencionais, cassetes de teto ou sistemas centrais, dependendo do tamanho do projeto. O isolamento térmico prévio é essencial para a eficiência energética." },
  { question: "Contêiner pode ser financiado?", answer: "Sim. Contêineres transformados podem ser financiados por linhas de crédito para bens móveis, leasing ou consórcio. Algumas instituições financeiras classificam módulos habitacionais como bens de capital, permitindo financiamento com taxas competitivas." },
  { question: "Qual o prazo de entrega de um contêiner transformado?", answer: "O prazo depende da complexidade do projeto. Contêineres com transformações simples (escritório básico, depósito) podem ser entregues em 15 a 30 dias. Projetos com acabamento premium, múltiplas unidades ou especificações técnicas complexas podem levar de 45 a 90 dias." },
];

// ── Aplicações por Segmento ──────────────────────────────────────────────────
const APLICACOES = [
  { segmento: "Construção Civil", icon: HardHat, descricao: "Canteiros de obras de qualquer porte utilizam contêineres como escritórios de engenharia, almoxarifados, vestiários, refeitórios, sanitários e portarias. A NR-18 regulamenta as condições mínimas de habitabilidade.", exemplos: "Escritórios de obra, almoxarifados, vestiários, refeitórios, sanitários, portarias, guaritas", href: "/segmentos/construcao-civil" },
  { segmento: "Eventos e Entretenimento", icon: Calendar, descricao: "Grandes eventos utilizam contêineres como bilheterias, camarins, banheiros, áreas VIP, stands de vendas, centrais de operação e segurança. A locação temporária é o modelo mais comum.", exemplos: "Bilheterias, camarins, banheiros, áreas VIP, stands, centrais de operação", href: "/segmentos/eventos" },
  { segmento: "Indústria e Offshore", icon: Factory, descricao: "O setor industrial utiliza módulos habitacionais para alojamentos em áreas remotas, oficinas, laboratórios e salas de controle. No segmento offshore, contêineres certificados DNV são obrigatórios.", exemplos: "Alojamentos, oficinas, laboratórios, salas de controle, módulos offshore DNV", href: "/segmentos/operacoes-industriais" },
  { segmento: "Logística e Armazenamento", icon: Truck, descricao: "Contêineres são utilizados como depósitos, câmaras frias, centros de distribuição temporários e armazéns de insumos. A versatilidade permite instalação em qualquer terreno com acesso para caminhão.", exemplos: "Depósitos, câmaras frias, centros de distribuição, armazéns de insumos", href: "/segmentos/logistica" },
];

// ── Linha do Tempo ───────────────────────────────────────────────────────────
const TIMELINE = [
  { ano: "1956", evento: "Malcom McLean realiza a primeira viagem com contêineres padronizados no navio Ideal X, de Newark a Houston (EUA)." },
  { ano: "1961", evento: "A ISO forma o Comitê Técnico TC 104 para padronizar contêineres de carga." },
  { ano: "1968", evento: "Publicação da ISO 668, primeira edição, padronizando dimensões e classificações de contêineres." },
  { ano: "1970s", evento: "Contêineres se tornam o padrão global de transporte marítimo. Portos ao redor do mundo se adaptam." },
  { ano: "1993", evento: "Fundação da Multiteiner no Rio de Janeiro, pioneira na transformação de contêineres no Brasil." },
  { ano: "2000s", evento: "Crescimento do uso de contêineres em construção civil, eventos e habitação no Brasil e no mundo." },
  { ano: "2005", evento: "ISO 668 aumenta o peso bruto máximo de contêineres de 20 e 30 pés para 30.480 kg." },
  { ano: "2016", evento: "Emenda 2 da ISO 668 aumenta o peso bruto máximo para 36.000 kg para todos os tamanhos (exceto 10 pés)." },
  { ano: "2020", evento: "Publicação da sétima edição da ISO 668:2020, versão atual da norma." },
  { ano: "2025", evento: "Mercado de construção modular no Brasil atinge US$ 2,1 bilhões (IMARC Group). Multiteiner completa 32 anos." },
];

// ── CDN URLs das ilustrações ─────────────────────────────────────────────────
const IMG = {
  corte20: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/corte-container-20pes-2rza9tDFMm3pLjGWrEPZiM.webp",
  corte40hc: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/corte-container-40hc-8m7Sj6sxpvwWjikuN5eqSF.webp",
  escritorio: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/modulo-escritorio-20pes-4aJM74TDmgfdFQq5jtUagS.webp",
  alojamento: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/modulo-alojamento-40hc-cYHrRYdZudDC6fsJayz8Ms.webp",
  refeitorio: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/modulo-refeitorio-40hc-NwCgUpf6Dqamjte2rM5H5e.webp",
  combinacao: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/combinacao-modulos-v2-FsuKYfzJU7ArrAbUoGzjRq.webp",
};

// ── Hook: Sidebar com seção ativa ────────────────────────────────────────────
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);
  return active;
}

// ── Componente: Sidebar Sticky ───────────────────────────────────────────────
function GuideSidebar({ active }: { active: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        style={{ background: "#1B3A6B", color: "#F2C200" }}
        aria-label="Abrir índice"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/50" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-24 z-30
        ${mobileOpen ? "left-0" : "-left-full lg:left-0"}
        w-72 lg:w-56 xl:w-64
        h-screen lg:h-auto lg:max-h-[calc(100vh-7rem)]
        bg-white lg:bg-transparent
        border-r lg:border-0 border-border
        overflow-y-auto
        transition-all duration-300
        pt-20 lg:pt-0 px-4 lg:px-0
        shrink-0
      `}>
        <div className="lg:bg-white lg:rounded-xl lg:border lg:border-border lg:p-4 lg:shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#94A3B8" }}>
            Nesta página
          </p>
          <nav className="space-y-0.5">
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
                  style={{
                    background: isActive ? "rgba(27,58,107,0.08)" : "transparent",
                    color: isActive ? "#1B3A6B" : "#64748B",
                    fontWeight: isActive ? 700 : 400,
                    borderLeft: isActive ? "3px solid #F2C200" : "3px solid transparent",
                  }}
                >
                  <s.icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{s.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-border">
            <Link
              href="/orcamento"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all hover:opacity-90"
              style={{ background: "#F2C200", color: "#1B3A6B" }}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

// ── Componente: TL;DR ────────────────────────────────────────────────────────
function TLDR() {
  return (
    <div className="p-6 rounded-xl mb-12" style={{ background: "#EEF2FF", border: "1px solid #C7D2FE" }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1B3A6B" }}>
        TL;DR — Resumo em 5 pontos
      </p>
      <ul className="space-y-2">
        {[
          "Contêineres são caixas metálicas padronizadas pela ISO 668, fabricadas em aço Corten, com 20 ou 40 pés de comprimento.",
          "Existem 6 tipos principais: Dry Van, Reefer, Offshore (DNV), Open Top, Flat Rack e Tank.",
          "Módulos habitacionais podem ser contêineres transformados ou fabricados do zero com painéis sanduíche — atendem NR-18 e NBR 15575.",
          "A construção modular é 20–40% mais econômica, até 70% mais rápida e gera 70% menos resíduos que a alvenaria.",
          "O mercado brasileiro de construção modular vale US$ 2,1 bilhões (2025) e deve atingir US$ 3,1 bi até 2034 (IMARC Group).",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#334155" }}>
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#1B3A6B" }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Componente: Figura ───────────────────────────────────────────────────────
function Figure({ src, alt, caption, num }: { src: string; alt: string; caption: string; num: number }) {
  return (
    <figure className="rounded-xl overflow-hidden border mb-8" style={{ borderColor: "#E2E8F0" }}>
      <img src={src} alt={alt} className="w-full" loading="lazy" />
      <figcaption className="px-5 py-3 text-xs" style={{ background: "#F8FAFC", color: "#64748B" }}>
        <strong style={{ color: "#1B3A6B" }}>Fig. {num}</strong> — {caption}
      </figcaption>
    </figure>
  );
}

// ── Componente: Info Box ─────────────────────────────────────────────────────
function InfoBox({ title, children, variant = "blue" }: { title: string; children: React.ReactNode; variant?: "blue" | "yellow" }) {
  const styles = variant === "yellow"
    ? { bg: "#FEF9E7", border: "#FDE68A", titleColor: "#92400E", textColor: "#78350F" }
    : { bg: "#EEF2FF", border: "#C7D2FE", titleColor: "#1B3A6B", textColor: "#475569" };
  return (
    <div className="p-5 rounded-xl mb-6" style={{ background: styles.bg, border: `1px solid ${styles.border}` }}>
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: styles.titleColor }} />
        <div>
          <p className="text-sm font-bold mb-1" style={{ color: styles.titleColor }}>{title}</p>
          <div className="text-sm leading-relaxed" style={{ color: styles.textColor }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// COMPONENTE PRINCIPAL
// =============================================================================
export default function Guia() {
  const activeSection = useActiveSection(SECTIONS.map((s) => s.id));
  const [activeTab, setActiveTab] = useState<"20" | "40hc" | "40std">("20");

  const schema = [
    makeBreadcrumbSchema([
      { name: "Início", url: "https://www.multiteiner.com.br" },
      { name: "Guia Completo de Contêineres e Módulos Habitacionais", url: "https://www.multiteiner.com.br/guia" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Guia Completo de Contêineres e Módulos Habitacionais — Referência Técnica",
      description: "Tudo sobre contêineres: história, tipos, dimensões ISO 668, normas brasileiras (NR-18, NBR 15575), certificação DNV offshore, vantagens da construção modular, mercado no Brasil e FAQ técnica com 20 perguntas.",
      author: { "@type": "Organization", name: "Multiteiner", url: "https://www.multiteiner.com.br" },
      publisher: { "@type": "Organization", name: "Multiteiner", logo: { "@type": "ImageObject", url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_8b88d7e1.png" } },
      datePublished: "2024-01-15",
      dateModified: "2025-03-27",
      mainEntityOfPage: "https://www.multiteiner.com.br/guia",
      about: [
        { "@type": "Thing", name: "Contêiner" },
        { "@type": "Thing", name: "Módulo Habitacional" },
        { "@type": "Thing", name: "Construção Modular" },
        { "@type": "Thing", name: "ISO 668" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Guia Completo de Contêineres e Módulos Habitacionais — Multiteiner"
        description="Tudo sobre contêineres: história, tipos, dimensões ISO 668, normas (NR-18, NBR 15575, DNV), vantagens da construção modular, mercado no Brasil e 20 perguntas frequentes. Referência técnica da Multiteiner — desde 1993."
        canonical="https://www.multiteiner.com.br/guia"
        schema={schema}
      />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0F2847 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container max-w-4xl relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-5 h-5" style={{ color: "#F2C200" }} />
            <span className="entity-badge">Guia de Referência Técnica</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Guia Completo de<br />
            <span style={{ color: "#F2C200" }}>Contêineres e Módulos Habitacionais</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
            Tudo que você precisa saber sobre contêineres — da invenção por Malcom McLean em 1956 às normas ISO 668:2020, passando por tipos, dimensões, regulamentações brasileiras, vantagens da construção modular e o mercado no Brasil. Produzido pela <strong className="text-white">Multiteiner</strong>, empresa brasileira com mais de 30 anos de experiência.
          </p>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            Última atualização: março de 2025 · Fontes: ISO 668:2020, ISO 1496-1:2013, DNV-ST-E271, NR-18, NBR 15575, IMARC Group, Grand View Research
          </p>
        </div>
      </section>

      {/* ═══ LAYOUT: SIDEBAR + CONTEÚDO ═══ */}
      <div className="container py-12">
        <div className="flex gap-8 lg:gap-12 relative">
          {/* Sidebar */}
          <GuideSidebar active={activeSection} />

          {/* Conteúdo principal */}
          <main className="flex-1 min-w-0 max-w-3xl">
            {/* TL;DR */}
            <TLDR />

            {/* ═══ 1. O QUE É UM CONTÊINER ═══ */}
            <section id="o-que-e" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Definição" title="O que é um contêiner?" />
              <AnswerBlock
                question="O que é um contêiner?"
                answer="Um contêiner (ou container) é uma caixa metálica padronizada, fabricada em aço Corten, projetada originalmente para transportar cargas de forma segura e eficiente por diferentes modais de transporte — navio, caminhão e trem. Suas dimensões são definidas pela norma internacional ISO 668, garantindo compatibilidade global. Após o uso marítimo (10 a 15 anos), a estrutura de aço permanece íntegra e é amplamente reutilizada em construções: escritórios, habitações, depósitos, lojas, refeitórios e dezenas de outras aplicações."
              />
              <div className="mt-8 space-y-6">
                <CitablePassage
                  text="O contêiner intermodal moderno foi inventado por Malcom McLean em 1956. Em 26 de abril daquele ano, o navio Ideal X — um petroleiro convertido — partiu de Newark, Nova Jersey, com 58 contêineres de aço rumo a Houston, Texas. Essa viagem inaugural reduziu drasticamente os custos de movimentação de carga e transformou o comércio global."
                  source="Referência: National Inventors Hall of Fame — Malcom McLean"
                />
                <CitablePassage
                  text="Hoje, estima-se que mais de 20 milhões de contêineres circulem pelo mundo. Cerca de 90% do comércio global de mercadorias é transportado por via marítima, em grande parte dentro de contêineres padronizados ISO."
                  source="Referência: World Shipping Council"
                />
              </div>
            </section>

            {/* ═══ 2. HISTÓRIA ═══ */}
            <section id="historia" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Linha do Tempo" title="Quem inventou o contêiner?" subtitle="Da invenção em 1956 ao mercado bilionário de construção modular." />
              <div className="relative">
                <div className="absolute left-[18px] top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(to bottom, #F2C200, #1B3A6B)" }} />
                <div className="space-y-6">
                  {TIMELINE.map((item, i) => (
                    <div key={i} className="flex gap-5 relative">
                      <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center z-10 text-xs font-bold"
                        style={{ background: i === 4 ? "#F2C200" : "#1B3A6B", color: i === 4 ? "#1B3A6B" : "#F2C200", border: "3px solid #fff", boxShadow: "0 0 0 1px #E2E8F0" }}>
                        {item.ano.slice(-2)}
                      </div>
                      <div className="pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#1B3A6B" }}>{item.ano}</span>
                        <p className="text-sm leading-relaxed mt-1" style={{ color: "#475569" }}>{item.evento}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══ 3. TIPOS DE CONTÊINERES ═══ */}
            <section id="tipos" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Tipos" title="Quais são os tipos de contêineres?" subtitle="Existem 6 tipos principais. Os marcados como 'Multiteiner' são oferecidos pela empresa." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {TIPOS.map((t) => (
                  <div
                    key={t.tipo}
                    className="p-6 rounded-xl bg-white transition-all hover:shadow-md"
                    style={{ border: t.multiteiner ? "1.5px solid #1B3A6B" : "1px solid #E2E8F0" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: t.multiteiner ? "#1B3A6B" : "#F1F5F9", color: t.multiteiner ? "#F2C200" : "#64748B" }}>
                          <t.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base" style={{ color: "#1A1A2E" }}>{t.tipo}</h3>
                          <span className="text-xs" style={{ color: "#64748B" }}>{t.subtipo}</span>
                        </div>
                      </div>
                      {t.multiteiner && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: "#F2C200", color: "#1B3A6B" }}>
                          Multiteiner
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748B" }}>{t.descricao}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold uppercase tracking-wide shrink-0" style={{ color: "#1B3A6B" }}>Usos:</span>
                      <span className="text-xs" style={{ color: "#64748B" }}>{t.usos}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ═══ 4. DIMENSÕES ISO 668 ═══ */}
            <section id="dimensoes" className="mb-16 scroll-mt-24">
              <SectionHeader badge="ISO 668:2020" title="Quais são as dimensões de um contêiner?" subtitle="Dados padronizados conforme a norma ISO 668:2020 (sétima edição)." />

              {/* Tabs de tamanho */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {([["20", "20 pés Standard"], ["40hc", "40 pés High Cube"], ["40std", "40 pés Standard"]] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      background: activeTab === key ? "#1B3A6B" : "#F1F5F9",
                      color: activeTab === key ? "#F2C200" : "#64748B",
                      border: activeTab === key ? "1px solid #1B3A6B" : "1px solid #E2E8F0",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {activeTab === "20" && <SpecTable title="20 pés Standard — ISO 1CC" rows={SPECS_20_STANDARD} />}
              {activeTab === "40hc" && <SpecTable title="40 pés HC — ISO 1AAA" rows={SPECS_40_HC} />}
              {activeTab === "40std" && <SpecTable title="40 pés Standard — ISO 1AA" rows={SPECS_40_STD} />}

              {/* Diagramas de Corte */}
              <h3 className="font-bold text-xl mt-10 mb-2" style={{ color: "#1A1A2E" }}>Diagramas de Corte Transversal</h3>
              <p className="text-sm mb-6" style={{ color: "#64748B" }}>Vistas lateral e frontal com dimensões ISO e escala humana para referência.</p>
              <Figure src={IMG.corte20} alt="Diagrama de corte transversal de contêiner de 20 pés (ISO 1CC)" caption="Corte transversal do contêiner de 20 pés (ISO 1CC). Dimensões externas: 6,058 m × 2,438 m × 2,591 m. Silhueta humana (1,75 m) para escala." num={1} />
              <Figure src={IMG.corte40hc} alt="Diagrama de corte transversal de contêiner de 40 pés High Cube (ISO 1AAA)" caption="Corte transversal do contêiner de 40 pés High Cube (ISO 1AAA). Dimensões externas: 12,192 m × 2,438 m × 2,896 m. Destaque para os 305 mm adicionais de altura." num={2} />

              <InfoBox title="Por que o High Cube é preferido para habitação?">
                <p>O contêiner High Cube (1AAA) tem pé-direito interno mínimo de 2,655 m — contra 2,350 m do standard (1AA). Essa diferença de 30,5 cm é decisiva para o conforto. A NR-18 exige pé-direito mínimo de 2,50 m para áreas de vivência em canteiros de obras, e o HC atende essa exigência com folga.</p>
              </InfoBox>

              <InfoBox title="Sobre o peso bruto máximo (MGM)" variant="yellow">
                <p>A Emenda 2 de 2016 à ISO 668 aumentou o peso bruto máximo para 36.000 kg (79.370 lb) para todos os tamanhos (exceto 10 pés). Antes, o limite para 20 e 30 pés era de 30.480 kg (67.200 lb).</p>
              </InfoBox>
            </section>

            {/* ═══ 5. ILUSTRAÇÕES TÉCNICAS ═══ */}
            <section id="ilustracoes" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Plantas Baixas" title="Como são os módulos por dentro?" subtitle="Plantas baixas de layouts reais de módulos habitacionais e de apoio, com mobiliário e dimensões." />
              <Figure src={IMG.escritorio} alt="Planta baixa de módulo habitacional de 20 pés transformado em escritório" caption="Escritório em módulo de 20 pés (~14 m²). Paredes lisas em painéis sanduíche. Layout com mesa de trabalho, área de reunião, armário, ar-condicionado e duas janelas centralizadas. Escala 1:50." num={3} />
              <Figure src={IMG.alojamento} alt="Planta baixa de módulo habitacional de 40 pés HC para alojamento de 8 pessoas" caption="Alojamento em módulo de 40 pés HC (~28 m²) para 8 pessoas. Banheiro completo, 4 beliches, área comum, armários individuais e 2 splits. Escala 1:75." num={4} />
              <Figure src={IMG.refeitorio} alt="Planta baixa de módulo habitacional de 40 pés HC para refeitório de 18 pessoas" caption="Refeitório em módulo de 40 pés HC (~28 m²) para 18 lugares. Cozinha com pia, geladeira e micro-ondas; 3 mesas; saída de emergência conforme NR-18. Escala 1:75." num={5} />
              <Figure src={IMG.combinacao} alt="Diagrama isométrico de combinações de módulos habitacionais" caption="Combinações modulares: módulo único (28 m²), dois módulos laterais (56 m²) e complexo de 2 andares com 4 módulos (112 m²). Paredes lisas em painéis sanduíche." num={6} />

              <InfoBox title="Sobre as ilustrações">
                <p>As plantas acima são layouts de referência. Cada projeto da Multiteiner é personalizado conforme as necessidades do cliente. <Link href="/orcamento" className="font-bold underline" style={{ color: "#1B3A6B" }}>Solicite um orçamento</Link> para receber um projeto técnico específico.</p>
              </InfoBox>
            </section>

            {/* ═══ 6. MÓDULOS HABITACIONAIS ═══ */}
            <section id="modulos" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Módulos" title="O que é um módulo habitacional?" />
              <AnswerBlock
                question="Qual a diferença entre contêiner e módulo habitacional?"
                answer="O contêiner é uma estrutura metálica padronizada pela ISO 668, originalmente projetada para transporte marítimo. O módulo habitacional é uma estrutura projetada especificamente para habitação humana, podendo usar um contêiner como base estrutural (contêiner transformado) ou ser construído do zero com perfis metálicos e materiais específicos para conforto térmico, acústico e estético. Módulos habitacionais atendem normas de habitabilidade como a NR-18 e a NBR 15575."
              />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#1B3A6B" }}>Contêiner Transformado</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    Utiliza a estrutura original de um contêiner marítimo como base. Recebe cortes para janelas e portas, isolamento térmico e acústico, revestimento interno, instalações elétricas e hidráulicas. Mantém a resistência do aço Corten original. É a opção mais econômica e sustentável.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#1B3A6B" }}>Módulo Fabricado</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    Construído do zero com perfis metálicos, painéis sanduíche e materiais específicos para habitação. Permite maior flexibilidade de dimensões (não limitado aos 2,44 m de largura do contêiner ISO) e acabamento superior. Indicado para projetos que exigem ambientes mais amplos.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <CitablePassage
                  text="A Multiteiner trabalha com ambas as modalidades — contêineres transformados e módulos fabricados — desde 1993. A escolha entre um e outro depende da finalidade, do orçamento, do prazo e das exigências normativas do projeto."
                  source="Multiteiner — Guia de Referência"
                />
              </div>
            </section>

            {/* ═══ 7. APLICAÇÕES POR SEGMENTO ═══ */}
            <section id="aplicacoes" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Segmentos" title="Onde contêineres e módulos são usados?" subtitle="Contêineres e módulos habitacionais atendem dezenas de setores. Conheça os principais." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {APLICACOES.map((a) => (
                  <div key={a.segmento} className="p-6 rounded-xl bg-white border transition-all hover:shadow-md" style={{ borderColor: "#E2E8F0" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#1B3A6B", color: "#F2C200" }}>
                        <a.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base" style={{ color: "#1A1A2E" }}>{a.segmento}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748B" }}>{a.descricao}</p>
                    <p className="text-xs mb-4" style={{ color: "#94A3B8" }}>
                      <strong style={{ color: "#1B3A6B" }}>Exemplos:</strong> {a.exemplos}
                    </p>
                    <Link href={a.href} className="inline-flex items-center gap-1 text-xs font-bold transition-colors hover:opacity-80" style={{ color: "#1B3A6B" }}>
                      Ver detalhes do segmento <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Usos adicionais */}
              <div className="mt-8 p-6 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-base mb-4" style={{ color: "#1B3A6B" }}>Outros usos de contêineres transformados</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {["Escritórios", "Lojas", "Lanchonetes", "Refeitórios", "Enfermarias", "Salas de aula", "Laboratórios", "Dormitórios", "Stand de vendas", "Bilheterias", "Guaritas", "Portarias", "Depósitos", "Almoxarifados", "Oficinas", "Banheiros"].map((uso) => (
                    <div key={uso} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium" style={{ background: "#F8FAFC", color: "#475569", border: "1px solid #E2E8F0" }}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#1B3A6B" }} />
                      {uso}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══ 8. NORMAS E REGULAMENTAÇÕES ═══ */}
            <section id="normas" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Regulamentações" title="Quais normas regulam o uso de contêineres?" subtitle="As principais normas internacionais e brasileiras que regem o uso de contêineres." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {NORMAS.map((n) => (
                  <div key={n.norma} className="p-5 rounded-xl bg-white border transition-all hover:shadow-sm" style={{ borderColor: "#E2E8F0" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 shrink-0" style={{ color: "#F2C200" }} />
                      <div>
                        <span className="font-bold text-sm" style={{ color: "#1A1A2E" }}>{n.norma}</span>
                        <span
                          className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: n.tipo === "Offshore" ? "#FEF3C7" : n.tipo === "Trabalhista" ? "#DCFCE7" : n.tipo === "Sanitária" ? "#FEE2E2" : "#EEF2FF",
                            color: n.tipo === "Offshore" ? "#92400E" : n.tipo === "Trabalhista" ? "#166534" : n.tipo === "Sanitária" ? "#991B1B" : "#1B3A6B",
                          }}
                        >
                          {n.tipo}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>{n.titulo}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{n.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ═══ 9. VANTAGENS ═══ */}
            <section id="vantagens" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Vantagens" title="Quais as vantagens da construção modular?" subtitle="Por que contêineres e módulos são uma alternativa cada vez mais adotada." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {VANTAGENS.map((v) => (
                  <div key={v.titulo} className="p-6 rounded-xl bg-white border transition-all hover:shadow-md" style={{ borderColor: "#E2E8F0" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#EEF2FF", color: "#1B3A6B" }}>
                        <v.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#F2C200", color: "#1B3A6B" }}>
                        {v.dado}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{ color: "#1A1A2E" }}>{v.titulo}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{v.descricao}</p>
                  </div>
                ))}
              </div>

              {/* Comparativo */}
              <div className="mt-10">
                <h3 className="font-bold text-xl mb-4" style={{ color: "#1A1A2E" }}>Contêiner é mais barato que construção convencional?</h3>
                <AnswerBlock
                  answer="Na maioria dos cenários, sim. A construção com contêineres pode custar de 20% a 40% menos que a alvenaria equivalente e ser instalada em dias ou semanas, contra meses da construção convencional. A principal vantagem adicional é a mobilidade: o contêiner pode ser realocado quando o projeto termina."
                />
                <div className="mt-6 overflow-x-auto rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "#1B3A6B" }}>
                        <th className="text-left px-5 py-3 font-bold text-white">Critério</th>
                        <th className="text-left px-5 py-3 font-bold" style={{ color: "#F2C200" }}>Contêiner / Módulo</th>
                        <th className="text-left px-5 py-3 font-bold text-white">Alvenaria</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARATIVO.map((row, i) => (
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

            {/* ═══ 10. COMO ESCOLHER ═══ */}
            <section id="como-escolher" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Orientação" title="Como escolher o contêiner certo?" />
              <AnswerBlock
                question="Como escolher entre locação e compra de contêiner?"
                answer="A locação é indicada para projetos temporários — obras com prazo definido, eventos sazonais, safras agrícolas — onde o contêiner será devolvido ao final. A compra é mais vantajosa para uso permanente ou de longo prazo (acima de 18 a 24 meses), pois o custo se dilui ao longo dos anos. A Multiteiner oferece ambas as modalidades com consultoria personalizada."
              />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#1B3A6B" }}>Escolha pelo tamanho</h3>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    <p><strong style={{ color: "#1A1A2E" }}>20 pés (~14 m²):</strong> Ideal para escritórios individuais, guaritas, portarias, bilheterias, depósitos pequenos e banheiros.</p>
                    <p><strong style={{ color: "#1A1A2E" }}>40 pés (~28 m²):</strong> Indicado para escritórios compartilhados, refeitórios, vestiários, salas de aula, dormitórios e lojas.</p>
                    <p><strong style={{ color: "#1A1A2E" }}>Múltiplas unidades:</strong> Para projetos maiores, unidades podem ser combinadas lateral e verticalmente.</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E2E8F0" }}>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#1B3A6B" }}>Escolha pelo tipo</h3>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    <p><strong style={{ color: "#1A1A2E" }}>Dry Van Standard:</strong> Para depósitos e armazenamento onde o pé-direito não é crítico.</p>
                    <p><strong style={{ color: "#1A1A2E" }}>High Cube:</strong> Para qualquer uso habitacional — o pé-direito de 2,65 m faz diferença significativa.</p>
                    <p><strong style={{ color: "#1A1A2E" }}>Reefer:</strong> Para controle de temperatura — alimentos, medicamentos, flores.</p>
                    <p><strong style={{ color: "#1A1A2E" }}>Offshore (DNV):</strong> Obrigatório para plataformas de petróleo e gás.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══ 11. MERCADO NO BRASIL ═══ */}
            <section id="mercado" className="mb-16 scroll-mt-24">
              <SectionHeader badge="Mercado" title="Qual o tamanho do mercado de construção modular no Brasil?" />
              <div className="p-8 rounded-xl" style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0F2847 100%)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "US$ 2,1 bi", label: "Mercado brasileiro em 2025", fonte: "IMARC Group, 2025" },
                    { value: "US$ 3,1 bi", label: "Projeção para 2034", fonte: "IMARC Group (CAGR 4,56%)" },
                    { value: "US$ 1,6 bi", label: "Contêineres modulares até 2030", fonte: "Grand View Research" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-5 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div className="text-3xl font-extrabold mb-2" style={{ color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}>{stat.value}</div>
                      <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Fonte: {stat.fonte}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Os principais impulsionadores do crescimento são: obras de infraestrutura (rodovias, ferrovias, portos), projetos de mineração e petróleo em áreas remotas, eventos de grande porte, demanda por habitação emergencial e a busca por métodos construtivos mais sustentáveis e rápidos.
                </p>
              </div>
              <div className="mt-6">
                <CitablePassage
                  text="O mercado de construção modular no Brasil atingiu US$ 2,1 bilhões em 2025 e deve crescer para US$ 3,1 bilhões até 2034, segundo o IMARC Group, com taxa de crescimento anual composta (CAGR) de 4,56%. O segmento de contêineres modulares especificamente gerou US$ 772,4 milhões em receita em 2023 e deve alcançar US$ 1.620,7 milhões até 2030, conforme a Grand View Research."
                  source="Fontes: IMARC Group (2025), Grand View Research (2023)"
                />
              </div>
            </section>

            {/* ═══ 12. FAQ TÉCNICA ═══ */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <SectionHeader badge="FAQ" title="Perguntas frequentes sobre contêineres" subtitle="20 perguntas respondidas com base em dados técnicos e normas vigentes." />
              <FAQBlock items={FAQ_ITEMS} />
            </section>

            {/* ═══ LINKS INTERNOS ═══ */}
            <section className="mb-16">
              <SectionHeader badge="Aprofunde-se" title="Explore mais sobre contêineres" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Produtos Multiteiner", href: "/produtos", desc: "Contêineres, Módulos, Offshore e Frigoríficos com especificações" },
                  { label: "Comparativos detalhados", href: "/comparativos", desc: "Contêiner vs. Módulo, Aluguel vs. Compra, Alvenaria vs. Contêiner" },
                  { label: "Perguntas frequentes (FAQ)", href: "/faq", desc: "Perguntas respondidas por especialistas da Multiteiner" },
                  { label: "Blog e artigos técnicos", href: "/blog", desc: "Artigos educacionais sobre construção modular e mercado" },
                  { label: "Solicitar orçamento", href: "/orcamento", desc: "Orçamento gratuito e sem compromisso em até 24 horas" },
                  { label: "Sobre a Multiteiner", href: "/sobre", desc: "História, missão, valores e diferenciais desde 1993" },
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
            </section>
          </main>
        </div>
      </div>

      <CTASection
        title="Precisa de uma solução em contêineres?"
        subtitle="A Multiteiner tem mais de 30 anos de experiência e três unidades no Brasil (RJ, SP, Macaé). Fale com um consultor e receba um orçamento gratuito."
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
