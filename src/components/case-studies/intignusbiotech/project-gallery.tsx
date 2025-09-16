"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

type GalleryProps = {
  items: string[];
  onSelect: (index: number) => void;
};

type SingleImageProps = {
  src: string;
  onClose: () => void;
};

const images = [
  "/images/gallery/intignus-gallery.webp",
  "/images/gallery/intignus-gallery-about.webp",
  "/images/gallery/intignus-gallery-PEscreen.webp",
  "/images/gallery/intignus-gallery-product.webp",
];

function Gallery({ items, onSelect }: GalleryProps) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2, delayChildren: 1 },
    },
  };

  const variant = {
    hidden: { opacity: 0, top: 20 },
    show: { opacity: 1, top: 0 },
  };

  return (
    <motion.ul
      className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <AnimatePresence>
        {items.map((src, i) => (
          <motion.li
            variants={variant}
            key={src}
            layoutId={src}
            onClick={() => onSelect(i)}
            className="relative cursor-pointer overflow-hidden"
          >
            <motion.img
              src={src}
              alt={`Gallery Image ${i + 1}`}
              className="w-full h-60 object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

function SingleImage({ src, onClose }: SingleImageProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.img src={src} layoutId={src} className="max-w-full max-h-full" />
    </div>
  );
}

export default function ProjectGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <LayoutGroup>
      <Gallery items={images} onSelect={(i) => setSelectedIndex(i)} />

      <AnimatePresence>
        {selectedIndex !== null && (
          <SingleImage
            key="modal"
            src={images[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
