import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useLocation } from "wouter";
import { Search, X, ArrowRight, Box, Users, Shield, Thermometer, Building2, Calendar, Factory, Truck, BookOpen, HelpCircle } from "lucide-react";

/* ── Dados pesquisáveis ─────────────────────────────────────────────────── */
interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  keywords: string[];
}

const SEARCH_INDEX: SearchItem[] = [
  // Produtos
  { title: "Contêineres Transformados", description: "Escritórios, depósitos, lojas, almoxarifados", href: "/produtos/conteineres", category: "Produtos", icon: Box, keywords: ["container", "conteiner", "escritorio", "deposito", "loja", "almoxarifado", "transformado"] },
  { title: "Módulos Habitacionais", description: "Alojamentos, dormitórios, refeitórios completos", href: "/produtos/modulos", category: "Produtos", icon: Users, keywords: ["modulo", "habitacional", "alojamento", "dormitorio", "refeitorio", "acomodacao"] },
  { title: "Contêineres Offshore", description: "Certificados DNV 2.7-1 para plataformas", href: "/produtos/offshore", category: "Produtos", icon: Shield, keywords: ["offshore", "dnv", "plataforma", "petroleo", "maritimo", "certificado"] },
  { title: "Contêineres Frigoríficos", description: "Refrigerados de -20°C a +20°C", href: "/produtos/frigorificos", category: "Produtos", icon: Thermometer, keywords: ["frigorifico", "refrigerado", "frio", "temperatura", "camara", "reefer"] },

  // Segmentos
  { title: "Construção Civil", description: "Canteiros de obras, escritórios de engenharia", href: "/segmentos/construcao-civil", category: "Segmentos", icon: Building2, keywords: ["construcao", "obra", "canteiro", "engenharia", "civil"] },
  { title: "Eventos", description: "Festivais, shows, carnaval, rock in rio", href: "/segmentos/eventos", category: "Segmentos", icon: Calendar, keywords: ["evento", "festival", "show", "carnaval", "rock", "tomorrowland", "lollapalooza"] },
  { title: "Operações Industriais", description: "Mineração, indústria, siderurgia", href: "/segmentos/operacoes-industriais", category: "Segmentos", icon: Factory, keywords: ["industrial", "mineracao", "industria", "siderurgia", "fabrica"] },
  { title: "Logística", description: "Armazenagem, distribuição, portos", href: "/segmentos/logistica", category: "Segmentos", icon: Truck, keywords: ["logistica", "armazenagem", "distribuicao", "porto", "estoque"] },

  // Páginas informativas
  { title: "Guia Completo de Contêineres", description: "Tudo sobre contêineres e módulos habitacionais", href: "/guia", category: "Informação", icon: BookOpen, keywords: ["guia", "informacao", "tipos", "dimensoes", "normas", "iso", "historia"] },
  { title: "FAQ — Perguntas Frequentes", description: "Respostas para dúvidas comuns", href: "/faq", category: "Informação", icon: HelpCircle, keywords: ["faq", "duvida", "pergunta", "resposta", "preco", "prazo", "alvara"] },
  { title: "Comparativo: Contêiner vs Módulo", description: "Diferenças técnicas entre contêiner e módulo", href: "/comparativos", category: "Informação", icon: BookOpen, keywords: ["comparativo", "diferenca", "versus", "modulo", "container", "qual melhor"] },
  { title: "Cases e Projetos", description: "Projetos reais entregues pela Multiteiner", href: "/cases", category: "Informação", icon: Building2, keywords: ["case", "projeto", "portfolio", "obra", "entregue", "referencia"] },

  // Ações
  { title: "Solicitar Orçamento", description: "Receba um orçamento personalizado em 24h", href: "/orcamento", category: "Ação", icon: ArrowRight, keywords: ["orcamento", "preco", "valor", "custo", "cotacao", "comprar", "alugar"] },
  { title: "Contato", description: "Fale com a Multiteiner por telefone, WhatsApp ou e-mail", href: "/contato", category: "Ação", icon: ArrowRight, keywords: ["contato", "telefone", "whatsapp", "email", "endereco", "falar"] },
];

