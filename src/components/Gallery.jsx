import React, { useState } from 'react';
import { GALLERY_ITEMS, RESORT_INFO } from '../data/resortData';
import { Sparkles, Maximize2, X, ExternalLink, Play } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Beach & Sunset', 'Cottages & Suites', 'L\'Atelier Dining', 'Yoga & Wellness'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#F5EFE6] text-[#2C2825] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97757] font-semibold block mb-3">
            Visual Storytelling
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1817] font-light mb-6">
            Resort Photo & Video Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#7A7067] font-light leading-relaxed">
            Immerse yourself in authentic moments of barefoot luxury, oceanfront serenity, organic Goan dining, and mindful yoga at Anahata Retreat.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
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
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#E6DEC0] cursor-pointer transform hover:-translate-y-1 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#D97757] font-semibold">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-normal mb-1 group-hover:text-[#E8DFD1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/80 font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-white border border-[#E6DEC0] rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative text-[#2C2825] shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#2C2825] z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D97757] font-semibold block mb-2">
              {selectedImage.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1817] mb-4">
              {selectedImage.title}
            </h3>

            {/* High-Res Image View */}
            <div className="rounded-2xl overflow-hidden mb-6 h-[60vh] max-h-[500px]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-[#7A7067] font-light">
                {selectedImage.caption}
              </p>

              <a
                href={RESORT_INFO.swiftbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#D97757] hover:bg-[#c66546] text-white text-xs uppercase tracking-wider font-semibold shadow-md shrink-0 flex items-center gap-2"
              >
                <span>Book Stay Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
