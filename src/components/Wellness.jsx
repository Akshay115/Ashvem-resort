import React, { useState } from 'react';
import { YOGA_SCHEDULE, SPA_TREATMENTS } from '../data/resortData';
import { Sun, Heart, Sparkles, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function Wellness({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('yoga');

  return (
    <section id="wellness" className="py-24 bg-[#191816] text-[#E8DFD1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Mindfulness & Rejuvenation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-light mb-6">
            Oceanfront Yoga Shala & Ayurvedic Spa
          </h2>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Align body and soul in our open-air bamboo Shala directly overlooking the wave breaks of Ashwem Beach. Experience authentic Ayurvedic healing, sound baths, and oceanfront meditation.
          </p>
        </div>

        {/* Shala Image Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-16 h-72 sm:h-96">
          <img
            src="/images/yoga.jpg"
            alt="Anahata Yoga Shala Ashwem Goa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D4C3A3]">Open Daily</span>
              <h3 className="font-serif text-2xl text-[#FAF8F5]">Sunrise & Sunset Yoga Sessions</h3>
            </div>
            <button
              onClick={() => onOpenBooking({ service: "Yoga Shala Drop-In / Retreat Pass" })}
              className="px-6 py-2.5 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
            >
              Join Yoga Class
            </button>
          </div>
        </div>

        {/* Tab Selector: Yoga Schedule vs Spa Menu */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex gap-2">
            <button
              onClick={() => setActiveTab('yoga')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'yoga'
                  ? 'bg-[#1F4045] text-emerald-300 shadow-md'
                  : 'text-[#E8DFD1]/70 hover:text-white'
              }`}
            >
              Daily Yoga Shala Schedule
            </button>
            <button
              onClick={() => setActiveTab('spa')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'spa'
                  ? 'bg-[#1F4045] text-emerald-300 shadow-md'
                  : 'text-[#E8DFD1]/70 hover:text-white'
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
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D97757]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D4C3A3] mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D97757]" />
                      <span>{session.time}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] uppercase tracking-wider">{session.level}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#FAF8F5] mb-2">{session.title}</h4>
                  <p className="text-xs text-[#E8DFD1]/70">Led by Certified Yoga Master: {session.instructor}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[11px] text-emerald-400 font-medium">Complimentary for In-House Guests</span>
                  <button
                    onClick={() => onOpenBooking({ service: `Yoga Session: ${session.title}` })}
                    className="text-xs text-[#D97757] hover:underline font-semibold"
                  >
                    Reserve Mat &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Spa Menu */}
        {activeTab === 'spa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPA_TREATMENTS.map((spa, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs text-[#D4C3A3]">{spa.duration}</span>
                    <span className="font-serif text-xl text-[#D97757] font-semibold">{spa.price}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#FAF8F5] mb-3">{spa.name}</h4>
                  <p className="text-xs text-[#E8DFD1]/80 font-light leading-relaxed mb-4">{spa.desc}</p>
                </div>
                <button
                  onClick={() => onOpenBooking({ service: `Spa Therapy: ${spa.name}` })}
                  className="w-full py-2.5 rounded-xl border border-white/20 hover:border-[#D97757] text-xs uppercase tracking-wider font-semibold text-[#E8DFD1] hover:text-[#D97757] transition-all text-center"
                >
                  Book Spa Session
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
