import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Número de WhatsApp - ACTUALIZAR CON EL NÚMERO REAL
  const whatsappNumber = "5493517915867"; // Formato: código país + número sin espacios ni guiones
  const defaultMessage = "Hola, me gustaría obtener más información sobre sus servicios de consultoría.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Botón flotante principal */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-border animate-fade-in-up hover:scale-[1.02] transition-all duration-300">
            <div className="bg-[#25D366] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold">Gerenciando Canales</h3>
                  <p className="text-xs text-white/90">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3 relative">
                <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-gray-100 border-b-8 border-b-transparent"></div>
                <p className="text-sm text-gray-700">
                  ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Responderemos lo antes posible
                </p>
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Iniciar conversación
              </Button>
            </div>
          </div>
        )}

        {/* Botón principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out hover:scale-125 hover:rotate-12 group animate-float"
          aria-label="WhatsApp"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
          )}
        </button>

        {/* Indicador de notificación */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
        )}
      </div>
    </>
  );
}
