import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";

/* ─────────────────────────────────────────────────────────────────────────────
   Componentes GEO/AEO — Multiteiner
   Cores: Navy #1B3A6B | Gold #F2C200 | Blue #2D7DD2
   ───────────────────────────────────────────────────────────────────────── */

// ── Answer Block ─────────────────────────────────────────────────────────────
// AEO: resposta principal clara e extraível por motores de IA
interface AnswerBlockProps {
  question?: string;
  answer: string;
  className?: string;
}
export function AnswerBlock({ question, answer, className = "" }: AnswerBlockProps) {
  return (
    <div className={`answer-block ${className}`} role="note" aria-label="Resposta principal">
      {question && (
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C9A000" }}>
          {question}
        </p>
      )}
      <p className="text-base font-medium leading-relaxed" style={{ color: "#1A1A2E" }}>{answer}</p>
    </div>
  );
}

// ── Citable Passage ───────────────────────────────────────────────────────────
// GEO: passagem citável por motores generativos
interface CitablePassageProps {
  text: string;
  source?: string;
  className?: string;
}
export function CitablePassage({ text, source, className = "" }: CitablePassageProps) {
  return (
    <blockquote className={`citable-passage ${className}`} cite={source} itemProp="description">
      <p className="text-base italic leading-relaxed relative z-10" style={{ color: "#1A1A2E" }}>{text}</p>
      {source && (
        <footer className="mt-2 text-xs" style={{ color: "#64748B" }}>— {source}</footer>
      )}
    </blockquote>
  );
}

// ── Entity Badge ──────────────────────────────────────────────────────────────
// GEO: entidade clara e inequívoca
interface EntityBadgeProps {
  label: string;
  icon?: React.ReactNode;
}
export function EntityBadge({ label, icon }: EntityBadgeProps) {
  return (
    <span className="entity-badge">
      {icon && <span>{icon}</span>}
      {label}
    </span>
  );
}

// ── Spec Table ────────────────────────────────────────────────────────────────
// AEO: tabela de especificações extraível
interface SpecRow {
  label: string;
  value: string;
  highlight?: boolean;
}
interface SpecTableProps {
  title?: string;
  rows: SpecRow[];
  className?: string;
}
export function SpecTable({ title, rows, className = "" }: SpecTableProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border ${className}`}>
      {title && (
        <div
          className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
          style={{ background: "#1B3A6B", color: "#F2C200" }}
        >
          {title}
        </div>
      )}
      <table className="spec-table">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td
                className="font-medium w-1/2"
                style={{ color: row.highlight ? "#1B3A6B" : "#64748B" }}
              >
                {row.label}
              </td>
              <td
                className="font-semibold"
                style={{ color: row.highlight ? "#C9A000" : "#1A1A2E" }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Comparison Table ──────────────────────────────────────────────────────────
// AEO: comparativo lado a lado estruturado
interface ComparisonRow {
  criteria: string;
  optionA: string;
  optionB: string;
  winner?: "A" | "B" | "tie";
}
interface ComparisonTableProps {
  optionA: string;
  optionB: string;
  rows: ComparisonRow[];
  className?: string;
}
export function ComparisonTable({ optionA, optionB, rows, className = "" }: ComparisonTableProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest w-1/3"
              style={{ background: "#1B3A6B", color: "#fff" }}>
              Critério
            </th>
            <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest w-1/3"
              style={{ background: "#1B3A6B", color: "#F2C200" }}>
              {optionA}
            </th>
            <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest w-1/3"
              style={{ background: "#2A5298", color: "#F7D84A" }}>
              {optionB}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
              <td className="px-4 py-3 font-medium border-b border-border" style={{ color: "#1A1A2E" }}>
                {row.criteria}
              </td>
              <td className="px-4 py-3 text-center border-b border-border"
                style={{ color: row.winner === "A" ? "#1B3A6B" : "#64748B", fontWeight: row.winner === "A" ? 700 : 400 }}>
                {row.winner === "A" && <span className="mr-1 text-green-600">✓</span>}
                {row.optionA}
              </td>
              <td className="px-4 py-3 text-center border-b border-border"
                style={{ color: row.winner === "B" ? "#1B3A6B" : "#64748B", fontWeight: row.winner === "B" ? 700 : 400 }}>
                {row.winner === "B" && <span className="mr-1 text-green-600">✓</span>}
                {row.optionB}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── FAQ Block ─────────────────────────────────────────────────────────────────
// AEO: FAQ estruturada com schema.org nativo + animação suave
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQBlockProps {
  items: FAQItem[];
  className?: string;
}
export function FAQBlock({ items, className = "" }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className={`space-y-3 ${className}`} itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => (
        <FAQAccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, item.answer]);

  return (
    <div
      className="border border-border rounded-lg overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 font-semibold cursor-pointer transition-colors list-none select-none hover:bg-gray-50 bg-white text-left"
        style={{ color: "#1A1A2E" }}
        aria-expanded={isOpen}
        itemProp="name"
      >
        <span>{item.question}</span>
        <span
          className={`ml-3 shrink-0 text-lg transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "#1B3A6B" }}
        >
          ▾
        </span>
      </button>
      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? `${height}px` : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <div
          ref={contentRef}
          className="px-5 py-4 border-t border-border"
          style={{ background: "#F8FAFC" }}
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p className="text-sm leading-relaxed" style={{ color: "#475569" }} itemProp="text">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Evidence Badge ────────────────────────────────────────────────────────────
// AEO: evidência numérica citável
interface EvidenceBadgeProps {
  value: string;
  label: string;
}
export function EvidenceBadge({ value, label }: EvidenceBadgeProps) {
  return (
    <div className="text-center px-6 py-5">
      <div className="text-4xl font-extrabold mb-1" style={{ color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}>
        {value}
      </div>
      <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>{label}</div>
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────
// GEO: cabeçalho de seção com entidade clara
interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}
export function SectionHeader({ badge, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div className={`mb-3 ${centered ? "flex justify-center" : ""}`}>
          <span className="entity-badge">{badge}</span>
        </div>
      )}
      <div className={`gold-divider ${centered ? "mx-auto" : ""}`} />
      <h2
        className="text-3xl lg:text-4xl font-bold mt-2"
        style={{ color: light ? "#fff" : "#1A1A2E" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}
          style={{ color: light ? "rgba(255,255,255,0.72)" : "#64748B" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Benefit Card ──────────────────────────────────────────────────────────────
// GEO: benefício citável com ícone
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="card-hover p-6 rounded-xl border border-border bg-white">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ background: "rgba(27, 58, 107, 0.08)" }}
      >
        <span style={{ color: "#1B3A6B" }}>{icon}</span>
      </div>
      <h3 className="font-bold mb-2" style={{ color: "#1A1A2E" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{description}</p>
    </div>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────
interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}
export function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = false,
}: CTASectionProps) {
  return (
    <section
      className="py-20"
      style={{ background: dark ? "#1B3A6B" : "#F2C200" }}
    >
      <div className="container text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-4"
          style={{ color: dark ? "#F2C200" : "#1B3A6B" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: dark ? "rgba(255,255,255,0.72)" : "#2A5298" }}
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-bold text-sm transition-all hover:opacity-90"
            style={
              dark
                ? { background: "#F2C200", color: "#1B3A6B" }
                : { background: "#1B3A6B", color: "#F2C200" }
            }
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-bold text-sm border-2 transition-all"
              style={
                dark
                  ? { borderColor: "#F2C200", color: "#F2C200" }
                  : { borderColor: "#1B3A6B", color: "#1B3A6B" }
              }
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
