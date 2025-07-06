import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Pricing and typology section for El Mirador Website.
 */
export default function PricingSection() {
  const typologies = [
    {
      name: "Vivienda Tipo A",
      image: "/DOSSIER_00010.jpg",
      specs: [
        "Superficie construida: 180m²",
        "Superficie útil vivienda: 180m²",
        "Planta baja: 180m²",
        "Planta primera: 180m²",
        "Planta bajo cubierta: 180m²",
        "Superficie parcela: 180m²",
      ],
    },
    {
      name: "Vivienda Tipo A Simétrico",
      image: "/DOSSIER_00011.jpg",
      specs: [
        "Superficie construida: 180m²",
        "Superficie útil vivienda: 180m²",
        "Planta baja: 180m²",
        "Planta primera: 180m²",
        "Planta bajo cubierta: 180m²",
        "Superficie parcela: 180m²",
      ],
    },
    {
      name: "Vivienda Tipo A Junta de Dilatación",
      image: "/DOSSIER_00012.jpg",
      specs: [
        "Superficie construida: 180m²",
        "Superficie útil vivienda: 180m²",
        "Planta baja: 180m²",
        "Planta primera: 180m²",
        "Planta bajo cubierta: 180m²",
        "Superficie parcela: 180m²",
      ],
    },
    {
      name: "Vivienda Tipo A Junta de Dilatación Simétrico",
      image: "/DOSSIER_00013.jpg",
      specs: [
        "Superficie construida: 180m²",
        "Superficie útil vivienda: 180m²",
        "Planta baja: 180m²",
        "Planta primera: 180m²",
        "Planta bajo cubierta: 180m²",
        "Superficie parcela: 180m²",
      ],
    },
    {
      name: "Vivienda Tipo C",
      image: "/DOSSIER_00014.jpg",
      specs: [
        "Superficie construida: 180m²",
        "Superficie útil vivienda: 180m²",
        "Planta baja: 180m²",
        "Planta primera: 180m²",
        "Planta bajo cubierta: 180m²",
        "Superficie parcela: 180m²",
      ],
    },
    {
      name: "Vivienda Tipo C Simétrico",
      image: "/DOSSIER_00015.jpg",
      specs: [
        "Superficie construida: 180m²",
        "Superficie útil vivienda: 180m²",
        "Planta baja: 180m²",
        "Planta primera: 180m²",
        "Planta bajo cubierta: 180m²",
        "Superficie parcela: 180m²",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#e9e4e3]">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-[#234457] mb-12"
          style={{ fontFamily: "var(--font-main)" }}
        >
          Tipologías de Vivienda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typologies.map((type, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative cursor-zoom-in group">
                    <Image
                      src={type.image}
                      alt={type.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-contain bg-white border-b border-gray-200 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-t-2xl">
                      <Search className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-4 flex flex-col items-center">
                  <DialogTitle className="sr-only">{type.name}</DialogTitle>
                  <Image
                    src={type.image}
                    alt={type.name}
                    width={900}
                    height={700}
                    className="w-full h-auto object-contain rounded-xl border border-gray-200 bg-white"
                  />
                  <div className="mt-4 text-center">
                    <h3
                      className="text-2xl font-bold text-[#234457] mb-2"
                      style={{ fontFamily: "var(--font-main)" }}
                    >
                      {type.name}
                    </h3>
                    <ul
                      className="subtitle space-y-1"
                      style={{ fontFamily: "var(--font-sub)" }}
                    >
                      {type.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
                <CardHeader className="pb-4">
                  <CardTitle
                    className="text-[#234457] text-xl font-bold"
                    style={{ fontFamily: "var(--font-main)" }}
                  >
                    {type.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul
                    className="subtitle space-y-1"
                    style={{ fontFamily: "var(--font-sub)" }}
                  >
                    {type.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    
                      <Link href={`https://drive.google.com/file/d/1L-ru3PPiTYHQsH-l2kD9pDRTXnZhBcDo/view?usp=drive_link`}>
                      <Button
                        className="w-full bg-[#f39416] hover:bg-[#f39416]/90 text-white rounded-xl py-3"
                        tabIndex={-1}
                      >
                          <FileText className="w-4 h-4 mr-2" />
                          Ver Plano
                        </Button>
                      </Link>
                   
                  </div>
                </CardContent>
              </Dialog>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
