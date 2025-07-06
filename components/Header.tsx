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
            {/* <div className="flex items-center space-x-4 text-white text-sm">
              <div className="flex items-start text-white/80 hover:text-[#f39416] transition-colors">
                <Phone className="w-4 h-4 mr-3 mt-0.5 text-[#f39416] flex-shrink-0" />
                <a
                  href="tel:+34655754978"
                  className="text-sm text-white/80 hover:text-[#f39416] transition-colors"
                >
                  <span className="text-sm">+34 655 75 49 78</span>
                </a>
              </div>
              <div className="flex items-start text-white/80 hover:text-[#f39416] transition-colors">
                <Mail className="w-4 h-4 mr-3 mt-0.5 text-[#f39416] flex-shrink-0" />
                <a
                  href="mailto:info@chivana-realestate.com"
                  className="text-sm text-white/80 hover:text-[#f39416] transition-colors"
                >
                  <span className="text-sm">info@chivana-realestate.com</span>
                </a>
              </div>
            </div> */}
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
          <div className="lg:hidden fixed top-20 left-0 w-full z-40 px-4">
            <div className="bg-[#234457] rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col items-stretch gap-4 animate-fade-in">
              {/* Navigation */}
              <nav
                className="flex flex-col gap-2 mb-2"
                aria-label="Navegación principal móvil"
              >
                
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="w-full text-left text-white hover:text-[#f39416] py-2 px-2 rounded-lg transition-colors text-base font-medium"
                  aria-label="Ir a la sección de actualidad"
                >
                  ACTUALIDAD
                </button>
                <button
                  onClick={() => scrollToSection("promotion")}
                  className="w-full text-left text-white hover:text-[#f39416] py-2 px-2 rounded-lg transition-colors text-base font-medium"
                  aria-label="Ir a la sección sobre nosotros"
                >
                  SOMOS
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="w-full text-left text-white hover:text-[#f39416] py-2 px-2 rounded-lg transition-colors text-base font-medium"
                  aria-label="Ir a la sección de proyectos"
                >
                  PROYECTOS
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="w-full text-left text-white hover:text-[#f39416] py-2 px-2 rounded-lg transition-colors text-base font-medium"
                  aria-label="Ir a la sección de contacto"
                >
                  CONTACTO
                </button>
              </nav>
              <div className="border-t border-white/10 my-2" />
              {/* CTAs */}
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#f39416] hover:bg-[#f39416]/90 text-white rounded-lg px-5 py-2 text-base font-semibold shadow-md flex items-center justify-center gap-2">
                  CITA
                </Button>
                <Button className="flex-1 bg-[#f39416] hover:bg-[#f39416]/90 text-white rounded-lg px-5 py-2 text-base font-semibold shadow-md flex items-center justify-center gap-2">
                  VISITA
                </Button>
              </div>
              {/* Contact Info */}
              <div className="mt-2 px-3 py-2 bg-[#234457]/80 rounded-lg border border-white/10 flex flex-col items-start gap-1">
                <a
                  href="tel:+34655754978"
                  className="flex items-center text-white/80 hover:text-[#f39416] transition-colors text-sm font-medium mb-1"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#f39416] flex-shrink-0" />
                  +34 655 75 49 78
                </a>
                <a
                  href="mailto:info@chivana-realestate.com"
                  className="flex items-center text-white/80 hover:text-[#f39416] transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#f39416] flex-shrink-0" />
                  info@chivana-realestate.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
