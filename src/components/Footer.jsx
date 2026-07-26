import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="relative bg-[#2C2825] text-white pt-32 pb-12 overflow-hidden mt-32">
      {/* Animated Wave Divider at the Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          className="relative block w-[200%] h-[100px] sm:h-[150px] lg:h-[200px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <style>
            {`
              .wave-animation {
                animation: waveMove 15s linear infinite;
              }
              @keyframes waveMove {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
          <path 
            className="wave-animation" 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#FAF8F5" 
          />
          <path 
            className="wave-animation" 
            d="M1200,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C1638.64,32.43,1712.34,53.67,1783,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C2189.49,25,2313-14.29,2400,52.47V0Z" 
            fill="#FAF8F5" 
          />
        </svg>
      </div>

      {/* Video Background (Iframe) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay">
        <iframe
          src="https://www.youtube.com/embed/f77SKdyn-1Y?autoplay=1&mute=1&loop=1&playlist=f77SKdyn-1Y&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute w-[150vw] h-[150vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#2C2825]/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-5">
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] text-white block font-light">
              ANAHATA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D97757] font-semibold block">
              Beach Front Resort • Ashwem
            </span>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              An ultra-luxury coastal sanctuary where barefoot elegance meets mindful wellness on the pristine sands of North Goa.
            </p>
            <div className="flex items-center space-x-3 pt-4">
              <a
                href={RESORT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-[#D97757] hover:text-white transition-all backdrop-blur-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-[#D97757] hover:text-white transition-all backdrop-blur-sm"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-[11px] text-white/70 font-medium uppercase tracking-[0.15em]">
              <li><a href="#cottages" className="hover:text-[#D97757] transition-colors">Cottages & Suites</a></li>
              <li><a href="#dining" className="hover:text-[#D97757] transition-colors">L'Atelier Bistro</a></li>
              <li><a href="#wellness" className="hover:text-[#D97757] transition-colors">Yoga Shala & Spa</a></li>
              <li><a href="#gallery" className="hover:text-[#D97757] transition-colors">Photo & Video Gallery</a></li>
              <li><a href="#resort-map" className="hover:text-[#D97757] transition-colors">Grounds Map</a></li>
              <li><a href="#reviews" className="hover:text-[#D97757] transition-colors">Guest Stories</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Resort Concierge</h4>
            <ul className="space-y-4 text-[13px] text-white/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span>{RESORT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D97757] shrink-0" />
                <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-white transition-colors">{RESORT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D97757] shrink-0" />
                <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-white transition-colors">{RESORT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Online Booking</h4>
            <p className="text-[13px] text-white/70 font-light leading-relaxed mb-6">
              Book directly online or contact our beach resort team for complimentary daily yoga access.
            </p>
            <a
              href={RESORT_INFO.swiftbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-[11px] uppercase tracking-[0.2em] font-semibold shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Book Cottage Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/50 font-medium uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Anahata Retreat Beach Front Resort. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href={RESORT_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Maps Location</a>
            <a href={RESORT_INFO.tripadvisor} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TripAdvisor Page</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
