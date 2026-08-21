import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems, resort } from '../data/siteData';

export function Brand({ light = false }) {
  return <span className={`brand ${light ? 'brand-light' : ''}`}><strong>ANAHATA</strong><small>RETREAT · GOA</small></span>;
}

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const close = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [menuOpen]);

  return <>
    <ScrollManager />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link to="/" aria-label="Anahata Retreat home"><Brand light /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.slice(0, 6).map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
      </nav>
      <a className="header-book" href={resort.booking} target="_blank" rel="noreferrer">Book now <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}><Menu /></button>
    </header>

    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: .45, ease: [0.76, 0, .24, 1] }}>
      <div className="mobile-menu-head"><Brand light /><button autoFocus onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
      <nav aria-label="Mobile navigation">{navItems.map((item, index) => <NavLink key={item.to} to={item.to}><span>0{index + 1}</span>{item.label}</NavLink>)}</nav>
      <a className="mobile-book" href={resort.booking} target="_blank" rel="noreferrer">Check availability <ArrowUpRight size={16} /></a>
    </motion.div>}</AnimatePresence>

    <main id="main-content"><Outlet /></main>

    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about"><Brand light /><p>A soulful beachfront retreat on the quiet sands of Ashwem, North Goa.</p><a href={resort.booking} target="_blank" rel="noreferrer">Book your stay <ArrowUpRight size={14} /></a></div>
        <div><p className="footer-label">Discover</p><Link to="/stay">Stay</Link><Link to="/dining">L’Atelier</Link><Link to="/yoga-wellness">Yoga & Wellness</Link><Link to="/retreats">Host a retreat</Link></div>
        <div><p className="footer-label">Plan</p><Link to="/experience">Our story</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Location & contact</Link><a href={resort.maps} target="_blank" rel="noreferrer">Google Maps</a></div>
        <div><p className="footer-label">Talk to us</p><a href={`tel:${resort.phoneRaw}`}>{resort.phone}</a><a href={`mailto:${resort.email}`}>{resort.email}</a><a href={resort.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><div className="footer-social"><a href={resort.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={resort.facebook} target="_blank" rel="noreferrer">Facebook</a></div></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Anahata Retreat</span><span>Ashwem Beach · Goa · India</span></div>
    </footer>
    <a className="whatsapp-float" href={resort.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Anahata Retreat on WhatsApp"><MessageCircle size={19} /><span>Chat with us</span></a>
  </>;
}
