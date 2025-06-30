'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';


const adventures = [
  {
    src: 'skiing.png', 
    alt: 'Skiing on a snowy mountain',
  },
  {
    src: 'quad.png',
    alt: 'Hiking with a view of the valley',
  },
  {
    src: 'diving.png',
    alt: 'Diving near a coral reef in Egypt',
  },
  {
    src: 'pyramids.png',
    alt: 'Visiting the pyramids in Egypt',
  },
];

export function AdventureGallery() {
  return (
    <div className="not-prose my-4 grid grid-cols-2 gap-4">
      {adventures.map((adventure, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Image
            src={adventure.src}
            alt={adventure.alt}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}