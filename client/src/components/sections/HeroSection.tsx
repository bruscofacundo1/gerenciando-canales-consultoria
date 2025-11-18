import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-violet-50 to-purple-50">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet-400/15 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80008006_1px,transparent_1px),linear-gradient(to_bottom,#80008006_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <span className="block text-primary drop-shadow-sm">
              Gerenciando Canales
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl text-primary font-semibold mb-6 drop-shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.3, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 80
            }}
          >
            Soluciones específicas para cada modelo de negocio
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.5, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 70
            }}
          >
            Te acompañamos en cada una de las etapas del proceso de transformación digital
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.7, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 60
            }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-7 group shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              Contáctanos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-lg px-10 py-7 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-lg"
            >
              Nuestros Servicios
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center p-2 cursor-pointer hover:border-primary/60 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary/60 rounded-full"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
