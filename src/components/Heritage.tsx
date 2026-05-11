"use client";

import { MapPin, Clock, Shield, Sprout } from "lucide-react";

const pillars = [
  { icon: <MapPin size={22} />, title: "Origin Sourced", description: "Every spice is traced back to its native land — from the saffron fields of Kashmir to the pepper vines of Kerala.", color: "#f59e0b" },
  { icon: <Clock size={22} />, title: "15+ Years Legacy", description: "A family tradition of spice trading passed down through generations, preserving ancient knowledge and quality.", color: "#10b981" },
  { icon: <Shield size={22} />, title: "Purity Guaranteed", description: "Lab-tested for authenticity and purity. No additives, no fillers — just pure, natural spices as nature intended.", color: "#8b5cf6" },
  { icon: <Sprout size={22} />, title: "Sustainably Grown", description: "We partner with farmers who use sustainable practices, ensuring the land thrives for future generations.", color: "#ef4444" },
];

const timeline = [
  { year: "2008", event: "Founded in the heart of Rajasthan with a vision to bring authentic spices to every home." },
  { year: "2012", event: "Expanded to source directly from 50+ farms across India, ensuring farm-to-table freshness." },
  { year: "2016", event: "Launched our signature spice blends, crafted from century-old family recipes." },
  { year: "2020", event: "Went organic — 100% of our products now certified organic and sustainably sourced." },
  { year: "2024", event: "Serving 50,000+ happy customers across India and internationally." },
];

export default function Heritage() {
  return (
    <section id="heritage" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">

          {/* Left: Story */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-gold mb-6 sm:mb-8">
              <span className="text-gold-400 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase">Our Heritage</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-cream-100 mb-4 sm:mb-6 leading-tight">
              Rooted in{" "}
              <span className="text-gold-gradient italic font-semibold">Tradition</span>,<br className="hidden sm:block" />{" "}
              Crafted for{" "}
              <span className="text-gold-gradient italic font-semibold">Today</span>
            </h2>

            <p className="text-cream-300 font-sans font-light text-base sm:text-lg leading-relaxed mb-5 sm:mb-8">
              Sangat Natural was born from a deep love for authentic flavors. Our
              founders traveled the ancient spice routes of India, learning from
              farmers and artisans who had perfected their craft over centuries.
            </p>
            <p className="text-cream-400 font-sans font-light text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Today, we carry that legacy forward — combining traditional wisdom
              with modern quality standards to deliver spices that are not just
              ingredients, but stories in every pinch.
            </p>

            {/* Timeline */}
            <div className="space-y-4 sm:space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass border-gold flex items-center justify-center group-hover:border-gold-400 transition-colors duration-300">
                      <span className="text-gold-400 text-[10px] sm:text-xs font-sans font-bold">{item.year.slice(2)}</span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-gold-700/50 to-transparent mt-2 min-h-[20px]" />
                    )}
                  </div>
                  <div className="pb-4 sm:pb-6 pt-1">
                    <span className="text-gold-400 text-xs sm:text-sm font-sans font-semibold tracking-wider">{item.year}</span>
                    <p className="text-cream-400 text-xs sm:text-sm font-sans font-light leading-relaxed mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="group p-5 sm:p-6 rounded-2xl glass border-gold hover:border-gold-400 transition-all duration-300 hover-glow"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30`, color: pillar.color }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-cream-100 mb-1.5 sm:mb-2">{pillar.title}</h3>
                <p className="text-cream-400 text-xs sm:text-sm font-sans font-light leading-relaxed">{pillar.description}</p>
              </div>
            ))}

            {/* Feature card */}
            <div className="sm:col-span-2 p-5 sm:p-6 rounded-2xl relative overflow-hidden bg-gradient-to-br from-gold-950/30 to-spice-950/30 border border-gold-800/30">
              <div className="absolute top-0 right-0 text-6xl sm:text-8xl opacity-10 select-none">🌿</div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-display font-bold text-gold-gradient mb-1">200+</div>
                <div className="text-cream-300 font-sans text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">Spice Varieties</div>
                <p className="text-cream-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  From everyday essentials to rare exotic spices, our collection covers the entire spectrum of flavors from across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
