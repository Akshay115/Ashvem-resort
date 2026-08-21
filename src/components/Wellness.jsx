import React, { useState } from 'react';
import { YOGA_SCHEDULE, SPA_TREATMENTS, RESORT_INFO } from '../data/resortData';
import { Clock, ExternalLink, MessageCircle } from 'lucide-react';

export default function Wellness({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('yoga');

  return (
    <section id="wellness" className="py-24 bg-[#FAF8F5] text-[#2C2825] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Mindfulness & Rejuvenation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-light mb-6">
            Oceanfront Yoga Shala & Ayurvedic Spa
          </h2>
          <p className="text-sm sm:text-base text-[#7A7067] font-light leading-relaxed">
            Align body and soul in our open-air bamboo Shala directly overlooking the wave breaks of Ashwem Beach. Experience authentic Ayurvedic healing, sound baths, and oceanfront meditation.
          </p>
        </div>

        {/* Shala Image Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E6DEC0] mb-16 h-72 sm:h-96">
          <img
            src="/images/yoga.jpg"
            alt="Anahata Yoga Shala Ashwem Goa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-medium">Open Daily</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">Sunrise & Sunset Yoga Sessions</h3>
            </div>
            <a
              href={RESORT_INFO.swiftbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all flex items-center gap-2"
            >
              <span>Join Yoga Retreat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tab Selector: Yoga Schedule vs Spa Menu */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-[#E6DEC0] p-1.5 rounded-full flex gap-2 shadow-md">
            <button
              onClick={() => setActiveTab('yoga')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'yoga'
                  ? 'bg-[#1F4045] text-white shadow-sm'
                  : 'text-[#7A7067] hover:text-[#2C2825]'
              }`}
            >
              Daily Yoga Shala Schedule
            </button>
            <button
              onClick={() => setActiveTab('spa')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'spa'
                  ? 'bg-[#1F4045] text-white shadow-sm'
                  : 'text-[#7A7067] hover:text-[#2C2825]'
              }`}
            >
              Ayurvedic Spa Menu
            </button>
          </div>
        </div>

        {/* Tab 1: Yoga Schedule */}
        {activeTab === 'yoga' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {YOGA_SCHEDULE.map((session, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E6DEC0] hover:border-[#D97757] transition-all flex flex-col justify-between shadow-md">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A7067] mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D97757]" />
                      <span className="font-medium text-[#2C2825]">{session.time}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] uppercase tracking-wider font-semibold">{session.level}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-[#1A1817] mb-2">{session.title}</h4>
                  <p className="text-xs text-[#7A7067]">Led by Certified Yoga Master: {session.instructor}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6DEC0] flex justify-between items-center">
                  <span className="text-[11px] text-emerald-700 font-medium">Complimentary for In-House Guests</span>
                  <a
                    href={RESORT_INFO.swiftbookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D97757] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Reserve Mat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Spa Menu (NO PRICES) */}
        {activeTab === 'spa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPA_TREATMENTS.map((spa, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E6DEC0] flex flex-col justify-between shadow-md">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs font-semibold text-[#D97757] uppercase tracking-wider">{spa.duration}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-[#1A1817] mb-3">{spa.name}</h4>
                  <p className="text-xs text-[#7A7067] font-light leading-relaxed mb-6">{spa.desc}</p>
                </div>
                <a
                  href={RESORT_INFO.swiftbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book Spa Session</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
