import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Waves,
  X,
} from 'lucide-react';
import { RESORT_INFO } from './data/resortData';
import { InstagramIcon } from './components/SocialIcons';

const BOOKING_LINK = RESORT_INFO.swiftbookUrl;

const stays = [
  {
    name: 'Sea-view cottages',
    detail: 'Only three, with uninterrupted Arabian Sea views',
    image: '/images/old-site-cottage.webp',
    description: 'Palm-thatched wooden cabanas raised on stilts, each with a private veranda for slow mornings beside the tide.',
    features: ['Air conditioned', 'Private bathroom', 'Mini fridge'],
  },
  {
    name: 'Partial sea-view cottages',
    detail: 'A glimpse of blue through the palms',
    image: '/images/sea-view-bungalow.webp',
    description: 'The same easy indoor-outdoor rhythm, tucked slightly deeper into the tropical garden and moments from the sand.',
    features: ['Private balcony', 'Hot water', 'Wi-Fi'],
  },
  {
    name: 'Goan-style bungalows',
    detail: 'Tiled roofs, cool shade and private verandas',
    image: '/images/old-site-bungalow.webp',
    description: 'Characterful Goan-Portuguese spaces with rain showers, cotton sheets and a choice of sea or garden outlooks.',
    features: ['Rain shower', 'Tea and coffee', 'In-room safe'],
  },
];

const moments = [
  ['/images/old-site-resort.webp', 'A retreat beneath the palms'],
  ['/images/real/real_dining.jpg', 'Fresh plates at L’Atelier'],
  ['/images/old-site-yoga.webp', 'Morning movement by the sea'],
  ['/images/golden-hour.webp', 'Ashwem at golden hour'],
  ['/images/real/real_cottage1.jpg', 'A veranda made for lingering'],
  ['/images/old-site-beach.webp', 'The beach at your doorstep'],
];

const amenities = [
  ['Beachfront', 'Step from garden to sand, without crossing a road.'],
  ['Daily yoga', 'Monday to Saturday, complimentary for resident guests.'],
  ['L’Atelier', 'Goan and international food, fresh juices and house-baked bread.'],
  ['Wellness', 'Massage, meditation and personalised restorative sessions.'],
  ['Retreats', 'A naturally held setting for groups, trainings and private gatherings.'],
  ['Stay connected', 'Complimentary Wi-Fi throughout your time at Anahata.'],
];

