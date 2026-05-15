export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="hero-bg.jpg"
          alt="Himalayan mountain range at golden hour with prayer flags"
          className="w-full h-full object-cover object-[center_30%]"
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,9,6,0.3) 0%, rgba(10,9,6,0.5) 40%, rgba(10,9,6,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-[800px] px-5 -mt-[5vh]">
        <span
          className="section-label mb-4"
          style={{ animation: 'hero-fade-up 0.7s 0.3s both' }}
        >
          Nepal&apos;s Premier Trekking Company
        </span>
        <h1
          className="font-cormorant italic font-light leading-[1.05] tracking-[-0.02em] text-cream my-6"
          style={{
            fontSize: 'clamp(42px, 6vw, 72px)',
            animation: 'hero-fade-up 0.8s 0.5s both',
          }}
        >
          Where the Himalaya Becomes Your Story
        </h1>
        <p
          className="text-base text-cream-muted max-w-[560px] mx-auto mb-10 leading-[1.7]"
          style={{ animation: 'hero-fade-up 0.7s 0.7s both' }}
        >
          For three years, we&apos;ve guided travelers through the world&apos;s highest mountains
          &mdash; from Everest Base Camp to hidden trails in Annapurna. Every journey is crafted
          around you.
        </p>
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animation: 'hero-fade-up 0.6s 0.9s both' }}
        >
          <a href="#featured" className="btn-gold">
            Explore Journeys
          </a>
          <a href="https://api.whatsapp.com/send/?phone=9779841385232" className="btn-ghost">
            Talk to Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-10 bottom-20 z-[2] hidden md:flex flex-col items-center gap-2">
        <div className="w-1.5 h-1.5 border border-cream rounded-full" />
        <div
          className="w-px h-[60px] animate-pulse-line"
          style={{ background: 'rgba(243, 234, 216, 0.4)' }}
        />
      </div>
    </section>
  );
}
