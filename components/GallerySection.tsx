import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Eye, Play } from "lucide-react";
import Image from "next/image";

/**
 * Gallery section for El Mirador Website.
 */
export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://plus.unsplash.com/premium_photo-1661876567457-d9bd96f4b67f?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Vista exterior de El Mirador",
      type: "image",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Piscina infinita con vistas al mar",
      type: "image",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1746888841928-69b3c2970b1d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Salón interior con acabados premium",
      type: "image",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1746888841272-f4df63c840a2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Tour virtual de la propiedad",
      type: "video",
    },
  ];

  const constructionProgress = [
    {
      src: "https://plus.unsplash.com/premium_photo-1747141505609-cfc437884d11?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Progreso de construcción - Junio 2025",
      date: "Junio 2025",
      description: "Cimentación completada",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1748070893502-da363df042f5?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Progreso de construcción - Julio 2025",
      date: "Julio 2025",
      description: "Estructura principal en desarrollo",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1748070893502-da363df042f5?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Progreso de construcción - Agosto 2025",
      date: "Agosto 2025",
      description: "Instalaciones técnicas avanzadas",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#e9e4e3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#234457] mb-12">
          Galería de El Mirador
        </h2>

        {/* Main Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-[#234457] mb-8">
            Explora Nuestros Espacios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                    tabIndex={0}
                    role="button"
                    aria-label={`Abrir ${item.alt}`}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {item.type === "video" ? (
                        <Play className="w-12 h-12 text-white" />
                      ) : (
                        <Eye className="w-12 h-12 text-white" />
                      )}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogTitle className="sr-only">Galería</DialogTitle>
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center text-[#234457] mt-4 font-medium">
                    {item.alt}
                  </p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Construction Progress */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-[#234457] mb-8">
            Avance de Obras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {constructionProgress.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                    tabIndex={0}
                    role="button"
                    aria-label={`Ver progreso de ${item.date}`}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-[#f39416] text-white">
                      {item.date}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogTitle className="sr-only">Avance de Obras</DialogTitle>
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="text-center mt-4">
                    <p className="text-[#234457] font-bold text-lg">
                      {item.date}
                    </p>
                    <p className="text-[#234457] mt-2">{item.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
