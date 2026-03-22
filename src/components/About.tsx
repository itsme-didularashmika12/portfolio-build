import { motion } from 'framer-motion';
import { Camera, MapPin, Smartphone, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1554046920-90dcac023691?q=80&w=1974&auto=format&fit=crop"
                alt="Nadeesha Chathuranga - Snap Vibe Photographer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-2xl">Nadeesha Chathuranga</p>
                <p className="text-white/80">Founder & Lead Photographer</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-100 rounded-full blur-3xl z-0" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-12 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3"
            >
              <div className="p-3 bg-red-50 rounded-full text-[#FF0000]">
                <Smartphone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Shot on</p>
                <p className="font-bold text-gray-900">iPhone 16 Pro Max</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <div className="flex items-center space-x-2 text-[#FF0000] font-semibold tracking-wider uppercase text-sm mb-4">
                <span className="w-12 h-0.5 bg-[#FF0000]" />
                <h2>About Snap Vibe</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Capturing Moments. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  Creating Vibes.
                </span>
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm Nadeesha Chathuranga, the creative eye behind Snap Vibe. I specialize in delivering high-quality, social-media-ready photography using state-of-the-art mobile technology. Based in Anuradhapura, I offer affordable photoshoots without compromising on cinematic quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <MapPin />, title: "Location", desc: "Anuradhapura, Sri Lanka" },
                { icon: <Camera />, title: "Focus", desc: "Creative & Cinematic" },
                { icon: <Star />, title: "Quality", desc: "Premium Retouching" },
                { icon: <Smartphone />, title: "Gear", desc: "iPhone 16 Pro Max" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                  <div className="p-3 bg-red-50 text-[#FF0000] rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Bookings Open</p>
                <a href="#contact" className="text-xl font-bold text-gray-900 hover:text-[#FF0000] transition-colors">
                  072 064 9128
                </a>
              </div>
              <a 
                href="#contact"
                className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
