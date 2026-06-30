"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

interface OutfitItem {
  label: string;
  name: string;
  brand: string;
  price: string;
  top: string;
  left: string;
}

const outfitItems: OutfitItem[] = [
  { label: "Top", name: "Beige linen oversized shirt", brand: "H&M", price: "₹1,299", top: "25%", left: "55%" },
  { label: "Bottom", name: "White straight trousers", brand: "Zara", price: "₹2,490", top: "58%", left: "50%" },
  { label: "Shoes", name: "Adidas Stan Smith", brand: "Adidas", price: "₹8,999", top: "85%", left: "45%" },
  { label: "Bag", name: "Mini canvas tote", brand: "Uniqlo", price: "₹1,799", top: "48%", left: "28%" },
];

export function OutfitOfWeek() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-soft-pink overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-3">
              OOTD
            </p>
            <h2 className="font-display text-display-md text-charcoal mb-6 leading-tight">
              Outfit of{" "}
              <br />
              <em className="text-accent-rose font-light">the week</em>
            </h2>
            <p className="text-warm-gray text-sm leading-relaxed max-w-xs mb-8">
              Office casual on a Tuesday. Linen shirt, comfy trousers, and my 
              go-to Stan Smiths. Total cost: ₹14,587. Feeling: very &quot;I have 
              my life together&quot; core.
            </p>

            {/* Outfit breakdown */}
            <div className="space-y-3 mb-8">
              {outfitItems.map((item, i) => {
                const isHovered = hoveredIndex === i;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`flex items-center justify-between py-3 px-4 border-b border-blush rounded-xl transition-all duration-300 ${
                      isHovered ? "bg-cream/40 pl-6 shadow-sm border-transparent" : "border-blush"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-muted-gray w-14 flex-shrink-0">
                        {item.label}
                      </span>
                      <div>
                        <p className={`text-sm font-medium transition-colors duration-200 ${isHovered ? "text-accent-rose" : "text-charcoal"}`}>
                          {item.name}
                        </p>
                        <p className="text-[11px] text-muted-gray">{item.brand}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-display text-charcoal">{item.price}</span>
                      <ShoppingBag size={13} className={`transition-colors duration-200 ${isHovered ? "text-accent-rose" : "text-muted-gray hover:text-charcoal"}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link href="/outfits" className="btn-text group">
              <span>All outfits</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[2/3] max-w-xs mx-auto lg:ml-auto group/img">
              <div className="img-zoom absolute inset-0 rounded-3xl overflow-hidden shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                  alt="Outfit of the week"
                  fill
                  className="object-cover object-top transition-transform duration-700"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>

              {/* Hotspots */}
              {outfitItems.map((item, i) => {
                const isHovered = hoveredIndex === i;
                return (
                  <div
                    key={i}
                    style={{ top: item.top, left: item.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute inline-flex rounded-full bg-accent-rose/45 transition-all duration-300 ${
                        isHovered ? "h-8 w-8 animate-ping" : "h-5 w-5 opacity-0 group-hover/img:opacity-100"
                      }`} />
                      <span className={`relative rounded-full bg-accent-rose border border-cream shadow-soft transition-all duration-300 ${
                        isHovered ? "h-3.5 w-3.5 scale-110" : "h-2.5 w-2.5 opacity-0 group-hover/img:opacity-100"
                      }`} />

                      {/* Tooltip */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute bottom-6 left-1/2 bg-charcoal text-cream text-[10px] py-2 px-3.5 rounded-xl shadow-large z-30 flex flex-col items-center border border-cream/10"
                          >
                            <span className="font-semibold whitespace-nowrap">{item.name}</span>
                            <span className="opacity-80 mt-0.5 whitespace-nowrap">{item.price} ({item.brand})</span>
                            {/* Little triangle arrow pointer */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-[5px] border-t-charcoal" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}

              {/* Tag floating total price */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/3 glass rounded-2xl px-5 py-4 shadow-medium hidden md:block"
              >
                <p className="text-[10px] text-muted-gray mb-0.5">Total look</p>
                <p className="font-display text-lg font-medium text-charcoal">₹14,587</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
