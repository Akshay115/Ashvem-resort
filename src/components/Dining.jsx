import React, { useState } from 'react';
import { MENU_HIGHLIGHTS } from '../data/resortData';
import { Utensils, GlassWater, Sun, Flame, MessageCircle, Calendar } from 'lucide-react';

export default function Dining({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="dining" className="py-24 bg-[#141312] text-[#E8DFD1] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D97757]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
              Culinary Experience
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-light leading-tight mb-6">
              L'Atelier Organic <br />
              <span className="italic text-[#D4C3A3] font-light">Beachfront Bistro</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed mb-6">
              Set directly on the sands of Ashwem Beach, L’Atelier serves an exquisite blend of fresh Goan ocean catch, organic farm-to-table superfoods, artisanal wood-fired specialties, and sunset botanical cocktails.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D97757]/20 border border-[#D97757]/30 text-[#D97757]">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Farm-To-Table</h4>
                  <p className="text-[11px] text-[#D4C3A3]">Organic local ingredients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1F4045] border border-emerald-500/30 text-emerald-400">
                  <GlassWater className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Sunset Lounge</h4>
                  <p className="text-[11px] text-[#D4C3A3]">Botanical craft elixirs</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking({ service: "L'Atelier Dining Table Reservation" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Sunset Table</span>
            </button>
          </div>

          {/* Image Showcase */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[420px] sm:h-[480px]">
              <img
                src="/images/dining.jpg"
                alt="L'Atelier Beachfront Dining Anahata Retreat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#191816]/90 backdrop-blur-xl border border-white/15 p-6 rounded-2xl hidden sm:block max-w-xs shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-[#D97757] block mb-1">Sunset Hour</span>
              <p className="font-serif text-lg text-[#FAF8F5] leading-snug">
                "Candlelit tables right on the sand as the sun sets over Ashwem."
              </p>
            </div>
          </div>
        </div>

        {/* Menu Highlights Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">Signature Menu Preview</h3>
            <p className="text-xs text-[#D4C3A3] tracking-wider uppercase mt-1">Crafted daily by Chef & Local Ocean Harvesters</p>
          </div>

          {/* Menu Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-white/10 pb-4">
            {MENU_HIGHLIGHTS.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-[#1F4045] text-emerald-300 border border-emerald-500/40'
                    : 'text-[#E8DFD1]/70 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_HIGHLIGHTS[activeTab].items.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-serif text-lg text-[#FAF8F5]">{item.name}</h4>
                  <span className="font-serif text-lg text-[#D97757] font-semibold">{item.price}</span>
                </div>
                <p className="text-xs text-[#E8DFD1]/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
