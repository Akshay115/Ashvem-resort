import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Compass, ExternalLink, Navigation, Info } from 'lucide-react';

export default function ResortMap() {
  const [activePin, setActivePin] = useState(0);

  const landmarks = [
    {
      id: 0,
      title: "Beachfront Eco Cottages",
      desc: "Barefoot wooden suites positioned directly on the sand with sea-facing verandas.",
      tag: "Accommodations",
    },
    {
      id: 1,
      title: "L'Atelier Organic Restaurant",
      desc: "Oceanfront dining, fresh Goan seafood, vegan superfoods, and craft sunset cocktails.",
      tag: "Dining & Bar",
    },
    {
      id: 2,
      title: "Oceanfront Bamboo Yoga Shala",
      desc: "Open-air wooden shala facing the sea for daily sunrise & sunset yoga.",
      tag: "Wellness & Meditation",
    },
    {
      id: 3,
      title: "Ayurvedic Healing Spa",
      desc: "Tranquil massage sanctuary for warm herbal oil therapies and body scrubs.",
      tag: "Holistic Spa",
    },
    {
      id: 4,
      title: "Ajoba Temple Landmark",
      desc: "Historic local spiritual temple adjoining Anahata resort boundary.",
      tag: "Local Heritage",
    },
  ];

  return (
    <section id="resort-map" className="py-24 bg-[#141312] text-[#E8DFD1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Sanctuary Grounds
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-light mb-6">
            Explore Anahata Grounds
          </h2>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Located next to Ajoba Temple in Mandrem Village, North Goa. Explore our oceanfront layout steps away from the water.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Visual Interactive Map Canvas Card */}
          <div className="lg:col-span-2 bg-[#191816] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[400px]">
            {/* Background Map Stylized Watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F4045]/30 via-transparent to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D97757]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Interactive Resort Grounds Map</span>
              </div>
              <a
                href={RESORT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#D97757] hover:underline font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Pins Simulation */}
            <div className="relative my-8 py-12 px-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-emerald-950/30 to-amber-950/30 border border-white/10 flex flex-wrap justify-around items-center gap-4">
              {landmarks.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => setActivePin(pin.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    activePin === pin.id
                      ? 'bg-[#D97757] text-white shadow-lg scale-110 ring-2 ring-orange-400/50'
                      : 'bg-white/10 text-[#E8DFD1] hover:bg-white/20'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>{pin.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Landmark Info Bar */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 z-10 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-[#D97757] font-semibold block mb-1">
                {landmarks[activePin].tag}
              </span>
              <h4 className="font-serif text-xl text-[#FAF8F5] mb-2">{landmarks[activePin].title}</h4>
              <p className="text-xs text-[#E8DFD1]/80 font-light leading-relaxed">{landmarks[activePin].desc}</p>
            </div>
          </div>

          {/* Location & Address Sidebar Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs mb-6">
                <Navigation className="w-3.5 h-3.5" />
                <span>Prime Beachfront Location</span>
              </div>
              
              <h3 className="font-serif text-2xl text-[#FAF8F5] mb-4">Resort Address</h3>
              <p className="text-sm text-[#E8DFD1]/90 font-light leading-relaxed mb-6">
                {RESORT_INFO.address}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#D4C3A3]">Distance to Sea:</span>
                  <span className="text-[#FAF8F5] font-medium">0 Meters (Direct Access)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D4C3A3]">Goa Airport (MOPA):</span>
                  <span className="text-[#FAF8F5] font-medium">~30 Mins Drive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D4C3A3]">Goa Dabolim Airport:</span>
                  <span className="text-[#FAF8F5] font-medium">~60 Mins Drive</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <a
                href={RESORT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#1F4045] hover:bg-[#163034] text-emerald-300 border border-emerald-500/40 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions via Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
