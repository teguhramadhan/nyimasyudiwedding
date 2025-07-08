"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPhotos() {
  const galleryImages = [
    { src: "/images/story/1.jpg", alt: "Foto Prewedding 1" },
    { src: "/images/story/2.jpg", alt: "Foto Prewedding 2" },
    { src: "/images/story/3.jpg", alt: "Foto Prewedding 3" },
    { src: "/images/story/2.jpg", alt: "Foto Prewedding 4" },
    { src: "/images/story/1.jpg", alt: "Foto Prewedding 5" },
    { src: "/images/story/3.jpg", alt: "Foto Prewedding 6" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full h-auto px-4 lg:px-24 my-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl lg:text-6xl font-cinzelDecorative mb-6">
            Our Gallery
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition">
                  See Detail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full px-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
