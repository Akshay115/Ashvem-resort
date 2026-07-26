import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#0f0e0d] text-[#E8DFD1] pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="font-serif text-3xl tracking-[0.2em] text-[#FAF8F5] block font-light">
              ANAHATA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D97757] font-semibold block">
              Beach Front Resort • Ashwem
            </span>
            <p className="text-xs text-[#E8DFD1]/70 font-light leading-relaxed">
              An ultra-luxury coastal sanctuary where barefoot elegance meets mindful wellness on the pristine sands of North Goa.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={RESORT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#E8DFD1] hover:text-[#D97757] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#E8DFD1] hover:text-[#D97757] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-800/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-lg text-[#FAF8F5] mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#E8DFD1]/80 font-light uppercase tracking-wider">
              <li><a href="#cottages" className="hover:text-[#D97757] transition-colors">Cottages & Suites</a></li>
              <li><a href="#dining" className="hover:text-[#D97757] transition-colors">L'Atelier Bistro</a></li>
              <li><a href="#wellness" className="hover:text-[#D97757] transition-colors">Yoga Shala & Spa</a></li>
              <li><a href="#resort-map" className="hover:text-[#D97757] transition-colors">Grounds Map</a></li>
              <li><a href="#reviews" className="hover:text-[#D97757] transition-colors">Guest Stories</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="font-serif text-lg text-[#FAF8F5] mb-4">Resort Concierge</h4>
            <ul className="space-y-3 text-xs text-[#E8DFD1]/80 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span>{RESORT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97757] shrink-0" />
                <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-[#D97757] font-medium">{RESORT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97757] shrink-0" />
                <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#D97757] font-medium">{RESORT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div>
            <h4 className="font-serif text-lg text-[#FAF8F5] mb-4">Direct Reservations</h4>
            <p className="text-xs text-[#E8DFD1]/70 font-light leading-relaxed mb-4">
              Book directly with our beach resort team for complimentary daily yoga access and best available rates.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
            >
              Reserve Cottage Stay
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#D4C3A3]/60 font-light gap-4">
          <p>© {new Date().getFullYear()} Anahata Retreat Beach Front Resort. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href={RESORT_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D97757]">Google Maps Location</a>
            <a href={RESORT_INFO.tripadvisor} target="_blank" rel="noopener noreferrer" className="hover:text-[#D97757]">TripAdvisor Page</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
