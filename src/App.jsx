import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Menu, Phone, Volume2, VolumeX, X } from 'lucide-react';
import { RESORT_INFO } from './data/resortData';
import { InstagramIcon } from './components/SocialIcons';

const stays = [
  {
    name: 'Sea-view Bungalows',
    note: 'A front-row seat to the Arabian Sea',
    image: '/images/sea-view-bungalow.webp',
    description: 'Generous, light-filled spaces with private sit-outs, made for slow mornings and long sunsets.'
  },
  {
    name: 'Garden Cottages',
    note: 'Tucked beneath the coconut palms',
    image: '/images/real/real_cottage1.jpg',
    description: 'Earthy coastal rooms surrounded by tropical green, only a barefoot stroll from Ashwem beach.'
  }
];

const moments = [
  ['/images/real/real_beach.jpg', 'The beach, at your doorstep'],
  ['/images/real/real_dining.jpg', 'Fresh plates at L’Atelier'],
  ['/images/real/real_yoga.jpg', 'Move with the morning'],
  ['/images/golden-hour.webp', 'Golden hours, unhurried'],
  ['/images/real/094a0d_2940186ec2e1433aa5a3f51d4f19d90c~mv2.jpg', 'A home among palms']
];

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12%' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};

function Leaf({ className = '' }) {
  return <svg className={className} viewBox="0 0 180 360" fill="none" aria-hidden="true"><path d="M87 358C86 236 90 113 160 10M91 278C58 259 31 225 16 184M102 219C137 199 158 168 170 132M108 152C77 128 61 98 54 64M126 89C148 74 161 54 169 30" stroke="currentColor" strokeWidth="1.4"/><path d="M17 184c39 4 64 34 74 94-43-13-70-43-74-94ZM54 64c37 14 52 43 54 88-35-18-53-47-54-88ZM170 132c-4 41-25 70-68 87 5-46 28-75 68-87ZM169 30c-2 29-16 49-43 59 4-29 18-49 43-59Z" fill="currentColor" opacity=".08"/></svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, lightbox]);

  const toggleSound = () => {
    const audio = document.querySelector('#ocean-audio');
    if (soundOn) audio.pause(); else audio.play().catch(() => {});
    setSoundOn(!soundOn);
  };

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <audio id="ocean-audio" src="/video/waves.mp4" loop preload="none" />

    <header className="nav">
      <a className="wordmark" href="#top" aria-label="Anahata home">ANAHATA <small>RETREAT · GOA</small></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#story">Our story</a><a href="#stay">Stay</a><a href="#dine">Dine</a><a href="#wellness">Wellness</a>
      </nav>
      <a className="book-link" href={RESORT_INFO.swiftbookUrl} target="_blank" rel="noreferrer">Book your stay <ArrowUpRight size={15}/></a>
      <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
    </header>

    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: .6, ease: [0.76,0,0.24,1] }}>
      <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
      {['story','stay','dine','wellness','gallery'].map((item, i) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}><span>0{i+1}</span>{item}</a>)}
      <a className="menu-book" href={RESORT_INFO.swiftbookUrl}>Book your stay</a>
    </motion.div>}</AnimatePresence>

    <section className="hero" id="top">
      <motion.img initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: 'easeOut' }} src="/images/anahata-hero.webp" alt="Anahata Retreat overlooking palm-fringed Ashwem Beach" />
      <div className="hero-shade" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: 1.2 }}>
        <p className="eyebrow light">Ashwem Beach · North Goa</p>
        <h1>Come back<br/>to <em>yourself.</em></h1>
        <p className="hero-intro">A soulful hideaway where palms sway, waves whisper, and life moves at the pace of the sea.</p>
      </motion.div>
      <a className="hero-scroll" href="#story"><span>Discover Anahata</span><ArrowDown size={17}/></a>
      <button className="sound" onClick={toggleSound}>{soundOn ? <Volume2 size={16}/> : <VolumeX size={16}/>}<span>{soundOn ? 'Ocean on' : 'Hear the ocean'}</span></button>
    </section>

    <section className="intro" id="story">
      <Leaf className="leaf leaf-one" />
      <motion.div {...reveal} className="intro-title"><p className="eyebrow">A retreat in the truest sense</p><h2>Be present.<br/><em>Breathe.</em> Unwind.</h2></motion.div>
      <motion.div {...reveal} className="intro-copy"><p>Cradled by swaying palms on the serene shores of Ashwem, Anahata is a place to reconnect with nature, with people, and with the quiet parts of yourself.</p><p>Here, tiled-roof cottages open to salt-laced air. Breakfasts linger. Bare feet are encouraged. Every detail is shaped by warmth, simplicity and the five elements that live within us.</p><a className="text-link" href="#stay">Find your space <ArrowUpRight size={15}/></a></motion.div>
      <div className="elements" aria-label="The five elements"><span>Water <i>joy</i></span><span>Fire <i>power</i></span><span>Air <i>freedom</i></span><span>Sky <i>oneness</i></span><span>Earth <i>stability</i></span></div>
    </section>

    <section className="stay" id="stay">
      <div className="section-heading"><p className="eyebrow">Sleep by the sea</p><h2>Spaces made<br/>for <em>slow living.</em></h2><p>Natural textures, cool shade and the sound of the tide. Choose the stay that feels like yours.</p></div>
      <div className="stay-list">{stays.map((room, i) => <motion.article {...reveal} className="stay-card" key={room.name}>
        <div className="stay-image"><img src={room.image} alt={room.name}/><span>0{i+1}</span></div>
        <div className="stay-details"><p>{room.note}</p><h3>{room.name}</h3><p>{room.description}</p><a href={RESORT_INFO.swiftbookUrl} target="_blank" rel="noreferrer">Explore your stay <ArrowUpRight size={15}/></a></div>
      </motion.article>)}</div>
    </section>

    <section className="dining" id="dine">
      <div className="dining-image"><img src="/images/real/real_dining.jpg" alt="Fresh coastal dining at L'Atelier" /></div>
      <motion.div {...reveal} className="dining-copy"><p className="eyebrow light">L’Atelier · Beachfront dining</p><h2>Sunshine on<br/><em>every plate.</em></h2><p>Fresh local ingredients, global flavours and food made with feeling. Join us barefoot for nourishing breakfasts, languid lunches and dinners beneath a painted sky.</p><div className="hours"><span>Breakfast <b>8–11 am</b></span><span>All-day dining <b>12–10 pm</b></span></div><a className="light-link" href={`tel:${RESORT_INFO.phone}`}>Reserve a table <ArrowUpRight size={15}/></a></motion.div>
    </section>

    <section className="wellness" id="wellness">
      <motion.div {...reveal} className="wellness-copy"><p className="eyebrow">Return to your rhythm</p><h2>Move. Breathe.<br/><em>Feel alive.</em></h2><p>Greet the day with yoga as the tide rolls in. Find stillness through meditation, movement and restorative rituals held in the soft energy of Ashwem.</p><p className="wellness-note">Yoga sessions and retreat schedules are seasonal. Speak with our team to shape your Anahata experience.</p><a className="text-link" href={RESORT_INFO.whatsapp} target="_blank" rel="noreferrer">Plan your retreat <ArrowUpRight size={15}/></a></motion.div>
      <div className="wellness-images"><motion.img {...reveal} src="/images/real/real_yoga.jpg" alt="Yoga at Anahata Retreat"/><img src="/images/real/DSCF6574_JPG.jpg" alt="Mindful moments by the sea"/></div>
      <Leaf className="leaf leaf-two" />
    </section>

    <section className="gallery" id="gallery">
      <div className="gallery-head"><p className="eyebrow">Postcards from paradise</p><h2>A glimpse of<br/><em>life at Anahata.</em></h2><a href={RESORT_INFO.instagram} target="_blank" rel="noreferrer"><InstagramIcon className="w-[17px] h-[17px]"/> Follow our journey</a></div>
      <div className="gallery-grid">{moments.map(([image, title], i) => <motion.button {...reveal} key={image} onClick={() => setLightbox({image,title})} aria-label={`View ${title}`}><img src={image} alt={title}/><span>{title}</span><i>0{i+1}</i></motion.button>)}</div>
    </section>

    <section className="closing">
      <img src="/images/real/094a0d_a90028c2560e486daf42ed36f0453bb8f000.jpg" alt="Sunset over Ashwem Beach" />
      <div><p className="eyebrow light">Your place by the sea</p><h2>Let the tide<br/><em>bring you home.</em></h2><a href={RESORT_INFO.swiftbookUrl} target="_blank" rel="noreferrer">Book your Anahata stay <ArrowUpRight size={17}/></a></div>
    </section>

    <footer><div className="footer-brand"><span>ANAHATA</span><p>Beachfront retreat · Ashwem, Goa</p></div><div><p className="footer-label">Find us</p><a href={RESORT_INFO.mapsUrl}><MapPin size={14}/>{RESORT_INFO.address}</a></div><div><p className="footer-label">Talk to us</p><a href={`tel:${RESORT_INFO.phone}`}><Phone size={14}/>{RESORT_INFO.phone}</a><a href={`mailto:${RESORT_INFO.email}`}>{RESORT_INFO.email}</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Anahata Retreat</span><a href={RESORT_INFO.instagram}>Instagram</a><a href={RESORT_INFO.facebook}>Facebook</a><a href={RESORT_INFO.tripadvisor}>Tripadvisor</a></div></footer>

    <AnimatePresence>{lightbox && <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setLightbox(null)}><button aria-label="Close image"><X/></button><motion.img initial={{scale:.94}} animate={{scale:1}} src={lightbox.image} alt={lightbox.title}/><p>{lightbox.title}</p></motion.div>}</AnimatePresence>
  </main>;
}

export default App;
