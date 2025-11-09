'use client';
import React, { useState, useEffect } from 'react';

type Image = {
  src: string;
  alt: string;
};

export default function ImageSlideshow({ images }: { images: Image[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-96 object-cover rounded-2xl shadow-lg transition-all duration-700"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-emerald-600' : 'bg-gray-300'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}