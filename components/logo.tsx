import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

/**
 * Logotipo de El Mirador, reutilizable y optimizado.
 * @param width - Ancho del logo (por defecto 158)
 * @param height - Alto del logo (por defecto 158)
 * @param className - Clases CSS adicionales
 * @param alt - Texto alternativo para accesibilidad
 */
export function Logo({
  width = 158,
  height = 158,
  className = "object-contain w-32 h-32 md:w-32 md:h-24 lg:w-36 lg:h-48",
  alt = "Logotipo de El Mirador",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
