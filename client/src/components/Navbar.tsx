import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown, Phone, ArrowRight,
  Building2, Calendar, Factory, Truck,
  Box, Users, Shield, Thermometer
} from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_white_hd_5c922366.png";
const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028319046/KkXwbrtHKRqapzFYapqwHB/logo_dark_a9edd61b.png";

const PRODUCTS = [
  { label: "Contêineres", href: "/produtos/conteineres", icon: Box, desc: "Escritórios, depósitos, lojas" },
  { label: "Módulos Habitacionais", href: "/produtos/modulos", icon: Users, desc: "Acomodações completas" },
  { label: "Offshore", href: "/produtos/offshore", icon: Shield, desc: "Certificados DNV" },
  { label: "Frigoríficos", href: "/produtos/frigorificos", icon: Thermometer, desc: "-20°C a +20°C" },
];

const SEGMENTS = [
  { label: "Construção Civil", href: "/segmentos/construcao-civil", icon: Building2, desc: "Canteiros e obras" },
  { label: "Eventos", href: "/segmentos/eventos", icon: Calendar, desc: "Festivais e shows" },
  { label: "Operações Industriais", href: "/segmentos/operacoes-industriais", icon: Factory, desc: "Indústria e mineração" },
  { label: "Logística", href: "/segmentos/logistica", icon: Truck, desc: "Armazenagem e distribuição" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showSolid = scrolled || !isHome || mobileOpen;
  const navBg = showSolid ? "bg-white shadow-md" : "bg-transparent";
  const textColor = showSolid ? "text-[#1A1A2E]" : "text-white";

  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        role="banner"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        {/* Top bar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}
          style={{ background: isHome ? "rgba(15,35,71,0.4)" : "#0F2347" }}
        >
          <div className="container flex items-center justify-end gap-4 py-1.5 text-xs text-white/80">
            <a href="tel:+552135343400" className="flex items-center gap-1 hover:text-[#F2C200] transition-colors">
              <Phone className="w-3 h-3" /> (21) 3534-3400
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/5521995568402" className="hidden sm:flex items-center gap-1 hover:text-[#F2C200] transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.352-3.2.842.857-3.131-.386-.462A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              (21) 99556-8402
            </a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:comercial@multiteiner.com.br" className="hidden md:inline hover:text-[#F2C200] transition-colors">
              comercial@multiteiner.com.br
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="container flex items-center justify-between h-16" aria-label="Navegação principal">
          <Link href="/" className="flex-shrink-0" aria-label="Multiteiner — Página inicial">
            <img
              src={showSolid ? LOGO_DARK_URL : LOGO_URL}
              alt="Multiteiner — Comércio e Locação de Contêineres"
              className="h-12 md:h-14 w-auto transition-all duration-300"
              width={200}
              height={56}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            <NavLink href="/" label="Início" active={location === "/"} textColor={textColor} />
            <NavLink href="/sobre" label="Sobre" active={location === "/sobre"} textColor={textColor} />

            <DropdownNav
              label="Produtos"
              items={PRODUCTS}
              allHref="/produtos"
              active={location.startsWith("/produtos")}
              textColor={textColor}
              isOpen={activeDropdown === "produtos"}
              onOpen={() => setActiveDropdown("produtos")}
              onClose={() => setActiveDropdown(null)}
            />

            <DropdownNav
              label="Segmentos"
              items={SEGMENTS}
              allHref="/segmentos"
              active={location.startsWith("/segmentos")}
              textColor={textColor}
              isOpen={activeDropdown === "segmentos"}
              onOpen={() => setActiveDropdown("segmentos")}
              onClose={() => setActiveDropdown(null)}
            />

            <NavLink href="/comparativos" label="Comparativos" active={location === "/comparativos"} textColor={textColor} />
            <NavLink href="/guia" label="Guia" active={location === "/guia"} textColor={textColor} />
            <NavLink href="/faq" label="FAQ" active={location === "/faq"} textColor={textColor} />
            <NavLink href="/blog" label="Blog" active={location.startsWith("/blog")} textColor={textColor} />
            <NavLink href="/cases" label="Cases" active={location === "/cases"} textColor={textColor} />
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/orcamento" className="hidden sm:inline-flex btn-primary text-xs px-4 py-2">
              Orçamento <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X className="w-6 h-6" style={{ color: "#1A1A2E" }} />
                : <Menu className="w-6 h-6" style={{ color: showSolid ? "#1A1A2E" : "#fff" }} />
              }
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[64px] bg-white z-40 transition-all duration-300 ${
            mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="overflow-y-auto h-full p-6 flex flex-col gap-1">
            <MobileLink href="/" label="Início" />
            <MobileLink href="/sobre" label="Sobre" />
            <p className="text-xs font-bold uppercase tracking-widest mt-4 mb-2" style={{ color: "#94A3B8" }}>Produtos</p>
            {PRODUCTS.map((p) => <MobileLink key={p.href} href={p.href} label={p.label} />)}
            <p className="text-xs font-bold uppercase tracking-widest mt-4 mb-2" style={{ color: "#94A3B8" }}>Segmentos</p>
            {SEGMENTS.map((s) => <MobileLink key={s.href} href={s.href} label={s.label} />)}
            <MobileLink href="/comparativos" label="Comparativos" />
            <MobileLink href="/guia" label="Guia Completo" />
            <MobileLink href="/faq" label="FAQ" />
            <MobileLink href="/blog" label="Blog" />
            <MobileLink href="/cases" label="Cases" />
            <MobileLink href="/contato" label="Contato" />

            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href="/orcamento" className="btn-primary w-full justify-center">
                Solicitar Orçamento <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-4 text-center">
              <a href="tel:+552135343400" className="text-sm font-semibold" style={{ color: "#1B3A6B" }}>
                <Phone className="w-4 h-4 inline mr-1" /> (21) 3534-3400
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* ── Sub-components ────────────────────────────────────────────────────── */

function NavLink({ href, label, active, textColor }: { href: string; label: string; active: boolean; textColor: string }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[#F2C200] ${textColor} ${active ? "!text-[#F2C200]" : ""}`}
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors" style={{ color: "#1A1A2E" }}>
      {label}
    </Link>
  );
}

interface DropdownNavProps {
  label: string;
  items: { label: string; href: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; desc: string }[];
  allHref: string;
  active: boolean;
  textColor: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function DropdownNav({ label, items, allHref, active, textColor, isOpen, onOpen, onClose }: DropdownNavProps) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[#F2C200] ${textColor} ${active ? "!text-[#F2C200]" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[240px]">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: "rgba(27,58,107,0.06)" }}>
                  <Icon className="w-4 h-4 group-hover:text-[#F2C200] transition-colors" style={{ color: "#1B3A6B" }} />
                </div>
                <div>
                  <span className="font-semibold block" style={{ color: "#1A1A2E" }}>{item.label}</span>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>{item.desc}</span>
                </div>
              </Link>
            );
          })}
          <div className="border-t border-gray-100 mt-1 pt-1">
            <Link href={allHref} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors" style={{ color: "#1B3A6B" }}>
              Ver todos <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
