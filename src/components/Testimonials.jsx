import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "The absolute perfect coastal sanctuary. Waking up to the sound of waves hitting the Ashwem shore from our eco-cottage was surreal. L'Atelier's organic food is Michelin-worthy.",
    rating: 5,
    source: "TripAdvisor"
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "Barefoot luxury at its finest. The beachfront yoga shala at sunrise completely rejuvenated my soul. The staff anticipates your every need while remaining completely unobtrusive.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    text: "Anahata Retreat is a hidden gem. The rustic elegance of the wooden pavilions combined with the pristine, quiet stretch of Ashwem beach makes this the best stay in North Goa.",
    rating: 5,
    source: "TripAdvisor"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-[#FAF8F5] text-[#2C2825]">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/testimonials_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3 drop-shadow-md">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light mb-6 drop-shadow-lg">
            Stories from Ashwem Shore
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed drop-shadow-md">
            Read why travelers from across the globe return to Anahata Retreat year after year for peaceful oceanfront solitude.
          </p>
        </div>

        {/* Testimonials Cropped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mb-40">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5]/95 backdrop-blur-xl rounded-t-[3rem] rounded-b-xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative mt-4 md:mt-0 transition-transform duration-500 hover:-translate-y-4"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D97757] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-center gap-1 text-amber-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-[#7A7067] font-light italic leading-relaxed mb-8 text-center">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E6DEC0] flex flex-col items-center text-center">
                <h4 className="font-serif text-lg text-[#1A1817] font-semibold mb-1">{t.name}</h4>
                <span className="text-[11px] text-[#7A7067] uppercase tracking-widest mb-3">{t.location}</span>
                <span className="text-[9px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#E6DEC0]/50 text-[#7A7067] font-medium">
                  {t.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
