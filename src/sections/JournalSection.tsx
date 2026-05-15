const articles = [
  {
    image: '/blog-messner.jpg',
    alt: 'Reinhold Messner',
    category: 'Mountaineering',
    title: 'Reinhold Messner: Conquering Heights and Defying Limits in the Himalayas',
    date: 'April 17, 2025',
    href: 'https://happytournepal.com/reinhold-messner-conquering-heights-and-defying-limits-in-the-himalayas/',
    delay: '0s',
  },
  {
    image: '/blog-kit.jpg',
    alt: 'Trekking kit list',
    category: 'Trekking Guide',
    title: 'The Ultimate Kit List for Trekking in Nepal',
    date: 'April 17, 2025',
    href: 'https://happytournepal.com/the-ultimate-kit-list-for-trekking-in-nepal/',
    delay: '0.15s',
  },
  {
    image: '/blog-annapurna.jpg',
    alt: 'Annapurna Circuit Trek',
    category: 'Trekking Guide',
    title: 'Annapurna Circuit Trek: Fitness Requirements, Challenges and Essential Equipment',
    date: 'December 19, 2024',
    href: 'https://happytournepal.com/annapurna-circuit-trek-fitness-requirements-challenges-and-essential-equipment/',
    delay: '0.3s',
  },
];

export default function JournalSection() {
  return (
    <section className="py-[var(--section-pad)] bg-obsidian" id="journal">
      <div className="container-main">
        <div className="reveal flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <span className="section-label mb-4">Journal</span>
            <h2
              className="font-cormorant font-normal text-cream leading-[1.15] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Stories from the Trail
            </h2>
          </div>
          <a href="https://happytournepal.com/category/blog/" className="link-arrow">
            All Stories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <a
              key={article.title}
              href={article.href}
              className={`reveal group bg-charcoal overflow-hidden cursor-pointer ${
                i === 2 && articles.length === 3 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0' : ''
              }`}
              style={{ transitionDelay: article.delay }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold mb-3">
                  {article.category}
                </div>
                <h3 className="font-cormorant text-[22px] font-normal text-cream leading-[1.3] line-clamp-3 transition-colors duration-300 group-hover:text-gold">
                  {article.title}
                </h3>
                <div className="text-xs text-cream-dim mt-3">{article.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
