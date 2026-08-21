import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookingBand, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { bungalowAmenities, bungalowCategories } from '../data/siteData';
import { reveal } from '../data/motion';

export default function BungalowsPage() {
  return <>
    <PageMeta title="Bungalows" description="Discover sea-view and private-garden Goan-style bungalows at Anahata Retreat on Ashwem Beach, Goa." path="/stay/bungalows" />
    <PageHero eyebrow="Goan-Portuguese character" title="A cooler shade" italic="of coastal living." description="Traditional tiled roofs, calm interiors and a veranda or garden to call your own." image="/images/anahata-bungalow.webp" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="The bungalow collection">Rooted in Goa.<br /><em>Open to the sea.</em></SectionTitle><div><p className="lead">Our bungalows borrow from the traditional homes of Goa: terracotta tiles, deep shade and rooms that naturally extend outdoors.</p><p>Choose a sea-facing, partial-sea-view or private-garden setting. Published bungalow counts are not available, so our reservations team will guide you through live inventory.</p></div></section>
    <section className="category-grid category-grid-three content-section muted-section">{bungalowCategories.map((category, index) => <motion.article {...reveal} key={category.name}><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.description}</p></motion.article>)}</section>
    <section className="amenity-section content-section"><div><SectionTitle eyebrow="Bungalow comforts">Room to settle.<br /><em>Details that matter.</em></SectionTitle><p>Features are drawn from the resort’s published bungalow information. Confirm category-specific amenities when reserving.</p></div><ul>{bungalowAmenities.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></section>
    <section className="wide-image"><img src="/images/sea-view-bungalow.webp" alt="Sea-view accommodation at Anahata Retreat" loading="lazy" /></section>
    <BookingBand eyebrow="A Goan home beside the beach" title="Find your space beneath the palms." />
  </>;
}
