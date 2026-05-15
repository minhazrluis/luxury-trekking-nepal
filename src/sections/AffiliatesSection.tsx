const logos = [
  {
    src: 'https://happytournepal.com/wp-content/uploads/2023/01/ntb_logo-nepal-tourism-board-happy-tour-nepal-175x175.webp',
    alt: 'Nepal Tourism Board',
  },
  {
    src: 'https://happytournepal.com/wp-content/uploads/2023/01/TAAN-LOGO-e1744917776816.png',
    alt: 'Trekking Agencies Association of Nepal',
  },
  {
    src: 'https://happytournepal.com/wp-content/uploads/2023/01/NMA-LOGO.png',
    alt: 'Nepal Mountaineering Association',
  },
  {
    src: 'https://happytournepal.com/wp-content/uploads/2023/01/emblem-e1744917838744.png',
    alt: 'Emblem of Nepal Government',
  },
];

export default function AffiliatesSection() {
  return (
    <section className="w-full py-[60px] bg-ink border-t border-border-dark" id="affiliates">
      <div className="container-main">
        <div className="reveal text-center mb-10">
          <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-cream-dim">
            Registered &amp; Recognized By
          </div>
        </div>
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[60px] items-center justify-items-center" style={{ transitionDelay: '0.15s' }}>
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 lg:h-[60px] w-auto transition-all duration-300"
              style={{ filter: 'grayscale(100%) brightness(0.7)' }}
              onMouseEnter={(e) => {
                (e.target as HTMLImageElement).style.filter = 'grayscale(0%) brightness(1)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLImageElement).style.filter = 'grayscale(100%) brightness(0.7)';
              }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
