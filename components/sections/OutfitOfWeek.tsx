"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

const outfitItems = [
  { label: "Top", name: "Beige linen oversized shirt", brand: "H&M", price: "₹1,299" },
  { label: "Bottom", name: "White straight trousers", brand: "Zara", price: "₹2,490" },
  { label: "Shoes", name: "Adidas Stan Smith", brand: "Adidas", price: "₹8,999" },
  { label: "Bag", name: "Mini canvas tote", brand: "Uniqlo", price: "₹1,799" },
];

export function OutfitOfWeek() {
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
              {outfitItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="flex items-center justify-between py-3 border-b border-blush"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.1em] uppercase text-muted-gray w-14 flex-shrink-0">
                      {item.label}
                    </span>
                    <div>
                      <p className="text-sm text-charcoal font-medium">{item.name}</p>
                      <p className="text-[11px] text-muted-gray">{item.brand}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-display text-charcoal">{item.price}</span>
                    <ShoppingBag size={13} className="text-muted-gray hover:text-charcoal cursor-pointer transition-colors" />
                  </div>
                </motion.div>
              ))}
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
            <div className="relative aspect-[2/3] max-w-xs mx-auto lg:ml-auto">
              <div className="img-zoom absolute inset-0 rounded-3xl overflow-hidden shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                  alt="Outfit of the week"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
              {/* Tag floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/3 glass rounded-xl px-4 py-3 shadow-medium hidden md:block"
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
