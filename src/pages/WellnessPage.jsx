import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookingBand, PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { resort } from '../data/siteData';
import { reveal } from '../data/motion';

export default function WellnessPage() {
  return <>
    <PageMeta title="Yoga & Wellness" description="Practise yoga overlooking Ashwem Beach and discover meditation, massage and personalised wellness at Anahata Retreat in North Goa." path="/yoga-wellness" />
    <PageHero eyebrow="Yoga · Meditation · Wellness" title="Return to" italic="your rhythm." description="Move with the morning, breathe with the tide and make space for stillness." image="/images/anahata-yoga.webp" imagePosition="center 45%" />
    <section className="intro-grid content-section"><SectionTitle eyebrow="Practice by the sea">All levels.<br /><em>One horizon.</em></SectionTitle><div><p className="lead">The open-air practice space looks towards the Arabian Sea, inviting nature into every breath and movement.</p><p>Daily Hatha Yoga Flow is presented for complete beginners and experienced practitioners alike. Meditation, personalised sessions, massage and detoxifying therapies offer quieter ways to return to balance.</p></div></section>
    <section className="schedule-block content-section muted-section"><motion.div {...reveal} className="schedule-card"><Clock size={26} /><p className="eyebrow">Morning practice</p><h2>8:00–9:00 am</h2><p>Monday to Saturday</p><span>Complimentary for in-house guests</span></motion.div><motion.div {...reveal}><SectionTitle eyebrow="Joining from outside">Drop in and<br /><em>move with us.</em></SectionTitle><p>Outside guests are welcome at the published rate of INR 1,000 per person, per session. The programme is operational information and may change seasonally.</p><a className="text-link" href={resort.whatsapp} target="_blank" rel="noreferrer">Confirm your class <ArrowUpRight size={15} /></a></motion.div></section>
    <section className="wellness-grid content-section"><motion.article {...reveal}><img src="/images/anahata-wellness.webp" alt="Restorative treatment at Anahata" loading="lazy" /><p className="card-kicker">Restore</p><h3>Massage & therapies</h3><p>Make room for rest through massage and detoxifying wellness therapies, shaped around what your body needs.</p></motion.article><motion.article {...reveal}><img src="/images/real/real_yoga.jpg" alt="A mindful pause at Anahata" loading="lazy" /><p className="card-kicker">Reconnect</p><h3>Meditation & private practice</h3><p>Slow down with meditation and personalised sessions guided by visiting or resident practitioners.</p></motion.article></section>
    <section className="wellness-note content-section"><p>Treatment menus, practitioner availability and private-session rates vary. Contact our team before arrival to shape your wellness time.</p><a className="button button-green" href={resort.whatsapp} target="_blank" rel="noreferrer">Plan your experience <ArrowUpRight size={16} /></a></section>
    <BookingBand eyebrow="Wake into your practice" title="A stay that gives something back." image="/images/anahata-beach.webp" />
  </>;
}
