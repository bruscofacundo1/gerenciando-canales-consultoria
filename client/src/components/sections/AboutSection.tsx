import { Target, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Misión Clara",
      description: "Apoyar empresas con soluciones comerciales exitosas y rentables",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenible",
      description: "Desarrollamos negocios sólidos y sostenibles a largo plazo",
    },
    {
      icon: Users,
      title: "Valor a Canales",
      description: "Aportamos valor real a los canales de distribución",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Soluciones integrales de óptima rentabilidad",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Sobre Nosotros
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
          </FadeInSection>

          {/* Mission Statement */}
          <FadeInSection delay={0.2}>
            <div className="mb-16">
              <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl hover:border-primary/40 hover:scale-[1.01] transition-all duration-500 ease-out">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">
                    Nuestra Misión
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed text-center">
                    Nuestra misión es apoyar a las empresas con soluciones comerciales exitosas y rentables, 
                    para aportar valor a los canales de distribución, desarrollando negocios sólidos y sostenibles. 
                    Ofrecemos servicios en los campos de estrategia y desarrollo comercial, alineación organizacional 
                    y soporte en negociaciones. Nuestra experiencia incluye desarrollo y soporte de la gestión comercial, 
                    posicionamiento, estrategia de expansión a nuevos mercados y negocios, estudios de viabilidad y 
                    evaluación de mercado. Además, nos asociamos con expertos en diversos campos para brindarle 
                    soluciones integrales de óptima rentabilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={0.1 * index} direction="up">
                <Card className="group hover:shadow-xl hover:border-primary/50 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.03] h-full cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
