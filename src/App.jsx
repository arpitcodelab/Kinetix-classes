import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileBar } from './components/layout/StickyMobileBar';
import { LeadModal } from './components/ui/LeadModal';
import { LMSPreviewModal } from './components/layout/LMSPreviewModal';

import { HomePage } from './pages/HomePage';

const CoursesPage = lazy(() => import('./pages/CoursesPage').then(m => ({ default: m.CoursesPage })));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage').then(m => ({ default: m.CourseDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const FacultyPage = lazy(() => import('./pages/FacultyPage').then(m => ({ default: m.FacultyPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '2px solid #1E293B',
      borderTopColor: '#00E5C8',
      animation: 'spinLoader 0.8s linear infinite'
    }} />
    <style>{`
      @keyframes spinLoader {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isLMSOpen, setIsLMSOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenEnquiry = (courseTitle) => {
    setSelectedCourse(courseTitle || 'NEET Medical Coaching');
    setIsEnquiryOpen(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#070C14', color: '#F8FAFC' }}>
      <ScrollToTop />

      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: -9999,
          top: 10,
          background: '#00E5C8',
          color: '#070C14',
          padding: '0.5rem 1rem',
          borderRadius: 8,
          fontWeight: 700,
          zIndex: 9999
        }}
        onFocus={(e) => { e.currentTarget.style.left = '10px'; }}
        onBlur={(e) => { e.currentTarget.style.left = '-9999px'; }}
      >
        Skip to main content
      </a>

      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenLMS={() => setIsLMSOpen(true)}
      />

      <div style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses/:slug" element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/faculty" element={<FacultyPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer onOpenLMS={() => setIsLMSOpen(true)} />

      <StickyMobileBar onOpenEnquiry={() => handleOpenEnquiry()} />

      <LeadModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultCourse={selectedCourse}
      />

      <LMSPreviewModal
        isOpen={isLMSOpen}
        onClose={() => setIsLMSOpen(false)}
        onOpenEnquiry={() => {
          setIsLMSOpen(false);
          setIsEnquiryOpen(true);
        }}
      />
    </div>
  );
};
