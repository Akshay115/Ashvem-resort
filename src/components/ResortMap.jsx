import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Compass, ExternalLink, Navigation } from 'lucide-react';

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
    <section id="resort-map" className="py-24 bg-[#F5EFE6] text-[#2C2825] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Sanctuary Grounds
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-light mb-6">
            Explore Anahata Grounds
          </h2>
          <p className="text-sm sm:text-base text-[#7A7067] font-light leading-relaxed">
            Located next to Ajoba Temple in Mandrem Village, North Goa. Explore our oceanfront layout steps away from the water.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Visual Interactive Map Canvas Card */}
          <div className="lg:col-span-2 bg-white border border-[#E6DEC0] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[400px]">
            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D97757]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2825]">Interactive Resort Grounds Map</span>
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
            <div className="relative my-8 py-12 px-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DEC0] flex flex-wrap justify-around items-center gap-3">
              {landmarks.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => setActivePin(pin.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    activePin === pin.id
                      ? 'bg-[#D97757] text-white shadow-md scale-105'
                      : 'bg-white text-[#7A7067] border border-[#E6DEC0] hover:text-[#2C2825]'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#D97757]" />
                  <span>{pin.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Landmark Info Bar */}
            <div className="bg-[#FAF8F5] border border-[#E6DEC0] rounded-2xl p-4 sm:p-6 z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#D97757] font-semibold block mb-1">
                {landmarks[activePin].tag}
              </span>
              <h4 className="font-serif text-xl text-[#1A1817] mb-2">{landmarks[activePin].title}</h4>
              <p className="text-xs text-[#7A7067] font-light leading-relaxed">{landmarks[activePin].desc}</p>
            </div>
          </div>

          {/* Location & Address Sidebar Card */}
          <div className="bg-white border border-[#E6DEC0] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs mb-6 font-medium">
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Prime Beachfront Location</span>
              </div>
              
              <h3 className="font-serif text-2xl text-[#1A1817] mb-4">Resort Address</h3>
              <p className="text-sm text-[#7A7067] font-light leading-relaxed mb-6">
                {RESORT_INFO.address}
              </p>

              <div className="space-y-3 pt-6 border-t border-[#E6DEC0] text-xs">
                <div className="flex justify-between">
                  <span className="text-[#7A7067]">Distance to Sea:</span>
                  <span className="text-[#2C2825] font-semibold">0 Meters (Direct Access)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7067]">Goa Airport (MOPA):</span>
                  <span className="text-[#2C2825] font-semibold">~30 Mins Drive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7067]">Goa Dabolim Airport:</span>
                  <span className="text-[#2C2825] font-semibold">~60 Mins Drive</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6DEC0] mt-6">
              <a
                href={RESORT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#1F4045] hover:bg-[#163034] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Get Directions via Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
