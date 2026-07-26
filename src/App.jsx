import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodations from './components/Accommodations';
import Dining from './components/Dining';
import Wellness from './components/Wellness';
import Gallery from './components/Gallery';
import ResortMap from './components/ResortMap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SoundPlayer from './components/SoundPlayer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingInitialData(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#D97757] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Banner */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Eco Cottages & Suites */}
      <Accommodations onSelectRoom={(room) => handleOpenBooking(room)} />

      {/* L'Atelier Beachfront Dining */}
      <Dining onOpenBooking={handleOpenBooking} />

      {/* Yoga Shala & Ayurvedic Spa */}
      <Wellness onOpenBooking={handleOpenBooking} />

      {/* Photo & Video Gallery */}
      <Gallery />

      {/* Interactive Resort Grounds Map */}
      <ResortMap />

      {/* Guest Stories */}
      <Testimonials />

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Ocean Waves Sound Player (Waves Icon Only, Sound ON by default) */}
      <SoundPlayer />

      {/* Concierge & Swiftbook Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />
    </div>
  );
}
