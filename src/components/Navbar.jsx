import React, { useState, useEffect } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MessageCircle, Menu, X, Calendar, Phone } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#191816]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#E8DFD1] group-hover:text-[#D97757] transition-colors font-light">
            ANAHATA
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4C3A3]/80 font-medium">
            Beach Front Resort • Ashwem
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-[#E8DFD1]/90">
          <a href="#cottages" className="hover:text-[#D97757] transition-colors">Cottages & Suites</a>
          <a href="#dining" className="hover:text-[#D97757] transition-colors">L'Atelier Dining</a>
          <a href="#wellness" className="hover:text-[#D97757] transition-colors">Yoga & Spa</a>
          <a href="#resort-map" className="hover:text-[#D97757] transition-colors">Resort Map</a>
          <a href="#reviews" className="hover:text-[#D97757] transition-colors">Guest Stories</a>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={RESORT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-wider px-3.5 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-800/40 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full bg-[#D97757] text-white hover:bg-[#c66546] font-semibold transition-all shadow-lg hover:shadow-orange-950/40"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Stay</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => onOpenBooking()}
            className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#D97757] text-white font-medium"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E8DFD1] hover:text-[#D97757]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#191816]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 text-sm font-light uppercase tracking-widest text-[#E8DFD1]">
          <a
            href="#cottages"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#D97757]"
          >
            Cottages & Suites
          </a>
          <a
            href="#dining"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#D97757]"
          >
            L'Atelier Dining
          </a>
          <a
            href="#wellness"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#D97757]"
          >
            Yoga Shala & Spa
          </a>
          <a
            href="#resort-map"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#D97757]"
          >
            Resort Map
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#D97757]"
          >
            Guest Stories
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={RESORT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${RESORT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/20 text-[#E8DFD1] text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              {RESORT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
