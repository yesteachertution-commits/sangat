"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Spices", href: "#spices" },
  { label: "Heritage", href: "#heritage" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark shadow-luxury py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group flex-shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />
              <div className="relative w-full h-full rounded-full border border-gold-500/50 flex items-center justify-center">
                <span className="text-gold-400 font-display font-bold text-base sm:text-lg">S</span>
              </div>
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-semibold text-gold-gradient tracking-wider">
                SANGAT
              </span>
              <span className="block text-cream-300 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-sans font-light -mt-1">
                Natural
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative text-xs xl:text-sm font-sans font-medium tracking-wider uppercase transition-colors duration-300 group ${
                    activeLink === link.label
                      ? "text-gold-400"
                      : "text-cream-300 hover:text-gold-400"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold-gradient transition-all duration-300 ${
                      activeLink === link.label ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919414484182"
              className="flex items-center gap-2 text-cream-300 hover:text-gold-400 transition-colors duration-300 text-xs font-sans"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">94144 84182</span>
            </a>
            <button className="relative text-cream-300 hover:text-gold-400 transition-colors duration-300 p-2">
              <ShoppingBag size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold-500 rounded-full" />
            </button>
            <a
              href="#contact"
              className="ml-1 px-4 xl:px-5 py-2 text-xs font-sans font-semibold tracking-widest uppercase bg-gold-gradient text-dark-900 rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Order Now
            </a>
          </div>

          {/* Mobile right: call icon + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+919414484182"
              className="w-9 h-9 rounded-full glass border-gold flex items-center justify-center text-gold-400"
              aria-label="Call us"
            >
              <Phone size={16} />
            </a>
            <button
              className="w-9 h-9 rounded-full glass border-gold flex items-center justify-center text-cream-200 hover:text-gold-400 transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-72 glass-dark flex flex-col pt-20 pb-8 px-6 transition-transform duration-400 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button inside drawer */}
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass border-gold flex items-center justify-center text-cream-300 hover:text-gold-400"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>

          {/* Brand in drawer */}
          <div className="mb-8 pb-6 border-b border-gold-900/30">
            <span className="font-display text-2xl font-semibold text-gold-gradient tracking-wider">SANGAT</span>
            <span className="block text-cream-400 text-[10px] tracking-[0.3em] uppercase font-sans font-light">Natural</span>
          </div>

          <ul className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-base font-display font-medium tracking-wide transition-all duration-300 ${
                    activeLink === link.label
                      ? "text-gold-400 bg-gold-900/20"
                      : "text-cream-200 hover:text-gold-400 hover:bg-gold-900/10"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 flex-shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA buttons */}
          <div className="mt-6 space-y-3">
            <a
              href="tel:+919414484182"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full glass border-gold text-gold-400 font-sans font-semibold text-sm tracking-wider"
            >
              <Phone size={16} />
              <span>94144 84182</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center w-full py-3 text-sm font-sans font-semibold tracking-widest uppercase bg-gold-gradient text-dark-900 rounded-full hover:shadow-gold transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
