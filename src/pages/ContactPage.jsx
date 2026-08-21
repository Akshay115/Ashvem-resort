import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageHero, PageMeta, SectionTitle } from '../components/PageParts';
import { resort } from '../data/siteData';

const faqs = [
  ['Where is Anahata Retreat?', 'Directly on Ashwem Beach beside Ajoba Temple in Mandrem, North Goa. Use the Google Maps link below for the most reliable arrival route.'],
  ['What time is yoga?', 'The published morning class runs Monday to Saturday from 8:00 to 9:00 am and is complimentary for in-house guests. Please confirm seasonal changes before arrival.'],
  ['Can non-residents visit L’Atelier or yoga?', 'Outside guests can join published yoga classes for INR 1,000 per session. Please call ahead for restaurant reservations and current visitor arrangements.'],
  ['Can Anahata host a private group?', 'Yes. The resort welcomes yoga retreats, teacher trainings, personal-development groups and team getaways. Email the team with dates and group size.'],
  ['How do I confirm room details or inclusions?', 'Contact reservations before booking. Room outlooks, layouts, occupancy and rate inclusions can vary by category and season.'],
];

export default function ContactPage() {
  return <>
    <PageMeta title="Contact & Location" description="Contact Anahata Retreat and find directions to House No. 367 beside Ajoba Temple on Ashwem Beach, Mandrem, North Goa." path="/contact" />
    <PageHero eyebrow="Come find us" title="The beach is" italic="closer than you think." description="Reach our reservations team, plan your arrival or open the exact resort location in Google Maps." image="/images/anahata-beach.webp" />
    <section className="contact-grid content-section"><div><SectionTitle eyebrow="Talk to Anahata">We are here<br /><em>to help you plan.</em></SectionTitle><p>For stays, restaurant tables, yoga, wellness or a group retreat, choose the easiest way to reach us.</p><div className="contact-methods"><a href={`tel:${resort.phoneRaw}`}><Phone size={20} /><span><small>Call</small>{resort.phone}</span></a><a href={resort.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /><span><small>WhatsApp</small>Chat with the team</span></a><a href={`mailto:${resort.email}`}><Mail size={20} /><span><small>Email</small>{resort.email}</span></a></div></div><div className="contact-address"><p className="eyebrow">Address</p><address>{resort.address}</address><p>Coordinates<br /><strong>15.6449687, 73.7178535</strong></p><a className="button button-green" href={resort.maps} target="_blank" rel="noreferrer"><MapPin size={16} /> Get directions</a></div></section>
    <section className="full-map"><iframe title="Google Map showing Anahata Retreat Beach Front Resort" src="https://www.google.com/maps?q=15.6449687,73.7178535&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
    <section className="enquiry-cards content-section muted-section"><a href={`mailto:${resort.email}?subject=Stay enquiry`}><p className="card-kicker">Reservations</p><h3>Plan a stay</h3><span>Ask about dates and rooms <ArrowUpRight size={15} /></span></a><a href={`tel:${resort.phoneRaw}`}><p className="card-kicker">L’Atelier</p><h3>Reserve a table</h3><span>Call the restaurant team <ArrowUpRight size={15} /></span></a><a href={`mailto:${resort.email}?subject=Retreat enquiry`}><p className="card-kicker">Groups</p><h3>Host a retreat</h3><span>Share your group details <ArrowUpRight size={15} /></span></a></section>
    <section className="faq-section content-section"><div><SectionTitle eyebrow="Before you arrive">A few useful<br /><em>things to know.</em></SectionTitle></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
  </>;
}
