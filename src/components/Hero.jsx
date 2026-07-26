import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Calendar, Users, Home, MapPin, ArrowRight, Star, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('All Cottages');

  const handleSearch = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn, checkOut, guests, roomType });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Image with Light Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Anahata Retreat Beach Front Resort Ashwem Goa"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-[#191816]/50 to-black/40" />
      </div>

      {/* Floating Badges */}
      <div className="absolute top-28 right-8 hidden lg:flex flex-col gap-3 z-10">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-[#E8DFD1]">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>TripAdvisor Travelers' Choice</span>
        </div>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-[#E8DFD1]">
          <Sparkles className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Direct Ashwem Beachfront</span>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#E8DFD1]">
        {/* Sub-header badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F4045]/80 backdrop-blur-md border border-emerald-500/30 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#D4C3A3] mb-6 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Ashwem Beach • North Goa</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF8F5] leading-none mb-6 drop-shadow-lg font-normal">
          Barefoot Luxury <br />
          <span className="italic font-light text-[#D97757]">by the Arabian Sea</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light text-[#E8DFD1]/90 tracking-wide leading-relaxed mb-10 drop-shadow">
          Unwind in authentic wooden eco-cottages nestled right on the soft sands of Ashwem. Experience organic beachfront dining at L'Atelier, daily oceanfront yoga shalas, and Ayurvedic healing.
        </p>

        {/* Availability Search Bar */}
        <div className="bg-[#191816]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto text-left">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Check-In */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest text-[#D4C3A3]">Check-In Date</label>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-[#E8DFD1]">
                <Calendar className="w-4 h-4 text-[#D97757]" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-xs text-[#E8DFD1]"
                />
              </div>
            </div>

            {/* Check-Out */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest text-[#D4C3A3]">Check-Out Date</label>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-[#E8DFD1]">
                <Calendar className="w-4 h-4 text-[#D97757]" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-xs text-[#E8DFD1]"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest text-[#D4C3A3]">Guests</label>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-[#E8DFD1]">
                <Users className="w-4 h-4 text-[#D97757]" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-xs text-[#E8DFD1]"
                >
                  <option value="1 Guest" className="bg-[#191816]">1 Guest</option>
                  <option value="2 Guests" className="bg-[#191816]">2 Guests</option>
                  <option value="3 Guests" className="bg-[#191816]">3 Guests</option>
                  <option value="4+ Guests" className="bg-[#191816]">4+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[42px] flex items-center justify-center gap-2 bg-[#D97757] hover:bg-[#c66546] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-orange-900/50"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="block font-serif text-lg text-[#FAF8F5]">Direct Beach</span>
            <span className="text-[11px] text-[#D4C3A3]">0m from Ashwem Sand</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="block font-serif text-lg text-[#FAF8F5]">L'Atelier Dining</span>
            <span className="text-[11px] text-[#D4C3A3]">Organic Oceanfront Bistro</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="block font-serif text-lg text-[#FAF8F5]">Yoga Shala</span>
            <span className="text-[11px] text-[#D4C3A3]">Daily Sunrise Sessions</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="block font-serif text-lg text-[#FAF8F5]">Ayurvedic Spa</span>
            <span className="text-[11px] text-[#D4C3A3]">Holistic Soul Healing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
