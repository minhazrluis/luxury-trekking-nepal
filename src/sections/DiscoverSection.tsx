const activities = [
  {
    image: '/trekking-card.jpg',
    alt: 'Trekking in the Himalayas',
    subtitle: 'Annapurna & Everest',
    title: 'Trekking',
    description:
      'Iconic trails through the world\'s highest mountain ranges. From Everest Base Camp to the Annapurna Circuit \u2014 experienced guides, seamless logistics.',
    href: 'https://happytournepal.com/trekking/',
    delay: '0s',
  },
  {
    image: '/tour-card.jpg',
    alt: 'Cultural tour in Nepal',
    subtitle: 'Exploring Nepal',
    title: 'Guided Tour',
    description:
      'Culture, wildlife, and food. Discover ancient temples, vibrant markets, and the warm hospitality of Nepalese communities.',
    href: 'https://happytournepal.com/categories/tour/',
    delay: '0.15s',
  },
  {
    image: '/safari-card.jpg',
    alt: 'Jungle safari in Chitwan',
    subtitle: 'Chitwan & Bardia',
    title: 'Jungle Safari',
    description:
      'Track rhinos, elephants, and tigers through Nepal\'s lush lowland national parks. A wild contrast to the high Himalaya.',
    href: 'https://happytournepal.com/booking/chitwan-tour-5-days/',
    delay: '0.3s',
  },
  {
    image: '/rafting-card.jpg',
    alt: 'White water rafting',
    subtitle: 'Adventure Tour',
    title: 'Rafting',
    description:
      'Navigate the thundering mountain rivers of Nepal. From gentle floats to adrenaline-charged white water.',
    href: 'https://happytournepal.com/\uD83C\uDF0A-rafting-in-nepal-an-adventure-like-no-other/',
    delay: '0.45s',
  },
];

export default function DiscoverSection() {
  return (
    <section className="py-[var(--section-pad)] bg-obsidian" id="discover">
      <div className="container-main">
        <div className="reveal">
          <span className="section-label mb-4">Discover</span>
          <h2
            className="font-cormorant font-normal text-cream leading-[1.15] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            The Many Faces of Nepal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {activities.map((activity) => (
            <a
              key={activity.title}
              href={activity.href}
              className="reveal relative overflow-hidden cursor-pointer group"
              style={{
                aspectRatio: '3/4',
                transitionDelay: activity.delay,
              }}
            >
              <img
                src={activity.image}
                alt={activity.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-all duration-400"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,9,6,0.9) 0%, rgba(10,9,6,0.3) 50%, transparent 100%)',
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 z-[2]">
                <div className="font-jost text-xs font-semibold tracking-[0.1em] uppercase text-gold mb-1">
                  {activity.subtitle}
                </div>
                <div className="font-cormorant text-[28px] font-normal text-cream mb-2">
                  {activity.title}
                </div>
                <div className="font-jost text-sm text-cream-muted max-w-[280px] leading-[1.5] opacity-0 translate-y-2.5 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0">
                  {activity.description}
                </div>
                <span className="link-arrow mt-2 opacity-0 translate-y-2.5 transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0 max-md:static max-md:block">
                  Explore
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
