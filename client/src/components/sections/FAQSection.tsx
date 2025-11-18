import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué servicios ofrece Gerenciando Canales?",
      answer: "Ofrecemos servicios integrales de consultoría estratégica en negocios, incluyendo desarrollo y gestión comercial, estrategia y desarrollo de canales de distribución, alineación organizacional, soporte en negociaciones, consultoría en inteligencia artificial, expansión a nuevos mercados, estudios de viabilidad y evaluación de mercado. Trabajamos en asociación con expertos en diversos campos para brindar soluciones completas y rentables."
    },
    {
      question: "¿Cómo funciona el proceso de consultoría?",
      answer: "Nuestro proceso comienza con una reunión inicial para entender sus necesidades y objetivos. Luego realizamos un diagnóstico detallado de su situación actual, desarrollamos una estrategia personalizada, y la implementamos junto a su equipo. Durante todo el proceso, brindamos acompañamiento continuo, capacitación y seguimiento de resultados para asegurar el éxito de la implementación."
    },
    {
      question: "¿Qué es la consultoría en Inteligencia Artificial y cómo puede ayudar a mi empresa?",
      answer: "Nuestra consultoría en IA ayuda a las empresas a identificar oportunidades de automatización, optimización de procesos y toma de decisiones basada en datos. Evaluamos su infraestructura actual, diseñamos soluciones de IA personalizadas (machine learning, análisis predictivo, chatbots, automatización), y acompañamos la implementación. La IA puede mejorar la eficiencia operativa, reducir costos, personalizar la experiencia del cliente y generar insights valiosos para la toma de decisiones estratégicas."
    },
    {
      question: "¿Cuánto tiempo dura un proyecto de consultoría?",
      answer: "La duración varía según la complejidad y alcance del proyecto. Un diagnóstico inicial puede tomar 2-4 semanas, mientras que proyectos de implementación completa pueden extenderse de 3 a 12 meses. Ofrecemos tanto proyectos puntuales como acompañamiento continuo. Durante la reunión inicial, establecemos un cronograma detallado adaptado a sus necesidades y objetivos específicos."
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer: "Sí, trabajamos con empresas de diversos tamaños, desde startups y PyMEs hasta grandes corporaciones. Nuestras soluciones son escalables y se adaptan al tamaño, presupuesto y necesidades específicas de cada cliente. Contamos con experiencia en múltiples industrias y modelos de negocio, lo que nos permite ofrecer soluciones personalizadas para cada contexto empresarial."
    },
    {
      question: "¿Cómo se estructura el costo de los servicios?",
      answer: "Ofrecemos diferentes modalidades de contratación: proyectos con precio fijo, honorarios por hora, o retainers mensuales para acompañamiento continuo. El costo depende del alcance del proyecto, complejidad, duración y recursos necesarios. Realizamos una propuesta económica detallada después de la reunión inicial, donde evaluamos sus necesidades específicas. Nos enfocamos en generar un retorno de inversión medible y sostenible."
    },
    {
      question: "¿Qué diferencia a Gerenciando Canales de otras consultoras?",
      answer: "Nuestra diferenciación está en la combinación de experiencia práctica en desarrollo comercial, conocimiento profundo de canales de distribución, y expertise en tecnologías emergentes como IA. No solo diseñamos estrategias, sino que acompañamos activamente la implementación. Trabajamos en asociación con expertos especializados para ofrecer soluciones integrales. Además, nos enfocamos en resultados medibles y sostenibles, con más de 9 años de experiencia y una tasa de éxito del 95%."
    },
    {
      question: "¿Necesito tener conocimientos técnicos para implementar soluciones de IA?",
      answer: "No es necesario. Parte de nuestro servicio incluye la capacitación de su equipo y la transferencia de conocimiento. Diseñamos soluciones de IA que sean accesibles y fáciles de usar para usuarios no técnicos. Nos encargamos de toda la parte técnica de implementación y configuración, y brindamos soporte continuo. Nuestro objetivo es que su equipo pueda aprovechar la tecnología sin necesidad de expertise técnico previo."
    },
    {
      question: "¿Ofrecen soporte después de finalizar el proyecto?",
      answer: "Sí, ofrecemos diferentes opciones de soporte post-proyecto. Incluimos un período de garantía y ajustes después de la implementación. También ofrecemos contratos de soporte continuo, actualizaciones periódicas, y sesiones de seguimiento para asegurar que las soluciones implementadas sigan generando valor. Mantenemos una relación de largo plazo con nuestros clientes para acompañar su crecimiento."
    },
    {
      question: "¿Cómo puedo comenzar a trabajar con Gerenciando Canales?",
      answer: "Es muy simple: contactanos a través del formulario en nuestro sitio web, por email a info@gerenciandocanales.com, o por teléfono. Agendaremos una reunión inicial sin costo para conocer tus necesidades, objetivos y desafíos. En esta reunión, evaluaremos si podemos ayudarte y te presentaremos una propuesta personalizada. No hay compromiso hasta que decidas avanzar con el proyecto."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="container">
        <FadeInSection>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5" />
            <span className="font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las consultas más comunes sobre nuestros servicios de consultoría
          </p>
        </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInSection key={index} delay={0.05 * index} direction="up">
              <AccordionItem
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-xl px-6 shadow-sm hover:shadow-lg hover:border-primary/30 hover:scale-[1.01] transition-all duration-300 ease-out"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              </FadeInSection>
            ))}
          </Accordion>

          <FadeInSection delay={0.5}>
          <div className="mt-12 text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 hover:bg-white/80 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <p className="text-lg text-foreground/80 mb-4">
              ¿No encuentras la respuesta que buscas?
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary font-semibold hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Contáctanos directamente
            </button>
          </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
