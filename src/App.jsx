import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import GsapFx from './components/GsapFx';
import HeroField from './components/HeroField';
import { StickyCta } from './components/Shared';
import Home from './pages/Home';
import ShoppableVideo from './pages/ShoppableVideo';
import SearchAndFilters from './pages/SearchAndFilters';
import WebDevelopment from './pages/WebDevelopment';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Faq from './pages/Faq';
import Compatibility from './pages/Compatibility';
import About from './pages/About';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import ShoppableVideoPrivacy from './pages/ShoppableVideoPrivacy';
import SearchPrivacy from './pages/SearchPrivacy';
import Terms from './pages/Terms';
import AffiliateTerms from './pages/AffiliateTerms';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <GsapFx />
      <HeroField />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppable-video" element={<ShoppableVideo />} />
          <Route path="/search-and-filters" element={<SearchAndFilters />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Navigate to="/support" replace />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy/shoppable-video" element={<ShoppableVideoPrivacy />} />
          <Route path="/privacy/search" element={<SearchPrivacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate-terms" element={<AffiliateTerms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyCta />
      <ChatBot />
    </>
  );
}
