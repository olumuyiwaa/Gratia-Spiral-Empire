"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductImageSlider({ images }) {
    const [index, setIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-40 overflow-hidden rounded-md shadow">

            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    className="w-full h-40 object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-2 flex gap-1 w-full justify-center">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                            i === index ? "bg-white scale-125" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
