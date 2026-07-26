import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodations from './components/Accommodations';
import Dining from './components/Dining';
import Wellness from './components/Wellness';
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
    <div className="min-h-screen bg-[#191816] text-[#E8DFD1] font-sans selection:bg-[#D97757] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Accommodations & Cottages */}
      <Accommodations onSelectRoom={(room) => handleOpenBooking(room)} />

      {/* L'Atelier Beachfront Dining */}
      <Dining onOpenBooking={handleOpenBooking} />

      {/* Yoga Shala & Ayurvedic Spa */}
      <Wellness onOpenBooking={handleOpenBooking} />

      {/* Interactive Resort Grounds Map */}
      <ResortMap />

      {/* Guest Stories & Social */}
      <Testimonials />

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Ambient Ocean Wave Sound Player */}
      <SoundPlayer />

      {/* Booking & Concierge Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />
    </div>
  );
}
