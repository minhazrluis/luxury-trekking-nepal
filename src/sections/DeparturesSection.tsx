const departures = [
  {
    title: 'Everest Base Camp Trek',
    subtitle: '12 Days \u00b7 From $1,700',
    months: [
      { name: "Sep'25", dates: '1, 3, 8, 15, 20, 22, 29, 30' },
      { name: "Oct'25", dates: '5, 12, 15, 19, 22, 26, 29' },
      { name: "Nov'25", dates: '2, 5, 9, 12, 16, 19, 23, 26, 30' },
    ],
    delay: '0s',
  },
  {
    title: 'Annapurna Base Camp Trek',
    subtitle: '11 Days \u00b7 From $1,299',
    months: [
      { name: "Sep'25", dates: '1, 3, 8, 15, 20, 22, 29, 30' },
      { name: "Oct'25", dates: '5, 12, 15, 19, 22, 26, 29' },
      { name: "Nov'25", dates: '2, 5, 9, 12, 16, 19, 23, 26, 30' },
    ],
    delay: '0.15s',
  },
];

export default function DeparturesSection() {
  return (
    <section className="py-[var(--section-pad)] bg-charcoal" id="departures">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <span className="section-label mb-4">Group Departures 2025/26</span>
          <h2
            className="font-cormorant font-normal text-cream leading-[1.15] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            Join the Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {departures.map((dep) => (
            <div
              key={dep.title}
              className="reveal bg-warm-charcoal border border-border-dark p-10"
              style={{ transitionDelay: dep.delay }}
            >
              <div className="font-cormorant text-2xl text-cream mb-1">{dep.title}</div>
              <div className="text-sm text-gold mb-6">{dep.subtitle}</div>
              {dep.months.map((month, i) => (
                <div
                  key={month.name}
                  className={`flex gap-3 py-3 items-baseline ${
                    i < dep.months.length - 1 ? 'border-b border-border-dark' : ''
                  }`}
                >
                  <span className="text-[13px] font-semibold text-gold uppercase tracking-[0.05em] whitespace-nowrap min-w-[65px]">
                    {month.name}
                  </span>
                  <span className="text-sm text-cream-muted">{month.dates}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10" style={{ transitionDelay: '0.3s' }}>
          <a
            href="https://happytournepal.com/booking/everest-base-camp-trek-to-kala-patthar-fixed-departure/"
            className="btn-gold"
          >
            Secure Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}
