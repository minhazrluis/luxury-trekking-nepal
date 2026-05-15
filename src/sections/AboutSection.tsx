const pillars = [
  {
    icon: '#icon-smile',
    title: 'Happiness',
    text: 'We go the extra mile to make every guest happy.',
    delay: '0.1s',
  },
  {
    icon: '#icon-dollar',
    title: 'Best Price & Service',
    text: 'Competitive pricing with premium quality service.',
    delay: '0.2s',
  },
  {
    icon: '#icon-compass',
    title: 'Trusted Guides',
    text: 'Highly experienced guides and porters on every trek.',
    delay: '0.3s',
  },
  {
    icon: '#icon-leaf',
    title: 'Conscious Travel',
    text: 'Eco-friendly practices that contribute to local communities.',
    delay: '0.4s',
  },
];

export default function AboutSection() {
  return (
    <section className="py-[var(--section-pad)] bg-obsidian" id="about">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Image */}
          <div className="reveal relative">
            <img
              src="/about-image.jpg"
              alt="Trekking guide with group in Himalayas"
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
              loading="lazy"
            />
            <div
              className="absolute top-4 left-4 -right-4 -bottom-4 border-2 border-gold z-[-1] reveal"
              style={{ transitionDelay: '0.6s' }}
            />
          </div>

          {/* Text */}
          <div>
            <div className="reveal">
              <span className="section-label mb-4">About Us</span>
              <h2
                className="font-cormorant font-normal text-cream leading-[1.15] tracking-[-0.01em] mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                Nepal&apos;s Trusted Trekking Partner
              </h2>
              <p className="text-cream-muted leading-[1.7] mb-4">
                Based in Kathmandu, Happy Tour Nepal is a licensed luxury tour company crafting
                bespoke Himalayan journeys. For three years, we&apos;ve combined competitive pricing
                with premium service &mdash; sending over 3,500 happy travelers on 1,650+
                successful tours across Nepal, Tibet, and Bhutan.
              </p>
              <p className="text-xs text-cream-dim mb-8">License No: 317505/080/081</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="reveal flex gap-3 items-start"
                  style={{ transitionDelay: pillar.delay }}
                >
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5">
                    <use href={pillar.icon} />
                  </svg>
                  <div>
                    <div className="text-base font-semibold text-cream mb-1">{pillar.title}</div>
                    <div className="text-sm text-cream-muted leading-[1.5]">{pillar.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
