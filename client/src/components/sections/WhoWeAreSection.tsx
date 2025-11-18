import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, Lightbulb, Shield } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function WhoWeAreSection() {
  const highlights = [
    {
      icon: Building2,
      title: "Sector",
      value: "Consultoría y Servicios a Empresas",
    },
    {
      icon: Calendar,
      title: "Fundación",
      value: "2015",
    },
    {
      icon: Lightbulb,
      title: "Tipo",
      value: "Empresa Propia",
    },
    {
      icon: Shield,
      title: "Experiencia",
      value: "+9 Años en el Mercado",
    },
  ];

  return (
    <section id="who-we-are" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                ¿Quiénes Somos?
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Company Info */}
            <FadeInSection direction="left">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-foreground">
                Gerenciando Canales
              </h3>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Somos una empresa de consultoría especializada en soluciones comerciales 
                  que generan valor real para nuestros clientes. Desde nuestra fundación en 2015, 
                  hemos trabajado con empresas de diversos sectores, ayudándolas a optimizar 
                  sus canales de distribución y alcanzar sus objetivos comerciales.
                </p>
                <p>
                  Nuestro enfoque se basa en la comprensión profunda de cada modelo de negocio, 
                  permitiéndonos diseñar estrategias personalizadas que se adaptan a las 
                  necesidades específicas de cada cliente.
                </p>
                <p>
                  Contamos con un equipo de profesionales altamente capacitados y una red de 
                  expertos en diversos campos, lo que nos permite ofrecer soluciones integrales 
                  que abarcan todos los aspectos del desarrollo comercial.
                </p>
              </div>
            </div>
            </FadeInSection>

            {/* Right Side - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <FadeInSection key={index} delay={0.1 * index} direction="up">
                <Card
                  className="group hover:shadow-xl hover:border-primary/50 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.03] cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xl font-bold text-foreground">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <FadeInSection delay={0.3}>
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:scale-[1.01] transition-all duration-500 ease-out">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                  Nuestro Compromiso
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                  Nos comprometemos a ser su socio estratégico en el camino hacia el éxito comercial. 
                  Trabajamos codo a codo con nuestros clientes, compartiendo conocimientos y experiencias 
                  para construir relaciones de largo plazo basadas en la confianza y los resultados medibles.
                </p>
              </CardContent>
            </Card>
          </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
