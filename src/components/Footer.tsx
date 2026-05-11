"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "919414484182";
const WHATSAPP_MSG = encodeURIComponent("Hi! I'm interested in Sangat Natural spices. Can you help me?");

const footerLinks = {
  Products: ["Whole Spices", "Ground Spices", "Spice Blends", "Exotic Spices", "Gift Sets"],
  Company: ["About Us", "Our Heritage", "Sustainability", "Careers", "Press"],
  Support: ["FAQ", "Shipping Policy", "Returns", "Track Order", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-gold-900/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/50 flex items-center justify-center flex-shrink-0">
                <span className="text-gold-400 font-display font-bold text-base sm:text-lg">S</span>
              </div>
              <div>
                <span className="font-display text-lg sm:text-xl font-semibold text-gold-gradient tracking-wider">SANGAT</span>
                <span className="block text-cream-400 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-sans font-light -mt-1">Natural</span>
              </div>
            </div>

            <p className="text-cream-400 text-xs sm:text-sm font-sans font-light leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Bringing the world&apos;s finest spices to your kitchen since 2008. Pure, natural, and crafted with love.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {["🌿 Organic", "✓ ISO 22000", "🏆 Award Winning"].map((cert) => (
                <span key={cert} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-sans text-gold-400 bg-gold-900/20 border border-gold-800/30">
                  {cert}
                </span>
              ))}
            </div>

            {/* Quick contact */}
            <div className="flex gap-2">
              <a href={`tel:+${PHONE}`} className="flex items-center gap-1.5 px-3 py-2 rounded-full glass border-gold text-gold-400 text-xs font-sans hover:border-gold-400 transition-all duration-300">
                <Phone size={13} />
                <span className="hidden sm:inline">Call</span>
              </a>
              <a href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-sans transition-all duration-300" style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.25)", color: "#25d366" }}>
                <MessageCircle size={13} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-cream-200 text-[10px] sm:text-xs font-sans font-semibold tracking-widest uppercase mb-3 sm:mb-4">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-cream-500 text-xs sm:text-sm font-sans font-light hover:text-gold-400 transition-colors duration-300 leading-tight block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-5 sm:mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-cream-600 text-[10px] sm:text-xs font-sans text-center sm:text-left">
            © 2024 Sangat Natural. All rights reserved. Made with ❤️ in India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {["🔒 Secure Payments", "🚚 Free Delivery ₹999+", "↩️ Easy Returns"].map((item) => (
              <span key={item} className="text-cream-600 text-[10px] sm:text-xs font-sans whitespace-nowrap">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
