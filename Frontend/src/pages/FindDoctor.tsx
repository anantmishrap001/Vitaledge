import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { hospitals } from "../lib/hospitals";

mapboxgl.accessToken = "pk.eyJ1IjoiYW5hbnRtaXNocmEwOSIsImEiOiJjbWE0d3lsMWUwYWFlMmxvb3BueXM2Nm04In0.SpHBoVvVUwU3NlG_VQ2Yig";

const FindDoctor = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const [location, setLocation] = useState("");
  const hospitalRefs = useRef<(HTMLLIElement | null)[]>([]);

  const geocodeAddress = async () => {
    if (!location) return;

    const query = encodeURIComponent(location);
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();

    if (!data.features || data.features.length === 0) {
      alert("Location not found. Please try again.");
      return;
    }

    const [lng, lat] = data.features[0].center;

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    if (mapRef.current) {
      userMarkerRef.current = new mapboxgl.Marker({ color: "#ef4444" })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<strong>Your Location</strong><br/>${data.features[0].place_name}`
          )
        )
        .addTo(mapRef.current);

      mapRef.current.flyTo({ center: [lng, lat], zoom: 13 });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    geocodeAddress();
  };

  const filteredHospitals = hospitals.filter(h =>
    h.name.toLowerCase().includes(location.toLowerCase()) ||
    h.address.toLowerCase().includes(location.toLowerCase())
  );

  const handleHospitalClick = (lat: number, lng: number) => {
    if (mapRef.current) {
      mapRef.current.flyTo({ center: [lng, lat], zoom: 14 });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 p-6 overflow-y-auto shadow-lg bg-white dark:bg-black text-gray-800 dark:text-purple-300">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4"
        >
          Find Nearby Hospitals
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search by name, location, or 'Pune'"
            className="border border-purple-300 dark:border-purple-600 bg-white dark:bg-black text-black dark:text-purple-300"
          />
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-purple-200">Hospital List:</h3>
          <ul className="list-disc pl-5 mt-4 space-y-4 text-sm text-gray-700 dark:text-purple-400">
            {filteredHospitals.map((hospital, i) => (
              <li
                key={i}
                ref={(el) => (hospitalRefs.current[i] = el)}
                className="border border-purple-300 dark:border-purple-700 rounded-lg p-3 hover:bg-purple-100 dark:hover:bg-purple-800/30 cursor-pointer transition-all"
                onClick={() => handleHospitalClick(hospital.lat, hospital.lng)}
              >
                <span className="font-medium text-purple-700 dark:text-purple-300">
                  {hospital.name}
                </span>
                <br />
                <span className="text-xs text-gray-500 dark:text-purple-500">{hospital.address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-1 h-96 md:h-full border-t md:border-t-0 md:border-l border-gray-200 dark:border-purple-800 transition-colors">
        <iframe
          title="Hospitals"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          src="https://api.mapbox.com/styles/v1/anantmishra09/cma522zfl004i01rf1rntg5m4.html?title=false&access_token=pk.eyJ1IjoiYW5hbnRtaXNocmEwOSIsImEiOiJjbWE0d3lsMWUwYWFlMmxvb3BueXM2Nm04In0.SpHBoVvVUwU3NlG_VQ2Yig&zoomwheel=false#2/38/-34"
        />
      </div>
    </div>
  );
};

export default FindDoctor;
