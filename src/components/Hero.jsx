import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, ExternalLink, MessageCircle, Star, Sparkles, Compass } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Anahata Retreat Beach Front Resort Ashwem Goa"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[12000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-black/40 to-black/50" />
      </div>

      {/* Floating Badges */}
      <div className="absolute top-28 right-8 hidden lg:flex flex-col gap-3 z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E6DEC0] text-xs text-[#2C2825] shadow-lg">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="font-medium">TripAdvisor Travelers' Choice</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E6DEC0] text-xs text-[#2C2825] shadow-lg">
          <Sparkles className="w-4 h-4 text-[#D97757]" />
          <span className="font-medium">Direct Ashwem Beachfront</span>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Sub-header badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E6DEC0] text-xs font-semibold uppercase tracking-[0.25em] text-[#D97757] mb-6 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Ashwem Beach • North Goa</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF8F5] leading-none mb-6 drop-shadow-md font-light">
          Barefoot Luxury <br />
          <span className="italic font-light text-[#E8DFD1]">by the Arabian Sea</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light text-[#FAF8F5]/90 tracking-wide leading-relaxed mb-10 drop-shadow">
          Unwind in authentic wooden eco-cottages nestled directly on the soft golden sands of Ashwem. Experience organic beachfront dining at L'Atelier, daily oceanfront yoga shalas, and Ayurvedic healing.
        </p>

        {/* Action Buttons (NO Date Picker) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={RESORT_INFO.swiftbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
          >
            <span>Book Your Stay</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 hover:bg-white text-[#2C2825] text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 border border-[#E6DEC0] shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Contact Concierge</span>
          </button>
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/80 border border-[#E6DEC0] backdrop-blur-md shadow-md text-[#2C2825]">
            <span className="block font-serif text-xl font-medium text-[#D97757]">Direct Beach</span>
            <span className="text-xs text-[#7A7067]">0m from Ashwem Sand</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-[#E6DEC0] backdrop-blur-md shadow-md text-[#2C2825]">
            <span className="block font-serif text-xl font-medium text-[#D97757]">L'Atelier Dining</span>
            <span className="text-xs text-[#7A7067]">Organic Oceanfront Bistro</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-[#E6DEC0] backdrop-blur-md shadow-md text-[#2C2825]">
            <span className="block font-serif text-xl font-medium text-[#D97757]">Yoga Shala</span>
            <span className="text-xs text-[#7A7067]">Daily Sunrise Sessions</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-[#E6DEC0] backdrop-blur-md shadow-md text-[#2C2825]">
            <span className="block font-serif text-xl font-medium text-[#D97757]">Ayurvedic Spa</span>
            <span className="text-xs text-[#7A7067]">Holistic Soul Healing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
