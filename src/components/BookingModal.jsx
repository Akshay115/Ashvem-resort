import React, { useState, useEffect } from 'react';
import { RESORT_INFO, ROOMS } from '../data/resortData';
import { X, MessageCircle, Mail, Calendar, Users, CheckCircle, Phone } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    selectedItem: 'Grand Beachfront Canopy Suite',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        selectedItem: initialData.name || initialData.service || prev.selectedItem,
        checkIn: initialData.checkIn || prev.checkIn,
        checkOut: initialData.checkOut || prev.checkOut,
        guests: initialData.guests || prev.guests,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = () => {
    const text = `Hello Anahata Retreat Concierge! I would like to reserve:
- Choice: ${formData.selectedItem}
- Name: ${formData.name || 'Guest'}
- Dates: ${formData.checkIn || 'TBD'} to ${formData.checkOut || 'TBD'}
- Guests: ${formData.guests}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#191816] border border-white/20 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative text-[#E8DFD1] shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E8DFD1] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D97757] font-semibold block mb-2">
              Concierge Reservation
            </span>
            <h3 className="font-serif text-3xl text-[#FAF8F5] mb-2">
              Reserve Your Anahata Stay
            </h3>
            <p className="text-xs text-[#E8DFD1]/80 font-light mb-6">
              Select your preferred accommodation or experience. Our beach team will respond immediately to confirm availability.
            </p>

            <form onSubmit={handleEmailBooking} className="space-y-4 text-xs">
              {/* Category / Cottage Choice */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Accommodation / Service</label>
                <select
                  value={formData.selectedItem}
                  onChange={(e) => setFormData({ ...formData, selectedItem: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-[#E8DFD1] outline-none focus:border-[#D97757]"
                >
                  {ROOMS.map(r => (
                    <option key={r.id} value={r.name} className="bg-[#191816]">{r.name} ({r.price})</option>
                  ))}
                  <option value="L'Atelier Dining Table Reservation" className="bg-[#191816]">L'Atelier Sunset Dining Table</option>
                  <option value="Yoga Shala Daily Pass / Retreat" className="bg-[#191816]">Yoga Shala Daily Pass / Retreat</option>
                  <option value="Ayurvedic Spa Treatment Session" className="bg-[#191816]">Ayurvedic Spa Treatment Session</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Check-In Date</label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-[#E8DFD1] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Check-Out Date</label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-[#E8DFD1] outline-none"
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#E8DFD1] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9822590123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#E8DFD1] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="bookings@anahataretreat.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#E8DFD1] outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#D4C3A3] block mb-1">Special Requests / Dietary Notes</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Ground floor cottage preferred, gluten-free dining..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#E8DFD1] outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Book via WhatsApp Concierge</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#D97757] hover:bg-[#c66546] text-white font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Inquiry</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-3xl text-[#FAF8F5] mb-2">Reservation Received</h3>
            <p className="text-xs text-[#E8DFD1]/80 leading-relaxed mb-6">
              Thank you, <span className="text-[#D97757] font-medium">{formData.name || 'Guest'}</span>! Our reservation concierge at Anahata Retreat Ashwem will contact you shortly via WhatsApp and Email ({RESORT_INFO.email}).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider font-semibold"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
