import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CONFIGURACIÓN DE EMAILJS
  // Para que funcione, necesitas:
  // 1. Crear cuenta en https://www.emailjs.com/ (gratis)
  // 2. Crear un servicio de email (Gmail, Outlook, etc.)
  // 3. Crear una plantilla de email
  // 4. Obtener tus credenciales y reemplazar abajo:
  
  const EMAILJS_SERVICE_ID = "service_w7k4v37"; // Service ID de EmailJS
  const EMAILJS_TEMPLATE_ID = "template_iglatlk"; // Template ID de EmailJS
  const EMAILJS_PUBLIC_KEY = "gJLo_nYfWVw4Hjb9h"; // Public Key de EmailJS

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: "Gerenciando Canales",
        },
        EMAILJS_PUBLIC_KEY
      );
      
      toast.success("¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.");
      console.log("Email enviado correctamente a través de EmailJS");
      
      // Limpiar formulario
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error al enviar email:", error);
      toast.error("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bruscofacundo1@gmail.com",
      link: "mailto:bruscofacundo1@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 9 351 791 5867",
      link: "tel:+54 9 351 791 5867",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Buenos Aires, Argentina",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Contáctanos
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ¿Tiene alguna pregunta o necesita más información? 
                Estamos aquí para ayudarle. Contáctenos y le responderemos a la brevedad.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInSection delay={0.2} direction="left">
              <Card className="shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 ease-out">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Envíanos un Mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                      className="w-full transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@empresa.com"
                      className="w-full transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+54 11 1234-5678"
                      className="w-full transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      className="w-full resize-none transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-lg group relative overflow-hidden hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </motion.div>
                    ) : (
                      <motion.div
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Enviar Mensaje
                      </motion.div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            </FadeInSection>

            {/* Contact Information */}
            <FadeInSection delay={0.4} direction="right">
              <div className="space-y-8">
              <Card className="shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 ease-out">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Información de Contacto
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 hover:scale-[1.02] transition-all duration-300 ease-out">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </div>
                      );

                      return info.link ? (
                        <a
                          key={index}
                          href={info.link}
                          className="block"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={index}>{content}</div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 ease-out">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Horarios de Atención
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span className="font-medium">Lunes - Viernes:</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábados:</span>
                      <span>10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingos:</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
