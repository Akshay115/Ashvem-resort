import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookingBand, PageHero, PageMeta } from '../components/PageParts';
import { galleryImages } from '../data/siteData';
import { reveal } from '../data/motion';

const filters = ['all', 'stay', 'dining', 'wellness', 'beach', 'retreat'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);
  const images = filter === 'all' ? galleryImages : galleryImages.filter((image) => image[2] === filter);

  useEffect(() => {
    document.body.style.overflow = activeImage ? 'hidden' : '';
    const close = (event) => event.key === 'Escape' && setActiveImage(null);
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close); };
  }, [activeImage]);

  return <>
    <PageMeta title="Gallery" description="Explore photographs of Anahata Retreat, its beachfront cottages, Goan bungalows, L’Atelier dining, yoga and Ashwem Beach." path="/gallery" />
    <PageHero eyebrow="Postcards from Anahata" title="Life beside" italic="the Arabian Sea." description="Quiet mornings, colourful plates, palm-filtered light and the beach at your doorstep." image="/images/golden-hour.webp" />
    <section className="gallery-page content-section"><div className="gallery-filter" aria-label="Filter gallery">{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="gallery-masonry">{images.map(([src, title], index) => <motion.button {...reveal} layout key={src} onClick={() => setActiveImage([src, title])} aria-label={`Enlarge ${title}`}><img src={src} alt={title} loading={index < 3 ? 'eager' : 'lazy'} /><span>{title}</span></motion.button>)}</div></section>
    <BookingBand />
    <AnimatePresence>{activeImage && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage[1]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImage(null)}><button autoFocus onClick={() => setActiveImage(null)} aria-label="Close image"><X /></button><figure onClick={(event) => event.stopPropagation()}><img src={activeImage[0]} alt={activeImage[1]} /><figcaption>{activeImage[1]}</figcaption></figure></motion.div>}</AnimatePresence>
  </>;
}
