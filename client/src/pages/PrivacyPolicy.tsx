import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introducción</h2>
              <p className="leading-relaxed">
                En Gerenciando Canales, nos comprometemos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios, en cumplimiento con la Ley N° 25.326 de Protección de Datos Personales de Argentina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Información que Recopilamos</h2>
              <p className="leading-relaxed mb-4">
                Podemos recopilar los siguientes tipos de información:
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-3">2.1 Información Personal</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de la empresa</li>
                <li>Cargo o posición</li>
                <li>Información proporcionada en formularios de contacto o consultas</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">2.2 Información Técnica</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Referencia de origen (sitio desde el cual llegó)</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Cómo Utilizamos su Información</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder a sus consultas y solicitudes de información</li>
                <li>Proporcionar y mejorar nuestros servicios de consultoría</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
                <li>Realizar análisis y estudios de mercado</li>
                <li>Mejorar la experiencia del usuario en nuestro sitio web</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Base Legal para el Tratamiento</h2>
              <p className="leading-relaxed">
                El tratamiento de sus datos personales se basa en su consentimiento expreso, la ejecución de un contrato, el cumplimiento de obligaciones legales, o nuestro interés legítimo en mejorar nuestros servicios y comunicarnos con potenciales clientes, siempre respetando sus derechos fundamentales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Compartir Información</h2>
              <p className="leading-relaxed mb-4">
                Gerenciando Canales no vende, alquila ni comparte su información personal con terceros para fines de marketing. Podemos compartir su información únicamente en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Proveedores de servicios:</strong> Con empresas que nos ayudan a operar nuestro sitio web y prestar servicios (hosting, análisis, etc.), bajo estrictos acuerdos de confidencialidad</li>
                <li><strong>Socios comerciales:</strong> Con su consentimiento explícito, cuando sea necesario para la prestación de servicios</li>
                <li><strong>Requisitos legales:</strong> Cuando sea requerido por ley, orden judicial o autoridad competente</li>
                <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad, o los de nuestros clientes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies y Tecnologías Similares</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-3">Tipos de cookies que utilizamos:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                <li><strong>Cookies de rendimiento:</strong> Para analizar cómo los usuarios utilizan el sitio</li>
                <li><strong>Cookies funcionales:</strong> Para recordar sus preferencias</li>
              </ul>

              <p className="leading-relaxed">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Seguridad de la Información</h2>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen encriptación SSL, controles de acceso, firewalls y monitoreo continuo de seguridad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Retención de Datos</h2>
              <p className="leading-relaxed">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluyendo requisitos legales, contables o de informes. Los criterios para determinar el período de retención incluyen la naturaleza de los datos, obligaciones legales y necesidades comerciales legítimas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Sus Derechos</h2>
              <p className="leading-relaxed mb-4">
                De acuerdo con la Ley N° 25.326 de Protección de Datos Personales de Argentina, usted tiene los siguientes derechos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos personales</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para ciertos fines</li>
                <li><strong>Portabilidad:</strong> Solicitar la transferencia de sus datos a otro responsable</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactarnos a través de los medios indicados en la sección de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Transferencias Internacionales</h2>
              <p className="leading-relaxed">
                En caso de que sea necesario transferir sus datos personales fuera de Argentina, nos aseguraremos de que existan garantías adecuadas de protección conforme a la legislación aplicable, mediante cláusulas contractuales estándar o mecanismos equivalentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Menores de Edad</h2>
              <p className="leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor sin el consentimiento parental apropiado, eliminaremos esa información de inmediato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Cambios a esta Política</h2>
              <p className="leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o en la legislación aplicable. La fecha de la última actualización se indica al inicio de este documento. Le recomendamos revisar esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Contacto y Reclamos</h2>
              <p className="leading-relaxed mb-4">
                Si tiene preguntas, inquietudes o desea ejercer sus derechos relacionados con esta Política de Privacidad, puede contactarnos a través de:
              </p>
              <ul className="list-none space-y-2 ml-4 mb-4">
                <li><strong>Email:</strong> info@gerenciandocanales.com</li>
                <li><strong>Teléfono:</strong> +54 11 XXXX-XXXX</li>
                <li><strong>Ubicación:</strong> Buenos Aires, Argentina</li>
              </ul>
              <p className="leading-relaxed">
                También puede presentar un reclamo ante la Agencia de Acceso a la Información Pública (AAIP), autoridad de control en materia de protección de datos personales en Argentina.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
