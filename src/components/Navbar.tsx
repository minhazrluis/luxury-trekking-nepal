import { useState, useCallback } from 'react';
import { useNavScroll } from '../hooks/useNavScroll';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Trekking', href: 'https://happytournepal.com/trekking/' },
  { label: 'Expedition', href: 'https://happytournepal.com/categories/expedition/' },
  { label: 'Tour', href: 'https://happytournepal.com/categories/tour/' },
  { label: 'Tibet', href: 'https://happytournepal.com/categories/tibet/' },
  { label: 'Bhutan', href: 'https://happytournepal.com/categories/bhutan/' },
  { label: 'Yoga', href: 'https://happytournepal.com/yoga-meditation/' },
  { label: 'About Us', href: 'https://happytournepal.com/about-us/' },
  { label: 'Contact', href: 'https://happytournepal.com/contact/' },
];

export default function Navbar() {
  const scrolled = useNavScroll(100);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,9,6,0.9)] backdrop-blur-[20px]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 font-cormorant text-[22px] font-normal text-cream tracking-[0.02em]">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <path d="M16 4L4 28h24L16 4z" stroke="#c09a62" strokeWidth="1.5" fill="none" />
              <path d="M16 10l-4 10h8l-4-10z" fill="#c09a62" opacity="0.6" />
              <line x1="12" y1="20" x2="20" y2="20" stroke="#c09a62" strokeWidth="1" />
            </svg>
            Happy Tour Nepal
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.06em] transition-colors duration-200 relative ${
                  link.label === 'Home' ? 'text-gold' : 'text-cream hover:text-gold'
                }`}
              >
                {link.label}
                {link.label === 'Home' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Book Button */}
          <a
            href="https://happytournepal.com/categories/trekking/"
            className="hidden lg:inline-block btn-gold"
          >
            Book Now
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-2 z-[60]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 transition-opacity duration-400 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(10, 9, 6, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className="text-lg font-medium text-cream tracking-[0.06em] hover:text-gold transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://happytournepal.com/categories/trekking/"
          onClick={closeMenu}
          className="btn-gold mt-4"
        >
          Book Now
        </a>
      </div>
    </>
  );
}
