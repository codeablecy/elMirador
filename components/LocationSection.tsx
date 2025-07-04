import { Button } from "@/components/ui/button";
import { Car, MapPin } from "lucide-react";

/**
 * Location/map section for El Mirador Website.
 */
export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-[#e9e4e3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#234457] mb-12">
          Nuestra Ubicación
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center text-[#234457]">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg">
                Aquí se integrará Google Maps interactivo
              </p>
              <p className="text-sm opacity-70">
                Mostrando la ubicación exacta de El Mirador
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[#234457] text-lg mb-4">
              Avenida del Mar, 123
              <br />
              29600 Marbella, Costa del Sol
              <br />
              España
            </p>
            <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white">
              <Car className="w-4 h-4 mr-2" />
              Cómo llegar
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-[#f39416] text-2xl font-bold">5 min</div>
                <div className="text-[#234457] text-sm">Acceso a la playa</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-[#f39416] text-2xl font-bold">10 min</div>
                <div className="text-[#234457] text-sm">Campos de golf</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-[#f39416] text-2xl font-bold">15 min</div>
                <div className="text-[#234457] text-sm">Aeropuerto</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-[#f39416] text-2xl font-bold">3 min</div>
                <div className="text-[#234457] text-sm">Compras</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
