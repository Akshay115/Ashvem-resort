import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookingBand, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { resort } from '../data/siteData';
import { reveal } from '../data/motion';

const retreatTypes = [
  ['Yoga & teacher training', 'Bring your school or community to a setting where practice, rest and the sea naturally share the day.'],
  ['Personal development', 'Create focused programmes with nourishing meals, quiet accommodation and space to gather.'],
  ['Team getaways', 'Step beyond the boardroom for purposeful conversations, shared experiences and unhurried time together.'],
];

export default function RetreatsPage() {
  return <>
    <PageMeta title="Host a Retreat" description="Host yoga retreats, teacher trainings, personal-development programmes and team getaways at Anahata Retreat on Ashwem Beach, Goa." path="/retreats" />
    <PageHero eyebrow="Gather · Practise · Connect" title="Bring your people" italic="closer to nature." description="A beachfront home for retreats that need both structure and room to breathe." image="/images/real/real_beach.jpg" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="Retreats at Anahata">You hold the vision.<br /><em>We hold the space.</em></SectionTitle><div><p className="lead">Anahata welcomes yoga teachers, facilitators, personal-development coaches and teams looking for a more meaningful way to gather.</p><p>Published group packages can bring together accommodation, meals and yoga props, with on-site support to help your programme flow from arrival to closing circle.</p></div></section>
    <section className="retreat-types content-section muted-section">{retreatTypes.map(([title, copy], index) => <motion.article {...reveal} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></motion.article>)}</section>
    <section className="retreat-includes content-section"><div><SectionTitle eyebrow="A flexible foundation">Build the retreat<br /><em>your group needs.</em></SectionTitle><p>Capacity, room allocation and programme logistics are arranged directly with the Anahata team.</p></div><ul><li><Check size={17} />Beachfront accommodation</li><li><Check size={17} />Group meal planning</li><li><Check size={17} />Yoga practice space</li><li><Check size={17} />Yoga props</li><li><Check size={17} />On-site coordination</li><li><Check size={17} />Wellness sessions on request</li></ul></section>
    <section className="retreat-process"><div><p className="eyebrow eyebrow-light">Start a conversation</p><h2>Tell us about<br /><em>your retreat.</em></h2><p>Share your preferred dates, group size, programme style and meal needs. Our team will respond with current availability and a tailored outline.</p><a className="button button-coral" href={`mailto:${resort.email}?subject=Retreat enquiry at Anahata`}><span>Email the retreat team</span><ArrowUpRight size={16} /></a></div><img src="/images/anahata-resort.webp" alt="Tropical gathering space at Anahata" loading="lazy" /></section>
    <BookingBand eyebrow="A natural place to gather" title="Make space for something meaningful." />
  </>;
}
