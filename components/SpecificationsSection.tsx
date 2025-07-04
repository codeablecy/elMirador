import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, Leaf, Shield, Users, Wifi } from "lucide-react";

/**
 * Quality specifications section for El Mirador Website.
 */
export default function SpecificationsSection() {
  return (
    <section id="specifications" className="py-20 bg-[#234457]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Especificaciones de Calidad
        </h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="kitchen" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-[#f39416] text-left">
                <div className="flex items-center">
                  <Home className="w-5 h-5 mr-3" />
                  Cocina
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                <ul className="space-y-2">
                  <li>• Electrodomésticos alemanes premium (Miele/Bosch)</li>
                  <li>• Encimeras de cuarzo con caída de agua</li>
                  <li>• Muebles con cierre suave e iluminación LED interior</li>
                  <li>• Vinoteca y cafetera integrada</li>
                  <li>• Placas de inducción con ventilación integrada</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bathroom" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-[#f39416] text-left">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  Baños
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                <ul className="space-y-2">
                  <li>• Suelos y paredes de mármol italiano</li>
                  <li>• Ducha tipo lluvia con cromoterapia</li>
                  <li>• Suelo radiante con control inteligente</li>
                  <li>• Grifería premium Hansgrohe y sanitarios Duravit</li>
                  <li>• Espejos antivaho y sistema de sonido integrado</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="energy" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-[#f39416] text-left">
                <div className="flex items-center">
                  <Leaf className="w-5 h-5 mr-3" />
                  Eficiencia Energética
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                <ul className="space-y-2">
                  <li>
                    • Calificación energética A+ con integración de paneles
                    solares
                  </li>
                  <li>• Climatización inteligente por zonas</li>
                  <li>
                    • Ventanas triple acristalamiento con rotura de puente
                    térmico
                  </li>
                  <li>• Iluminación LED con sensores de movimiento</li>
                  <li>
                    • Recogida de aguas pluviales y reciclaje de aguas grises
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="smart" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-[#f39416] text-left">
                <div className="flex items-center">
                  <Wifi className="w-5 h-5 mr-3" />
                  Hogar Inteligente
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                <ul className="space-y-2">
                  <li>• Domótica integral</li>
                  <li>• Compatibilidad con control por voz (Alexa/Google)</li>
                  <li>• Seguridad inteligente con reconocimiento facial</li>
                  <li>• Persianas y escenas de iluminación automatizadas</li>
                  <li>• Conectividad de fibra óptica de alta velocidad</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-[#f39416] text-left">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3" />
                  Seguridad
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/90">
                <ul className="space-y-2">
                  <li>• Seguridad y conserjería profesional 24/7</li>
                  <li>• Acceso biométrico</li>
                  <li>• Videovigilancia con IA</li>
                  <li>• Sistemas de emergencia y extinción de incendios</li>
                  <li>
                    • Parking subterráneo seguro con carga para vehículos
                    eléctricos
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
