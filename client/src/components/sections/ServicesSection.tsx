import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services: { title: string; description?: string; link?: string; isExternal?: boolean }[] = [
    { title: "Servicio 1" },
    { title: "Servicio 2" },
    { title: "Servicio 3" },
    { title: "Servicio 4" },
    { title: "Servicio 5" },
    { title: "Servicio 6" },
    { title: "Servicio 7" },
    {
      title: "Cursos Online",
      description: "Accede a nuestra plataforma de Odoo E-learning para formación especializada.",
      link: "https://gerenciandocanales1.odoo.com/",
      isExternal: true,
    },
    {
      title: "Herramientas para Clientes",
      description: "Recursos exclusivos para potenciar tu estrategia de canales.",
      link: "/herramientas",
      isExternal: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Nuestros Servicios
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ofrecemos soluciones integrales en consultoría empresarial e inteligencia artificial, 
                asociándonos con expertos para brindar resultados de óptima rentabilidad
              </p>
            </div>
          </FadeInSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={0.1 * index} direction="up">
                <Card className="group hover:shadow-2xl hover:border-primary/50 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] bg-card h-full cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center min-h-[100px]">
                    {service.description ? (
                      <p className="text-center text-sm text-muted-foreground">{service.description}</p>
                    ) : (
                      <div className="w-full h-24 bg-primary/5 rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground/40 text-sm">Próximamente</span>
                      </div>
                    )}
                  </CardContent>
                  {service.link && (
                    <div className="p-6 pt-0 text-center">
                      <a
                        href={service.link}
                        target={service.isExternal ? "_blank" : "_self"}
                        rel={service.isExternal ? "noopener noreferrer" : undefined}
                      >
                        <Button variant="default" className="w-full">
                          {service.isExternal ? "Ir a la Plataforma" : "Ver Herramientas"}
                        </Button>
                      </a>
                    </div>
                  )}
                </Card>
              </FadeInSection>
            ))}
          </div>

          {/* CTA */}
          <FadeInSection delay={0.8}>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                ¿Listo para transformar su negocio con nuestras soluciones?
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                Solicitar Consultoría
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
