import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Header component for El Mirador Website.
 * Handles navigation, mobile menu, and contact info.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#234457] shadow-lg"
          : "bg-[#234457]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center h-20 md:h-24 lg:h-32">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Navegación principal"
          >
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-[#f39416] hover:underline transition-colors"
              aria-label="Ir a la sección de actualidad"
            >
              ACTUALIDAD
            </button>
            <button
              onClick={() => scrollToSection("promotion")}
              className="text-white hover:text-[#f39416] hover:underline transition-colors"
              aria-label="Ir a la sección sobre nosotros"
            >
              SOMOS
            </button>
             <button
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-[#f39416] hover:underline transition-colors"
              aria-label="Ir a la sección de proyectos"
            >
              PROYECTOS
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-white hover:text-[#f39416] hover:underline transition-colors"
              aria-label="Ir a la sección de contacto"
            >
              CONTACTO
            </button>
          </nav>

          {/* Contact Info & CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-white text-sm">
              <a
                href="tel:+34XXXXXXXXX"
                className="flex items-center space-x-1 hover:text-[#f39416] transition-colors"
                aria-label="Llamar al +34 XXX XXX XXX"
              >
                <Phone className="w-4 h-4" />
                <span>+34 XXX XXX XXX</span>
              </a>
              <a
                href="mailto:info@elmirador.com"
                className="flex items-center space-x-1 hover:text-[#f39416] transition-colors"
                aria-label="Enviar correo a info@elmirador.com"
              >
                <Mail className="w-4 h-4" />
                <span>info@elmirador.com</span>
              </a>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white">
                CITA
              </Button>
              <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white">
                VISITA
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Cerrar menú móvil" : "Abrir menú móvil"
            }
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#234457] border-t border-white/20">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left text-white hover:text-[#f39416] py-2"
                aria-label="Ir a la sección de proyectos"
              >
                PROYECTOS
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left text-white hover:text-[#f39416] py-2"
                aria-label="Ir a la sección de actualidad"
              >
                ACTUALIDAD
              </button>
              <button
                onClick={() => scrollToSection("promotion")}
                className="block w-full text-left text-white hover:text-[#f39416] py-2"
                aria-label="Ir a la sección sobre nosotros"
              >
                SOMOS
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="block w-full text-left text-white hover:text-[#f39416] py-2"
                aria-label="Ir a la sección de contacto"
              >
                CONTACTO
              </button>
              <div className="flex space-x-2 pt-4">
                <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white flex-1">
                  CITA
                </Button>
                <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white flex-1">
                  VISITA
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
