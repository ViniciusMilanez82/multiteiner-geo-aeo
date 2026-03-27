import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { AnswerBlock } from "@/components/GeoAeo";

const UNIDADES = [
  {
    nome: "Unidade Duque de Caxias — RJ (Sede)",
    endereco: "Av. OL 1-B, Quadra C, Lote 10",
    cidade: "Duque de Caxias, RJ",
    telefone: "(21) 3534-3400 / 3534-3434",
    tel: "+552135343400",
    email: "comercial_rj@multiteiner.com.br",
    principal: true,
  },
  {
    nome: "Unidade Itapecerica da Serra — SP",
    endereco: "Estrada Ferreira Guedes, nº 1134",
    cidade: "Itapecerica da Serra, SP",
    telefone: "(11) 4668-5000",
    tel: "+551146685000",
    email: "comercial_sp@multiteiner.com.br",
    principal: false,
  },
  {
    nome: "Unidade Macaé — RJ",
    endereco: "Av. Mem de Sá, nº 809",
    cidade: "Macaé, RJ",
    telefone: "(22) 2773-0900",
    tel: "+552227730900",
    email: "comercial_macae@multiteiner.com.br",
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
            answer="A Multiteiner possui três unidades no Brasil: Duque de Caxias (RJ) — sede, telefone (21) 3534-3400; Itapecerica da Serra (SP), telefone (11) 4668-5000; e Macaé (RJ), telefone (22) 2773-0900. O atendimento é de segunda a sexta, das 8h às 18h. Para orçamentos, a resposta é em até 24 horas úteis."
          />
        </div>
      </section>

      {/* Unidades */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UNIDADES.map((u) => (
              <div
                key={u.nome}
                className="p-6 rounded-xl border bg-white"
                style={{ borderColor: u.principal ? "#F2C200" : "#E2E8F0", borderWidth: u.principal ? 2 : 1 }}
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                {u.principal && (
                  <span className="badge-gold mb-3 inline-block">Sede</span>
                )}
                <h2 className="font-bold text-base mb-4 leading-snug" style={{ color: "#1B3A6B" }} itemProp="name">
                  {u.nome}
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F2C200" }} />
                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <p className="text-sm font-medium" style={{ color: "#1A1A2E" }} itemProp="streetAddress">{u.endereco}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748B" }} itemProp="addressLocality">{u.cidade}</p>
                    </div>
                  </div>

                  <a
                    href={`tel:${u.tel}`}
                    className="flex items-center gap-3 transition-opacity hover:opacity-80"
                  >
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "#F2C200" }} />
                    <span className="text-sm font-semibold" style={{ color: "#1B3A6B" }} itemProp="telephone">{u.telefone}</span>
                  </a>

                  <a
                    href={`mailto:${u.email}`}
                    className="flex items-center gap-3 transition-opacity hover:opacity-80"
                  >
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
