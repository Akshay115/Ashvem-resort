export const RESORT_INFO = {
  name: "Anahata Retreat",
  subtitle: "Beach Front Resort • Ashwem, Goa",
  tagline: "Barefoot Luxury & Mindful Serenity on the Shores of North Goa",
  address: "Ashwem Beach, Next to Ajoba Temple, Mandrem Village, North Goa, 403527",
  phone: "+91 9822590123",
  email: "bookings@anahataretreat.com",
  whatsapp: "https://wa.me/message/COPDDEKHJ2OLP1",
  mapsUrl: "https://maps.app.goo.gl/HtH6ab8NDJqYaK5V8",
  tripadvisor: "https://www.tripadvisor.in/Hotel_Review-g2334907-d7299191-Reviews-Anahata_Retreat-Ashvem_Beach_North_Goa_District_Goa.html",
  instagram: "https://www.instagram.com/anahataretreat/?hl=en",
  facebook: "https://www.facebook.com/AnahataRetreatGoa/",
};

export const ROOMS = [
  {
    id: "beachfront-suite",
    name: "Grand Beachfront Canopy Suite",
    category: "Beachfront Suites",
    price: "₹18,500",
    period: "/ night",
    size: "650 sq ft",
    capacity: "2 Guests",
    view: "Direct Arabian Sea & Golden Sunset View",
    image: "/images/hero.jpg",
    gallery: ["/images/hero.jpg", "/images/cottage.jpg"],
    description: "Steps away from the soft sands of Ashwem. Features a signature handcrafted teakwood canopy bed draped in sheer white linens, private oceanfront veranda, sun loungers, and ambient warm evening lighting.",
    amenities: ["Direct Beach Access", "Private Veranda & Sunbed", "Air Conditioning & Fan", "Ensuite Open-Air Bathroom", "Organic Herbal Toiletries", "Daily Housekeeping", "Complimentary Breakfast", "Free High-Speed Wi-Fi"],
  },
  {
    id: "ocean-eco-cottage",
    name: "Oceanfront Wooden Eco Cottage",
    category: "Eco Cottages",
    price: "₹14,200",
    period: "/ night",
    size: "500 sq ft",
    capacity: "2 Guests",
    view: "Full Ocean & Beach Palm View",
    image: "/images/cottage.jpg",
    gallery: ["/images/cottage.jpg", "/images/hero.jpg"],
    description: "Constructed from natural teak and local bamboo, this eco-chic cottage embodies barefoot luxury with open-air sea views, woven hammocks, and authentic coastal tranquility.",
    amenities: ["Ocean View Balcony", "Woven Relaxing Hammock", "Air Conditioning", "Rain Shower", "Organic Coffee & Tea Maker", "Daily Yoga Access", "In-Room Safe", "Beach Towels"],
  },
  {
    id: "sunset-wooden-pavilion",
    name: "Sunset View Wooden Pavilion",
    category: "Sea-View Pavilions",
    price: "₹12,800",
    period: "/ night",
    size: "450 sq ft",
    capacity: "2-3 Guests",
    view: "Panoramic Ashwem Coastline & Sunset",
    image: "/images/dining.jpg",
    gallery: ["/images/dining.jpg", "/images/cottage.jpg"],
    description: "Elevated wooden pavilion surrounded by whispering coconut palms. Watch Goa’s iconic golden sunsets from your private shaded terrace in absolute peace.",
    amenities: ["Private Shaded Terrace", "King Teakwood Bed", "Air Conditioning", "Seating Lounge Area", "Organic Bath Robes", "Room Service", "Herbal Tea Kit"],
  },
  {
    id: "garden-sanctuary-villa",
    name: "Garden Sanctuary Villa",
    category: "Garden Eco Villas",
    price: "₹9,800",
    period: "/ night",
    size: "420 sq ft",
    capacity: "2 Guests",
    view: "Lush Tropical Botanical Gardens",
    image: "/images/yoga.jpg",
    gallery: ["/images/yoga.jpg", "/images/cottage.jpg"],
    description: "Tucked inside Anahata's lush tropical garden foliage. Ideal for deep rejuvenation, mindful quietude, and listening to the soft rustle of palm fronds.",
    amenities: ["Private Garden Patio", "Open-Air Rain Shower", "Air Conditioning", "Quiet Rejuvenation Zone", "Organic Toiletries", "Daily Breakfast"],
  },
];

