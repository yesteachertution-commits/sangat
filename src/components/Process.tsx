"use client";

const steps = [
  { number: "01", title: "Farm Selection", description: "We personally visit and select farms that meet our strict standards for soil quality, farming practices, and spice variety authenticity.", icon: "🌱", color: "#10b981" },
  { number: "02", title: "Harvest at Peak", description: "Spices are harvested at their peak ripeness to capture maximum flavor, aroma, and nutritional value.", icon: "🌾", color: "#f59e0b" },
  { number: "03", title: "Natural Processing", description: "Traditional sun-drying and stone-grinding methods preserve the essential oils and natural compounds.", icon: "☀️", color: "#ef4444" },
  { number: "04", title: "Quality Testing", description: "Every batch undergoes rigorous lab testing for purity, potency, and absence of contaminants.", icon: "🔬", color: "#8b5cf6" },
  { number: "05", title: "Luxury Packaging", description: "Sealed in airtight, UV-protected packaging to preserve freshness from our facility to your kitchen.", icon: "📦", color: "#f97316" },
  { number: "06", title: "Delivered Fresh", description: "Express delivery ensures your spices arrive fresh, retaining all their natural goodness.", icon: "🚀", color: "#06b6d4" },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(232,184,0,0.4) 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-gold mb-4 sm:mb-6">
            <span className="text-gold-400 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase">From Farm to Table</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-cream-100 mb-3 sm:mb-4">
            Our{" "}
            <span className="text-gold-gradient italic font-semibold">Process</span>
          </h2>
          <p className="text-cream-400 font-sans font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Every step of our journey is guided by a commitment to quality, authenticity, and respect for nature.
          </p>
        </div>

        {/* Steps grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-5 sm:p-7 lg:p-8 rounded-2xl glass border-gold hover:border-gold-400 transition-all duration-300 overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${step.color}05, transparent)` }}
            >
              {/* Big number bg */}
              <div
                className="absolute top-3 right-3 sm:top-4 sm:right-4 font-display text-5xl sm:text-6xl font-bold opacity-5 select-none group-hover:opacity-10 transition-opacity duration-300"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
              >
                {step.icon}
              </div>

              <div className="text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase mb-2 sm:mb-3" style={{ color: step.color }}>
                Step {step.number}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-cream-100 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-cream-400 text-xs sm:text-sm font-sans font-light leading-relaxed">{step.description}</p>

              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* ISO badge */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
          <div className="inline-block p-px rounded-2xl bg-gold-gradient w-full sm:w-auto">
            <div className="bg-dark-900 rounded-2xl px-6 sm:px-12 py-6 sm:py-8 text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏆</div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-cream-100 mb-2">ISO 22000 Certified</h3>
              <p className="text-cream-400 text-xs sm:text-sm font-sans font-light max-w-sm mx-auto">
                Our facility meets international food safety standards, ensuring every product is safe, pure, and of the highest quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
