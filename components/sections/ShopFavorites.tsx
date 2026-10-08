"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/affiliate";
import { ProductCard } from "@/components/ui/ProductCard";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

const categories = PRODUCT_CATEGORIES;

const products = PRODUCTS.slice(0, 8);

export function ShopFavorites() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="store" className="section-padding bg-off-white border-y border-light-gray/60">
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
              My store 🛍️
            </p>
            <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
              Buy what I actually use
            </h2>
          </div>
          <Link href="/shop" className="btn-text group self-start sm:self-auto">
            <span>Visit full store</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <div className="mb-10 max-w-lg">
          <AffiliateDisclosure />
        </div>

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
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
