const destinations = [
  'EVEREST', 'ANNAPURNA', 'GOKYO', 'MANASLU', 'KANCHENJUNGA',
  'POON HILL', 'TIBET', 'BHUTAN', 'KATHMANDU', 'CHITWAN',
  'LANGTANG', 'MUSTANG',
];

function MarqueeTrack() {
  return (
    <>
      {destinations.map((dest, i) => (
        <span key={i} className="flex items-center">
          <span className="font-jost text-[13px] font-semibold tracking-[0.1em] text-obsidian px-6">
            {dest}
          </span>
          <span className="text-obsidian opacity-50 px-4">&middot;</span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeSection() {
  return (
    <section className="w-full h-14 bg-gold overflow-hidden relative flex items-center group">
      <div className="flex items-center whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  );
}
