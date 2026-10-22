import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, UserCircle2, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';

export const Navbar = ({ onOpenEnquiry, onOpenLMS }) => {
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
    <header className={`knx-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container size="xl">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Kinetix Classes Homepage">
            <div style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: '#0B131F',
              border: '1px solid #1E293B',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <img
                src="/assets/logo/kinetix-logo-mark.svg"
                alt="Kinetix Classes Logo Mark"
                width="40"
                height="40"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', lineHeight: 1 }}>
                <span style={{ fontSize: '1.15rem', fontWeight: 900, letterSpacing: '0.05em', color: '#FFFFFF' }}>KINETIX</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.05em', color: '#00E5C8' }}>CLASSES</span>
              </div>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 3 }}>
                NEET • JEE • PCMB
              </span>
            </div>
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={isActive ? 'active' : ''}
                  style={isActive ? {
                    color: '#070C14',
                    background: '#00E5C8',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 9999,
                    fontWeight: 700
                  } : {
                    padding: '0.35rem 0.85rem'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <a
              href={instituteData.contact.phoneHref}
              className="knx-btn btn-outline btn-sm desktop-nav-item"
              id="desktop-phone-btn"
            >
              <Phone size={14} color="#38BDF8" />
              <span>{instituteData.contact.phoneFormatted}</span>
            </a>

            <button
              type="button"
              onClick={onOpenLMS}
              className="knx-btn btn-outline btn-sm desktop-nav-item"
              title="Student Portal"
              aria-label="Student Portal"
              style={{ borderColor: 'transparent' }}
            >
              <UserCircle2 size={16} color="#00E5C8" />
              <span className="desktop-lms-label">Student Portal</span>
            </button>

            <div className="desktop-nav-item">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenEnquiry}
                icon={<Sparkles size={14} />}
              >
                Book Counseling
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={20} color="#00E5C8" /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-drawer" style={{
            background: '#0E1624',
            border: '1px solid #1E293B',
            borderRadius: '16px',
            padding: '1.25rem',
            marginTop: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 12px 30px rgba(0,0,0,0.6)'
          }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontWeight: 600,
                    color: isActive ? '#070C14' : '#CBD5E1',
                    background: isActive ? '#00E5C8' : 'transparent'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
                className="knx-btn btn-outline btn-md w-full"
              >
                <UserCircle2 size={16} color="#00E5C8" />
                Student Portal (LMS Preview)
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
