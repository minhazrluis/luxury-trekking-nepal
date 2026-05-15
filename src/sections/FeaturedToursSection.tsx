import { useRef } from 'react';
import { useCarouselDrag } from '../hooks/useCarouselDrag';

const tours = [
  {
    image: 'ebc-tour.jpg',
    alt: 'Everest Base Camp Trek',
    badge: 'Most Popular',
    title: 'Everest Base Camp Trek to Kala Patthar',
    duration: '12 Days',
    price: 'From $1,700',
    href: 'https://happytournepal.com/booking/everest-base-camp-trek-to-kala-patthar/',
    delay: '0s',
  },
  {
    image: 'annapurna-bc-tour.jpg',
    alt: 'Annapurna Base Camp Trek',
    badge: 'Featured',
    title: 'Annapurna Base Camp Trek',
    duration: '11 Days',
    price: 'From $1,299',
    href: 'https://happytournepal.com/booking/annapurna-base-camp-trek/',
    delay: '0.12s',
  },
  {
    image: 'manaslu-tour.jpg',
    alt: 'Manaslu Circuit Trek',
    badge: null,
    title: 'Manaslu Circuit Trek',
    duration: '14 Days',
    price: 'From $1,650',
    href: 'https://happytournepal.com/booking/manaslu-circuit-trek/',
    delay: '0.24s',
  },
  {
    image: 'gokyo-tour.jpg',
    alt: 'Gokyo Lakes Trek',
    badge: null,
    title: 'Gokyo Lakes Trek',
    duration: '12 Days',
    price: 'From $1,900',
    href: 'https://happytournepal.com/booking/gokyo-lakes-trek/',
    delay: '0.36s',
  },
  {
    image: 'poon-hill-tour.jpg',
    alt: 'Ghorepani Poon Hill Trek',
    badge: null,
    title: 'Ghorepani Poon Hill Trek',
    duration: '5 Days',
    price: 'From $499',
    href: 'https://happytournepal.com/booking/ghorepani-poon-hill-trekking-annapurna/',
    delay: '0.48s',
  },
  {
    image: 'mardi-tour.jpg',
    alt: 'Mardi Himal Trek',
    badge: null,
    title: 'Mardi Himal Trek',
    duration: '8 Days',
    price: 'From $899',
    href: 'https://happytournepal.com/booking/mardi-himal-trek/',
    delay: '0.6s',
  },
  {
    image: 'annapurna-circuit-tour.jpg',
    alt: 'Annapurna Circuit Trek',
    badge: 'Luxury',
    title: 'Annapurna Circuit Trek',
    duration: '15 Days',
    price: 'From $2,600',
    href: 'https://happytournepal.com/booking/annapurna-circuit-trek/',
    delay: '0.72s',
  },
  {
    image: 'kanchenjunga-tour.jpg',
    alt: 'Kanchenjunga Base Camp Trek',
    badge: null,
    title: 'Kanchenjunga Base Camp Trek',
    duration: '18 Days',
    price: 'From $2,550',
    href: 'https://happytournepal.com/booking/kanchenjunga-base-camp-trek/',
    delay: '0.84s',
  },
];

export default function FeaturedToursSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  useCarouselDrag(carouselRef);

  return (
    <section className="py-[var(--section-pad)] bg-charcoal" id="featured">
      <div className="container-main">
        <div className="reveal flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <span className="section-label mb-4">Featured Journeys</span>
            <h2
              className="font-cormorant font-normal text-cream leading-[1.15] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Curated Himalayan Adventures
            </h2>
          </div>
          <a href="https://happytournepal.com/trekking/" className="link-arrow">
            View All Treks
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-x-auto cursor-grab pb-2"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'max(var(--content-pad), calc((100vw - var(--content-max)) / 2 + var(--content-pad)))',
          paddingRight: 'var(--content-pad)',
        }}
      >
        <div className="flex gap-6">
          {tours.map((tour) => (
            <a
              key={tour.title}
              href={tour.href}
              className="reveal flex-shrink-0 bg-charcoal overflow-hidden group"
              style={{
                width: 'clamp(280px, 30vw, 320px)',
                scrollSnapAlign: 'start',
                transitionDelay: tour.delay,
              }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={tour.image}
                  alt={tour.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {tour.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-obsidian text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5">
                    {tour.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3
                  className="font-cormorant text-[22px] font-normal text-cream leading-[1.2] mb-2 line-clamp-2"
                >
                  {tour.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-cream-dim mb-1">
                  <svg width="14" height="14">
                    <use href="#icon-clock" />
                  </svg>
                  {tour.duration}
                </div>
                <div className="text-sm font-semibold text-gold mb-3">{tour.price}</div>
                <span className="link-arrow">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
