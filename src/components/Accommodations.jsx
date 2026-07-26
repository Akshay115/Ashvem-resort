import React, { useState } from 'react';
import { ROOMS } from '../data/resortData';
import { Maximize2, Users, Eye, Check, Calendar, X, ChevronRight, Sparkles } from 'lucide-react';

export default function Accommodations({ onSelectRoom }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);

  const categories = ['All', 'Beachfront Suites', 'Eco Cottages', 'Sea-View Pavilions', 'Garden Eco Villas'];

  const filteredRooms = activeCategory === 'All'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeCategory);

  return (
    <section id="cottages" className="py-24 bg-[#191816] text-[#E8DFD1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Sanctuary & Living
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-light mb-6">
            Eco-Luxury Beachfront Cottages
          </h2>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Crafted from natural teak, bamboo, and local materials, each cottage offers a seamless bridge between refined luxury and raw Goan coastal nature.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#D97757] text-white shadow-lg shadow-orange-950/40'
                  : 'bg-white/5 text-[#E8DFD1]/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D97757]/40 transition-all duration-500 flex flex-col shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191816] via-transparent to-black/30" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#191816]/80 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-right">
                  <span className="font-serif text-lg text-[#FAF8F5] font-semibold">{room.price}</span>
                  <span className="text-[10px] text-[#D4C3A3] font-light ml-1">{room.period}</span>
                </div>

                {/* View Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-[#E8DFD1]">
                  <Eye className="w-3.5 h-3.5 text-[#D97757]" />
                  <span>{room.view}</span>
                </div>
              </div>

              {/* Room Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal mb-3 group-hover:text-[#D97757] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#E8DFD1]/80 font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Room Quick Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-white/10 text-xs text-[#D4C3A3]">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-[#D97757]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#D97757]" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedRoomModal(room)}
                    className="flex-1 py-2.5 rounded-xl border border-white/20 hover:border-[#D97757] text-xs uppercase tracking-wider font-semibold text-[#E8DFD1] hover:text-[#D97757] transition-all text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="flex-1 py-2.5 rounded-xl bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md text-center"
                  >
                    Book Cottage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#191816] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-[#E8DFD1] shadow-2xl">
            <button
              onClick={() => setSelectedRoomModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E8DFD1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D97757] font-semibold block mb-2">
              {selectedRoomModal.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] mb-4">
              {selectedRoomModal.name}
            </h3>

            {/* Modal Image Showcase */}
            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80">
              <img
                src={selectedRoomModal.image}
                alt={selectedRoomModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description & Price */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4C3A3]">Room Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-semibold text-[#FAF8F5]">{selectedRoomModal.price}</span>
                  <span className="text-xs text-[#D4C3A3]">{selectedRoomModal.period}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const room = selectedRoomModal;
                  setSelectedRoomModal(null);
                  onSelectRoom(room);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-lg"
              >
                Reserve This Cottage
              </button>
            </div>

            {/* Amenities Grid */}
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4C3A3] font-semibold mb-4">
              Included Amenities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-8">
              {selectedRoomModal.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[#E8DFD1]/90">
                  <div className="p-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
