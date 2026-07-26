import React, { useState } from 'react';
import { MENU_HIGHLIGHTS, RESORT_INFO } from '../data/resortData';
import { Utensils, GlassWater, ExternalLink, Calendar } from 'lucide-react';

export default function Dining({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="dining" className="py-24 bg-[#F5EFE6] text-[#2C2825] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
              Culinary Experience
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-light leading-tight mb-6">
              L'Atelier Organic <br />
              <span className="italic text-[#7A7067] font-light">Beachfront Bistro</span>
            </h2>
            <p className="text-sm sm:text-base text-[#7A7067] font-light leading-relaxed mb-6">
              Set directly on the soft sands of Ashwem Beach, L’Atelier serves an exquisite blend of fresh Goan ocean catch, organic farm-to-table superfoods, artisanal wood-fired specialties, and sunset botanical cocktails.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E6DEC0] mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-100 border border-orange-200 text-[#D97757]">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2C2825]">Farm-To-Table</h4>
                  <p className="text-[11px] text-[#7A7067]">Organic local ingredients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800">
                  <GlassWater className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2C2825]">Sunset Lounge</h4>
                  <p className="text-[11px] text-[#7A7067]">Botanical craft elixirs</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={RESORT_INFO.swiftbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Reserve Sunset Table Online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E6DEC0] h-[420px] sm:h-[480px]">
              <img
                src="/images/dining.jpg"
                alt="L'Atelier Beachfront Dining Anahata Retreat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl border border-[#E6DEC0] p-6 rounded-2xl hidden sm:block max-w-xs shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-[#D97757] font-semibold block mb-1">Sunset Hour</span>
              <p className="font-serif text-lg text-[#1A1817] leading-snug">
                "Candlelit tables right on the sand as the sun sets over Ashwem."
              </p>
            </div>
          </div>
        </div>

        {/* Menu Highlights Section */}
        <div className="bg-white border border-[#E6DEC0] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1817]">Signature Menu Highlights</h3>
            <p className="text-xs text-[#7A7067] tracking-wider uppercase mt-1">Crafted daily by Chef & Local Ocean Harvesters</p>
          </div>

          {/* Menu Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-[#E6DEC0] pb-4">
            {MENU_HIGHLIGHTS.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-[#1F4045] text-white shadow-sm'
                    : 'text-[#7A7067] hover:text-[#2C2825]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Menu Items List (NO PRICES) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_HIGHLIGHTS[activeTab].items.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6DEC0] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl text-[#1A1817] mb-2">{item.name}</h4>
                  <p className="text-xs text-[#7A7067] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
