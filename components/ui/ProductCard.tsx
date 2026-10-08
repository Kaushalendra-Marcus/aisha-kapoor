"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ShoppingCart, Star, BadgeCheck } from "lucide-react";
import { type Product, productUrl } from "@/lib/affiliate";

// Store-style card: big price, full-width Buy button on desktop;
// compact 2-column mini card on mobile (less scrolling, more products visible).
export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-light-gray/60 bg-off-white transition-shadow duration-300 hover:shadow-card"
    >
      <div>
        <div className="img-zoom relative aspect-square overflow-hidden bg-warm-beige">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
            <span className="tag-pill bg-cream/90 text-charcoal !text-[9px] !px-2.5 sm:!text-[11px]">{product.tag}</span>
          </div>
          <div className="absolute right-3 top-3 hidden sm:block">
            <span className="tag-pill bg-charcoal/85 text-cream">Buyable ✓</span>
          </div>
        </div>
        <div className="p-3 pb-0 sm:p-5 sm:pb-0">
          <p className="mb-0.5 sm:mb-1 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-muted-gray">
            {product.category}
          </p>
          <h3 className="mb-1 sm:mb-1.5 text-xs sm:text-sm font-medium leading-snug text-charcoal line-clamp-2">
            {product.name}
          </h3>
          <div className="mb-1.5 sm:mb-2 flex items-center gap-1">
            {Array.from({ length: product.rating }).map((_, j) => (
              <Star key={j} size={9} className="fill-accent-warm text-accent-warm sm:size-[10px]" />
            ))}
            <span className="ml-1 hidden sm:flex items-center gap-1 text-[10px] text-muted-gray">
              <BadgeCheck size={10} /> I use this
            </span>
          </div>
          <p className="mb-3 hidden sm:block line-clamp-2 text-xs leading-relaxed text-warm-gray">
            {product.desc}
          </p>
        </div>
      </div>
      <div className="p-3 pt-0 sm:p-5 sm:pt-0">
        <div className="mb-2 sm:mb-3 flex items-baseline gap-1.5 border-t border-light-gray/40 pt-2.5 sm:pt-4">
          <span className="font-display text-base sm:text-2xl font-medium text-charcoal">
            {product.price}
          </span>
          <span className="hidden sm:inline text-[11px] text-muted-gray">on Amazon</span>
        </div>
        <a
          href={productUrl(product)}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="btn-primary w-full justify-center py-2 sm:py-3 text-xs sm:text-sm"
        >
          <ShoppingCart size={13} />
          <span className="sm:hidden">Buy</span>
          <span className="hidden sm:inline">Buy Now</span>
          <ExternalLink size={10} className="hidden sm:inline" />
        </a>
        <p className="mt-2 hidden sm:block text-center text-[10px] text-muted-gray">
          Ships via Amazon · you pay nothing extra
        </p>
      </div>
    </motion.div>
  );
}
