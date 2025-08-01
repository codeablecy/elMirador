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
  width = 200,
  height = 200,
  className = "object-contain w-48 h-48 md:w-52 md:h-52",
  alt = "Logotipo de El Mirador",
}: LogoProps) {
  return (
    <Image
      src="/logoChivana/007.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
