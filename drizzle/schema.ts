import {
  boolean,
  int,
  json,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

// ─── Users ────────────────────────────────────────────────────────────────────
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

// ─── Produtos ─────────────────────────────────────────────────────────────────
export const products = mysqlTable("products", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  name: varchar("name", { length: 200 }).notNull(),
  category: mysqlEnum("category", ["container", "modulo", "offshore", "frigorifico"]).notNull(),
  headline: text("headline").notNull(),
  primaryAnswer: text("primary_answer").notNull(),       // AEO: resposta principal
  description: text("description").notNull(),
  applications: json("applications").notNull(),          // AEO: lista de aplicações
  specifications: json("specifications").notNull(),      // AEO: tabela de specs
  whenToUse: text("when_to_use").notNull(),              // AEO: quando usar
  whenNotToUse: text("when_not_to_use").notNull(),       // AEO: quando não usar
  differentials: json("differentials").notNull(),        // GEO: diferenciais citáveis
  citablePassages: json("citable_passages").notNull(),   // GEO: passagens citáveis
  schemaJson: json("schema_json"),                       // GEO: JSON-LD do produto
  metaTitle: varchar("meta_title", { length: 70 }),
  metaDescription: varchar("meta_description", { length: 160 }),
  published: boolean("published").default(true).notNull(),
  sortOrder: int("sort_order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ─── Segmentos ────────────────────────────────────────────────────────────────
export const segments = mysqlTable("segments", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  name: varchar("name", { length: 200 }).notNull(),
  icon: varchar("icon", { length: 64 }),
  headline: text("headline").notNull(),
  primaryAnswer: text("primary_answer").notNull(),       // AEO: resposta principal
  problem: text("problem").notNull(),                    // GEO: problema do segmento
  solution: text("solution").notNull(),                  // GEO: solução oferecida
  useCases: json("use_cases").notNull(),                 // AEO: casos de uso
  benefits: json("benefits").notNull(),                  // GEO: benefícios citáveis
  relatedProducts: json("related_products").notNull(),
  citablePassages: json("citable_passages").notNull(),   // GEO: passagens citáveis
  faqItems: json("faq_items").notNull(),                 // AEO: FAQ do segmento
  metaTitle: varchar("meta_title", { length: 70 }),
  metaDescription: varchar("meta_description", { length: 160 }),
  published: boolean("published").default(true).notNull(),
  sortOrder: int("sort_order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ─── Comparativos ─────────────────────────────────────────────────────────────
export const comparisons = mysqlTable("comparisons", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  optionA: varchar("option_a", { length: 100 }).notNull(),
  optionB: varchar("option_b", { length: 100 }).notNull(),
  primaryAnswer: text("primary_answer").notNull(),       // AEO: resposta principal
  summary: text("summary").notNull(),
  criteria: json("criteria").notNull(),                  // AEO: tabela comparativa
  whenChooseA: text("when_choose_a").notNull(),
  whenChooseB: text("when_choose_b").notNull(),
  verdict: text("verdict").notNull(),                    // AEO: veredicto claro
  citablePassages: json("citable_passages").notNull(),   // GEO: passagens citáveis
  faqItems: json("faq_items").notNull(),
  metaTitle: varchar("meta_title", { length: 70 }),
  metaDescription: varchar("meta_description", { length: 160 }),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqItems = mysqlTable("faq_items", {
  id: int("id").autoincrement().primaryKey(),
  category: varchar("category", { length: 100 }).notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  answerShort: varchar("answer_short", { length: 300 }),  // AEO: snippet curto
  relatedProduct: varchar("related_product", { length: 120 }),
  relatedSegment: varchar("related_segment", { length: 120 }),
  intent: mysqlEnum("intent", ["definicional", "comparativo", "operacional", "preco", "prazo"]).notNull(),
  sortOrder: int("sort_order").default(0),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ─── Blog / Knowledge Base ────────────────────────────────────────────────────
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  headline: text("headline").notNull(),
  primaryAnswer: text("primary_answer").notNull(),       // AEO: resposta principal
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  tags: json("tags").notNull(),
  author: varchar("author", { length: 100 }).default("Multiteiner"),
  citablePassages: json("citable_passages").notNull(),   // GEO: passagens citáveis
  snippetCandidates: json("snippet_candidates"),         // AEO: candidatos a snippet
  relatedProducts: json("related_products"),
  relatedSegments: json("related_segments"),
  metaTitle: varchar("meta_title", { length: 70 }),
  metaDescription: varchar("meta_description", { length: 160 }),
  publishedAt: timestamp("published_at"),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ─── Leads / Orçamentos ───────────────────────────────────────────────────────
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 30 }),
  company: varchar("company", { length: 200 }),
  segment: varchar("segment", { length: 120 }),
  product: varchar("product", { length: 120 }),
  message: text("message"),
  type: mysqlEnum("type", ["orcamento", "contato", "newsletter"]).default("contato").notNull(),
  source: varchar("source", { length: 200 }),            // GEO: origem do lead
  utmSource: varchar("utm_source", { length: 100 }),
  utmMedium: varchar("utm_medium", { length: 100 }),
  utmCampaign: varchar("utm_campaign", { length: 100 }),
  referrer: text("referrer"),
  status: mysqlEnum("status", ["novo", "em_contato", "convertido", "descartado"]).default("novo").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ─── Observabilidade / AI Referrals ───────────────────────────────────────────
export const aiReferrals = mysqlTable("ai_referrals", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: varchar("session_id", { length: 100 }),
  referrer: text("referrer"),
  referrerType: mysqlEnum("referrer_type", [
    "chatgpt", "perplexity", "gemini", "copilot", "claude", "bard", "bing_ai", "other_ai", "organic", "direct"
  ]).default("direct").notNull(),
  landingPage: text("landing_page"),
  userAgent: text("user_agent"),
  query: text("query"),                                  // GEO: query que originou a visita
  country: varchar("country", { length: 10 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ─── Depoimentos / Provas Sociais ─────────────────────────────────────────────
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  author: varchar("author", { length: 200 }).notNull(),
  role: varchar("role", { length: 200 }),
  company: varchar("company", { length: 200 }),
  content: text("content").notNull(),
  segment: varchar("segment", { length: 120 }),
  product: varchar("product", { length: 120 }),
  featured: boolean("featured").default(false).notNull(),
  sortOrder: int("sort_order").default(0),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ─── Projetos / Cases ─────────────────────────────────────────────────────────
export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  client: varchar("client", { length: 200 }),
  segment: varchar("segment", { length: 120 }),
  product: varchar("product", { length: 120 }),
  description: text("description").notNull(),
  challenge: text("challenge"),
  solution: text("solution"),
  result: text("result"),
  imageUrl: text("image_url"),
  featured: boolean("featured").default(false).notNull(),
  published: boolean("published").default(true).notNull(),
  sortOrder: int("sort_order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ─── Types ────────────────────────────────────────────────────────────────────
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;
export type Segment = typeof segments.$inferSelect;
export type InsertSegment = typeof segments.$inferInsert;
export type Comparison = typeof comparisons.$inferSelect;
export type InsertComparison = typeof comparisons.$inferInsert;
export type FaqItem = typeof faqItems.$inferSelect;
export type InsertFaqItem = typeof faqItems.$inferInsert;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;
export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
export type AiReferral = typeof aiReferrals.$inferSelect;
export type InsertAiReferral = typeof aiReferrals.$inferInsert;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;
