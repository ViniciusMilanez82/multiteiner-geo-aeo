import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  {
    label: "Produtos",
    href: "/produtos",
    children: [
      { label: "Contêineres", href: "/produtos/conteineres", desc: "Escritórios, depósitos, lojas" },
      { label: "Módulos Habitacionais", href: "/produtos/modulos", desc: "Acomodações completas" },
      { label: "Offshore", href: "/produtos/offshore", desc: "Certificados para mar e terra" },
      { label: "Frigoríficos", href: "/produtos/frigorificos", desc: "-20°C a +20°C" },
    ],
  },
  {
    label: "Segmentos",
    href: "/segmentos",
    children: [
      { label: "Construção Civil", href: "/segmentos/construcao-civil", desc: "Canteiros e obras" },
      { label: "Eventos", href: "/segmentos/eventos", desc: "Rock in Rio, Tomorrowland" },
      { label: "Operações Industriais", href: "/segmentos/operacoes-industriais", desc: "Indústria e mineração" },
      { label: "Logística", href: "/segmentos/logistica", desc: "Armazenagem e distribuição" },
    ],
  },
  { label: "Comparativos", href: "/comparativos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navBg = scrolled
    ? "bg-white shadow-md border-b border-gray-100"
    : "bg-transparent";

  const textColor = scrolled ? "#1A1A2E" : "#fff";
  const logoColor = scrolled ? "#1B3A6B" : "#fff";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      role="banner"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Multiteiner — Página inicial">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_8b88d7e1.png"
              alt="Multiteiner — Comércio e Locação de Contêineres"
              className="h-10 w-auto"
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                    style={{ color: textColor }}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      style={{ background: "#fff" }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <span className="font-semibold text-sm" style={{ color: "#1B3A6B" }}>{child.label}</span>
                          <span className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                  style={{ color: textColor }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+552135343400"
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: scrolled ? "#1B3A6B" : "#F2C200" }}
            >
              <Phone className="w-4 h-4" />
              <span>(21) 3534-3400</span>
            </a>
            <Link
              href="/orcamento"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            style={{ color: textColor }}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t border-gray-100 shadow-xl"
          style={{ background: "#fff" }}
        >
          <nav className="container py-4 space-y-1" aria-label="Menu mobile">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-lg font-semibold text-sm transition-colors hover:bg-gray-50"
                  style={{ color: "#1B3A6B" }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 rounded-md text-sm transition-colors hover:bg-gray-50"
                        style={{ color: "#64748B" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <Link
                href="/orcamento"
                className="btn-primary w-full justify-center"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
