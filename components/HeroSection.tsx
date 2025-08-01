import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Eye } from "lucide-react";
import Image from "next/image";
import { BsFillBuildingsFill } from "react-icons/bs";
import { PiClockCountdownFill } from "react-icons/pi";
import { LogoEl } from "./logoEl";

/**
 * Hero section for El Mirador Website.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between bg-black/50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
        <Image
          src="https://static.wixstatic.com/media/84770f_c0325f1a16204290a1b722019426b9dc~mv2.jpg/v1/fill/w_2912,h_1405,al_c,q_90,enc_avif,quality_auto/templatesdrive_concrete_wall_with_wood_in_a_new_boutique_buildi_3d51fda0-ea77-4436-afa6-11.jpg"
          alt="El Mirador del Viso de San Juan - Vivienda de lujo"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pb-32 sm:pb-8">
        <LogoEl className="block justify-center items-center -mb-10 mx-auto " />
        {/* <h1
          className="hidden  text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: "var(--font-main)" }}
        >
          El Mirador del Viso de San Juan
        </h1> */}
        <p
          className="subtitle text-xl md:text-2xl mb-8 text-white -mt-16 drop-shadow"
          style={{ fontFamily: "var(--font-main)" }}
        >
          La mejor opción para vivir en El Viso de San Juan. A un paso de Madrid
          y Toledo, disfruta de tranquilidad, naturaleza y calidad de vida en
          viviendas exclusivas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-10">
          <Button
            size="lg"
            className="bg-[#f39416] hover:bg-[#f39416]/90 text-white text-lg px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center"
            aria-label="Solicitar Cita"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Solicitar Cita
          </Button>
          <Button
            size="lg"
            className="bg-[#f39416] hover:bg-[#f39416]/90 text-white text-lg px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center"
            aria-label="Visita Virtual"
          >
            <Eye className="w-5 h-5 mr-2" />
            Visita Virtual
          </Button>
        </div>
      </div>
      {/* Info Panel Overlay */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0 flex flex-row justify-center gap-4 z-20 max-w-full px-4 sm:px-8">
        {/* Estado Box */}
        <div
          className="items-center rounded-2xl p-4 sm:p-6 min-w-[140px] sm:min-w-[180px] flex flex-col shadow-xl w-full sm:w-auto transition hover:scale-[1.03] hover:shadow-2xl"
          style={{
            background: "#234457",
            color: "#fff",
            fontFamily: "var(--font-sub)",
          }}
          aria-label="Estado de la obra"
        >
          <div
            className="mb-2 sm:mb-3 rounded-lg p-1.5 sm:p-2 flex"
            style={{ background: "#e9e4e3" }}
          >
            <PiClockCountdownFill
              className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse"
              style={{ color: "#234457" }}
            />
          </div>
          <span className="font-bold text-base sm:text-lg mb-1" style={{ fontFamily: "var(--font-main)" }}>Estado</span>
          <span className="text-xs sm:text-sm opacity-90" style={{ fontFamily: "var(--font-sub)" }}>Obras iniciadas</span>
        </div>
        {/* Typography Box */}
        <div
          className="items-center rounded-2xl p-4 sm:p-6 min-w-[140px] sm:min-w-[180px] flex flex-col shadow-xl w-full sm:w-auto transition hover:scale-[1.03] hover:shadow-2xl"
          style={{
            background: "#234457",
            color: "#fff",
            fontFamily: "var(--font-sub)",
          }}
          aria-label="Tipología de viviendas"
        >
          <div
            className="mb-2 sm:mb-3 rounded-lg p-1.5 sm:p-2 flex"
            style={{ background: "#e9e4e3" }}
          >
            <BsFillBuildingsFill
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{ color: "#234457" }}
            />
          </div>
          <span className="font-bold text-base sm:text-lg mb-1" style={{ fontFamily: "var(--font-main)" }}>
            Typography
          </span>
          <span className="text-xs sm:text-sm opacity-90" style={{ fontFamily: "var(--font-sub)" }}>
            Amplios chalets <br /> con jardín privado
          </span>
        </div>
      </div>
      <div className="absolute -bottom-2 transform -translate-x-1/2 text-white animate-bounce z-30">
        <ChevronDown className="w-8 h-8" />
      </div>
      
    </section>
  );
}
