import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { resort } from '../data/siteData';
import { reveal } from '../data/motion';

export function PageMeta({ title, description, path = '' }) {
  useEffect(() => {
    document.title = `${title} | Anahata Retreat, Ashwem Goa`;
    const canonical = `https://www.anahataretreat.com${path}`;
    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) element.setAttribute('property', selector.match(/"(.+)"/)[1]);
        else element.setAttribute('name', selector.match(/"(.+)"/)[1]);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', `${title} | Anahata Retreat`);
    setMeta('meta[property="og:description"]', 'content', description);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
  }, [title, description, path]);
  return null;
}

export function PageHero({ eyebrow, title, italic, description, image, imagePosition = 'center' }) {
  return <section className="page-hero"><img src={image} alt="" style={{ objectPosition: imagePosition }} fetchPriority="high" /><div className="page-hero-shade" /><motion.div className="page-hero-copy" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}<br /><em>{italic}</em></h1>{description && <p>{description}</p>}</motion.div></section>;
}

export function SectionTitle({ eyebrow, children, description, light = false }) {
  return <div className={`section-title ${light ? 'section-title-light' : ''}`}><p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</p><h2>{children}</h2>{description && <p>{description}</p>}</div>;
}

export function InternalLink({ to, children, light = false }) {
  return <Link className={`text-link ${light ? 'text-link-light' : ''}`} to={to}>{children}<ArrowRight size={15} /></Link>;
}

export function BookingBand({ eyebrow = 'Your place by the sea', title = 'Let the tide bring you home.', image = '/images/real/real_beach.jpg' }) {
  return <section className="booking-band"><img src={image} alt="Sunset on Ashwem Beach" loading="lazy" /><div className="booking-band-shade" /><motion.div {...reveal}><p className="eyebrow eyebrow-light">{eyebrow}</p><h2>{title}</h2><p>Come for the beach. Stay for the way Anahata makes you feel.</p><a className="button button-coral" href={resort.booking} target="_blank" rel="noreferrer">Check availability <ArrowUpRight size={16} /></a></motion.div></section>;
}
