"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

const categories = ["All", "Desk setup", "Skincare", "Gym", "Kitchen"];

const products = [
  {
    name: "Sony WH-1000XM5",
    category: "Desk setup",
    desc: "I bought this 8 months ago and I use it 6 hours every day. Worth every rupee.",
    price: "₹24,990",
    rating: 5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    tag: "Daily use",
  },
  {
    name: "Dot & Key Barrier Repair Moisturizer",
    category: "Skincare",
    desc: "Indian skincare that actually works. Gentle, non-sticky, affordable.",
    price: "₹499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80",
    tag: "Repurchase",
  },
  {
    name: "Ikea Bekant Desk",
    category: "Desk setup",
    desc: "Clean, minimal, huge. My WFH setup would not exist without this.",
    price: "₹14,990",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&q=80",
    tag: "Room setup",
  },
  {
    name: "Mamaearth Ubtan Face Wash",
    category: "Skincare",
    desc: "Morning routine staple. Smells like haldi and makes skin glow.",
    price: "₹249",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80",
    tag: "Morning use",
  },
  {
    name: "JBL Tune 520BT headphones",
    category: "Gym",
    desc: "On every single gym session. Battery lasts the whole week.",
    price: "₹2,499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80",
    tag: "Gym essential",
  },
  {
    name: "Borosil glass meal prep containers",
    category: "Kitchen",
    desc: "Microwave safe, doesn't stain, makes meal prep so much easier.",
    price: "₹1,199",
    rating: 5,
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4e?w=300&q=80",
    tag: "Kitchen",
  },
];

export function ShopFavorites() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4"
        >
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-2">
              Shop my picks
            </p>
            <h2 className="font-display text-display-md text-charcoal">
              Things I genuinely love
            </h2>
          </div>
          <Link href="/shop" className="btn-text group self-start sm:self-auto">
            <span>Browse all</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <p className="text-warm-gray text-sm mb-10 max-w-lg">
          Only things I actually use. Every link is an affiliate link — you pay 
          nothing extra, I earn a small commission. Honest recs only.
        </p>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-2.5 flex-wrap mb-8"
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive ? "text-cream animate-pulse-subtle" : "text-warm-gray hover:text-charcoal bg-warm-beige/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFavCategory"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="absolute inset-0 bg-charcoal rounded-full -z-10"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-off-white rounded-2xl overflow-hidden hover:shadow-card transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="img-zoom relative aspect-square overflow-hidden bg-warm-beige">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="tag-pill bg-cream/90 text-charcoal">{product.tag}</span>
                    </div>
                  </div>
                  <div className="p-5 pb-0">
                    <p className="text-[10px] tracking-[0.12em] uppercase text-muted-gray mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-medium text-charcoal text-sm mb-1.5 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-warm-gray leading-relaxed mb-3 line-clamp-2">
                      {product.desc}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: product.rating }).map((_, j) => (
                        <Star key={j} size={10} className="text-accent-warm fill-accent-warm" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between border-t border-light-gray/40 pt-4">
                    <span className="font-display text-base font-medium text-charcoal">
                      {product.price}
                    </span>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-[11px] font-medium text-warm-gray hover:text-charcoal transition-colors group/link"
                    >
                      <span>Shop</span>
                      <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
