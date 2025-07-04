import Image from "next/image";

/**
 * Promotion section for El Mirador Website.
 */
export default function PromotionSection() {
  return (
    <section id="promotion" className="py-20 bg-[#234457]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://plus.unsplash.com/premium_photo-1748075588586-525c48d6dd03?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Render arquitectónico de El Mirador"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-4xl font-bold mb-6">Descubre El Mirador</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                El Mirador representa la cima de la vida de lujo en la Costa del
                Sol. Nuestro exclusivo desarrollo combina arquitectura
                contemporánea con impresionantes vistas panorámicas al mar
                Mediterráneo.
              </p>
              <p>
                Ubicado en una de las zonas más prestigiosas, El Mirador ofrece
                acceso inigualable a servicios de primer nivel, playas vírgenes
                y vibrantes atracciones culturales. Cada residencia está
                diseñada meticulosamente para maximizar la luz natural y mostrar
                el impresionante paisaje costero.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#f39416] rounded-full mr-3"></div>
                  Ubicación privilegiada en primera línea de playa con acceso
                  directo al mar
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#f39416] rounded-full mr-3"></div>
                  A 5 minutos de colegios internacionales y campos de golf
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#f39416] rounded-full mr-3"></div>
                  Spa y centro de bienestar exclusivos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#f39416] rounded-full mr-3"></div>
                  Servicios de conserjería y seguridad 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