/* ── Componente ─────────────────────────────────────────────────────────── */
export default function SearchBar({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
        setActiveIndex(-1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Normalize text for search
  const normalize = (text: string) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Filter results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = normalize(query);
    return SEARCH_INDEX.filter((item) => {
      const searchable = normalize(`${item.title} ${item.description} ${item.keywords.join(" ")}`);
      return searchable.includes(q);
    }).slice(0, 8);
  }, [query]);

  // Reset activeIndex when results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [results]);

  const handleSelect = useCallback((href: string) => {
    navigate(href);
    setOpen(false);
    setQuery("");
    setActiveIndex(-1);
  }, [navigate]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < results.length) {
          handleSelect(results[activeIndex].href);
        }
        break;
    }
  }, [results, activeIndex, handleSelect]);

  if (variant === "mobile") {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Pesquisar"
        >
          <Search className="w-5 h-5" style={{ color: "#1B3A6B" }} />
        </button>
        {open && <SearchModal query={query} setQuery={setQuery} results={results} handleSelect={handleSelect} setOpen={setOpen} inputRef={inputRef} containerRef={containerRef} activeIndex={activeIndex} onKeyDown={handleKeyDown} />}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs hover:border-[#1B3A6B]/30 hover:shadow-sm transition-all duration-200 bg-white/50 backdrop-blur-sm"
        aria-label="Pesquisar módulos e contêineres"
      >
        <Search className="w-3.5 h-3.5" style={{ color: "#94A3B8" }} />
        <span style={{ color: "#94A3B8" }}>Pesquisar...</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono border border-gray-200 bg-gray-50" style={{ color: "#94A3B8" }}>
          ⌘K
        </kbd>
      </button>
      {open && <SearchModal query={query} setQuery={setQuery} results={results} handleSelect={handleSelect} setOpen={setOpen} inputRef={inputRef} containerRef={containerRef} activeIndex={activeIndex} onKeyDown={handleKeyDown} />}
    </>
  );
}

/* ── Modal de pesquisa ──────────────────────────────────────────────────── */
function SearchModal({
  query, setQuery, results, handleSelect, setOpen, inputRef, containerRef, activeIndex, onKeyDown,
}: {
  query: string;
  setQuery: (q: string) => void;
  results: SearchItem[];
  handleSelect: (href: string) => void;
  setOpen: (open: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  activeIndex: number;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  const resultsListRef = useRef<HTMLDivElement>(null);

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex < 0 || !resultsListRef.current) return;
    const activeEl = resultsListRef.current.children[activeIndex] as HTMLElement | undefined;
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
      <div ref={containerRef} className="w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#1B3A6B" }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Buscar módulos, contêineres, segmentos..."
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-gray-400"
            style={{ color: "#1A1A2E" }}
            autoComplete="off"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
            aria-controls="search-results-list"
          />
          <button onClick={() => { setOpen(false); setQuery(""); }} className="p-1 rounded hover:bg-gray-100 transition-colors">
            <X className="w-4 h-4" style={{ color: "#94A3B8" }} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === "" && (
            <div className="px-5 py-6 text-center">
              <p className="text-sm" style={{ color: "#64748B" }}>
                Digite para buscar produtos, segmentos, informações ou ações.
              </p>
              <p className="text-xs mt-2" style={{ color: "#94A3B8" }}>
                Exemplos: "escritório", "offshore", "aluguel", "orçamento"
              </p>
            </div>
          )}

          {query.trim() !== "" && results.length === 0 && (
            <div className="px-5 py-6 text-center">
              <p className="text-sm" style={{ color: "#64748B" }}>
                Nenhum resultado para "{query}"
              </p>
              <p className="text-xs mt-2" style={{ color: "#94A3B8" }}>
                Tente termos como "contêiner", "módulo", "evento" ou "offshore"
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div ref={resultsListRef} id="search-results-list" role="listbox" className="py-2">
              {results.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.href}
                    id={`search-result-${index}`}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => handleSelect(item.href)}
                    className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-colors group ${
                      isActive ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? "bg-[#1B3A6B]/10" : ""
                      }`}
                      style={!isActive ? { background: "rgba(27,58,107,0.06)" } : undefined}
                    >
                      <Icon
                        className={`w-4.5 h-4.5 transition-colors ${isActive ? "text-[#1B3A6B]" : "group-hover:text-[#F2C200]"}`}
                        style={!isActive ? { color: "#1B3A6B" } : undefined}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: "#1A1A2E" }}>{item.title}</p>
                      <p className="text-xs truncate" style={{ color: "#64748B" }}>{item.description}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0" style={{ background: "#F0F4FF", color: "#1B3A6B" }}>
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 text-[10px]" style={{ color: "#94A3B8" }}>
            <span><kbd className="px-1 py-0.5 rounded border border-gray-200 bg-white font-mono">↑↓</kbd> navegar</span>
            <span><kbd className="px-1 py-0.5 rounded border border-gray-200 bg-white font-mono">↵</kbd> selecionar</span>
            <span><kbd className="px-1 py-0.5 rounded border border-gray-200 bg-white font-mono">esc</kbd> fechar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
