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
          {query.length > 0 && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded hover:bg-gray-100 transition-colors"
              aria-label="Limpar busca"
              title="Limpar busca"
            >
              <X className="w-4 h-4" style={{ color: "#64748B" }} />
            </button>
          )}
          <button onClick={() => { setOpen(false); setQuery(""); }} className="p-1 rounded hover:bg-gray-100 transition-colors" aria-label="Fechar pesquisa">
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
              {/* Ilustração empática — lupa triste */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "rgba(27,58,107,0.05)" }}>
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="12" stroke="#94A3B8" strokeWidth="3" fill="none" />
                  <line x1="31" y1="31" x2="40" y2="40" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  {/* Olhos tristes */}
                  <circle cx="18" cy="20" r="1.5" fill="#64748B" />
                  <circle cx="26" cy="20" r="1.5" fill="#64748B" />
                  {/* Boca triste */}
                  <path d="M18 27 C20 25, 24 25, 26 27" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              <p className="text-sm font-semibold" style={{ color: "#334155" }}>
                Nenhum resultado para "{query}"
              </p>
              <p className="text-xs mt-1.5 mb-4" style={{ color: "#94A3B8" }}>
                Tente termos como "contêiner", "módulo", "evento" ou "offshore"
              </p>

              {/* Botões de ação */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                <a
                  href={`https://wa.me/5521995568402?text=${encodeURIComponent(`Olá, busquei por "${query}" no site e não encontrei o que procurava. Podem me ajudar?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105 animate-whatsapp-pulse shadow-lg"
                  style={{ background: "#25D366", color: "#fff" }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.63-1.263A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953l-.42-.306-2.75.75.69-2.593-.336-.442A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Falar com atendimento
                </a>
                <button
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border transition-all hover:bg-gray-50"
                  style={{ borderColor: "#E2E8F0", color: "#1B3A6B" }}
                >
                  <X className="w-3 h-3" />
                  Limpar busca
                </button>
              </div>

              {/* Seção: Produtos Recomendados */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-3" style={{ color: "#94A3B8" }}>Mais populares</p>
                <div className="flex flex-col gap-1">
                  {SEARCH_INDEX.filter(i => i.category === "Produtos").slice(0, 4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-gray-50 group"
                      >
                        <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: "rgba(27,58,107,0.06)" }}>
                          <Icon className="w-3.5 h-3.5 group-hover:text-[#F2C200] transition-colors" style={{ color: "#1B3A6B" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold truncate" style={{ color: "#1A1A2E" }}>{item.title}</p>
                          <p className="text-[10px] truncate" style={{ color: "#64748B" }}>{item.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
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
