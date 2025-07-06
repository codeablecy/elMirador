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
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 text-white">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-main)" }}
            >
              Porque vivir tranquilo es vivir mejor
            </h2>
            <div className="space-y-8 text-lg leading-relaxed">
              <div>
                <h3
                  className="text-2xl font-semibold text-[#f39416] mb-2"
                  style={{ fontFamily: "var(--font-main)" }}
                >
                  Conecta con la naturaleza
                </h3>
                <p
                  className="subtitle"
                  style={{ fontFamily: "var(--font-sub)" }}
                >
                  Disfruta del aire puro, de los cielos abiertos y de sus
                  paisajes naturales. Aprovecha para pasear, practicar deporte o
                  desconectar del estrés diario.
                </p>
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold text-[#f39416] mb-2"
                  style={{ fontFamily: "var(--font-main)" }}
                >
                  Saborea una vida más tranquila
                </h3>
                <p
                  className="subtitle"
                  style={{ fontFamily: "var(--font-sub)" }}
                >
                  Aprovecha un ritmo más pausado, ideal para trabajar, descansar
                  o teletrabajar, cerca de todo.
                </p>
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold text-[#f39416] mb-2"
                  style={{ fontFamily: "var(--font-main)" }}
                >
                  Calidad y lujo del espacio
                </h3>
                <p
                  className="subtitle"
                  style={{ fontFamily: "var(--font-sub)" }}
                >
                  El espacio y el confort son el verdadero lujo de una vivienda,
                  por eso el proyecto está diseñado con espacios amplios, muy
                  luminosos y una cuidada selección de materiales.
                </p>
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold text-[#f39416] mb-2"
                  style={{ fontFamily: "var(--font-main)" }}
                >
                  Una casa pensada para ti
                </h3>
                <p
                  className="subtitle"
                  style={{ fontFamily: "var(--font-sub)" }}
                >
                  Espacios creados para quienes buscan calidad de vida.
                  Viviendas donde la luz y el espacio son protagonistas. El
                  equilibrio en el metraje de cada estancia, junto con el gran
                  espacio de la buhardilla, hace que cada vivienda sea versátil
                  y funcional, ideal para familias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
