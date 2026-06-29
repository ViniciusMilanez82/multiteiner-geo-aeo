import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

// Lazy load para melhor performance
const Sobre = lazy(() => import("./pages/Sobre"));
const Produtos = lazy(() => import("./pages/Produtos"));
const ProdutoDetalhe = lazy(() => import("./pages/ProdutoDetalhe"));
const Segmentos = lazy(() => import("./pages/Segmentos"));
const SegmentoDetalhe = lazy(() => import("./pages/SegmentoDetalhe"));
const Comparativos = lazy(() => import("./pages/Comparativos"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Orcamento = lazy(() => import("./pages/Orcamento"));
const Contato = lazy(() => import("./pages/Contato"));
const Guia = lazy(() => import("./pages/Guia"));
const Cases = lazy(() => import("./pages/Cases"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F4F6FA" }}>
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-10 h-10 rounded-sm flex items-center justify-center font-extrabold text-sm animate-pulse"
          style={{ background: "#1B3A6B", color: "#F2C200", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          MT
        </div>
        <div className="w-32 h-1 rounded-full overflow-hidden" style={{ background: "#E2E8F0" }}>
          <div className="h-full rounded-full animate-pulse" style={{ background: "#F2C200", width: "60%" }} />
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/produtos/:slug" component={ProdutoDetalhe} />
        <Route path="/segmentos" component={Segmentos} />
        <Route path="/segmentos/:slug" component={SegmentoDetalhe} />
        <Route path="/comparativos" component={Comparativos} />
        <Route path="/faq" component={FAQ} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/orcamento" component={Orcamento} />
        <Route path="/contato" component={Contato} />
        <Route path="/guia" component={Guia} />
        <Route path="/cases" component={Cases} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
          <BackToTop />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
