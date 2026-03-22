import { motion } from 'framer-motion';
import { Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Create WhatsApp URL
    const text = `Hi Snap Vibe! My name is ${name}. Phone: ${phone}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/94720649128?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-[#FF0000] font-semibold tracking-wider uppercase text-sm mb-4"
          >
            <span className="w-12 h-0.5 bg-[#FF0000]" />
            <h2>Get In Touch</h2>
            <span className="w-12 h-0.5 bg-[#FF0000]" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Let's Create Together
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h4>
              
              <div className="space-y-6">
                <a href="tel:+94720649128" className="flex items-start space-x-4 group">
                  <div className="bg-red-50 p-3 rounded-full text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Primary / WhatsApp</p>
                    <p className="text-lg font-bold text-gray-900 group-hover:text-[#FF0000] transition-colors">072 064 9128</p>
                  </div>
                </a>

                <a href="tel:+94741671668" className="flex items-start space-x-4 group">
                  <div className="bg-red-50 p-3 rounded-full text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Admin WhatsApp</p>
                    <p className="text-lg font-bold text-gray-900 group-hover:text-[#FF0000] transition-colors">074 167 1668</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-full text-[#FF0000]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Location</p>
                    <p className="text-lg font-bold text-gray-900">Anuradhapura, Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-2xl overflow-hidden h-48 border border-gray-100 shadow-inner">
                <iframe
                  title="Google Maps Location Anuradhapura"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126432.88720888252!2d80.31682335!3d8.335017649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcfa60e6530dd9%3A0xb304c40b790d5656!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1716300000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent outline-none transition-all"
                    placeholder="07X XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Package, Date, Details)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="I am interested in booking a couple shoot..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF0000] hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-red-500/30 flex items-center justify-center"
              >
                Send via WhatsApp
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
