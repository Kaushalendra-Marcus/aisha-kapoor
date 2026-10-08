"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/affiliate";
import { ProductCard } from "@/components/ui/ProductCard";

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
              <span className="relative z-10">
                {cat} ({cat === "All" ? products.length : products.filter((p) => p.category === cat).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
