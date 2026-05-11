"use client";

import Image from "next/image";

const boxSpices = [
  { src: "/red chilli.png", label: "Red Chilli", x: "-left-3 sm:-left-4", y: "top-3 sm:top-4", rotate: "-15deg", size: 65 },
  { src: "/haldi.png", label: "Haldi", x: "-right-3 sm:-right-4", y: "top-6 sm:top-8", rotate: "12deg", size: 60 },
  { src: "/dhaniya powder.png", label: "Dhaniya", x: "-left-4 sm:-left-6", y: "bottom-3 sm:bottom-4", rotate: "10deg", size: 58 },
  { src: "/zeera powder.png", label: "Zeera", x: "-right-4 sm:-right-6", y: "bottom-4 sm:bottom-6", rotate: "-10deg", size: 58 },
];

const included = [
  { src: "/red chilli.png", label: "Red Chilli" },
  { src: "/haldi.png", label: "Haldi" },
  { src: "/dhaniya powder.png", label: "Dhaniya" },
  { src: "/zeera powder.png", label: "Zeera" },
  { src: "/garam.png", label: "Garam" },
];

export default function FeaturedBanner() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-spice-950 via-dark-700 to-spice-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Product showcase — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-64 xl:w-72 h-64 xl:h-72">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-44 xl:w-52 h-44 xl:h-52 animate-float">
                  <div className="absolute inset-0 rounded-full bg-gold-500/10 blur-2xl" />
                  <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-spin-slow" />
                  <Image src="/garam.png" alt="Garam Masala Royal" fill className="object-contain drop-shadow-2xl p-4" sizes="208px" />
                </div>
              </div>
              {boxSpices.map((spice, i) => (
                <div key={i} className={`absolute ${spice.x} ${spice.y} animate-float`} style={{ animationDelay: `${i * 0.7}s` }}>
                  <div className="relative opacity-80" style={{ transform: `rotate(${spice.rotate})` }}>
                    <div className="absolute inset-0 rounded-full blur-md opacity-30 bg-gold-400" />
                    <Image src={spice.src} alt={spice.label} width={spice.size} height={spice.size} className="object-contain drop-shadow-xl" />
                  </div>
                </div>
              ))}
              <div className="absolute inset-0 rounded-full border border-gold-800/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase">Limited Edition</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-cream-100 mb-3 sm:mb-4 leading-tight">
              The{" "}
              <span className="text-gold-gradient italic font-semibold">Royal Spice Box</span>
            </h2>

            <p className="text-cream-300 font-sans font-light text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
              A curated collection of our 5 signature spices — Red Chilli, Haldi, Dhaniya, Zeera & Garam Masala — presented in a handcrafted wooden box.
            </p>

            {/* Included spices */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-5 sm:mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass border-gold group-hover:border-gold-400 transition-all duration-300 overflow-hidden relative">
                    <Image src={item.src} alt={item.label} fill className="object-contain p-1 sm:p-1.5" sizes="48px" />
                  </div>
                  <span className="text-cream-500 text-[8px] sm:text-[9px] font-sans tracking-wide text-center leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-5 sm:mb-8">
              <div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient">₹799</div>
                <div className="text-cream-500 text-xs sm:text-sm font-sans line-through">₹1,199</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-gold-800/50" />
              <div>
                <div className="text-cream-300 text-xs sm:text-sm font-sans">Includes</div>
                <div className="text-gold-400 text-xs sm:text-sm font-sans font-medium">5 Premium Spices + Wooden Box</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <button className="group relative w-full xs:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gold-gradient text-dark-900 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full overflow-hidden hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-center">
                <span className="relative z-10">Order Royal Box</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>
              <button className="w-full xs:w-auto px-7 sm:px-8 py-3.5 sm:py-4 glass border border-gold-500/40 text-cream-200 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase rounded-full hover:border-gold-400 hover:text-gold-400 transition-all duration-300 text-center">
                Learn More
              </button>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-cream-400 text-xs sm:text-sm font-sans">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0" />
              <span>Only 47 boxes remaining — Order before they&apos;re gone!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
