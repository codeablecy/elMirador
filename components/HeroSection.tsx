import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Eye } from "lucide-react";
import Image from "next/image";

/**
 * Hero section for El Mirador Website.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
        <Image
          src="https://static.wixstatic.com/media/84770f_c0325f1a16204290a1b722019426b9dc~mv2.jpg/v1/fill/w_2912,h_1405,al_c,q_90,enc_avif,quality_auto/templatesdrive_concrete_wall_with_wood_in_a_new_boutique_buildi_3d51fda0-ea77-4436-afa6-11.jpg"
          alt="El Mirador Propiedad de Lujo"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          El Mirador: Vivienda de lujo con vistas impresionantes
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow">
          Descubre apartamentos y áticos modernos en el corazón de la Costa del
          Sol
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#f39416] hover:bg-[#f39416]/90 text-white text-lg px-8 py-4"
          >
            <Calendar className="w-5 h-5 mr-2" />
            CITA
          </Button>
          <Button
            size="lg"
            className="bg-[#f39416] hover:bg-[#f39416]/90 text-white text-lg px-8 py-4"
          >
            <Eye className="w-5 h-5 mr-2" />
            VISITA
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
