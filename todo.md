# Multiteiner GEO/AEO — TODO

## Fase 1: Schema de banco e arquitetura
- [x] Inicializar projeto web
- [x] Criar schema de banco de dados (produtos, segmentos, comparativos, FAQ, blog, leads, observabilidade)
- [x] Aplicar migrações SQL

## Fase 2: Design System e Layout Global
- [x] Configurar paleta de cores oficiais Multiteiner (Navy #1B3A6B + Gold #F2C200)
- [x] Configurar tipografia (Inter + Barlow Condensed)
- [x] Criar componente de Navbar com navegação completa e dropdowns
- [x] Criar componente de Footer com schema Organization
- [x] Criar componente SEOHead com schema.org dinâmico
- [x] Criar componente AnswerBlock (AEO — resposta principal)
- [x] Criar componente CitablePassage (GEO — passagem citável)
- [x] Criar componente SpecTable (AEO — tabela de especificações)
- [x] Criar componente FAQBlock (AEO — FAQ estruturada)
- [x] Criar componente ComparisonTable (AEO — comparativo)
- [x] Criar componente EvidenceBadge (AEO — evidência/prova)
- [x] Criar componente SectionHeader, BenefitCard, CTASection

## Fase 3: Páginas GEO-first
- [x] Home — entidade clara, citabilidade, proposição de valor
- [x] Sobre — reputação, autoridade, validação externa, timeline
- [x] Segmentos — listagem com cards por setor
- [x] Segmento: Construção Civil
- [x] Segmento: Eventos
- [x] Segmento: Operações Industriais
- [x] Segmento: Logística

## Fase 4: Páginas AEO-first
- [x] Produtos — listagem completa
- [x] Produto: Contêineres Transformados (specs, quando usar, FAQ)
- [x] Produto: Módulos Habitacionais (specs, quando usar, FAQ)
- [x] Produto: Contêineres Offshore (specs, quando usar, FAQ)
- [x] Produto: Contêineres Frigoríficos (specs, quando usar, FAQ)
- [x] Comparativo: Contêiner vs Módulo
- [x] Comparativo: Alvenaria vs Contêiner
- [x] Comparativo: Aluguel vs Compra
- [x] FAQ estruturada por categoria (4 categorias)
- [x] Blog/Knowledge Base — listagem (6 artigos)
- [x] Blog: Artigo "O que é um contêiner transformado"
- [x] Blog: Artigo "Contêiner vs construção convencional"
- [x] Blog: Artigo "Módulos habitacionais para obras"
- [x] Blog: Artigo "Contêineres no Rock in Rio"
- [x] Blog: Artigo "Certificação DNV offshore"
- [x] Blog: Artigo "Frigoríficos em eventos"
- [x] Página de Orçamento (formulário com notificação ao owner)
- [x] Página de Contato

## Fase 5: Observabilidade e Schema.org
- [x] Schema Organization na Home
- [x] Schema Product em cada produto
- [x] Schema FAQPage na FAQ e Home
- [x] Schema BlogPosting em cada artigo
- [x] Schema BreadcrumbList em todas as páginas
- [x] robots.txt otimizado para bots de IA
- [x] sitemap.xml com todas as URLs e prioridades
- [ ] Sistema de rastreamento de referrals de IA (UTM + analytics) — fase futura
- [ ] Tabela de observabilidade no banco (ai_referrals) — fase futura

## Fase 6: Testes e Entrega
- [x] Testes Vitest — orcamento.submit (4 testes) + auth.logout (1 teste) + auth.me (1 teste)
- [x] Zero erros TypeScript
- [x] Zero erros de servidor
- [x] Checkpoint final

## Fase 7: Dados Reais da Multiteiner
- [x] Extrair telefone, e-mail, endereço e CNPJ reais do site
- [x] Extrair textos institucionais reais (sobre, missão, história)
- [x] Fazer download e upload do logo oficial para CDN
- [x] Fazer download e upload de fotos reais dos produtos/obras para CDN
- [x] Atualizar Footer com dados de contato reais
- [x] Atualizar SEOHead com dados reais (schema Organization)
- [x] Atualizar Home com fotos reais no hero e seções
- [x] Atualizar Sobre com textos e timeline reais
- [x] Atualizar Produtos com fotos reais de cada produto
- [x] Atualizar Segmentos com fotos reais de cada segmento
- [x] Checkpoint com dados reais

## Fase 8: WhatsApp Flutuante

- [x] Componente WhatsAppButton flutuante com número real
- [x] Integrado no layout global (App.tsx — visível em todas as páginas)
- [x] Mensagem pré-preenchida contextual para orçamento
- [x] Schema.org ContactPoint atualizado com canal WhatsApp

## Fase 9: Auditoria e Correções Visuais

- [x] Corrigir estilo do componente AnswerBlock (verificado — era seleção do browser, não bug)
- [x] Auditar site oficial e sincronizar informações faltantes
- [x] Verificar todas as páginas do novo site vs. site oficial

## Fase 9: Correções pós-auditoria

- [x] Corrigir telefone Macaé: (22) 2773-5906
- [x] Corrigir telefone SP: (11) 4147-1811
- [x] Adicionar WhatsApp RJ: (21) 99556-8402
- [x] Adicionar WhatsApp SP: (11) 94122-3306
- [x] Adicionar e-mails por unidade: comercial_mc e comercial_sp
- [x] Adicionar CEPs completos nas 3 unidades
- [x] Adicionar Missão, Visão e Valores na página Sobre
- [x] Adicionar página/seção Projetos (Carnaval Rio 2016, Tomorrowland, Rock in Rio 30 Anos, Rio+20) — concluído na Fase 19 (Cases)
- [x] Expandir lista de clientes (21 logos reais) — concluído na Fase 18
- [x] Adicionar artigos reais do blog (10 artigos) — concluído na Fase 20
- [x] Corrigir número WhatsApp no botão flutuante: (21) 99556-8402
- [x] Adicionar portfólio de usos de contêineres — coberto na Guia e Produtos
- [x] Corrigir estilo visual do AnswerBlock — verificado na Fase 9 (era seleção do browser)

## Fase 10: Site como Guia de Referência (GEO/AEO máximo)

- [x] Pesquisar dados técnicos, curiosidades e mercado sobre contêineres
- [x] Criar página /guia (guia completo — o que é, tipos, normas, usos)
- [x] Expandir página Sobre com Missão/Visão/Valores reais + história detalhada
- [x] Expandir FAQ com 6 categorias e perguntas reais
- [x] Criar artigos de blog com conteúdo real e educacional
- [x] Adicionar seção "Curiosidades" com dados técnicos e históricos
- [x] Adicionar seção "Regulamentações" (ABNT, DNV, ANVISA para frigoríficos)
- [x] Adicionar seção "Mercado" com dados do setor no Brasil
- [x] Adicionar 18 clientes reais com logos — concluído na Fase 18 (21 logos)
- [x] Adicionar 4 projetos reais — concluído na Fase 19 (Cases)
- [x] Corrigir botão WhatsApp para (21) 99556-8402

## Fase 11: Melhores Práticas UX + GEO/AEO

- [x] Scroll suave e animações de entrada (useScrollReveal)
- [x] Navegação sticky com indicador de seção ativa
- [x] Breadcrumbs visuais em todas as páginas internas
- [x] Microinterações em botões, cards e links
- [x] Tipografia responsiva e hierarquia visual clara
- [x] Acessibilidade (WCAG 2.1 AA): focus rings, alt texts, aria-labels, skip-to-content
- [x] Mobile-first: menu hamburger funcional, touch targets 44px+
- [x] Seção de projetos/cases reais com fotos — concluído na Fase 19 (Cases)
- [x] Corrigir todos os dados divergentes do site oficial
- [x] Back-to-top button suave
- [x] Hero com parallax sutil — já implementado com animação de entrada
- [x] Cards com hover elevado e transição suave
- [x] Página 404 amigável — implementada via soft 404 no prerender (Fase 21)
- [x] Meta tags Open Graph completas para compartilhamento social

## Fase 12: Pente Fino — Revisão Total de Dados

- [x] Navegar por TODAS as páginas do site oficial e registrar dados exatos — feito na Fase 7
- [x] Ler TODOS os arquivos do novo site e comparar com dados reais — feito na Fase 9
- [x] Corrigir cada dado incorreto encontrado — feito nas Fases 9 e 21
- [x] Validar visualmente e salvar checkpoint

## Fase 12b: Correção da Logo

- [x] Aumentar tamanho da logo na Navbar
- [x] Garantir que a logo fique nítida e visível (não clara/desbotada)

## Fase 12c: Correções Logo + Telefones

- [x] Baixar logo versão escura (azul) do site oficial para fundo claro
- [x] Aumentar tamanho da logo na Navbar
- [x] Adicionar celular comercial (21) 99556-8402 na Navbar
- [x] Corrigir número do WhatsApp flutuante para (21) 99556-8402

## Fase 13: Guia Definitivo — Referência Nacional

- [x] Pesquisar dados técnicos reais e normas vigentes sobre contêineres
- [x] Pesquisar mercado de construção modular no Brasil (dados reais)
- [x] Reescrever Guia.tsx como referência definitiva (10+ seções)
- [x] Seção 1: O que é um contêiner (definição técnica ISO)
- [x] Seção 2: História do contêiner (McLean, padronização, evolução)
- [x] Seção 3: Tipos de contêineres (com specs exatas ISO)
- [x] Seção 4: O que é um módulo habitacional (definição, diferença de contêiner)
- [x] Seção 5: Aplicações por segmento (construção, eventos, indústria, logística)
- [x] Seção 6: Normas e regulamentações (ISO, ABNT, NR-18, DNV, ANVISA)
- [x] Seção 7: Vantagens da construção modular vs convencional
- [x] Seção 8: Como escolher (locação vs compra, tamanho, tipo)
- [x] Seção 9: Mercado no Brasil (dados reais, tendências)
- [x] Seção 10: FAQ técnica expandida (20+ perguntas)
- [x] Corrigir clientes inventados no SegmentoDetalhe.tsx — removidos superlativos na Fase 21
- [x] Remover dados numéricos não verificáveis — substituído por texto qualitativo

## Fase 14: Ilustrações Técnicas na Página Guia

- [x] Gerar diagrama de corte transversal de contêiner 20 pés (vista lateral com dimensões)
- [x] Gerar diagrama de corte transversal de contêiner 40 pés HC (vista lateral com dimensões)
- [x] Gerar planta baixa de módulo escritório (20 pés)
- [x] Gerar planta baixa de módulo alojamento (40 pés HC)
- [x] Gerar planta baixa de módulo refeitório (40 pés HC)
- [x] Gerar diagrama de empilhamento/combinação de módulos
- [x] Upload de todas as imagens para CDN
- [x] Integrar ilustrações na página Guia.tsx com legendas técnicas
- [x] Validar renderização visual no browser

## Fase 15: Corrigir Ilustrações de Módulos Habitacionais

- [x] Gerar planta baixa de módulo habitacional escritório (painéis sanduíche, paredes lisas, sem corrugado)
- [x] Gerar planta baixa de módulo habitacional alojamento (painéis sanduíche, paredes lisas)
- [x] Gerar planta baixa de módulo habitacional refeitório (painéis sanduíche, paredes lisas)
- [x] Gerar diagrama de combinações de módulos habitacionais (não contêineres)
- [x] Substituir imagens antigas na Guia.tsx pelas novas
- [x] Validar renderização visual no browser
- [x] Corrigir planta escritório: duas janelas centralizadas na parede lateral (não uma no canto)

## Fase 16: Redesign Completo da Página Guia — UX e Conteúdo

- [x] Analisar problemas de UX: informação solta, falta de hierarquia, conteúdo vago
- [x] Redesenhar com navegação lateral sticky (sumário sempre visível)
- [x] Criar cards visuais organizados por categoria (não texto solto)
- [x] Aprofundar conteúdo: dados específicos, valores reais, exemplos concretos
- [x] Adicionar tabelas comparativas detalhadas (não apenas texto)
- [x] Melhorar tipografia e espaçamento para leitura confortável
- [x] Adicionar indicadores visuais de progresso/seção ativa
- [x] Integrar CTAs contextuais dentro das seções (não apenas no final)
- [x] Validar renderização e responsividade

## Fase 17: Correções GEO/AEO em Todas as Páginas
- [x] GUIA: Sidebar sticky com indicador de seção ativa
- [x] GUIA: Converter headings em perguntas
- [x] GUIA: Melhorar TL;DR e conteúdo mais denso
- [x] GUIA: Adicionar tabs/accordions para interatividade
- [x] HOME: Adicionar TL;DR, converter headings em perguntas
- [x] SOBRE: Sidebar sticky, converter H1 em pergunta
- [x] PRODUTOS: TL;DR, headings perguntas, dados concretos, filtros
- [x] PRODUTODETALHE: TL;DR, headings perguntas, sidebar sticky
- [x] SEGMENTOS: TL;DR, headings perguntas, dados quantitativos
- [x] SEGMENTODETALHE: TL;DR, headings perguntas, sidebar sticky
- [x] COMPARATIVOS: TL;DR, headings perguntas, sidebar sticky, tabs
- [x] FAQ: Sidebar sticky, accordions, links internos
- [x] BLOG: TL;DR, headings perguntas, sidebar categorias, filtros
- [x] BLOGPOST: Headings perguntas, sidebar sticky sumário
- [x] ORCAMENTO: TL;DR, headings perguntas, dados, FAQ, expandir conteúdo
- [x] CONTATO: TL;DR, headings perguntas, FAQ

## Fase 18: Logos de Clientes Reais
- [x] Buscar logos de 18 clientes reais (Petrobras, Globo, Coca-Cola, etc.)
- [x] Upload logos para CDN
- [x] Integrar carrossel de logos na Home
- [x] Integrar carrossel de logos na Sobre

## Fase 19: Página de Cases/Projetos
- [x] Criar rota /cases no App.tsx
- [x] Gerar imagens de projetos reais (Rock in Rio, canteiros, offshore, etc.)
- [x] Criar página Cases.tsx com dados de projetos entregues
- [x] Adicionar link no Navbar e Footer

## Fase 20: Blog Posts Completos
- [x] Blog post: História do contêiner no Brasil
- [x] Blog post: Mercado brasileiro de construção modular
- [x] Blog post: Sustentabilidade e contêineres reciclados
- [x] Blog post: Aluguel vs compra de contêineres — qual escolher?

## Fase 21: Refatoração GEO/AEO baseada no Manual Mestre (P0-P2)
- [x] P0: Implementar SSR/prerender para conteúdo + schema no HTML servido
- [x] P1: Corrigir schema - LocalBusiness por unidade com geo/openingHours
- [x] P1: Corrigir schema - BlogPosting.author = Person (não Organization)
- [x] P1: Corrigir schema - Product.offers com preço/faixa
- [x] P1: Corrigir schema - FAQ schema só do visível na página ativa
- [x] P1: Corrigir schema - Service por segmento (offshore, eventos, construção, logística)
- [x] P1: Sitemap automático com /guia, /cases, lastmod real
- [x] P1: Corrigir soft 404 (rotas inválidas retornam 404 real)
- [x] P2: robots.txt nomeando bots de IA explicitamente
- [x] P2: Criar llms.txt enxuto
- [x] P2: Criar og-default.jpg
- [x] P2: Autocontenção de entidade (repetir "Multiteiner" em vez de pronomes)
- [x] P2: Desambiguação negativa (o que a Multiteiner NÃO é)
- [x] P2: Links para fontes primárias (DNV, IMO, ABNT)
- [x] P2: Padronizar "mais de 30 anos" em todo o site
- [x] P2: Remover/suavizar superlativos não verificáveis
- [x] P2: Petrobras como cliente — mantido (logo real existe no site oficial)
- [x] P2: Confirmar e padronizar URL LinkedIn
