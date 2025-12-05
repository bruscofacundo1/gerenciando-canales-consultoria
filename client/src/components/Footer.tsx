import { APP_LOGO, APP_TITLE } from "@/const";
import { Linkedin, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/favicon.png" alt={APP_TITLE} className="h-10 w-auto brightness-0 invert" />
              <span className="text-lg font-bold">{APP_TITLE}</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Soluciones comerciales exitosas y rentables para aportar valor a los canales de distribución.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/gerenciandocanales/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC50XkqBx4lPamajd6FBVuIA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Nuestro Equipo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">ebrusco@gerenciandocanales.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+54 9 11 5475-9059</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>
              © {currentYear} {APP_TITLE}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/terminos-y-condiciones" className="hover:text-accent transition-colors duration-200">
                Términos y Condiciones
              </Link>
              <Link href="/politica-de-privacidad" className="hover:text-accent transition-colors duration-200">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
