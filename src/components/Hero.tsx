"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Star, Leaf, Award } from "lucide-react";

const stats = [
  { value: "200+", label: "Spice Varieties", icon: <Leaf size={14} /> },
  { value: "15+", label: "Years Heritage", icon: <Award size={14} /> },
  { value: "50K+", label: "Happy Customers", icon: <Star size={14} /> },
];

const floatingProducts = [
  { src: "/red chilli.png", alt: "Red Chilli", top: "18%", left: "3%", size: 80, delay: "0s", rotate: "-12deg" },
  { src: "/haldi.png", alt: "Haldi", top: "12%", right: "3%", size: 75, delay: "1.2s", rotate: "10deg" },
  { src: "/dhaniya powder.png", alt: "Dhaniya", top: "62%", left: "2%", size: 70, delay: "2s", rotate: "-8deg" },
  { src: "/zeera powder.png", alt: "Zeera", top: "65%", right: "3%", size: 70, delay: "0.6s", rotate: "14deg" },
  { src: "/garam.png", alt: "Garam Masala", top: "40%", left: "1%", size: 65, delay: "1.8s", rotate: "6deg" },
];

const productStrip = [
  { src: "/red chilli.png", label: "Red Chilli" },
  { src: "/haldi.png", label: "Haldi" },
  { src: "/dhaniya powder.png", label: "Dhaniya" },
  { src: "/zeera powder.png", label: "Zeera" },
  { src: "/garam.png", label: "Garam" },
];

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 3 + 1;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${Math.random()*0.4+0.1};animation-delay:${Math.random()*6}s;animation-duration:${Math.random()*4+4}s;`;
      container.appendChild(p);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-gradient-radial from-spice-900/25 via-dark-900/80 to-dark-900" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(232,184,0,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(232,184,0,0.4) 1px,transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gold-600/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-spice-700/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Floating product images — only on xl screens */}
      {floatingProducts.map((p, i) => (
        <div
          key={i}
          className="absolute hidden xl:block pointer-events-none select-none animate-float"
          style={{ top: p.top, left: p.left, right: p.right, animationDelay: p.delay, zIndex: 5 }}
        >
          <div className="relative opacity-25" style={{ transform: `rotate(${p.rotate})` }}>
            <div className="absolute inset-0 rounded-full blur-xl opacity-30" style={{ background: "radial-gradient(circle,rgba(232,184,0,0.3),transparent)" }} />
            <Image src={p.src} alt={p.alt} width={p.size} height={p.size} className="object-contain drop-shadow-2xl" />
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-gold mb-6 sm:mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-[10px] sm:text-xs font-sans font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            100% Natural & Organic
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display font-light leading-none mb-5 sm:mb-6 animate-slide-up">
          <span className="block text-cream-100 italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            The Art of
          </span>
          <span className="block text-gold-gradient font-semibold mt-1 sm:mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Pure Spices
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="text-gold-400 text-xs sm:text-sm font-sans tracking-[0.3em] sm:tracking-[0.5em] uppercase font-light">
            Sangat Natural
          </span>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        {/* Subtitle */}
        <p
          className="max-w-xl sm:max-w-2xl mx-auto text-cream-300 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed mb-8 sm:mb-12 animate-slide-up px-2"
          style={{ animationDelay: "0.4s" }}
        >
          From the ancient spice routes to your kitchen — we bring you the
          world&apos;s finest, hand-selected spices that transform every meal
          into a masterpiece.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#spices"
            className="group relative w-full xs:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gold-gradient text-dark-900 font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full overflow-hidden hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-center"
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </a>
          <a
            href="#heritage"
            className="w-full xs:w-auto px-7 sm:px-8 py-3.5 sm:py-4 glass border-gold text-cream-200 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase rounded-full hover:border-gold-400 hover:text-gold-400 transition-all duration-300 text-center"
          >
            Our Heritage
          </a>
        </div>

        {/* Product strip */}
        <div
          className="flex items-center justify-center gap-2 sm:gap-4 mb-10 sm:mb-14 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {productStrip.map((item, i) => (
            <div key={i} className="group flex flex-col items-center gap-1 sm:gap-2">
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass border-gold group-hover:border-gold-400 transition-all duration-300 overflow-hidden group-hover:shadow-gold">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-contain p-1.5 sm:p-2 group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width:640px) 44px, 64px"
                />
              </div>
              <span className="text-cream-500 text-[8px] sm:text-[10px] font-sans tracking-wider uppercase hidden sm:block group-hover:text-gold-400 transition-colors duration-300 leading-tight text-center max-w-[50px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 text-gold-400 mb-0.5 sm:mb-1">
                {stat.icon}
              </div>
              <div className="font-display text-xl sm:text-2xl font-semibold text-gold-gradient">
                {stat.value}
              </div>
              <div className="text-cream-400 text-[9px] sm:text-xs font-sans tracking-wider uppercase leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 animate-bounce">
        <span className="text-cream-400 text-[10px] sm:text-xs font-sans tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="text-gold-400" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
