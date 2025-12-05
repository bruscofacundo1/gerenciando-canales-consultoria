import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { Button } from "@/components/ui/button";


export function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ToolsSection />
        <div className="container mx-auto px-4 py-10 text-center">
          <a href="/">
            <Button size="lg" variant="outline">
              Volver al Inicio
            </Button>
          </a>
        </div>
      </main>
      <Footer />

    </>
  );
}
