import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

/**
 * Footer for El Mirador Website.
 */
export default function Footer() {
  return (
    <footer className="bg-[#234457] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-sm mb-4 md:mb-0">
            © 2025 El Mirador. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-white hover:underline text-sm">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-white hover:underline text-sm">
              Aviso Legal
            </Link>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white hover:text-[#f39416] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#f39416] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#f39416] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
