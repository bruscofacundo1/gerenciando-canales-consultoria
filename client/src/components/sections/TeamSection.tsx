import { Linkedin, User } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Enrique Brusco",
    role: "Director de Gerenciando Canales",
    description: "Descripcion.",
    linkedin: "https://www.linkedin.com/in/enrique-brusco/?originalSubdomain=ar",
    image: "/team/enriquebrusco.jpeg",
  },
  {
    name: "Leon Hollman",
    role: "Consultor de IA",
    description: "Descripcion.",
    linkedin: "https://www.linkedin.com/in/hollmanleon/?originalSubdomain=co",
    image: "/team/hollmanleon.jpeg",
  },
  {
    name: "Facundo Brusco",
    role: "Consultor de IA",
    description: "Descripcion.",
    linkedin: "https://www.linkedin.com/in/facundo-brusco-a69271392/",
    image: "/team/bruscofacundo.jpeg",
  },
  {
    name: "Johana Herrera",
    role: "Consultor de IA",
    description: "Descripcion.",
    linkedin: "https://www.linkedin.com/in/johana-herrera/",
    image: "/team/johanaherrera.jpeg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Conoce a nuestro equipo
          </h2>
          <p className="mt-3 text-xl opacity-80">
            Profesionales especializados que impulsan el éxito de nuestras pymes clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeInSection key={index} delay={0.1 * index} direction="up">
              <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300">
                {/* Avatar con Foto Real */}
                <Avatar className="w-32 h-32 mb-6 border-4 border-accent/50 shadow-lg">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="bg-accent/20 text-accent">
                    <User className="w-16 h-16" />
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-accent mb-4">{member.role}</p>
                
                {/* Recuadro de Descripción */}
                <div className="text-sm text-primary-foreground/90 mb-4 p-3 border border-primary-foreground/30 rounded-md bg-primary-foreground/5 min-h-[100px] flex items-center justify-center">
                  {member.description}
                </div>

                {/* Enlaces Sociales */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
