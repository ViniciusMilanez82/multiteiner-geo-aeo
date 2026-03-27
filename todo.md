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
- [ ] Adicionar página/seção Projetos (Carnaval Rio 2016, Tomorrowland, Rock in Rio 30 Anos, Rio+20)
- [ ] Expandir lista de clientes (18 logos reais: ThyssenKrupp, Governo RJ, Marinha, Globo, Coca-Cola, FIESA, Petrobras, Queiroz Galvão, Record, Andrade Gutierrez, Odebrecht, Suzano, Siemens, Rede D'Or, Camargo Corrêa, Ambev)
- [ ] Adicionar artigos reais do blog (3 artigos reais)
- [x] Corrigir número WhatsApp no botão flutuante: (21) 99556-8402
- [ ] Adicionar portfólio de usos de contêineres (escritórios, lojas, depósitos, lanchonetes, refeitórios, enfermarias, salas de aula, laboratórios, stand de vendas, dormitórios)
- [ ] Corrigir estilo visual do AnswerBlock (remover aparência de texto selecionado)

## Fase 10: Site como Guia de Referência (GEO/AEO máximo)

- [x] Pesquisar dados técnicos, curiosidades e mercado sobre contêineres
- [x] Criar página /guia (guia completo — o que é, tipos, normas, usos)
- [x] Expandir página Sobre com Missão/Visão/Valores reais + história detalhada
- [x] Expandir FAQ com 6 categorias e perguntas reais
- [x] Criar artigos de blog com conteúdo real e educacional
- [x] Adicionar seção "Curiosidades" com dados técnicos e históricos
- [x] Adicionar seção "Regulamentações" (ABNT, DNV, ANVISA para frigoríficos)
- [x] Adicionar seção "Mercado" com dados do setor no Brasil
- [ ] Adicionar 18 clientes reais com logos
- [ ] Adicionar 4 projetos reais (Carnaval Rio, Tomorrowland, Rock in Rio, Rio+20)
- [x] Corrigir botão WhatsApp para (21) 99556-8402

## Fase 11: Melhores Práticas UX + GEO/AEO

- [x] Scroll suave e animações de entrada (useScrollReveal)
- [x] Navegação sticky com indicador de seção ativa
- [x] Breadcrumbs visuais em todas as páginas internas
- [x] Microinterações em botões, cards e links
- [x] Tipografia responsiva e hierarquia visual clara
- [x] Acessibilidade (WCAG 2.1 AA): focus rings, alt texts, aria-labels, skip-to-content
- [x] Mobile-first: menu hamburger funcional, touch targets 44px+
- [ ] Seção de projetos/cases reais com fotos
- [x] Corrigir todos os dados divergentes do site oficial
- [ ] Back-to-top button suave
- [ ] Hero com parallax sutil
- [x] Cards com hover elevado e transição suave
- [ ] Página 404 amigável com sugestões
- [x] Meta tags Open Graph completas para compartilhamento social
