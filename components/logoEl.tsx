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
export function LogoEl({
  width = 600,
  height = 600,
  className = "object-contain md:w-auto md:h-auto",
  alt = "Logotipo de El Mirador",
}: LogoProps) {
  return (
    <Image
      src="/logoEl/01.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
