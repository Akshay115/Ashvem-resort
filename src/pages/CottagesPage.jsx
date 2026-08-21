import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookingBand, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { cottageAmenities, cottageCategories } from '../data/siteData';
import { reveal } from '../data/motion';

export default function CottagesPage() {
  return <>
    <PageMeta title="Cottages" description="Explore sea-view, partial-sea-view and garden cottages at Anahata Retreat, directly on Ashwem Beach in Goa." path="/stay/cottages" />
    <PageHero eyebrow="Palm-thatched stays" title="Cottages made" italic="for barefoot days." description="Wooden cabanas raised on stilts, with a private place to sit and the beach never far away." image="/images/anahata-cottage.webp" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="The cottage collection">From open sea<br /><em>to secret garden.</em></SectionTitle><div><p className="lead">Choose the outlook that suits your pace: front-row blue, a glimpse through the palms or the calm shelter of tropical green.</p><p>The old Anahata site publishes four cottage categories. Each has its own position within the garden, and photographs are indicative of the collection rather than an identical room layout.</p></div></section>
    <section className="category-grid content-section muted-section">{cottageCategories.map((category, index) => <motion.article {...reveal} key={category.name}><span>0{index + 1}</span><p className="card-kicker">{category.count}</p><h3>{category.name}</h3><p>{category.description}</p></motion.article>)}</section>
    <section className="amenity-section content-section"><div><SectionTitle eyebrow="Cottage comforts">Simple, useful,<br /><em>thoughtfully covered.</em></SectionTitle><p>Published amenities can vary by cottage category. Our team will confirm the exact facilities for your selected room.</p></div><ul>{cottageAmenities.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></section>
    <section className="image-triptych content-section"><img src="/images/real/real_cottage1.jpg" alt="Anahata cottage veranda" loading="lazy" /><img src="/images/real/real_cottage2.jpg" alt="Cottage interior at Anahata" loading="lazy" /><img src="/images/real/094a0d_85f98bf5dd314498b68513beef41d152~mv2.jpg" alt="Garden cottage setting" loading="lazy" /></section>
    <BookingBand eyebrow="Your cottage by the sea" title="Wake with the light. Wander to the water." />
  </>;
}
