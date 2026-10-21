import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileBar } from './components/layout/StickyMobileBar';
import { LeadModal } from './components/ui/LeadModal';
import { LMSPreviewModal } from './components/layout/LMSPreviewModal';

import { HomePage } from './pages/HomePage';

// Code-split other sub-pages for optimal initial load speed & Core Web Vitals
const CoursesPage = lazy(() => import('./pages/CoursesPage').then(m => ({ default: m.CoursesPage })));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage').then(m => ({ default: m.CourseDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const FacultyPage = lazy(() => import('./pages/FacultyPage').then(m => ({ default: m.FacultyPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Loading spinner fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#1E293B] border-t-[#00E5C8] animate-spin" />
  </div>
);

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isLMSOpen, setIsLMSOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const handleOpenEnquiry = (courseTitle?: string) => {
    setSelectedCourse(courseTitle || 'NEET Medical Coaching');
    setIsEnquiryOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#070C14] text-[#F8FAFC]">
      <ScrollToTop />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00E5C8] focus:text-[#070C14] focus:font-bold focus:rounded-xl focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Primary Sticky Navbar */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenLMS={() => setIsLMSOpen(true)}
      />

      {/* Main Routed Page Content */}
      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses/:slug" element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={() => handleOpenEnquiry()} />} />
            <Route path="/faculty" element={<FacultyPage onOpenEnquiry={() => handleOpenEnquiry()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>

      {/* Global Footer */}
      <Footer onOpenLMS={() => setIsLMSOpen(true)} />

      {/* Sticky Mobile Floating Action Bar */}
      <StickyMobileBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Global Modals */}
      <LeadModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultCourse={selectedCourse}
      />

      <LMSPreviewModal
        isOpen={isLMSOpen}
        onClose={() => setIsLMSOpen(false)}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />
    </div>
  );
};
