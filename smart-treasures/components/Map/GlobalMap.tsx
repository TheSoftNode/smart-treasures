"use client";

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, useInView } from 'framer-motion';
import { Globe } from 'lucide-react';

interface Location {
    name: string;
    coordinates: [number, number];
    type?: string;
}

const locations: Location[] = [
    { name: 'Nigeria', coordinates: [9.0820, 8.7832], type: 'headquarters' },
    { name: 'South Africa', coordinates: [-30.5595, 22.9375] },
    { name: 'Europe', coordinates: [54.5260, 15.2551] },
    { name: 'South America', coordinates: [-8.7832, -55.4915] },
    { name: 'North America', coordinates: [37.0902, -95.7129] },
    { name: 'Asia', coordinates: [34.0479, 100.6197] }
];

const GlobalMap: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        // Fix for marker icons in Leaflet with Next.js
        if (typeof window !== 'undefined') {
            // Instead of modifying the prototype, use the L.Icon.Default.mergeOptions directly
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
        }

        // Fix for map container size issues in some browsers
        const resizeObserver = new ResizeObserver(() => {
            window.dispatchEvent(new Event('resize'));
        });

        const mapContainer = document.querySelector('.leaflet-container');
        if (mapContainer) {
            resizeObserver.observe(mapContainer);
        }

        return () => {
            if (mapContainer) {
                resizeObserver.unobserve(mapContainer);
            }
        };
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-4"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <div className="inline-block mb-4">
                        <div className="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-full">
                            <Globe className="h-8 w-8 text-teal-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-teal-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Our Global Presence
                    </h2>
                    <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                        Smart Treasures has established a worldwide network across six continents, bringing our community-focused investment opportunities to a global audience.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl overflow-hidden p-4 border border-slate-200 dark:border-slate-700">
                    <div className="h-[500px] w-full relative rounded-xl overflow-hidden">
                        <MapContainer
                            center={[20, 0]}
                            zoom={2}
                            style={{ height: '100%', width: '100%' }}
                            className="rounded-xl"
                            scrollWheelZoom={false}
                            minZoom={2}
                            maxBounds={[[-90, -180], [90, 180]]}
                        // Removed the whenCreated prop
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                noWrap={true}
                            />

                            {locations.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={location.coordinates}
                                >
                                    <Tooltip
                                        direction="top"
                                        offset={[0, -8]}
                                        opacity={1}
                                        permanent
                                        className="custom-tooltip"
                                    >
                                        {location.name}
                                    </Tooltip>
                                    <Popup>
                                        <div className="p-1">
                                            <h3 className="font-bold">{location.name}</h3>
                                            <p className="text-sm">Smart Treasures presence</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>

                <style jsx global>{`
          .leaflet-container {
            font-family: inherit;
          }
          .leaflet-tooltip.custom-tooltip {
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            padding: 4px 8px;
          }
          .dark .leaflet-tooltip.custom-tooltip {
            background-color: #1e293b;
            color: white;
            border-color: #475569;
          }
        `}</style>
            </div>
        </motion.div>
    );
};

export default GlobalMap;