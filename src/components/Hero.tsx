import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional photography by Snap Vibe"
          className="w-full h-full object-cover opacity-40 blur-[2px] transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-white/90">
            Capturing Moments. Creating Vibes.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
        >
          Snap Vibe <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-red-400">Photography</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light"
        >
          Professional Photographer in Anuradhapura, Sri Lanka. <br className="hidden md:block" />
          Affordable, creative, and memorable photoshoots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-[#FF0000] hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-red-500/30"
          >
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          <button
            onClick={() => scrollTo('packages')}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            <ImageIcon className="mr-2 h-5 w-5" />
            View Packages
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll Down</span>
        <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#FF0000]"
          />
        </div>
      </motion.div>
    </section>
  );
}
