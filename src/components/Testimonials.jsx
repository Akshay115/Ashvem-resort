import React from 'react';
import { TESTIMONIALS, RESORT_INFO } from '../data/resortData';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#FAF8F5] text-[#2C2825] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-light mb-6">
            Stories from Ashwem Shore
          </h2>
          <p className="text-sm sm:text-base text-[#7A7067] font-light leading-relaxed">
            Read why travelers from across the globe return to Anahata Retreat year after year for peaceful oceanfront solitude.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E6DEC0] rounded-3xl p-8 flex flex-col justify-between hover:border-[#D97757] transition-all duration-300 shadow-lg relative"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D97757]/30 mb-4" />
                <p className="text-sm text-[#7A7067] font-light italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DEC0] flex justify-between items-end">
                <div>
                  <h4 className="font-serif text-lg text-[#1A1817] font-semibold">{t.name}</h4>
                  <span className="text-[11px] text-[#7A7067]">{t.location}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#7A7067] font-medium">
                  {t.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Feed Banner */}
        <div className="bg-white border border-[#E6DEC0] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1817] mb-4">
              Follow Our Daily Coastal Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#7A7067] font-light mb-8">
              Explore golden hour photography, yoga retreat clips, and seasonal updates directly on our Instagram & Facebook pages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={RESORT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:opacity-90 transition-opacity"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram @anahataretreat</span>
              </a>
              <a
                href={RESORT_INFO.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-emerald-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>TripAdvisor Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
