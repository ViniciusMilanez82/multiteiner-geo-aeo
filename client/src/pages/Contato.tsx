import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { AnswerBlock } from "@/components/GeoAeo";

export default function Contato() {
  return (
    <>
      <SEOHead
        title="Contato — Fale com a Multiteiner"
        description="Entre em contato com a Multiteiner para dúvidas, orçamentos e suporte. Atendemos todo o Brasil com equipe especializada em contêineres e módulos habitacionais."
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
          },
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Contato</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Fale com a <span style={{ color: "#F2C200" }}>Multiteiner</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Nossa equipe está pronta para atender você. Escolha o canal de sua preferência.
          </p>
        </div>
      </section>

      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="Como entrar em contato com a Multiteiner?"
            answer="A Multiteiner pode ser contatada por telefone, e-mail ou formulário de orçamento. Nossa equipe atende de segunda a sexta, das 8h às 18h. Para orçamentos, respondemos em até 24 horas úteis. Atendemos todo o Brasil."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href="tel:+551100000000"
              className="card-hover flex items-start gap-4 p-6 rounded-xl border border-border bg-white"
              itemScope itemType="https://schema.org/ContactPoint"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                <Phone className="w-6 h-6" style={{ color: "#1B3A6B" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>Telefone</p>
                <p className="font-bold text-base mb-1" style={{ color: "#1A1A2E" }} itemProp="telephone">(11) 0000-0000</p>
                <p className="text-xs" style={{ color: "#64748B" }}>Seg–Sex, 8h–18h</p>
              </div>
            </a>
            <a
              href="mailto:contato@multiteiner.com.br"
              className="card-hover flex items-start gap-4 p-6 rounded-xl border border-border bg-white"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                <Mail className="w-6 h-6" style={{ color: "#1B3A6B" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>E-mail</p>
                <p className="font-bold text-base mb-1" style={{ color: "#1A1A2E" }}>contato@multiteiner.com.br</p>
                <p className="text-xs" style={{ color: "#64748B" }}>Resposta em até 24h úteis</p>
              </div>
            </a>
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-white">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                <MapPin className="w-6 h-6" style={{ color: "#1B3A6B" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>Localização</p>
                <p className="font-bold text-base mb-1" style={{ color: "#1A1A2E" }}>São Paulo, SP — Brasil</p>
                <p className="text-xs" style={{ color: "#64748B" }}>Atendemos todo o Brasil</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-white">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                <Clock className="w-6 h-6" style={{ color: "#1B3A6B" }} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>Horário de atendimento</p>
                <p className="font-bold text-base mb-1" style={{ color: "#1A1A2E" }}>Segunda a Sexta</p>
                <p className="text-xs" style={{ color: "#64748B" }}>08h às 18h</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm mb-4" style={{ color: "#64748B" }}>Precisa de um orçamento?</p>
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
