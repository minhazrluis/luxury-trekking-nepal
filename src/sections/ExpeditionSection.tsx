import { useEffect, useRef } from 'react';

const stats = [
  { num: '8,849m', label: 'Summit' },
  { num: '60 Days', label: 'Duration' },
  { num: '1:1', label: 'Sherpa Ratio' },
];

export default function ExpeditionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const handleParallax = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      img.style.transform = `translateY(${scrolled * 0.08}px)`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleParallax, { passive: true });
          } else {
            window.removeEventListener('scroll', handleParallax);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col lg:flex-row min-h-[80vh] bg-obsidian" id="expedition">
      {/* Text Column */}
      <div className="lg:flex-[0_0_45%] bg-charcoal flex items-center py-16 px-8 lg:px-14">
        <div className="max-w-[480px] reveal">
          <span className="section-label mb-4">Premier Expedition</span>
          <h2
            className="font-cormorant font-normal text-cream leading-[1.15] tracking-[-0.01em] mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            Everest Expedition 2026/27
          </h2>
          <p className="text-cream-muted leading-[1.7] mb-8">
            The ultimate mountaineering challenge. Our expert Sherpa guides lead seasoned climbers
            to the roof of the world. Every detail meticulously planned &mdash; from base camp
            logistics to summit rotation schedules. This is not just a climb; it is the defining
            moment of a lifetime.
          </p>
          <div className="flex flex-wrap gap-10 my-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-cormorant text-4xl font-light text-cream">{stat.num}</div>
                <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-gold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <a href="https://happytournepal.com/booking/everest-expedition/" className="btn-gold">
            Enquire Now
          </a>
        </div>
      </div>

      {/* Image Column */}
      <div className="lg:flex-[0_0_55%] relative overflow-hidden min-h-[50vh] lg:min-h-0">
        <img
          ref={imgRef}
          src="/expedition-spotlight.jpg"
          alt="Khumbu Icefall Everest expedition"
          className="absolute inset-0 w-full"
          style={{ height: '120%', top: '-10%' }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
