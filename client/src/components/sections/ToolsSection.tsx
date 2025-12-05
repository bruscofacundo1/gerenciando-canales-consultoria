import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Definición de la estructura de una herramienta
interface Tool {
  title: string;
  description: string;
  link: string;
}

// Lista de herramientas proporcionadas por el usuario
const tools: Tool[] = [
  {
    title: "Herramienta de Planificación Territorial",
    description: "Recibe un archivo con direcciones crudas y devuelve un Excel con las direcciones geocodificadas y un ordenamiento optimizado.",
    link: "https://herramienta-territorial-efb.onrender.com/",
  },
  {
    title: "Google Maps - Búsqueda Mejorada",
    description: "Arma bases de datos seleccionando un polígono o círculo en un mapa, buscando por palabra clave (ej. ferretería, pinturería) y obteniendo resultados con dirección, nombre, email (scrapeo), reseñas y sitio web.",
    link: "https://herramienta-my-maps-front.onrender.com/",
  },
  {
    title: "Seguimiento de Participantes JIN",
    description: "Herramienta dedicada al seguimiento y gestión de participantes del curso JIN.",
    link: "",
  },
  {
    title: "Mapa de Operaciones LATAM",
    description: "Mapa interactivo de operaciones en toda Latinoamérica con infografías, cálculo de rutas rápido y la posibilidad de visualizar proveedores, clientes y sucursales.",
    link: "https://mapa-operaciones-latam-j7pu.onrender.com/",
  },
  {
    title: "Mapa de Operaciones LATAM (Avanzado)",
    description: "Versión mejorada del Mapa de Operaciones LATAM con funcionalidades avanzadas, infografías, cálculo de rutas rápido y la posibilidad de visualizar proveedores, clientes y sucursales.",
    link: "https://mapa-operaciones-latam-j7pu.onrender.com/",
  },
  {
    title: "Procesador de Cuenta Corriente",
    description: "Herramienta descargable (.exe) que procesa un archivo Excel del sistema Tango y devuelve un Excel totalmente ordenado y optimizado.",
    link: "https://drive.google.com/file/d/1XZWzGiq3If-20crKzS1tPt9-A0q6za8F/view?usp=drive_link",
  },
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Herramientas Exclusivas para Clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Accede a recursos y utilidades diseñadas para potenciar tu estrategia de canales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {tool.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    Acceder a la Herramienta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
