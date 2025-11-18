import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-violet-50 to-purple-50">
      <Navbar />
      
      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-2 hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Aceptación de los Términos</h2>
              <p className="leading-relaxed">
                Al acceder y utilizar el sitio web de Gerenciando Canales, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Servicios Ofrecidos</h2>
              <p className="leading-relaxed mb-4">
                Gerenciando Canales ofrece servicios de consultoría estratégica en negocios, desarrollo comercial, gestión de canales de distribución e implementación de soluciones de inteligencia artificial. Los servicios específicos, alcance y condiciones se detallarán en acuerdos comerciales separados con cada cliente.
              </p>
              <p className="leading-relaxed">
                La información presentada en este sitio web tiene carácter informativo y no constituye una oferta vinculante de servicios. Cada proyecto será evaluado individualmente y estará sujeto a la firma de un contrato específico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Propiedad Intelectual</h2>
              <p className="leading-relaxed mb-4">
                Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Gerenciando Canales o de sus proveedores de contenido y está protegido por las leyes argentinas e internacionales de propiedad intelectual.
              </p>
              <p className="leading-relaxed">
                Queda prohibida la reproducción, distribución, modificación o uso comercial del contenido sin autorización previa y por escrito de Gerenciando Canales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Uso Aceptable</h2>
              <p className="leading-relaxed">
                Usted se compromete a utilizar este sitio web únicamente para fines legítimos y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute del sitio por parte de otros usuarios. Está prohibido:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Utilizar el sitio de manera fraudulenta o en conexión con actividades ilegales</li>
                <li>Intentar obtener acceso no autorizado a sistemas o redes</li>
                <li>Transmitir virus, malware o cualquier código malicioso</li>
                <li>Recopilar información de otros usuarios sin su consentimiento</li>
                <li>Realizar ingeniería inversa o intentar extraer código fuente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Confidencialidad</h2>
              <p className="leading-relaxed">
                Gerenciando Canales se compromete a mantener la confidencialidad de toda información proporcionada por los clientes en el marco de consultas o contratación de servicios. Los términos específicos de confidencialidad se establecerán en acuerdos de no divulgación (NDA) cuando corresponda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitación de Responsabilidad</h2>
              <p className="leading-relaxed mb-4">
                Gerenciando Canales no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web o de los servicios ofrecidos, incluso si se ha advertido de la posibilidad de tales daños.
              </p>
              <p className="leading-relaxed">
                La información contenida en este sitio web se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas. Gerenciando Canales no garantiza que el sitio web esté libre de errores o que funcione sin interrupciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Enlaces a Sitios de Terceros</h2>
              <p className="leading-relaxed">
                Este sitio web puede contener enlaces a sitios web de terceros. Gerenciando Canales no tiene control sobre el contenido de estos sitios y no asume responsabilidad alguna por el contenido, políticas de privacidad o prácticas de sitios web de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Modificaciones</h2>
              <p className="leading-relaxed">
                Gerenciando Canales se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio después de la publicación de cambios constituye su aceptación de dichos cambios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Ley Aplicable y Jurisdicción</h2>
              <p className="leading-relaxed">
                Estos términos y condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes de la Ciudad Autónoma de Buenos Aires, Argentina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contacto</h2>
              <p className="leading-relaxed">
                Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos a través de:
              </p>
              <ul className="list-none space-y-2 mt-4 ml-4">
                <li><strong>Email:</strong> info@gerenciandocanales.com</li>
                <li><strong>Teléfono:</strong> +54 11 XXXX-XXXX</li>
                <li><strong>Ubicación:</strong> Buenos Aires, Argentina</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
