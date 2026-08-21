import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import StayPage from './pages/StayPage';
import CottagesPage from './pages/CottagesPage';
import BungalowsPage from './pages/BungalowsPage';
import DiningPage from './pages/DiningPage';
import WellnessPage from './pages/WellnessPage';
import RetreatsPage from './pages/RetreatsPage';
import ExperiencePage from './pages/ExperiencePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return <Routes>
    <Route element={<SiteLayout />}>
      <Route index element={<HomePage />} />
      <Route path="stay" element={<StayPage />} />
      <Route path="stay/cottages" element={<CottagesPage />} />
      <Route path="stay/bungalows" element={<BungalowsPage />} />
      <Route path="dining" element={<DiningPage />} />
      <Route path="yoga-wellness" element={<WellnessPage />} />
      <Route path="retreats" element={<RetreatsPage />} />
      <Route path="experience" element={<ExperiencePage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="sea-view-cottages-goa" element={<Navigate to="/stay/cottages" replace />} />
      <Route path="sea-view-bungalow-goa" element={<Navigate to="/stay/bungalows" replace />} />
      <Route path="latelier-restaurant-north-goa" element={<Navigate to="/dining" replace />} />
      <Route path="yoga-wellness-retreats-goa" element={<Navigate to="/yoga-wellness" replace />} />
      <Route path="contact-us" element={<Navigate to="/contact" replace />} />
      <Route path="copy-of-cottages-1" element={<Navigate to="/stay" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>;
}
