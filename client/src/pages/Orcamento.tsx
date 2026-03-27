import { useState } from "react";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { makeBreadcrumbSchema } from "@/components/SEOHead";
import { AnswerBlock, SectionHeader } from "@/components/GeoAeo";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const PRODUCTS = ["Contêineres", "Módulos Habitacionais", "Offshore", "Frigoríficos", "Não sei ainda"];
const SEGMENTS = ["Construção Civil", "Eventos", "Operações Industriais", "Logística", "Outro"];
const MODALITIES = ["Locação", "Compra", "Ainda não decidi"];

export default function Orcamento() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    product: "", segment: "", modality: "",
    quantity: "", deadline: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.orcamento.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
    },
    onError: () => {
      toast.error("Erro ao enviar. Tente novamente ou entre em contato pelo telefone.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Preencha nome, e-mail e telefone para continuar.");
      return;
    }
    submitMutation.mutate(form);
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: "#F4F6FA" }}>
          <div className="text-center max-w-md px-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(27,58,107,0.1)" }}>
              <CheckCircle className="w-8 h-8" style={{ color: "#1B3A6B" }} />
            </div>
            <h1 className="text-2xl font-bold mb-3" style={{ color: "#1A1A2E" }}>Orçamento enviado!</h1>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748B" }}>
              Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas úteis.
            </p>
            <a href="/" className="btn-primary inline-flex">Voltar ao início</a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Solicitar Orçamento — Contêineres e Módulos Habitacionais"
        description="Solicite um orçamento gratuito para contêineres transformados, módulos habitacionais, offshore e frigoríficos. Atendimento em todo o Brasil."
        canonical="https://www.multiteiner.com.br/orcamento"
        schema={[
          makeBreadcrumbSchema([
            { name: "Início", url: "https://www.multiteiner.com.br" },
            { name: "Orçamento", url: "https://www.multiteiner.com.br/orcamento" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Solicitar Orçamento — Multiteiner",
            url: "https://www.multiteiner.com.br/orcamento",
            description: "Formulário de solicitação de orçamento para contêineres e módulos habitacionais.",
          },
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16" style={{ background: "#1B3A6B" }}>
        <div className="container max-w-3xl">
          <span className="entity-badge mb-4 inline-block">Orçamento Gratuito</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Solicite seu <span style={{ color: "#F2C200" }}>orçamento</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="py-12 section-light">
        <div className="container max-w-3xl">
          <AnswerBlock
            question="Como solicitar um orçamento na Multiteiner?"
            answer="Preencha o formulário com suas informações de contato, tipo de produto, segmento e prazo. Nossa equipe analisará sua necessidade e enviará uma proposta personalizada em até 24 horas úteis. O orçamento é gratuito e sem compromisso."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5" itemScope itemType="https://schema.org/ContactPoint">
                <SectionHeader badge="Seus dados" title="Informações de contato" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Nome *</label>
                    <input
                      type="text" required value={form.name} onChange={set("name")}
                      className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none transition-colors focus:border-blue-400"
                      style={{ background: "#fff", color: "#1A1A2E" }}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Empresa</label>
                    <input
                      type="text" value={form.company} onChange={set("company")}
                      className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none transition-colors focus:border-blue-400"
                      style={{ background: "#fff", color: "#1A1A2E" }}
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>E-mail *</label>
                    <input
                      type="email" required value={form.email} onChange={set("email")}
                      className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none transition-colors focus:border-blue-400"
                      style={{ background: "#fff", color: "#1A1A2E" }}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Telefone *</label>
                    <input
                      type="tel" required value={form.phone} onChange={set("phone")}
                      className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none transition-colors focus:border-blue-400"
                      style={{ background: "#fff", color: "#1A1A2E" }}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <SectionHeader badge="Seu projeto" title="Detalhes da necessidade" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Produto</label>
                    <select value={form.product} onChange={set("product")} className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none" style={{ background: "#fff", color: "#1A1A2E" }}>
                      <option value="">Selecione...</option>
                      {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Segmento</label>
                    <select value={form.segment} onChange={set("segment")} className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none" style={{ background: "#fff", color: "#1A1A2E" }}>
                      <option value="">Selecione...</option>
                      {SEGMENTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Modalidade</label>
                    <select value={form.modality} onChange={set("modality")} className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none" style={{ background: "#fff", color: "#1A1A2E" }}>
                      <option value="">Selecione...</option>
                      {MODALITIES.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Quantidade</label>
                    <input
                      type="text" value={form.quantity} onChange={set("quantity")}
                      className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none"
                      style={{ background: "#fff", color: "#1A1A2E" }}
                      placeholder="Ex: 2 unidades"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Prazo</label>
                    <input
                      type="text" value={form.deadline} onChange={set("deadline")}
                      className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none"
                      style={{ background: "#fff", color: "#1A1A2E" }}
                      placeholder="Ex: 30 dias"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#64748B" }}>Mensagem adicional</label>
                  <textarea
                    rows={4} value={form.message} onChange={set("message")}
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm outline-none resize-none"
                    style={{ background: "#fff", color: "#1A1A2E" }}
                    placeholder="Descreva sua necessidade com mais detalhes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="btn-primary w-full justify-center"
                >
                  {submitMutation.isPending ? "Enviando..." : "Solicitar Orçamento Gratuito"}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <SectionHeader badge="Contato" title="Fale conosco" />
              <div className="space-y-4">
                <a href="tel:+551100000000" className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white transition-colors hover:border-blue-200">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                    <Phone className="w-5 h-5" style={{ color: "#1B3A6B" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>Telefone</p>
                    <p className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>(11) 0000-0000</p>
                  </div>
                </a>
                <a href="mailto:contato@multiteiner.com.br" className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white transition-colors hover:border-blue-200">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                    <Mail className="w-5 h-5" style={{ color: "#1B3A6B" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>E-mail</p>
                    <p className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>contato@multiteiner.com.br</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(27,58,107,0.08)" }}>
                    <MapPin className="w-5 h-5" style={{ color: "#1B3A6B" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>Localização</p>
                    <p className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>São Paulo, SP — Brasil</p>
                    <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>Atendemos todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
