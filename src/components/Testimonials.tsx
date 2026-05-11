"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { id: 1, name: "Priya Sharma", role: "Home Chef, Mumbai", avatar: "PS", rating: 5, text: "Sangat Natural's saffron is absolutely divine. The color, aroma, and flavor are unlike anything I've used before. My biryani has never tasted better!", spice: "Kashmiri Saffron", color: "#f59e0b" },
  { id: 2, name: "Rajesh Mehta", role: "Restaurant Owner, Delhi", avatar: "RM", rating: 5, text: "As a professional chef, quality matters above everything. Sangat Natural consistently delivers spices that elevate every dish. My customers notice the difference.", spice: "Garam Masala Royal", color: "#ef4444" },
  { id: 3, name: "Ananya Krishnan", role: "Food Blogger, Bangalore", avatar: "AK", rating: 5, text: "I've tried countless spice brands for my food blog, but Sangat Natural stands apart. The packaging is gorgeous and the quality is exceptional. Highly recommend!", spice: "Green Cardamom", color: "#10b981" },
  { id: 4, name: "Vikram Singh", role: "Culinary Instructor, Jaipur", avatar: "VS", rating: 5, text: "I recommend Sangat Natural to all my students. The purity and potency of their spices make a real difference in cooking. This is what authentic Indian spices should taste like.", spice: "Turmeric Gold", color: "#f59e0b" },
  { id: 5, name: "Meera Patel", role: "Ayurvedic Practitioner, Pune", avatar: "MP", rating: 5, text: "The medicinal quality of Sangat Natural's turmeric is outstanding. High curcumin content, no additives — exactly what I prescribe to my patients.", spice: "Turmeric Gold", color: "#f59e0b" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
      <div className="absolute top-10 left-4 sm:top-20 sm:left-10 text-gold-900/20 select-none hidden sm:block">
        <Quote size={80} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-gold mb-4 sm:mb-6">
            <Star size={13} className="text-gold-400 fill-gold-400" />
            <span className="text-gold-400 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase">Customer Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-cream-100 mb-3 sm:mb-4">
            What They{" "}
            <span className="text-gold-gradient italic font-semibold">Say</span>
          </h2>
          <p className="text-cream-400 font-sans font-light text-sm sm:text-base max-w-xl mx-auto px-2">
            Thousands of home cooks, chefs, and food lovers trust Sangat Natural for their most important meals.
          </p>
        </div>

        {/* Mobile: single card */}
        <div className="block md:hidden mb-8">
          <div className="relative p-6 rounded-2xl glass border border-gold-500/40 shadow-gold">
            <div className="absolute top-4 right-4 text-gold-800/40"><Quote size={28} /></div>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={13} className="text-gold-400 fill-gold-400" />
              ))}
            </div>
            <p className="text-cream-300 font-sans font-light text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-sans mb-4" style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}>
              ✦ {t.spice}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-sans font-bold flex-shrink-0" style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}>
                {t.avatar}
              </div>
              <div>
                <div className="text-cream-100 text-sm font-sans font-semibold">{t.name}</div>
                <div className="text-cream-500 text-xs font-sans">{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 mb-8 sm:mb-10">
          {[
            testimonials[(current - 1 + testimonials.length) % testimonials.length],
            testimonials[current],
            testimonials[(current + 1) % testimonials.length],
          ].map((item, i) => (
            <div
              key={item.id}
              className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-500 ${
                i === 1
                  ? "glass border border-gold-500/40 scale-105 shadow-gold"
                  : "glass border-gold opacity-60 scale-95"
              }`}
            >
              <div className="absolute top-4 right-4 text-gold-800/40"><Quote size={28} /></div>
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-cream-300 font-sans font-light text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">&ldquo;{item.text}&rdquo;</p>
              <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-sans mb-4 sm:mb-6" style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                ✦ {item.spice}
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-sans font-bold flex-shrink-0" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>
                  {item.avatar}
                </div>
                <div>
                  <div className="text-cream-100 text-xs sm:text-sm font-sans font-semibold">{item.name}</div>
                  <div className="text-cream-500 text-[10px] sm:text-xs font-sans">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-10 sm:mb-16 lg:mb-20">
          <button onClick={prev} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border-gold flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-400 transition-all duration-300 active:scale-95">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-6 sm:w-8 h-2 bg-gold-400" : "w-2 h-2 bg-gold-800 hover:bg-gold-600"}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border-gold flex items-center justify-center text-cream-300 hover:text-gold-400 hover:border-gold-400 transition-all duration-300 active:scale-95">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "200+", label: "Spice Varieties" },
            { value: "100%", label: "Natural & Pure" },
          ].map((badge, i) => (
            <div key={i} className="text-center p-4 sm:p-6 rounded-2xl glass border-gold">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">{badge.value}</div>
              <div className="text-cream-400 text-[9px] sm:text-xs font-sans tracking-wider uppercase">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
