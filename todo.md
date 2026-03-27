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
- [ ] Extrair telefone, e-mail, endereço e CNPJ reais do site
- [ ] Extrair textos institucionais reais (sobre, missão, história)
- [ ] Fazer download e upload do logo oficial para CDN
- [ ] Fazer download e upload de fotos reais dos produtos/obras para CDN
- [ ] Atualizar Footer com dados de contato reais
- [ ] Atualizar SEOHead com dados reais (schema Organization)
- [ ] Atualizar Home com fotos reais no hero e seções
- [ ] Atualizar Sobre com textos e timeline reais
- [ ] Atualizar Produtos com fotos reais de cada produto
- [ ] Atualizar Segmentos com fotos reais de cada segmento
- [ ] Checkpoint com dados reais