const faqs = [
  ['Where exactly is Anahata Retreat?', 'We are directly on Ashwem Beach in Mandrem, North Goa, next to Ajoba Temple. Use the map below for the most accurate route to our entrance.'],
  ['Is yoga included with my stay?', 'The 8:00–9:00 am class, Monday to Saturday, is complimentary for in-house guests. The programme can change seasonally, so please confirm with us before arrival.'],
  ['Does the retreat have direct beach access?', 'Yes. Anahata is a true beachfront property: the tropical garden opens straight onto Ashwem Beach.'],
  ['Can I organise a private retreat or group stay?', 'Yes. We host yoga holidays, teacher trainings, workshops and group getaways, with accommodation, meals, practice space and yoga props available.'],
  ['How can I reserve a table or arrange a transfer?', 'Call or WhatsApp our team. We can help with L’Atelier reservations, airport transfers and practical details for your stay.'],
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10%' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

function Brand({ light = false }) {
  return (
    <span className={`brand ${light ? 'brand-light' : ''}`}>
      <strong>ANAHATA</strong>
      <small>RETREAT · GOA</small>
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const overlayOpen = menuOpen || lightbox !== null;
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    const closeOverlay = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setLightbox(null);
      }
    };
    window.addEventListener('keydown', closeOverlay);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOverlay);
    };
  }, [menuOpen, lightbox]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="site-header">
        <a href="#top" aria-label="Anahata Retreat home"><Brand light /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our story</a>
          <a href="#stay">Stay</a>
          <a href="#dine">Dine</a>
          <a href="#wellness">Wellness</a>
          <a href="#find-us">Find us</a>
        </nav>
        <a className="header-book" href={BOOKING_LINK} target="_blank" rel="noreferrer">
          Check availability <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
          <Menu aria-hidden="true" />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}>
            <div className="mobile-menu-top"><Brand light /><button autoFocus onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
            <nav aria-label="Mobile navigation">
              {['story', 'stay', 'dine', 'wellness', 'gallery', 'find-us'].map((item, index) => (
                <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.replace('-', ' ')}</a>
              ))}
            </nav>
            <a className="mobile-book" href={BOOKING_LINK} target="_blank" rel="noreferrer">Book your stay <ArrowUpRight size={16} /></a>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">
        <section className="hero" id="top">
          <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: 'easeOut' }} src="/images/anahata-hero.webp" alt="Palm-fringed Anahata Retreat beside Ashwem Beach" fetchPriority="high" />
          <div className="hero-shade" />
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1 }}>
            <p className="eyebrow eyebrow-light">Beachfront · Ashwem · North Goa</p>
            <h1>Where the day<br />begins with <em>the sea.</em></h1>
            <p>A soulful retreat of palm-thatched cottages, nourishing food and morning yoga, set directly on the quiet sands of Ashwem.</p>
            <div className="hero-actions">
              <a className="button button-coral" href={BOOKING_LINK} target="_blank" rel="noreferrer">Book your stay <ArrowUpRight size={16} /></a>
              <a className="hero-text-link" href="#story">Discover Anahata <ArrowDown size={16} /></a>
            </div>
          </motion.div>
          <div className="hero-aside"><span>15.6449° N</span><span>73.7179° E</span></div>
        </section>

        <div className="fact-strip" aria-label="Resort highlights">
          <span><Waves size={18} /> Direct beach access</span>
          <span><Sparkles size={18} /> Daily morning yoga</span>
          <span><CalendarDays size={18} /> Retreats since 2012</span>
        </div>

        <section className="story section" id="story">
          <motion.div {...reveal} className="story-heading">
            <p className="eyebrow">A retreat in the truest sense</p>
            <h2>Come as you are.<br /><em>Leave a little lighter.</em></h2>
          </motion.div>
          <motion.div {...reveal} className="story-copy">
            <p className="lead">Founded in 2012, Anahata grew from a simple idea: create a warm, generous place where people can return to nature and to themselves.</p>
            <p>Life here follows the shoreline. Wake with the light, wander barefoot to breakfast, swim when the sea calls and let the evening unfold beneath the palms. There is no rush, and that is precisely the point.</p>
            <a className="text-link" href="#stay">Find your space <ArrowRight size={16} /></a>
          </motion.div>
          <motion.figure {...reveal} className="story-image">
            <img src="/images/old-site-resort.webp" alt="Anahata Retreat nestled among tropical palms" loading="lazy" />
            <figcaption><span>01</span> Between tropical garden and Arabian Sea</figcaption>
          </motion.figure>
          <blockquote>“Anahata” is the heart centre: the place where earth and sky, stillness and movement, meet.</blockquote>
        </section>

        <section className="stay section" id="stay">
          <div className="section-intro">
            <div><p className="eyebrow">Sleep by the sea</p><h2>Spaces made for<br /><em>slow living.</em></h2></div>
            <p>Natural materials, cooling shade and a veranda of your own. Choose a front-row view of the Arabian Sea or the deep quiet of the garden.</p>
          </div>
          <div className="stay-grid">
            {stays.map((room, index) => (
              <motion.article {...reveal} className="stay-card" key={room.name}>
                <div className="stay-image"><img src={room.image} alt={room.name} loading="lazy" /><span>0{index + 1}</span></div>
                <p className="stay-detail">{room.detail}</p>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <ul>{room.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul>
                <a href={BOOKING_LINK} target="_blank" rel="noreferrer">Check availability <ArrowUpRight size={15} /></a>
              </motion.article>
            ))}
          </div>
          <p className="stay-note">Room outlooks and layouts vary. Our team will help you choose the right space for your stay.</p>
        </section>

        <section className="dining" id="dine">
          <div className="dining-image"><img src="/images/old-site-dining.webp" alt="Colourful, freshly prepared food at L’Atelier" loading="lazy" /></div>
          <motion.div {...reveal} className="dining-copy">
            <p className="eyebrow eyebrow-light">L’Atelier · At the water’s edge</p>
            <h2>Good food,<br /><em>made with feeling.</em></h2>
            <p>Goan flavours meet well-travelled favourites at our open-air beach restaurant. Expect fresh juices, house-baked breads, vibrant vegetarian and vegan plates, and local dishes best shared under the stars.</p>
            <div className="dining-list"><span>Goan Sherpa dinner</span><span>Fresh breakfast</span><span>Vegan friendly</span></div>
            <a className="line-link line-link-light" href={`tel:${RESORT_INFO.phoneRaw}`}>Reserve a table <ArrowUpRight size={16} /></a>
          </motion.div>
        </section>

        <section className="wellness section" id="wellness">
          <motion.div {...reveal} className="wellness-copy">
            <p className="eyebrow">Return to your rhythm</p>
            <h2>Move. Breathe.<br /><em>Feel alive.</em></h2>
            <p className="lead">Practice with the sound of the tide below you. Our open-air yoga space welcomes complete beginners and lifelong students alike.</p>
            <div className="schedule"><Clock3 size={19} /><div><strong>Morning yoga</strong><span>Monday–Saturday · 8:00–9:00 am</span><small>Complimentary for in-house guests</small></div></div>
            <p>Complete your reset with meditation, massage and personalised wellness sessions, or bring your own community for a retreat held close to the elements.</p>
            <a className="text-link" href={RESORT_INFO.whatsapp} target="_blank" rel="noreferrer">Plan a retreat <ArrowRight size={16} /></a>
          </motion.div>
          <div className="wellness-collage">
            <motion.img {...reveal} src="/images/old-site-yoga.webp" alt="Yoga practice overlooking Ashwem Beach" loading="lazy" />
            <motion.img {...reveal} src="/images/old-site-wellness.webp" alt="Restorative wellness treatment at Anahata" loading="lazy" />
            <span>Body · Breath · Being</span>
          </div>
        </section>

        <section className="amenities section" aria-labelledby="amenities-title">
          <div className="amenities-heading"><p className="eyebrow">The essentials, thoughtfully covered</p><h2 id="amenities-title">Everything you need.<br /><em>Nothing you don’t.</em></h2></div>
          <div className="amenity-grid">{amenities.map(([title, description], index) => <motion.div {...reveal} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></motion.div>)}</div>
        </section>

        <section className="gallery section" id="gallery">
          <div className="gallery-heading"><p className="eyebrow">Postcards from Anahata</p><h2>A glimpse of<br /><em>life by the sea.</em></h2><a className="text-link" href={RESORT_INFO.instagram} target="_blank" rel="noreferrer"><InstagramIcon className="instagram-icon" /> Follow on Instagram</a></div>
          <div className="gallery-grid">{moments.map(([image, title], index) => <motion.button {...reveal} key={image} onClick={() => setLightbox({ image, title })} aria-label={`Enlarge: ${title}`}><img src={image} alt={title} loading="lazy" /><span>{title}</span><i>0{index + 1}</i></motion.button>)}</div>
        </section>

        <section className="location" id="find-us">
          <div className="location-map"><iframe title="Map showing Anahata Retreat on Ashwem Beach" src="https://www.google.com/maps?q=15.6449687,73.7178535&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <motion.div {...reveal} className="location-copy">
            <p className="eyebrow">Find your way to quiet</p>
            <h2>On Ashwem Beach,<br /><em>North Goa.</em></h2>
            <p>Set beside Ajoba Temple in Mandrem, Anahata feels wonderfully removed while keeping North Goa’s favourite beaches and restaurants within easy reach.</p>
            <address>{RESORT_INFO.address}</address>
            <a className="button button-green" href={RESORT_INFO.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> Open in Google Maps</a>
            <p className="transfer-note">Arriving by air? Ask our team to arrange your airport transfer.</p>
          </motion.div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <div><p className="eyebrow">Before you arrive</p><h2 id="faq-title">A few useful<br /><em>things to know.</em></h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="closing">
          <img src="/images/real/real_beach.jpg" alt="Sunset on Ashwem Beach" loading="lazy" />
          <div className="closing-shade" />
          <motion.div {...reveal}><p className="eyebrow eyebrow-light">Your place by the sea</p><h2>Let the tide<br /><em>bring you home.</em></h2><p>Come for the beach. Stay for the way Anahata makes you feel.</p><a className="button button-coral" href={BOOKING_LINK} target="_blank" rel="noreferrer">Check availability <ArrowUpRight size={16} /></a></motion.div>
        </section>
      </main>

      <footer>
        <div className="footer-main"><div className="footer-brand"><Brand light /><p>A barefoot beachfront retreat on the quiet sands of Ashwem, North Goa.</p></div><div><p className="footer-label">Explore</p><a href="#story">Our story</a><a href="#stay">Stay</a><a href="#dine">L’Atelier</a><a href="#wellness">Wellness</a></div><div><p className="footer-label">Connect</p><a href={`tel:${RESORT_INFO.phoneRaw}`}>{RESORT_INFO.phone}</a><a href={`mailto:${RESORT_INFO.email}`}>{RESORT_INFO.email}</a><a href={RESORT_INFO.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div><div><p className="footer-label">Follow</p><a href={RESORT_INFO.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={RESORT_INFO.facebook} target="_blank" rel="noreferrer">Facebook</a><a href={RESORT_INFO.tripadvisor} target="_blank" rel="noreferrer">Tripadvisor</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Anahata Retreat</span><span>Ashwem Beach · Goa · India</span></div>
      </footer>

      <a className="whatsapp-float" href={RESORT_INFO.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Anahata Retreat on WhatsApp"><MessageCircle size={19} /><span>Chat with us</span></a>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <button autoFocus aria-label="Close image" onClick={() => setLightbox(null)}><X /></button>
            <motion.figure initial={{ scale: 0.96 }} animate={{ scale: 1 }} onClick={(event) => event.stopPropagation()}><img src={lightbox.image} alt={lightbox.title} /><figcaption>{lightbox.title}</figcaption></motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
