import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Portraits", "Couples", "Events", "Fashion"];

const portfolioImages = [
  {
    id: 1,
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    alt: "Portrait Photography Sri Lanka"
  },
  {
    id: 2,
    category: "Couples",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    alt: "Couple Photoshoot Anuradhapura"
  },
  {
    id: 3,
    category: "Fashion",
    src: "https://images.unsplash.com/photo-1529139574466-a303027c028b?q=80&w=1974&auto=format&fit=crop",
    alt: "Fashion Shoot Sri Lanka"
  },
  {
    id: 4,
    category: "Events",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    alt: "Event Photography Birthday"
  },
  {
    id: 5,
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    alt: "Portrait Photographer"
  },
  {
    id: 6,
    category: "Couples",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    alt: "Casual Couple Photography"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-[#FF0000] font-semibold tracking-wider uppercase text-sm mb-4"
          >
            <span className="w-12 h-0.5 bg-[#FF0000]" />
            <h2>Our Work</h2>
            <span className="w-12 h-0.5 bg-[#FF0000]" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Portfolio Showcase
          </motion.h3>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FF0000] text-white shadow-lg shadow-red-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#FF0000] text-sm font-bold uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <span className="text-white font-medium text-lg">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/nadeesha_chthuranga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
