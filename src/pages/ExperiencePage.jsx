import { motion } from 'framer-motion';
import { BookingBand, InternalLink, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { reveal } from '../data/motion';

const elements = [['Water', 'joy'], ['Fire', 'power'], ['Air', 'freedom'], ['Sky', 'oneness'], ['Earth', 'stability']];

export default function ExperiencePage() {
  return <>
    <PageMeta title="The Anahata Experience" description="Discover the story, five-elements philosophy, beach setting and unhurried way of life at Anahata Retreat in Ashwem, Goa." path="/experience" />
    <PageHero eyebrow="The Anahata story" title="A place made" italic="from the heart." description="Rooted in the elements, shaped by warm hospitality and held by the sea since 2012." image="/images/anahata-resort.webp" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="Founded in 2012">A simple idea,<br /><em>grown with care.</em></SectionTitle><div><p className="lead">Rishal and Angela created Anahata as a place for people to reconnect: with nature, with one another and with the quieter parts of themselves.</p><p>What began as a retreat on Ashwem Beach has become a home for beach holidays, yoga journeys, shared meals, group programmes and the kind of days that are remembered by how they felt.</p></div></section>
    <section className="elements-section content-section muted-section"><div><SectionTitle eyebrow="The five elements">A philosophy<br /><em>you can feel.</em></SectionTitle><p>Anahata is the heart centre: the meeting place between earth and sky, stillness and movement. The retreat’s language of five elements is a reminder that wellbeing is balance, not perfection.</p></div><div className="elements-wheel">{elements.map(([name, meaning], index) => <motion.div {...reveal} key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{meaning}</p></motion.div>)}</div></section>
    <section className="day-section content-section"><div className="day-images"><img src="/images/anahata-beach.webp" alt="Ashwem Beach beside Anahata" loading="lazy" /><img src="/images/golden-hour.webp" alt="Golden hour by the sea" loading="lazy" /></div><motion.div {...reveal}><SectionTitle eyebrow="A day at Anahata">Follow the light.<br /><em>Forget the clock.</em></SectionTitle><p>Begin with yoga above the water. Linger over breakfast. Swim, read, wander, rest. Meet again over fresh food as the sky changes colour.</p><p>Around Ashwem, North Goa opens into local markets, village roads, culture, nature and backwaters. The team can help point you towards experiences that match your pace.</p><InternalLink to="/contact">Plan your stay</InternalLink></motion.div></section>
    <BookingBand eyebrow="Come back to yourself" />
  </>;
}
