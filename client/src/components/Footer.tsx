import { Link } from "wouter";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin, ArrowRight } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_multiteiner_5a2e6a04.png";

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
  { label: "Guia Completo", href: "/guia" },
  { label: "Comparativos", href: "/comparativos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const UNITS = [
  {
    name: "Sede — Duque de Caxias (RJ)",
    address: "Av. OL 1-B, Quadra C, Lote 10 — Duque de Caxias, RJ",
    phone: "(21) 3534-3400",
    email: "comercial_rj@multiteiner.com.br",
  },
  {
    name: "Filial — Itapecerica da Serra (SP)",
    address: "Estrada Ferreira Guedes, nº 1134 — Itapecerica da Serra, SP",
    phone: "(11) 4147-1811",
    email: "comercial_sp@multiteiner.com.br",
  },
  {
    name: "Filial — Macaé (RJ)",
    address: "Av. Mem de Sá, nº 809 — Macaé, RJ",
    phone: "(22) 2773-5906",
    email: "comercial_mc@multiteiner.com.br",
  },
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
      <meta itemProp="legalName" content="Multiteiner Comércio e Locação de Contêineres Ltda." />
      <meta itemProp="url" content="https://www.multiteiner.com.br" />
      <meta itemProp="logo" content={LOGO_URL} />
      <meta itemProp="description" content="Maior empresa brasileira em transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência." />
      <meta itemProp="foundingDate" content="1993" />
      <meta itemProp="areaServed" content="Brasil" />
      <link itemProp="sameAs" href="https://instagram.com/multiteiner" />
      <link itemProp="sameAs" href="https://linkedin.com/company/multiteiner" />
      <link itemProp="sameAs" href="https://youtube.com/@multiteiner" />

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
          Solicitar Orçamento Gratuito <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <img
                src={LOGO_URL}
                alt="Multiteiner"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
                width={160}
                height={40}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.62)" }}>
              Somos a <strong style={{ color: "#F2C200" }}>maior empresa brasileira</strong> em transformação de contêineres e módulos habitacionais, com mais de 30 anos de experiência. Atendemos construção civil, eventos, operações industriais e logística em todo o Brasil.
            </p>

            {/* Units */}
            <div className="space-y-4 mb-6">
              {UNITS.map((unit) => (
                <div
                  key={unit.name}
                  className="p-3 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  itemScope
                  itemProp="location"
                  itemType="https://schema.org/Place"
                >
                  <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "#F2C200" }}>
                    {unit.name}
                  </p>
                  <div className="flex items-start gap-2 text-xs mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <MapPin className="w-3 h-3 shrink-0 mt-0.5" style={{ color: "#F2C200" }} />
                    <span itemProp="address">{unit.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <a href={`tel:${unit.phone.replace(/\D/g, "")}`} className="flex items-center gap-1 hover:text-white transition-colors">
                      <Phone className="w-3 h-3" style={{ color: "#F2C200" }} /> {unit.phone}
                    </a>
                    <a href={`mailto:${unit.email}`} className="flex items-center gap-1 hover:text-white transition-colors">
                      <Mail className="w-3 h-3" style={{ color: "#F2C200" }} /> {unit.email}
                    </a>
                  </div>
                </div>
              ))}
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
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F2C200" }}>Produtos</h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F2C200" }}>Segmentos</h3>
            <ul className="space-y-2.5">
              {SEGMENTS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F2C200" }}>Empresa</h3>
            <ul className="space-y-2.5">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>{label}</Link>
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
            © {new Date().getFullYear()} Multiteiner Comércio e Locação de Contêineres Ltda. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            CNPJ: 29.752.140/0001-07
          </p>
        </div>
      </div>
    </footer>
  );
}
