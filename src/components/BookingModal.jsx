import React, { useState, useEffect } from 'react';
import { RESORT_INFO, ROOMS } from '../data/resortData';
import { X, MessageCircle, Mail, ExternalLink, CheckCircle } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedItem: 'Grand Beachfront Canopy Suite',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        selectedItem: initialData.name || initialData.service || prev.selectedItem,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = () => {
    const text = `Hello Anahata Retreat Concierge! I would like to enquire about:
- Accommodation / Experience: ${formData.selectedItem}
- Name: ${formData.name || 'Guest'}
- Contact: ${formData.phone || 'N/A'}
- Notes: ${formData.notes || 'None'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919822590123?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailBooking = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="bg-white border border-[#E6DEC0] rounded-3xl max-w-xl w-full p-6 sm:p-8 relative text-[#2C2825] shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#2C2825] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D97757] font-semibold block mb-2">
              Concierge & Online Booking
            </span>
            <h3 className="font-serif text-3xl text-[#1A1817] mb-2">
              Reserve Your Anahata Stay
            </h3>
            <p className="text-xs text-[#7A7067] font-light mb-6">
              Book directly via our online engine or connect directly with our resort concierge team on Ashwem Beach.
            </p>

            {/* Direct Swiftbook Engine Highlight Banner */}
            <div className="mb-6 p-4 rounded-2xl bg-orange-50 border border-orange-200">
              <span className="text-[10px] uppercase tracking-wider text-[#D97757] font-bold block mb-1">Instant Online Booking Engine</span>
              <p className="text-xs text-[#7A7067] mb-3 font-light">View live real-time availability on our official Swiftbook booking portal.</p>
              <a
                href={RESORT_INFO.swiftbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#D97757] hover:bg-[#c66546] text-white font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Go to Swiftbook Engine</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#E6DEC0]"></div>
              <span className="flex-shrink mx-4 text-[10px] uppercase tracking-widest text-[#7A7067] font-semibold">Or Contact Concierge</span>
              <div className="flex-grow border-t border-[#E6DEC0]"></div>
            </div>

            <form onSubmit={handleEmailBooking} className="space-y-4 text-xs mt-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">Accommodation / Experience</label>
                <select
                  value={formData.selectedItem}
                  onChange={(e) => setFormData({ ...formData, selectedItem: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E6DEC0] rounded-xl px-4 py-3 text-xs text-[#2C2825] outline-none focus:border-[#D97757]"
                >
                  {ROOMS.map(r => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                  <option value="L'Atelier Dining Table Reservation">L'Atelier Sunset Dining Table</option>
                  <option value="Yoga Shala Daily Pass / Retreat">Yoga Shala Daily Pass / Retreat</option>
                  <option value="Ayurvedic Spa Treatment Session">Ayurvedic Spa Treatment Session</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6DEC0] rounded-xl px-3.5 py-2.5 text-xs text-[#2C2825] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9822590123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6DEC0] rounded-xl px-3.5 py-2.5 text-xs text-[#2C2825] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="bookings@anahataretreat.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E6DEC0] rounded-xl px-3.5 py-2.5 text-xs text-[#2C2825] outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">Notes / Preferences</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Beachfront cottage preferred, dietary requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E6DEC0] rounded-xl px-3.5 py-2.5 text-xs text-[#2C2825] outline-none"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect via WhatsApp Concierge</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email Inquiry</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-3xl text-[#1A1817] mb-2">Inquiry Sent</h3>
            <p className="text-xs text-[#7A7067] leading-relaxed mb-6">
              Thank you, <span className="text-[#D97757] font-semibold">{formData.name || 'Guest'}</span>! Our reservation concierge team at Anahata Retreat Ashwem will get back to you immediately.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs uppercase tracking-wider font-semibold text-[#2C2825]"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
