import { motion } from 'framer-motion';

const captions = [
  "Designing meaningful experiences.",
  "Crafted with purpose, not pixels.",
  "Every detail tells a story.",
  "Function meets elegance.",
  "User-first, always."
];

export default function AutoScrollCarousel() {
  return (
    <div className="overflow-hidden w-full bg-black text-white py-4">
      <motion.div
        className="flex gap-8"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30,
        }}
      >
        {[...captions, ...captions].map((caption, i) => (
          <span
            key={i}
            className="min-w-max text-light text-md md:text-lg font-light px-4">
            {caption}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
