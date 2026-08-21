import React, { useState } from 'react';
import { ROOMS, RESORT_INFO } from '../data/resortData';
import { Maximize2, Users, Eye, Check, X, ExternalLink, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Accommodations({ onSelectRoom }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);

  const categories = ['All', 'Beachfront Suites', 'Eco Cottages', 'Sea-View Pavilions', 'Garden Eco Villas'];

  const filteredRooms = activeCategory === 'All'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeCategory);

  return (
    <section id="cottages" className="py-24 bg-[#FAF8F5] text-[#2C2825] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Sanctuary & Living
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-light mb-6">
            Eco-Luxury Beachfront Cottages
          </h2>
          <p className="text-sm sm:text-base text-[#7A7067] font-light leading-relaxed">
            Crafted from natural teak, bamboo, and local materials, each cottage offers a seamless bridge between refined luxury and raw Goan coastal nature.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#D97757] text-white shadow-md'
                  : 'bg-white text-[#7A7067] hover:text-[#2C2825] border border-[#E6DEC0] hover:border-[#D97757]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Rooms Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredRooms.map((room) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={room.id}
                className="group bg-white border border-[#E6DEC0] rounded-3xl overflow-hidden hover:border-[#D97757] transition-all duration-500 flex flex-col shadow-lg hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* View Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs text-[#2C2825] font-medium shadow-md">
                  <Eye className="w-3.5 h-3.5 text-[#D97757]" />
                  <span>{room.view}</span>
                </div>
              </div>

              {/* Room Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#D97757] font-semibold">{room.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1817] font-normal mb-3 group-hover:text-[#D97757] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#7A7067] font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Room Quick Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-[#E6DEC0] text-xs text-[#615850]">
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

                {/* Card CTA Buttons (NO PRICES) */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E6DEC0]">
                  <button
                    onClick={() => setSelectedRoomModal(room)}
                    className="flex-1 py-3 rounded-xl border border-[#E6DEC0] hover:border-[#D97757] text-xs uppercase tracking-wider font-semibold text-[#2C2825] hover:text-[#D97757] transition-all text-center"
                  >
                    View Details
                  </button>

                  <a
                    href={RESORT_INFO.swiftbookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Book Cottage</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Room Detail Drawer Modal */}
      <AnimatePresence>
      {selectedRoomModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            className="bg-white border border-[#E6DEC0] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-[#2C2825] shadow-2xl"
          >
            <button
              onClick={() => setSelectedRoomModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#2C2825] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D97757] font-semibold block mb-2">
              {selectedRoomModal.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1817] mb-4">
              {selectedRoomModal.name}
            </h3>

            {/* Modal Image Showcase */}
            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 shadow-md">
              <img
                src={selectedRoomModal.image}
                alt={selectedRoomModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#7A7067] font-light leading-relaxed mb-6">
              {selectedRoomModal.description}
            </p>

            {/* Modal CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 pb-6 border-b border-[#E6DEC0]">
              <a
                href={RESORT_INFO.swiftbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Book Cottage Online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  const room = selectedRoomModal;
                  setSelectedRoomModal(null);
                  onSelectRoom(room);
                }}
                className="flex-1 py-3.5 rounded-full bg-emerald-50 border border-emerald-600/40 text-emerald-800 hover:bg-emerald-100 text-xs uppercase tracking-wider font-semibold transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Contact Concierge</span>
              </button>
            </div>

            {/* Amenities Grid */}
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D97757] font-semibold mb-4">
              Included Amenities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {selectedRoomModal.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[#2C2825]">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