export const MENU_HIGHLIGHTS = [
  {
    category: "Fresh Ocean Harvest",
    items: [
      { name: "Pan-Seared Ashwem Kingfish", price: "₹950", desc: "Fresh local catch marinated in coastal spices, served with coconut rice and banana leaf salad." },
      { name: "Wild Goan Prawn Curry", price: "₹1,100", desc: "Traditional slow-cooked coconut curry with fresh ocean prawns, kokum, and red Goan rice." },
    ],
  },
  {
    category: "Organic Farm-to-Table & Vegan",
    items: [
      { name: "Anahata Organic Superfood Bowl", price: "₹650", desc: "Avocado, quinoa, roasted sweet potato, edamame, and toasted sesame tahini dressing." },
      { name: "Tropical Açai & Dragonfruit Smoothie Bowl", price: "₹580", desc: "Topped with toasted coconut flakes, chia seeds, and Goan cashew butter." },
    ],
  },
  {
    category: "Sunset Cocktails & Botanical Elixirs",
    items: [
      { name: "Ashwem Sunset Mojito", price: "₹720", desc: "White rum infused with fresh passionfruit, mint, lime, and coconut water." },
      { name: "Golden Turmeric Ashwagandha Elixir", price: "₹380", desc: "Cold-pressed turmeric, fresh ginger, coconut milk, and raw Goan honey." },
    ],
  },
];

export const YOGA_SCHEDULE = [
  { time: "07:30 AM - 09:00 AM", title: "Sunrise Gentle Hatha & Pranayama", instructor: "Ananya Sharma", level: "All Levels" },
  { time: "10:00 AM - 11:30 AM", title: "Dynamic Vinyasa Ocean Flow", instructor: "David Miller", level: "Intermediate" },
  { time: "04:00 PM - 05:00 PM", title: "Mindful Breathwork & Meditation", instructor: "Ananya Sharma", level: "All Levels" },
  { time: "05:30 PM - 07:00 PM", title: "Sunset Yin Yoga & Tibetan Sound Bath", instructor: "Maya Lin", level: "Restorative" },
];

export const SPA_TREATMENTS = [
  { name: "Abhyanga Full-Body Herbal Oil Massage", duration: "75 Mins", price: "₹4,500", desc: "Traditional Ayurvedic warm oil therapy for deep muscular relaxation and energy flow." },
  { name: "Shirodhara Mind Rejuvenation", duration: "60 Mins", price: "₹4,200", desc: "Continuous warm herbal oil poured onto the third eye chakra to calm anxiety and restore sleep." },
  { name: "Goan Coconut Scrub & Ocean Detox", duration: "90 Mins", price: "₹5,200", desc: "Exfoliating organic coconut husk scrub followed by a soothing sea-mineral body wrap." },
];

export const TESTIMONIALS = [
  {
    name: "Elena Rostova",
    location: "London, UK",
    rating: 5,
    source: "TripAdvisor",
    text: "Anahata is absolute paradise on earth. Falling asleep to the sound of waves right outside our beach cottage and waking up to yoga at the beachfront Shala was life-changing.",
  },
  {
    name: "Marcus & Sophia Vance",
    location: "Zurich, Switzerland",
    rating: 5,
    source: "Google Reviews",
    text: "The barefoot luxury vibe here is unbeatable. L'Atelier's food is fresh, vibrant, and delicious. You are literally steps away from the finest sand in North Goa.",
  },
  {
    name: "Priya Nair",
    location: "Mumbai, India",
    rating: 5,
    source: "Instagram Guest",
    text: "The most relaxing getaway imaginable. No concrete, no noise—just coconut palms, gentle sea breeze, and incredible hospitality from the team.",
  },
];
