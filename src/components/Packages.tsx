import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const packages = [
  {
    title: "Starter Mini Shoot",
    price: "Rs. 1,500",
    duration: "15 min shoot",
    features: [
      "5 edited photos",
      "Low-res all photos",
      "Digital delivery"
    ],
    popular: false,
  },
  {
    title: "Basic Photoshoot",
    price: "Rs. 3,500 – 5,000",
    duration: "30–45 min",
    features: [
      "10 HD edited photos",
      "Digital delivery",
      "Basic retouching"
    ],
    popular: false,
  },
  {
    title: "Couple / Casual Shoot",
    price: "Rs. 6,000 – 8,000",
    duration: "1 hour",
    features: [
      "15–25 edited photos",
      "Color grading",
      "Advanced retouching",
      "Multiple outfits"
    ],
    popular: true,
  },
  {
    title: "Fashion / Model Shoot",
    price: "Rs. 7,000 – 10,000",
    duration: "1.5 hours",
    features: [
      "10–20 high quality edits",
      "Advanced editing",
      "Creative direction",
      "Social media optimized"
    ],
    popular: false,
  },
  {
    title: "Birthday / Small Event",
    price: "Rs. 8,000 – 12,000",
    duration: "1–2 hours",
    features: [
      "30–50 photos",
      "Event coverage",
      "Group shots",
      "Fast turnaround"
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-[#FF0000] font-semibold tracking-wider uppercase text-sm mb-4"
          >
            <span className="w-12 h-0.5 bg-[#FF0000]" />
            <h2>Pricing Plans</h2>
            <span className="w-12 h-0.5 bg-[#FF0000]" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Affordable Packages
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect package for your needs. High-quality photography that doesn't break the bank.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                pkg.popular 
                  ? 'ring-2 ring-[#FF0000] shadow-2xl scale-105 z-10 transform -translate-y-2' 
                  : 'shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-[#FF0000] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center shadow-lg shadow-red-500/30">
                    <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h4>
                <div className="flex items-baseline text-[#FF0000] mb-2">
                  <span className="text-3xl font-black tracking-tight">{pkg.price}</span>
                </div>
                <p className="text-gray-500 text-sm font-medium bg-gray-50 inline-block px-3 py-1 rounded-full">
                  ⏱ {pkg.duration}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <div className="bg-red-50 p-1 rounded-full mr-3 mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-[#FF0000]" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/94720649128?text=Hi Snap Vibe! I'm interested in the ${pkg.title} (${pkg.price}) package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-xl font-bold transition-all ${
                  pkg.popular
                    ? 'bg-[#FF0000] hover:bg-red-700 text-white shadow-lg shadow-red-500/20'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Book This Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
