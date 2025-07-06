import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

/**
 * Location/map section for El Mirador Website.
 */
export default function LocationSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const [currentStyle, setCurrentStyle] = useState<
    "standard" | "satellite" | "light"
  >("standard");

  // Map styles - using proper Mapbox style URLs
  const styles = {
    standard: "mapbox://styles/mapbox/standard",
    satellite: "mapbox://styles/mapbox/satellite-streets-v12",
    light: "mapbox://styles/mapbox/light-v11",
  };

  // Coordinates for Cuesta la Higuera, El Viso de San Juan, CP: 45215
  // 40.14209, -3.92436
  const longitude = -3.92436;
  const latitude = 40.14209;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  // Function to add marker to map
  const addMarker = () => {
    if (!map.current) return;

    // SVG pin, centered at (18, 34) for a 36x36 SVG, tip at bottom center
    const el = document.createElement("div");
    el.setAttribute("aria-label", "Ubicación de El Mirador");
    el.innerHTML = `
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
        </filter>
        <path
          d="M18 2C10.82 2 5 7.82 5 15c0 7.18 10.13 18.13 12.13 20.13a2 2 0 0 0 2.74 0C20.87 33.13 31 22.18 31 15c0-7.18-5.82-13-13-13zm0 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
          fill="#FF3946"
          filter="url(#shadow)"
        />
        <circle cx="18" cy="15" r="4" fill="#fff"/>
      </svg>
    `;
    el.style.display = "block";
    el.style.width = "36px";
    el.style.height = "36px";
    el.style.pointerEvents = "auto";

    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat([longitude, latitude])
      .addTo(map.current);
  };

  const handleStyleChange = (style: "standard" | "satellite" | "light") => {
    if (map.current) {
      // Store current viewport
      const center = map.current.getCenter();
      const zoom = map.current.getZoom();

      // Set new style
      map.current.setStyle(styles[style]);
      setCurrentStyle(style);

      // Re-add marker and restore viewport after style loads
      map.current.once("style.load", () => {
        if (map.current) {
          map.current.setCenter(center);
          map.current.setZoom(zoom);
          addMarker();
        }
      });
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !MAPBOX_TOKEN) return;
    if (map.current) return; // initialize only once
    mapboxgl.accessToken = MAPBOX_TOKEN;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: styles[currentStyle],
      center: [longitude, latitude],
      zoom: 15,
    });

    // Add marker after map loads
    map.current.on("load", () => {
      addMarker();
    });

    return () => {
      map.current?.remove();
    };
  }, [MAPBOX_TOKEN, longitude, latitude]);

  return (
    <section id="location" className="py-20 bg-[#e9e4e3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#234457] mb-12">
          Nuestra Ubicación
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden shadow-lg">
            {MAPBOX_TOKEN ? (
              <>
                <div
                  ref={mapContainer}
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  style={{ minHeight: 384 }}
                  aria-label="Mapa interactivo de la ubicación de El Mirador"
                />
                {/* Apple Maps-style style switcher */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-1">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleStyleChange("standard")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          currentStyle === "standard"
                            ? "bg-[#007AFF] text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Estándar
                      </button>
                      <button
                        onClick={() => handleStyleChange("satellite")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          currentStyle === "satellite"
                            ? "bg-[#007AFF] text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Satélite
                      </button>
                      <button
                        onClick={() => handleStyleChange("light")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          currentStyle === "light"
                            ? "bg-[#007AFF] text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Claro
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-[#234457]">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">
                  Aquí se integrará Google Maps interactivo
                </p>
                <p className="text-sm opacity-70">
                  Mostrando la ubicación exacta de El Mirador
                </p>
              </div>
            )}
          </div>
          <div className="text-center">
            <p className="text-[#234457] text-lg mb-4">
              Cuesta la Higuera, El Viso de San Juan
              <br />
              CP: 45215
              <br />
              España
            </p>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#f39416] hover:bg-[#f39416]/90 text-white rounded-xl px-6 py-3">
                <Navigation className="w-4 h-4 mr-2" />
                Cómo llegar
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-[#f39416] text-2xl font-bold">5 min</div>
                <div className="text-[#234457] text-sm">Acceso a la playa</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-[#f39416] text-2xl font-bold">10 min</div>
                <div className="text-[#234457] text-sm">Campos de golf</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-[#f39416] text-2xl font-bold">15 min</div>
                <div className="text-[#234457] text-sm">Aeropuerto</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-[#f39416] text-2xl font-bold">3 min</div>
                <div className="text-[#234457] text-sm">Compras</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
