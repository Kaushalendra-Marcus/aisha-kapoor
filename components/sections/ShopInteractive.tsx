"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, PRODUCT_CATEGORIES, productUrl } from "@/lib/affiliate";

const categories = PRODUCT_CATEGORIES;

const products = PRODUCTS;

export function ShopInteractive() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filters */}
      <div className="flex gap-2.5 flex-wrap my-10">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                isActive ? "text-cream" : "text-warm-gray hover:text-charcoal bg-warm-beige/50"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeShopCategory"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="absolute inset-0 bg-charcoal rounded-full -z-10"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                  <h3 className="font-medium text-charcoal text-sm mb-2 leading-snug">
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
                    href={productUrl(product)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] font-medium text-warm-gray hover:text-charcoal transition-colors group/link"
                  >
                    <span>Shop on Amazon</span>
                    <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
