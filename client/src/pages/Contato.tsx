import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { AnswerBlock } from "@/components/GeoAeo";

const UNIDADES = [
  {
    nome: "Duque de Caxias — RJ",
    label: "Sede",
    endereco: "Av. OL 1-B, Quadra C, Lote 10",
    bairro: "Parque Duque",
    cidade: "Duque de Caxias, RJ",
    cep: "CEP 25.085-375",
    telefone: "(21) 3534-3400 / 3534-3434",
    tel: "+552135343400",
    whatsapp: "(21) 99556-8402",
    whatsappLink: "https://wa.me/5521995568402?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    email: "comercial_rj@multiteiner.com.br",
    principal: true,
  },
  {
    nome: "Itapecerica da Serra — SP",
    label: "Unidade SP",
    endereco: "Estrada Ferreira Guedes, nº 1134",
    bairro: "Potuverá",
    cidade: "Itapecerica da Serra, SP",
    cep: "CEP 06.885-150",
    telefone: "(11) 4147-1811",
    tel: "+551141471811",
    whatsapp: "(11) 94122-3306",
    whatsappLink: "https://wa.me/5511941223306?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    email: "comercial_sp@multiteiner.com.br",
    principal: false,
  },
  {
    nome: "Macaé — RJ",
    label: "Unidade Macaé",
    endereco: "Av. Mem de Sá, nº 809",
    bairro: "Imboassica",
    cidade: "Macaé, RJ",
    cep: "CEP 27.925-545",
    telefone: "(22) 2773-5906",
    tel: "+552227735906",
    whatsapp: null,
    whatsappLink: null,
    email: "comercial_mc@multiteiner.com.br",
    principal: false,
  },
];

export default function Contato() {
  return (
    <>
      <SEOHead
        title="Contato — Fale com a Multiteiner"
        description="Entre em contato com a Multiteiner para dúvidas, orçamentos e suporte. Três unidades no Brasil: Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ). Atendemos todo o Brasil."
        canonical="https://www.multiteiner.com.br/contato"
        schema={[
          makeBreadcrumbSchema([
            { name: "Início", url: "https://www.multiteiner.com.br" },
            { name: "Contato", url: "https://www.multiteiner.com.br/contato" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato — Multiteiner",
            url: "https://www.multiteiner.com.br/contato",
            about: { "@id": "https://www.multiteiner.com.br/#organization" },
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.multiteiner.com.br/#organization",
            name: "Multiteiner",
            telephone: "+55-21-3534-3400",
            email: "comercial_rj@multiteiner.com.br",
            openingHours: "Mo-Fr 08:00-18:00",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. OL 1-B, Quadra C, Lote 10",
              addressLocality: "Duque de Caxias",
              addressRegion: "RJ",
              postalCode: "25085-375",
              addressCountry: "BR",
            },
          },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-4xl">
          <span className="entity-badge mb-4 inline-block">Contato</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Fale com a <span style={{ color: "#F2C200" }}>Multiteiner</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Três unidades no Brasil para atender você com agilidade — Duque de Caxias (RJ), Itapecerica da Serra (SP) e Macaé (RJ).
          </p>
        </div>
      </section>

      {/* AEO: Answer Block */}
      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="Como entrar em contato com a Multiteiner?"
            answer="A Multiteiner possui três unidades no Brasil: Duque de Caxias (RJ) — sede, telefone (21) 3534-3400, WhatsApp (21) 99556-8402; Itapecerica da Serra (SP), telefone (11) 4147-1811, WhatsApp (11) 94122-3306; e Macaé (RJ), telefone (22) 2773-5906. O atendimento é de segunda a sexta, das 8h às 18h. Para orçamentos, a resposta é em até 24 horas úteis."
          />
        </div>
      </section>

      {/* Unidades */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UNIDADES.map((u) => (
              <div
                key={u.nome}
                className="p-6 rounded-xl bg-white shadow-sm"
                style={{ border: u.principal ? "2px solid #F2C200" : "1px solid #E2E8F0" }}
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{ background: u.principal ? "#F2C200" : "#EEF2FF", color: u.principal ? "#1B3A6B" : "#1B3A6B" }}
                >
                  {u.label}
                </span>

                <h2 className="font-bold text-base mb-4 leading-snug" style={{ color: "#1B3A6B" }} itemProp="name">
                  {u.nome}
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F2C200" }} />
                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <p className="text-sm font-medium" style={{ color: "#1A1A2E" }} itemProp="streetAddress">{u.endereco}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{u.bairro}</p>
                      <p className="text-xs" style={{ color: "#64748B" }} itemProp="addressLocality">{u.cidade}</p>
                      <p className="text-xs" style={{ color: "#94A3B8" }} itemProp="postalCode">{u.cep}</p>
                    </div>
                  </div>

                  <a href={`tel:${u.tel}`} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "#F2C200" }} />
                    <span className="text-sm font-semibold" style={{ color: "#1B3A6B" }} itemProp="telephone">{u.telefone}</span>
                  </a>

                  {u.whatsapp && u.whatsappLink && (
                    <a href={u.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                      <MessageCircle className="w-4 h-4 shrink-0" style={{ color: "#25D366" }} />
                      <span className="text-sm font-semibold" style={{ color: "#25D366" }}>WhatsApp {u.whatsapp}</span>
                    </a>
                  )}

                  <a href={`mailto:${u.email}`} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "#F2C200" }} />
                    <span className="text-xs" style={{ color: "#64748B" }}>{u.email}</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 shrink-0" style={{ color: "#F2C200" }} />
                    <span className="text-xs" style={{ color: "#64748B" }}>Seg–Sex, 8h–18h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm mb-5" style={{ color: "#64748B" }}>Prefere um atendimento personalizado?</p>
            <Link href="/orcamento" className="btn-primary inline-flex">
              Solicitar Orçamento Gratuito
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
