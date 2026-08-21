import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookingBand, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { resort } from '../data/siteData';
import { reveal } from '../data/motion';

const table = [
  ['Goan at heart', 'Regional recipes and the signature Goan Sherpa meal, shared beneath a starlit sky.'],
  ['Open to every appetite', 'Vegetarian, vegan, North Indian and continental choices sit comfortably together.'],
  ['Made fresh', 'Fresh juices, health-conscious plates, breads and pastries prepared in house.'],
];

export default function DiningPage() {
  return <>
    <PageMeta title="L’Atelier Beachfront Dining" description="Discover L’Atelier at Anahata Retreat: Goan food, international flavours, vegan choices, fresh juices and house-baked bread on Ashwem Beach." path="/dining" />
    <PageHero eyebrow="L’Atelier · Ashwem Beach" title="Good food," italic="made with feeling." description="A beach-facing table, a generous kitchen and flavours that travel from Goa to the wider world." image="/images/anahata-dining.webp" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="At the water’s edge">Come barefoot.<br /><em>Stay for another plate.</em></SectionTitle><div><p className="lead">L’Atelier is the social heart of Anahata: an open, easy-going restaurant where breakfast drifts into lunch and dinner arrives with the evening breeze.</p><p>Our published menu philosophy brings together authentic Goan food, international comfort dishes and vibrant vegetarian and vegan options, prepared with fresh ingredients.</p><a className="text-link" href={`tel:${resort.phoneRaw}`}>Reserve a table <ArrowUpRight size={15} /></a></div></section>
    <section className="food-story"><div className="food-image"><img src="/images/real/real_dining.jpg" alt="Colourful dishes at L’Atelier" loading="lazy" /></div><motion.div {...reveal}><p className="eyebrow eyebrow-light">Eat well, linger longer</p><h2>From morning chai<br />to a <em>Goan supper.</em></h2><p>Start with masala chai, fresh juice and bread from the oven. Return for comforting North Indian dishes, continental favourites or a Goan Sherpa spread under the stars.</p><p className="fine-note">Restaurant hours and menu availability can change seasonally. Please call ahead if you are visiting without a room reservation.</p></motion.div></section>
    <section className="editorial-list content-section">{table.map(([title, copy], index) => <motion.article {...reveal} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></motion.article>)}</section>
    <section className="dining-quote content-section muted-section"><blockquote>“Food should leave you nourished, surprised and already thinking about the next meal.”</blockquote><p>The spirit of L’Atelier</p></section>
    <BookingBand eyebrow="Stay for breakfast by the beach" />
  </>;
}
