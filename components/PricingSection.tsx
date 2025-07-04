import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

/**
 * Pricing and typology section for El Mirador Website.
 */
export default function PricingSection() {
  const typologies = [
    {
      name: "Apartamento de 2 Dormitorios",
      surface: "120 m²",
      price: "Desde 350.000 €",
      details: "2 baños, gran terraza, salón de concepto abierto",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Apartamento de 3 Dormitorios",
      surface: "150 m²",
      price: "Desde 450.000 €",
      details: "3 baños, acabados premium, vistas al mar",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Ático Deluxe",
      surface: "200 m²",
      price: "Desde 750.000 €",
      details: "4 baños, piscina privada, vistas 360°",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];
  return (
    <section id="pricing" className="py-20 bg-[#e9e4e3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#234457] mb-12">
          Tipologías y Precios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typologies.map((type, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#234457]">{type.name}</CardTitle>
                <CardDescription className="text-[#234457]/70">
                  {type.surface}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-[#f39416]">
                    {type.price}
                  </div>
                  <p className="text-[#234457]">{type.details}</p>
                  <Button className="w-full bg-[#f39416] hover:bg-[#f39416]/90 text-white">
                    Ver Plano
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
