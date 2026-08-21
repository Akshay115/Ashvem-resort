import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E6DEC0]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between lg:grid lg:grid-cols-3">
        
        {/* Left Navigation (Desktop) */}
        <nav className={`hidden lg:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? 'text-[#2C2825]' : 'text-white/90 drop-shadow-md'}`}>
          <a href="#cottages" className="hover:text-[#D97757] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#D97757] after:transition-all hover:after:w-full">Stay</a>
          <a href="#dining" className="hover:text-[#D97757] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#D97757] after:transition-all hover:after:w-full">Dining</a>
          <a href="#wellness" className="hover:text-[#D97757] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#D97757] after:transition-all hover:after:w-full">Spa & Yoga</a>
        </nav>

        {/* Center Logo */}
        <div className="flex justify-start lg:justify-center items-center">
          <a href="#" className="flex flex-col items-center">
            <h1 className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-widest transition-colors duration-300 ${scrolled ? 'text-[#1A1817]' : 'text-white drop-shadow-lg'}`}>
              ANAHATA
            </h1>
            <span className={`text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-light mt-1 transition-colors duration-300 ${scrolled ? 'text-[#7A7067]' : 'text-white/80 drop-shadow-md'}`}>
              Retreat • Goa
            </span>
          </a>
        </div>

        {/* Right Navigation & CTA (Desktop) */}
        <div className={`hidden lg:flex items-center justify-end space-x-10 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? 'text-[#2C2825]' : 'text-white/90 drop-shadow-md'}`}>
          <a href="#gallery" className="hover:text-[#D97757] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#D97757] after:transition-all hover:after:w-full">Gallery</a>
          <button onClick={onOpenBooking} className="hover:text-[#D97757] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#D97757] after:transition-all hover:after:w-full">Contact</button>
          
          <a
            href={RESORT_INFO.swiftbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 border transition-all duration-300 hover:bg-[#D97757] hover:text-white hover:border-[#D97757] ${
              scrolled ? 'border-[#2C2825] text-[#2C2825]' : 'border-white text-white drop-shadow-md'
            }`}
          >
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center space-x-4">
          <a
            href={RESORT_INFO.swiftbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors ${
              scrolled ? 'border-[#2C2825] text-[#2C2825]' : 'border-white text-white drop-shadow-md'
            }`}
          >
            Book
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${scrolled ? 'text-[#2C2825]' : 'text-white drop-shadow-md'}`}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#E6DEC0] px-8 py-10 space-y-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#2C2825] shadow-2xl">
          <a href="#cottages" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757] transition-colors">Stay</a>
          <a href="#dining" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757] transition-colors">Dining</a>
          <a href="#wellness" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757] transition-colors">Spa & Yoga</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D97757] transition-colors">Gallery</a>
          <button onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }} className="block hover:text-[#D97757] transition-colors w-full text-left">Contact Concierge</button>
          
          <div className="pt-8 mt-8 border-t border-[#E6DEC0] flex flex-col gap-4">
            <a
              href={RESORT_INFO.swiftbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 border border-[#2C2825] hover:bg-[#D97757] hover:text-white hover:border-[#D97757] transition-colors text-[#2C2825]"
            >
              <span>Book Your Stay</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
