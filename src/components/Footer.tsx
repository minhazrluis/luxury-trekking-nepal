const trekLinks = [
  { label: 'Everest Base Camp', href: 'https://happytournepal.com/booking/everest-base-camp-trek-to-kala-patthar/' },
  { label: 'Annapurna Base Camp', href: 'https://happytournepal.com/booking/annapurna-base-camp-trek/' },
  { label: 'Manaslu Circuit', href: 'https://happytournepal.com/booking/manaslu-circuit-trek/' },
  { label: 'Gokyo Lakes', href: 'https://happytournepal.com/booking/gokyo-lakes-trek/' },
  { label: 'Annapurna Circuit', href: 'https://happytournepal.com/booking/annapurna-circuit-trek/' },
  { label: 'Poon Hill', href: 'https://happytournepal.com/booking/ghorepani-poon-hill-trekking-annapurna/' },
  { label: 'All Treks', href: 'https://happytournepal.com/trekking/' },
];

const companyLinks = [
  { label: 'About Us', href: 'https://happytournepal.com/about-us/' },
  { label: 'Why Travel With Us', href: 'https://happytournepal.com/why-travel-with-us/' },
  { label: 'Our Team', href: 'https://happytournepal.com/about/' },
  { label: 'Our Mission', href: 'https://happytournepal.com/our-mission/' },
  { label: 'Blog', href: 'https://happytournepal.com/category/blog/' },
  { label: 'Contact', href: 'https://happytournepal.com/contact/' },
];

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-ink border-t border-border-dark">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
          {/* Brand Column */}
          <div className="reveal">
            <div className="flex items-center gap-2.5 font-cormorant text-[22px] text-cream mb-5">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                <path d="M16 4L4 28h24L16 4z" stroke="#c09a62" strokeWidth="1.5" fill="none" />
                <path d="M16 10l-4 10h8l-4-10z" fill="#c09a62" opacity="0.6" />
                <line x1="12" y1="20" x2="20" y2="20" stroke="#c09a62" strokeWidth="1" />
              </svg>
              Happy Tour Nepal
            </div>
            <p className="text-sm text-cream-muted leading-[1.6] mb-5">
              Nepal&apos;s premier luxury trekking company. Licensed, experienced, and committed to
              extraordinary Himalayan journeys.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089799482513"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-cream-dim hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5">
                  <use href="#icon-facebook" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/happytournepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream-dim hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5">
                  <use href="#icon-instagram" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9779841385232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-cream-dim hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5">
                  <use href="#icon-whatsapp" />
                </svg>
              </a>
            </div>
          </div>

          {/* Treks Column */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gold mb-5">
              Treks
            </div>
            <div className="flex flex-col">
              {trekLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1.5 text-sm text-cream-muted hover:text-cream transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gold mb-5">
              Company
            </div>
            <div className="flex flex-col">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1.5 text-sm text-cream-muted hover:text-cream transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gold mb-5">
              Contact
            </div>
            <div className="flex gap-2.5 items-center mb-4 text-sm">
              <svg className="w-4 h-4 text-gold flex-shrink-0">
                <use href="#icon-phone" />
              </svg>
              <a href="tel:+9779841385232" className="text-cream hover:text-gold transition-colors">
                +977 984-1385232
              </a>
            </div>
            <div className="flex gap-2.5 items-center mb-4 text-sm">
              <svg className="w-4 h-4 text-gold flex-shrink-0">
                <use href="#icon-mail" />
              </svg>
              <a href="mailto:info@happytournepal.com" className="text-cream hover:text-gold transition-colors">
                info@happytournepal.com
              </a>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5">
                <use href="#icon-map" />
              </svg>
              <span className="text-cream-muted">
                Tarkeshwor 5, Lolang Bohoratar, Kathmandu, Nepal
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="reveal text-center mt-[60px] pt-6 border-t border-border-dark text-xs text-cream-dim" style={{ transitionDelay: '0.4s' }}>
          &copy; 2025 Happy Tour Nepal Pvt. Ltd. License No: 317505/080/081. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
