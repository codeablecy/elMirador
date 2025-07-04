"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import PricingSection from "@/components/PricingSection";
import PromotionSection from "@/components/PromotionSection";
import SpecificationsSection from "@/components/SpecificationsSection";

/**
 * Main landing page for El Mirador Website.
 * Composes all major sections as modular components.
 */
export default function ElMiradorWebsite() {
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

  const typologies = [
    {
      name: "2-Bedroom Apartment",
      surface: "120 m²",
      price: "From €350,000",
      details: "2 Baths, Large Terrace, Open-plan living",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "3-Bedroom Apartment",
      surface: "150 m²",
      price: "From €450,000",
      details: "3 Baths, Premium Finishes, Sea Views",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Penthouse Deluxe",
      surface: "200 m²",
      price: "From €750,000",
      details: "4 Baths, Private Pool, 360° Views",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Exterior View",
      type: "image",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Infinity Pool",
      type: "image",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Interior Living",
      type: "image",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Property Tour",
      type: "video",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Construction Progress - June 2025",
      type: "progress",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Construction Progress - July 2025",
      type: "progress",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GallerySection />
      <PromotionSection />
      <PricingSection />
      <SpecificationsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
