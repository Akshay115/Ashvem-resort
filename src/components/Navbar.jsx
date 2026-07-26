import React, { useState, useEffect } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MessageCircle, Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DEC0] py-3.5 shadow-md text-[#2C2825]'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 text-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group">
          <span className={`font-serif text-2xl sm:text-3xl tracking-[0.25em] font-light transition-colors ${
            scrolled ? 'text-[#2C2825] group-hover:text-[#D97757]' : 'text-[#FAF8F5] group-hover:text-[#D97757]'
          }`}>
            ANAHATA
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase font-semibold transition-colors ${
            scrolled ? 'text-[#7A7067]' : 'text-[#FAF8F5]/80'
          }`}>
            Beach Front Resort • Ashwem
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className={`hidden md:flex items-center space-x-7 text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
          scrolled ? 'text-[#3A342F]' : 'text-[#FAF8F5]/90'
        }`}>
          <a href="#cottages" className="hover:text-[#D97757] transition-colors">Cottages & Suites</a>
          <a href="#dining" className="hover:text-[#D97757] transition-colors">L'Atelier Dining</a>
          <a href="#wellness" className="hover:text-[#D97757] transition-colors">Yoga & Spa</a>
          <a href="#gallery" className="hover:text-[#D97757] transition-colors">Gallery</a>
          <a href="#resort-map" className="hover:text-[#D97757] transition-colors">Resort Map</a>
          <a href="#reviews" className="hover:text-[#D97757] transition-colors">Guest Stories</a>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={RESORT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-wider px-3.5 py-2 rounded-full border border-emerald-600/40 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href={RESORT_INFO.swiftbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <span>Book Your Stay</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={RESORT_INFO.swiftbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D97757] text-white font-semibold"
          >
            Book
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${scrolled ? 'text-[#2C2825]' : 'text-[#FAF8F5]'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#E6DEC0] px-6 py-6 space-y-4 text-sm font-light uppercase tracking-widest text-[#2C2825]">
          <a href="#cottages" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757]">Cottages & Suites</a>
          <a href="#dining" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757]">L'Atelier Dining</a>
          <a href="#wellness" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757]">Yoga Shala & Spa</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757]">Photo & Video Gallery</a>
          <a href="#resort-map" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757]">Resort Map</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757]">Guest Stories</a>
          <div className="pt-4 border-t border-[#E6DEC0] flex flex-col gap-3">
            <a
              href={RESORT_INFO.swiftbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D97757] text-white text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              <span>Book Online (Swiftbook)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={RESORT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-emerald-600 text-emerald-800 text-xs font-semibold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
