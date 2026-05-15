import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { target: '3500', suffix: '+', label: 'Happy Travelers', decimal: '0' },
  { target: '1650', suffix: '+', label: 'Successful Tours', decimal: '0' },
  { target: '99.5', suffix: '%', label: 'Positive Reviews', decimal: '1' },
  { target: '15', suffix: '', label: 'Awards Won', decimal: '0' },
];

export default function StatsSection() {
  useCountUp('.stat-num', 2000, 200);

  return (
    <section className="w-full py-20 bg-gold" id="stats">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal"
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div
                className="stat-num font-cormorant font-light text-obsidian leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
                data-target={stat.target}
                data-suffix={stat.suffix}
                data-decimal={stat.decimal}
              >
                0
              </div>
              <div className="font-jost text-[13px] font-medium text-obsidian opacity-70 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
