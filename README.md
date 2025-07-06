location:

Great question!  
**The pin will only change location if you update the latitude and longitude values in the code.**

Currently, the address is just displayed as text, and the map pin is set by these two variables:
```ts
  // 40.14209, -3.92436
  const longitude = -3.92436;
  const latitude = 40.14209;
     style: "mapbox://styles/mapbox/standard-satellite",
```
These coordinates are used to center the map and place the marker:
```ts
center: [longitude, latitude],
...
.setLngLat([longitude, latitude])
```

**If you change the address text but do not update the coordinates, the pin will stay in the same place.**

---

### How to update the pin for a new address

1. **Find the new latitude and longitude** for your new address (e.g., using Google Maps: right-click the location → “What’s here?” → copy the coordinates).
2. **Update the values** in your code:
   ```ts
   const longitude = NEW_LONGITUDE;
   const latitude = NEW_LATITUDE;
   ```
3. **(Optional)** Update the displayed address text to match.

---

#### If you want to automate this (e.g., enter an address and have the map update automatically), you would need to use a geocoding API (like Mapbox Geocoding or Google Maps Geocoding) to convert the address to coordinates in real time.

Let me know if you want help implementing dynamic address-to-pin functionality!


---------

Navigation Structure (as per UI/UX doc):
PROYECTOS → Pricing section (Tipologías y Precios)
ACTUALIDAD → Gallery section (Galería + Avance de Obras)
SOMOS → Promotion section (Descubre El Mirador)
CONTACTO → Location section (Mapa de Localización)
