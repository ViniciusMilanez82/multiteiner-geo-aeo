import { Link } from "wouter";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin } from "lucide-react";

const PRODUCTS = [
  { label: "Contêineres", href: "/produtos/conteineres" },
  { label: "Módulos Habitacionais", href: "/produtos/modulos" },
  { label: "Offshore", href: "/produtos/offshore" },
  { label: "Frigoríficos", href: "/produtos/frigorificos" },
];

const SEGMENTS = [
  { label: "Construção Civil", href: "/segmentos/construcao-civil" },
  { label: "Eventos", href: "/segmentos/eventos" },
  { label: "Operações Industriais", href: "/segmentos/operacoes-industriais" },
  { label: "Logística", href: "/segmentos/logistica" },
];

const COMPANY = [
  { label: "Sobre a Multiteiner", href: "/sobre" },
  { label: "Comparativos", href: "/comparativos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Solicitar Orçamento", href: "/orcamento" },
];

const SOCIALS = [
  { Icon: Instagram, href: "https://instagram.com/multiteiner", label: "Instagram" },
  { Icon: Linkedin, href: "https://linkedin.com/company/multiteiner", label: "LinkedIn" },
  { Icon: Youtube, href: "https://youtube.com/@multiteiner", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#0F2347" }}
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Schema.org hidden metadata — GEO */}
      <meta itemProp="name" content="Multiteiner" />
      <meta itemProp="url" content="https://www.multiteiner.com.br" />
      <meta itemProp="description" content="Maior empresa brasileira em transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência." />
      <meta itemProp="foundingDate" content="1990" />
      <meta itemProp="areaServed" content="Brasil" />

      {/* CTA band */}
      <div className="py-10 text-center" style={{ background: "#F2C200" }}>
        <p className="text-lg font-bold mb-4" style={{ color: "#1B3A6B", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>
          Pronto para transformar seu projeto com contêineres?
        </p>
        <Link
          href="/orcamento"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-bold text-sm transition-all hover:opacity-90 hover:shadow-lg"
          style={{ background: "#1B3A6B", color: "#F2C200" }}
        >
          Solicitar Orçamento Gratuito
        </Link>
      </div>

      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_8b88d7e1.png"
                alt="Multiteiner"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.62)" }}>
              Somos a <strong style={{ color: "#F2C200" }}>maior empresa brasileira</strong> em transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência. Atendemos construção civil, eventos, operações industriais e logística.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              <a href="tel:+552135343400" className="flex items-center gap-2.5 text-sm transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.75)" }}>
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#F2C200" }} />
                <span itemProp="telephone">(21) 3534-3400 / 3534-3434</span>
              </a>
              <a href="mailto:comercial_rj@multiteiner.com.br" className="flex items-center gap-2.5 text-sm transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.75)" }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#F2C200" }} />
                <span itemProp="email">comercial_rj@multiteiner.com.br</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F2C200" }} />
                <span itemProp="address">Av. OL 1-B, Quadra C, Lote 10 — Duque de Caxias, RJ</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F2C200" }} />
                <span>Estrada Ferreira Guedes, nº 1134 — Itapecerica da Serra, SP</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F2C200" }} />
                <span>Av. Mem de Sá, nº 809 — Macaé, RJ</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-md flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F2C200"; (e.currentTarget as HTMLElement).style.color = "#1B3A6B"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F2C200" }}>
              Produtos
            </h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F2C200" }}>
              Segmentos
            </h3>
            <ul className="space-y-2.5">
              {SEGMENTS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F2C200" }}>
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Multiteiner. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="text-xs transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.4)" }}>
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-xs transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.4)" }}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
