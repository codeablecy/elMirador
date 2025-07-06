import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/**
 * Enhanced Footer for El Mirador Website.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#234457] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 bg-white/5 rounded-2xl p-6 flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="mb-6 flex flex-col items-center md:items-start">
              <Logo
                width={120}
                height={120}
                className="object-contain w-32 h-32 mb-4"
              />
            </div>
            {/* Contact Info */}
            <div className="space-y-3 mb-6 w-full">
              <div className="flex items-center text-white/80 hover:text-[#f39416] transition-colors">
                <Phone className="w-4 h-4 mr-3 text-[#f39416] flex-shrink-0" />
                <a
                  href="tel:+34655754978"
                  className="text-sm text-white/80 hover:text-[#f39416] transition-colors"
                >
                  655754978
                </a>
              </div>
              <div className="flex items-center text-white/80 hover:text-[#f39416] transition-colors">
                <Mail className="w-4 h-4 mr-3 text-[#f39416] flex-shrink-0" />
                <a
                  href="mailto:info@chivana-realestate.com"
                  className="text-sm text-white/80 hover:text-[#f39416] transition-colors"
                >
                  info@chivana-realestate.com
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-3 text-[#f39416] flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/VL5XdnvQ3EYv1DBA8"
                  target="_blank"
                  className="text-sm text-white/80 hover:text-[#f39416] transition-colors"
                >
                  Cuesta la Higuera, El Viso de San Juan
                  <br />
                  CP: 45215, España
                </a>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4 justify-center md:justify-start w-full mt-2">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#f39416] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#f39416] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#f39416] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="lg:col-span-1 bg-white/5 rounded-2xl p-6 flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-6 text-white text-center md:text-left w-full">
              Navegación
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 w-full">
              <li>
                <a
                  href="#hero"
                  className="text-white/80 hover:text-[#f39416] transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/80 hover:text-[#f39416] transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#promotion"
                  className="text-white/80 hover:text-[#f39416] transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-[#f39416] transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Tipologías
                </a>
              </li>
              <li>
                <a
                  href="#specifications"
                  className="text-white/80 hover:text-[#f39416] transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Calidades
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-white/80 hover:text-[#f39416] transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Ubicación
                </a>
              </li>
            </ul>
          </div>
          {/* CTA Section */}
          <div className="lg:col-span-1 bg-white/5 rounded-2xl p-6 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6 text-white text-center md:text-left w-full">
              ¿Listo para Descubrir?
            </h3>
            <p className="text-white/80 text-sm mb-6 text-center md:text-left w-full">
              Agenda una visita o solicita más información sobre nuestras
              exclusivas propiedades.
            </p>
            <div className="space-y-3 w-full">
              <Button className="w-full bg-[#f39416] hover:bg-[#f39416]/90 text-white rounded-xl py-3">
                <Calendar className="w-4 h-4 mr-2" />
                Solicitar Cita
              </Button>
              <Button className="w-full bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-xl py-3">
                <Eye className="w-4 h-4 mr-2" />
                Visita Virtual
              </Button>
            </div>
            {/* Newsletter Signup */}
            <div className="mt-6 w-full">
              <h4 className="text-sm font-medium mb-3 text-white text-center md:text-left">
                Mantente Informado
              </h4>
              <p className="text-white/60 text-xs mb-3 text-center md:text-left">
                Recibe las últimas novedades y ofertas exclusivas.
              </p>
              <div className="flex w-full">
                <input
                  suppressHydrationWarning
                  aria-label="Email"
                  aria-required="true"
                  aria-describedby="email-description"
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#f39416]"
                />
                <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white rounded-r-lg px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60 text-center md:text-left">
              <span>
                © {currentYear} El Mirador. Todos los derechos reservados.
              </span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#f39416] transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-[#f39416] transition-colors">
                  Aviso Legal
                </a>
                <a href="#" className="hover:text-[#f39416] transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
