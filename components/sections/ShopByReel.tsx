"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink, ShoppingBag, ArrowRight } from "lucide-react";
import { REELS, reelProducts, reelOutfit, productUrl } from "@/lib/affiliate";

// "Dekho reel, kharido look" — each reel with its buyable products.
export function ShopByReel() {
  return (
    <div className="mb-16">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-gray">
            Shop by reel 🎬
          </p>
          <h2 className="font-condensed text-poster-md leading-[0.95] text-charcoal">
            Saw it in a reel? Buy it here
          </h2>
        </div>
        <Link href="/links" className="btn-text group self-start sm:self-auto">
          <span>All reel links</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="space-y-6">
        {REELS.map((reel, i) => {
          const products = reelProducts(reel);
          const outfit = reelOutfit(reel);
          if (products.length === 0 && !outfit) return null;
          return (
            <motion.div
              key={reel.id}
              id={`reel-${reel.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="overflow-hidden rounded-3xl border border-light-gray/60 bg-off-white"
            >
              {/* Reel header */}
              <div className="flex flex-col gap-3 border-b border-light-gray/50 bg-warm-beige/40 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-cream">
                    <Play size={14} fill="currentColor" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{reel.title}</p>
                    <p className="text-xs text-warm-gray">{reel.caption}</p>
                  </div>
                </div>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost self-start px-4 py-2 text-xs sm:self-auto"
                >
                  <Play size={11} />
                  Watch reel
                  <ExternalLink size={10} />
                </a>
              </div>

              {/* Buyable items from this reel */}
              <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((p) => (
                  <a
                    key={p.id}
                    href={productUrl(p)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-light-gray/50 bg-cream p-3 transition-all hover:-translate-y-0.5 hover:shadow-medium"
                  >
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-warm-beige">
                      <Image src={p.image} alt={p.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-charcoal">{p.name}</p>
                      <p className="font-display text-sm text-charcoal">{p.price}</p>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-charcoal px-3 py-1.5 text-[10px] font-medium text-cream transition-colors group-hover:bg-accent-rose">
                      Buy
                    </span>
                  </a>
                ))}
                {outfit && (
                  <Link
                    href="/outfits"
                    className="group flex items-center gap-3 rounded-2xl border border-dashed border-accent-rose/50 bg-soft-pink/30 p-3 transition-all hover:-translate-y-0.5 hover:shadow-medium"
                  >
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-warm-beige">
                      <Image src={outfit.image} alt={outfit.title} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-charcoal">
                        {outfit.title} — full look
                      </p>
                      <p className="font-display text-sm text-charcoal">{outfit.total}</p>
                    </div>
                    <span className="flex flex-shrink-0 items-center gap-1 rounded-full bg-accent-rose px-3 py-1.5 text-[10px] font-medium text-cream">
                      <ShoppingBag size={10} /> Shop look
                    </span>
                  </Link>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
