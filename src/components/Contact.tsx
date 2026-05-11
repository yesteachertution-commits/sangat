"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const PHONE = "919414484182";
const PHONE_DISPLAY = "+91 94144 84182";
const WHATSAPP_MSG = encodeURIComponent("Hi! I'm interested in Sangat Natural spices. Can you help me?");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-gold mb-4 sm:mb-6">
            <Mail size={13} className="text-gold-400" />
            <span className="text-gold-400 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase">Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-cream-100 mb-3 sm:mb-4">
            Let&apos;s{" "}
            <span className="text-gold-gradient italic font-semibold">Connect</span>
          </h2>
          <p className="text-cream-400 font-sans font-light text-sm sm:text-base max-w-xl mx-auto px-2">
            Have questions about our spices, bulk orders, or partnerships? We&apos;d love to hear from you.
          </p>

          {/* Quick CTA */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href={`tel:+${PHONE}`}
              className="group flex items-center justify-center gap-2 w-full xs:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gold-gradient text-dark-900 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase hover:shadow-gold-lg transition-all duration-300 hover:scale-105 overflow-hidden relative"
            >
              <Phone size={15} />
              <span>Call Us Now</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </a>
            <a
              href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full xs:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-sans font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 overflow-hidden relative"
              style={{ background: "linear-gradient(135deg,#25d366,#128c7e)", color: "#fff", boxShadow: "0 4px 24px rgba(37,211,102,0.25)" }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact info */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-cream-100 mb-6 sm:mb-8">Reach Us Directly</h3>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <a href={`tel:+${PHONE}`} className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "#10b98115", border: "1px solid #10b98130", color: "#10b981" }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-0.5 sm:mb-1">Phone</div>
                  <div className="text-cream-100 font-sans font-medium text-sm sm:text-base group-hover:text-gold-400 transition-colors duration-300">{PHONE_DISPLAY}</div>
                  <div className="text-cream-500 text-[10px] sm:text-xs font-sans">Mon–Sat, 9am–6pm IST</div>
                </div>
              </a>

              <a href="mailto:hello@sangatnatural.com" className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "#f59e0b15", border: "1px solid #f59e0b30", color: "#f59e0b" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-0.5 sm:mb-1">Email</div>
                  <div className="text-cream-100 font-sans font-medium text-sm sm:text-base group-hover:text-gold-400 transition-colors duration-300 break-all">hello@sangatnatural.com</div>
                  <div className="text-cream-500 text-[10px] sm:text-xs font-sans">We reply within 24 hours</div>
                </div>
              </a>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#ef444415", border: "1px solid #ef444430", color: "#ef4444" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-0.5 sm:mb-1">Address</div>
                  <div className="text-cream-100 font-sans font-medium text-sm sm:text-base">Spice Market, Jodhpur</div>
                  <div className="text-cream-500 text-[10px] sm:text-xs font-sans">Rajasthan, India — 342001</div>
                </div>
              </div>
            </div>

            {/* Call & WhatsApp cards */}
            <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
              <a href={`tel:+${PHONE}`} className="group flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl glass border-gold hover:border-gold-400 transition-all duration-300 hover:shadow-gold text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Phone size={16} className="text-gold-400" />
                </div>
                <span className="text-cream-200 text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase">Call Now</span>
                <span className="text-gold-400 text-[9px] sm:text-xs font-sans">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl text-center transition-all duration-300"
                style={{ background: "rgba(37,211,102,0.05)", border: "1px solid rgba(37,211,102,0.2)" }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}>
                  <MessageCircle size={16} style={{ color: "#25d366" }} />
                </div>
                <span className="text-cream-200 text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase">WhatsApp</span>
                <span className="text-[9px] sm:text-xs font-sans" style={{ color: "#25d366" }}>Chat Instantly</span>
              </a>
            </div>

            {/* Social */}
            <div className="mb-6 sm:mb-8">
              <div className="text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-3 sm:mb-4">Follow Us</div>
              <div className="flex gap-2 sm:gap-3">
                {[{ icon: <Instagram size={17} />, label: "Instagram" }, { icon: <Facebook size={17} />, label: "Facebook" }, { icon: <Twitter size={17} />, label: "Twitter" }].map((s, i) => (
                  <button key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass border-gold flex items-center justify-center text-cream-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300" aria-label={s.label}>
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gold-950/30 to-spice-950/30 border border-gold-800/30">
              <h4 className="font-display text-base sm:text-lg font-semibold text-cream-100 mb-1.5 sm:mb-2">Join Our Spice Club</h4>
              <p className="text-cream-400 text-xs sm:text-sm font-sans font-light mb-3 sm:mb-4">Get exclusive recipes, early access to new spices, and member-only discounts.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 min-w-0 px-3 sm:px-4 py-2 rounded-full bg-dark-800 border border-gold-800/50 text-cream-200 text-xs sm:text-sm font-sans placeholder-cream-600 focus:outline-none focus:border-gold-500 transition-colors" />
                <button className="flex-shrink-0 px-3 sm:px-4 py-2 bg-gold-gradient text-dark-900 rounded-full text-[10px] sm:text-xs font-sans font-bold tracking-wider uppercase hover:shadow-gold transition-all duration-300">Join</button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-1.5 sm:mb-2">Your Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Priya Sharma" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-800 border border-gold-800/30 text-cream-200 text-sm font-sans placeholder-cream-600 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-1.5 sm:mb-2">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="priya@example.com" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-800 border border-gold-800/30 text-cream-200 text-sm font-sans placeholder-cream-600 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-1.5 sm:mb-2">Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-800 border border-gold-800/30 text-cream-200 text-sm font-sans focus:outline-none focus:border-gold-500 transition-colors">
                  <option value="" className="bg-dark-800">Select a subject</option>
                  <option value="order" className="bg-dark-800">Place an Order</option>
                  <option value="bulk" className="bg-dark-800">Bulk / Wholesale</option>
                  <option value="partnership" className="bg-dark-800">Partnership</option>
                  <option value="support" className="bg-dark-800">Customer Support</option>
                  <option value="other" className="bg-dark-800">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-cream-400 text-[10px] sm:text-xs font-sans tracking-wider uppercase mb-1.5 sm:mb-2">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help you..." required rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-800 border border-gold-800/30 text-cream-200 text-sm font-sans placeholder-cream-600 focus:outline-none focus:border-gold-500 transition-colors resize-none" />
              </div>

              <button type="submit" className="group w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-gradient text-dark-900 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl overflow-hidden hover:shadow-gold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                {submitted ? (<><span>✓</span><span>Message Sent!</span></>) : (<><Send size={15} /><span>Send Message</span></>)}
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gold-900/40" />
                <span className="text-cream-500 text-[10px] sm:text-xs font-sans tracking-wider whitespace-nowrap">or reach us directly</span>
                <div className="flex-1 h-px bg-gold-900/40" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:+${PHONE}`} className="flex items-center justify-center gap-2 py-3 rounded-xl glass border-gold hover:border-gold-400 hover:shadow-gold text-cream-200 hover:text-gold-400 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 active:scale-95">
                  <Phone size={14} /><span>Call</span>
                </a>
                <a href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 active:scale-95" style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.25)", color: "#25d366" }}>
                  <MessageCircle size={14} /><span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-full font-sans font-bold text-xs sm:text-sm text-white shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: "linear-gradient(135deg,#25d366,#128c7e)", boxShadow: "0 4px 30px rgba(37,211,102,0.4)" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline tracking-wide">WhatsApp Us</span>
        <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#25d366" }} />
      </a>
    </section>
  );
}
