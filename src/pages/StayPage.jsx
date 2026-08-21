import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookingBand, InternalLink, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { bungalowAmenities, cottageAmenities } from '../data/siteData';
import { reveal } from '../data/motion';

export default function StayPage() {
  return <>
    <PageMeta title="Stay" description="Explore palm-thatched cottages and Goan-Portuguese-style bungalows at Anahata Retreat on Ashwem Beach, North Goa." path="/stay" />
    <PageHero eyebrow="Stay at Anahata" title="Wake close" italic="to the water." description="Natural textures, cooling shade and a private outdoor place of your own." image="/images/sea-view-bungalow.webp" imagePosition="center 58%" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="Two ways to stay">Choose your<br /><em>kind of quiet.</em></SectionTitle><div><p className="lead">Our accommodation belongs to its setting: wooden cottages under thatch and tiled-roof bungalows inspired by Goan-Portuguese homes.</p><p>Views and layouts vary by category. Explore both collections, then let our reservations team help match you with the setting that feels right.</p></div></section>
    <section className="stay-collections content-section muted-section"><motion.article {...reveal}><Link to="/stay/cottages"><img src="/images/anahata-cottage.webp" alt="Anahata cottage among the palms" loading="lazy" /></Link><div><p className="card-kicker">Four published categories</p><h2>Cottages</h2><p>Wooden cabanas built on stilts, with palm-thatched roofs and a private balcony or veranda. Choose a sea, partial-sea or garden outlook.</p><ul className="compact-list">{cottageAmenities.slice(0, 5).map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul><InternalLink to="/stay/cottages">View all cottages</InternalLink></div></motion.article><motion.article {...reveal}><Link to="/stay/bungalows"><img src="/images/anahata-bungalow.webp" alt="Goan-style bungalow at Anahata" loading="lazy" /></Link><div><p className="card-kicker">Three published settings</p><h2>Bungalows</h2><p>Goan-Portuguese styling, traditional tiled roofs and a private veranda or garden, with sea-view, partial-sea-view and garden options.</p><ul className="compact-list">{bungalowAmenities.slice(0, 5).map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul><InternalLink to="/stay/bungalows">View all bungalows</InternalLink></div></motion.article></section>
    <section className="stay-note content-section"><p className="eyebrow">Good to know</p><h2>Every room is a little different.</h2><p>Because Anahata is shaped around mature palms and the natural coastline, outlooks and layouts vary. Category counts and amenities reflect the resort’s published information; confirm occupancy, bed configuration and current inclusions with reservations before booking.</p></section>
    <BookingBand eyebrow="Sleep to the sound of the tide" />
  </>;
}
