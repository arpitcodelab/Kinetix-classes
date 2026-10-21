import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, UserCircle2, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenLMS: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenLMS }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'About', href: '/about' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070C14]/90 backdrop-blur-md border-b border-[#1E293B] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5C8] rounded-xl"
            aria-label="Kinetix Classes Homepage"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#0B131F] border border-[#1E293B] p-1 flex items-center justify-center shrink-0 group-hover:border-[#00E5C8] transition-colors">
              <img
                src="/assets/logo/kinetix-logo-mark.svg"
                alt="Kinetix Classes Logo Mark"
                className="w-full h-full object-contain"
                width="40"
                height="40"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-lg font-black tracking-wider text-white">KINETIX</span>
                <span className="text-lg font-bold tracking-wider text-[#00E5C8]">CLASSES</span>
              </div>
              <span className="text-[10px] font-semibold text-[#94A3B8] tracking-widest uppercase mt-0.5">
                NEET • JEE • PCMB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E1624]/60 border border-[#1E293B] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? 'text-[#070C14] bg-[#00E5C8]'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Phone Call */}
            <a
              href={instituteData.contact.phoneHref}
              className="hidden md:flex items-center gap-2 text-xs font-bold text-[#CBD5E1] hover:text-[#00E5C8] transition-colors px-3 py-2 rounded-xl border border-[#1E293B] bg-[#0E1624]/60"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{instituteData.contact.phoneFormatted}</span>
            </a>

            {/* LMS Portal Shell (Stage B Readiness) */}
            <button
              type="button"
              onClick={onOpenLMS}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-white px-3 py-2 rounded-xl transition-colors border border-transparent hover:border-[#1E293B]"
              title="Student & Parent Learning Portal"
            >
              <UserCircle2 className="w-4 h-4 text-[#00E5C8]" />
              <span>Student Portal</span>
            </button>

            {/* Book Counseling CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenEnquiry}
              icon={<Sparkles className="w-3.5 h-3.5" />}
            >
              Book Counseling
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={instituteData.contact.phoneHref}
              className="p-2 rounded-xl bg-[#0E1624] border border-[#1E293B] text-[#38BDF8]"
              aria-label="Call Kinetix Classes"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0E1624] border border-[#1E293B] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5C8]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00E5C8]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="sm:hidden mt-3 rounded-2xl bg-[#0E1624] border border-[#1E293B] p-4 shadow-2xl flex flex-col gap-2 animate-fade-in"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#070C14] bg-[#00E5C8] font-bold'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#1E293B] flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                Book Free Counseling
              </Button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLMS();
                }}
                className="w-full py-2.5 rounded-xl border border-[#334155] text-xs font-semibold text-[#CBD5E1] flex items-center justify-center gap-2 hover:bg-[#162235]"
              >
                <UserCircle2 className="w-4 h-4 text-[#00E5C8]" />
                Student Portal (LMS Preview)
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

