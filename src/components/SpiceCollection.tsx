"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Leaf, Plus } from "lucide-react";

const categories = ["All", "Ground Spices", "Blends"];

const spices = [
  {
    id: 1,
    name: "Red Chilli Powder",
    category: "Ground Spices",
    price: "₹199",
    weight: "200g",
    rating: 5,
    reviews: 612,
    badge: "Bestseller",
    image: "/red chilli.png",
    color: "from-red-950/60 to-orange-950/60",
    accent: "#ef4444",
    description: "Fiery, vibrant red chilli powder — sun-dried and stone-ground for bold heat and rich colour.",
    tags: ["Sun-dried", "Stone Ground"],
  },
  {
    id: 2,
    name: "Haldi (Turmeric)",
    category: "Ground Spices",
    price: "₹179",
    weight: "200g",
    rating: 5,
    reviews: 834,
    badge: "Organic",
    image: "/haldi.png",
    color: "from-yellow-950/60 to-amber-950/60",
    accent: "#f59e0b",
    description: "High-curcumin turmeric, stone-ground for maximum potency and a deep golden hue.",
    tags: ["High Curcumin", "Organic"],
  },
  {
    id: 3,
    name: "Dhaniya Powder",
    category: "Ground Spices",
    price: "₹149",
    weight: "200g",
    rating: 4,
    reviews: 489,
    badge: "Fresh Ground",
    image: "/dhaniya powder.png",
    color: "from-green-950/60 to-emerald-950/60",
    accent: "#10b981",
    description: "Freshly ground coriander with a warm, citrusy aroma — essential for every Indian kitchen.",
    tags: ["Fresh Ground", "Aromatic"],
  },
  {
    id: 4,
    name: "Zeera Powder",
    category: "Ground Spices",
    price: "₹169",
    weight: "100g",
    rating: 5,
    reviews: 567,
    badge: "Premium",
    image: "/zeera powder.png",
    color: "from-amber-950/60 to-yellow-950/60",
    accent: "#d97706",
    description: "Earthy, warm cumin powder — roasted to perfection for deep, smoky flavour.",
    tags: ["Roasted", "Premium Grade"],
  },
  {
    id: 5,
    name: "Garam Masala",
    category: "Blends",
    price: "₹249",
    weight: "100g",
    rating: 5,
    reviews: 921,
    badge: "Signature",
    image: "/garam.png",
    color: "from-orange-950/60 to-red-950/60",
    accent: "#f97316",
    description: "Our signature blend of 12 premium whole spices — a family recipe perfected over generations.",
    tags: ["12 Spices", "Family Recipe"],
  },
];

export default function SpiceCollection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedId, setAddedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? spices
      : spices.filter((s) => s.category === activeCategory);

  const handleAdd = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="spices" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-gradient-radial from-spice-950/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-gold mb-4 sm:mb-6">
            <Leaf size={13} className="text-gold-400" />
            <span className="text-gold-400 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase">
              Our Collection
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-cream-100 mb-3 sm:mb-4">
            Finest{" "}
            <span className="text-gold-gradient italic font-semibold">Spices</span>
          </h2>
          <p className="text-cream-400 font-sans font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
            Each spice is carefully sourced from its origin, ensuring authentic
            flavour and unmatched quality in every jar.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold-gradient text-dark-900 shadow-gold"
                  : "glass border-gold text-cream-300 hover:text-gold-400 hover:border-gold-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col md, 5 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {filtered.map((spice) => (
            <div key={spice.id} className="spice-card group cursor-pointer">
              <div
                className={`relative rounded-2xl overflow-hidden glass border-gold bg-gradient-to-br ${spice.color} h-full flex flex-col hover:border-opacity-60 transition-all duration-400`}
                style={{ borderColor: `rgba(232,184,0,0.12)` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${spice.accent}25`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${spice.accent}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,184,0,0.12)";
                }}
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase"
                    style={{ background: `${spice.accent}20`, color: spice.accent, border: `1px solid ${spice.accent}40` }}
                  >
                    {spice.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                  <Image
                    src={spice.image}
                    alt={spice.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, (max-width:1280px) 33vw, 20vw"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-cream-100 leading-tight mb-1.5 sm:mb-2">
                    {spice.name}
                  </h3>
                  <p className="text-cream-400 text-xs font-sans leading-relaxed mb-2 sm:mb-3 line-clamp-2 flex-1">
                    {spice.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {spice.tags.map((tag) => (
                      <span key={tag} className="px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-sans text-cream-400 bg-white/5 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} className={i < spice.rating ? "text-gold-400 fill-gold-400" : "text-cream-600"} />
                    ))}
                    <span className="text-cream-400 text-[10px] sm:text-xs ml-1">({spice.reviews})</span>
                  </div>

                  {/* Price + Add */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="font-display text-lg sm:text-xl font-semibold text-gold-gradient">{spice.price}</span>
                      <span className="text-cream-500 text-[10px] sm:text-xs ml-1">/ {spice.weight}</span>
                    </div>
                    <button
                      onClick={() => handleAdd(spice.id)}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
                      style={{
                        background: addedId === spice.id ? spice.accent : `${spice.accent}20`,
                        border: `1px solid ${spice.accent}50`,
                        color: addedId === spice.id ? "#0a0805" : spice.accent,
                      }}
                      aria-label={`Add ${spice.name} to cart`}
                    >
                      {addedId === spice.id ? <span className="text-xs font-bold">✓</span> : <Plus size={15} />}
                    </button>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${spice.accent}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 glass border-gold text-gold-400 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-gold-gradient hover:text-dark-900 transition-all duration-300 hover:shadow-gold">
            View Full Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}
