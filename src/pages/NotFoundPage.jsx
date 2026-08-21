import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageParts';

export default function NotFoundPage() {
  return <section className="not-found"><PageMeta title="Page Not Found" description="The requested page could not be found." /><p className="eyebrow eyebrow-light">404 · Lost by the sea</p><h1>This path has<br /><em>drifted away.</em></h1><p>Return to Anahata and find the page you were looking for.</p><Link className="button button-coral" to="/">Back to home <ArrowRight size={16} /></Link></section>;
}
