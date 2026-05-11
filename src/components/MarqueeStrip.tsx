"use client";

const items = [
  "🌶️ Red Chilli",
  "🫚 Turmeric",
  "🌿 Coriander",
  "⭐ Star Anise",
  "🫛 Cardamom",
  "🌰 Nutmeg",
  "🍃 Bay Leaves",
  "🌱 Cumin",
  "🫙 Saffron",
  "🌾 Fenugreek",
  "🍂 Cinnamon",
  "🌺 Cloves",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-4 overflow-hidden bg-dark-800 border-y border-gold-900/30">
      {/* Gold shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-sm font-sans font-medium tracking-widest uppercase"
          >
            <span className="text-gold-400">{item}</span>
            <span className="text-gold-700 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
