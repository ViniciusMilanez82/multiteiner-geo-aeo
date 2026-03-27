import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5521995568402"; // (21) 99556-8402 — WhatsApp Sede Duque de Caxias
const DEFAULT_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento para contêineres/módulos habitacionais. Pode me ajudar?";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({ message = DEFAULT_MESSAGE }: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Aparece após 1.5s para não competir com o carregamento da página
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Exibe tooltip de boas-vindas após 3s
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Esconde após 5s
      setTimeout(() => setShowTooltip(false), 5000);
    }, 1500);
    return () => clearTimeout(timer);
  }, [visible]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if (!visible) return null;

  return (
    <>
      {/* Tooltip de boas-vindas */}
      {showTooltip && (
        <div
          className="fixed z-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
          style={{
            bottom: "6rem",
            right: "1.5rem",
            background: "#fff",
            border: "1px solid #E2E8F0",
            maxWidth: "260px",
            animation: "fadeInUp 0.3s ease",
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon size={16} color="#fff" />
          </div>
          <div>
            <p className="text-xs font-bold mb-0.5" style={{ color: "#1A1A2E" }}>
              Fale com a Multiteiner
            </p>
            <p className="text-xs leading-snug" style={{ color: "#64748B" }}>
              Orçamento gratuito em minutos via WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
            style={{ fontSize: "14px", lineHeight: 1 }}
          >
            ×
          </button>
        </div>
      )}

      {/* Botão flutuante */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Multiteiner pelo WhatsApp"
        className="fixed z-50 flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
        style={{
          bottom: "1.5rem",
          right: "1.5rem",
          width: "3.5rem",
          height: "3.5rem",
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        }}
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <meta itemProp="contactType" content="sales" />
        <meta itemProp="telephone" content="+55-21-3534-3400" />
        <WhatsAppIcon size={28} color="#fff" />

        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(37,211,102,0.35)", animationDuration: "2s" }}
        />
      </a>
    </>
  );
}

/* SVG inline do WhatsApp para não depender de lib externa */
function WhatsAppIcon({ size = 24, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
