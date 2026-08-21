import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <motion.img
          src="/images/real/real_hero.jpg"
          alt="Anahata Retreat Beach Front Resort Ashwem Goa"
          className="w-full h-full object-cover object-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-20">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-white/90 mb-6 drop-shadow-md"
        >
          Welcome to Anahata
        </motion.h2>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight text-white leading-[1.1] drop-shadow-lg font-light mb-8 max-w-5xl"
        >
          Barefoot Luxury <br />
          <span className="italic font-light text-white/90">by the Arabian Sea</span>
        </motion.h1>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/50"
        />
      </motion.div>
    </section>
  );
}
