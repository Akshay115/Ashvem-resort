import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, ExternalLink, MessageCircle, Star, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Hero Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <motion.img
          src="/images/real/real_hero.jpg"
          alt="Anahata Retreat Beach Front Resort Ashwem Goa"
          className="w-full h-full object-cover object-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-black/30 to-black/50" />
      </motion.div>

      {/* Floating Badges */}
      <motion.div 
        className="absolute top-28 right-8 hidden lg:flex flex-col gap-3 z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E6DEC0] text-xs text-[#2C2825] shadow-lg"
        >
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="font-medium">TripAdvisor Travelers' Choice</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E6DEC0] text-xs text-[#2C2825] shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#D97757]" />
          <span className="font-medium">Direct Ashwem Beachfront</span>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Sub-header badge */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E6DEC0] text-xs font-semibold uppercase tracking-[0.25em] text-[#D97757] mb-6 shadow-md"
        >
          <MapPin className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Ashwem Beach • North Goa</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF8F5] leading-none mb-6 drop-shadow-md font-light"
        >
          Barefoot Luxury <br />
          <span className="italic font-light text-[#E8DFD1]">by the Arabian Sea</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light text-[#FAF8F5]/90 tracking-wide leading-relaxed mb-10 drop-shadow"
        >
          Unwind in authentic wooden eco-cottages nestled directly on the soft golden sands of Ashwem. Experience organic beachfront dining at L'Atelier, daily oceanfront yoga shalas, and Ayurvedic healing.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={RESORT_INFO.swiftbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Book Your Stay</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 hover:bg-white text-[#2C2825] text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 border border-[#E6DEC0] shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Contact Concierge</span>
          </motion.button>
        </motion.div>

        {/* Feature Highlights Banner */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { title: "Direct Beach", subtitle: "0m from Ashwem Sand" },
            { title: "L'Atelier Dining", subtitle: "Organic Oceanfront Bistro" },
            { title: "Yoga Shala", subtitle: "Daily Sunrise Sessions" },
            { title: "Ayurvedic Spa", subtitle: "Holistic Soul Healing" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              className="p-4 rounded-2xl bg-white/80 border border-[#E6DEC0] backdrop-blur-md shadow-md text-[#2C2825] transition-all"
            >
              <span className="block font-serif text-xl font-medium text-[#D97757]">{feature.title}</span>
              <span className="text-xs text-[#7A7067]">{feature.subtitle}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
