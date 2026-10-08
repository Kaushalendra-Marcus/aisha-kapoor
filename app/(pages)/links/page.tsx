import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Star, ShoppingBag, Play, ExternalLink } from "lucide-react";
import {
  LINKS_PAGE_ITEMS,
  PRODUCTS,
  REELS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  productUrl,
  reelProducts,
  reelOutfit,
  AFFILIATE_DISCLOSURE_SHORT,
} from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Shop My Instagram",
  description:
    "All links from @aishadiaries.23 Instagram — shop outfits, favorites, gym gear and recipes in one tap.",
};

const topPicks = PRODUCTS.slice(0, 4);

export default function LinksPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream">
      <div className="mx-auto w-full max-w-md px-5">
        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-7">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-accent-rose/40 mb-3">
            <Image src="/images/profile1.png" alt="Aisha Kapoor" fill className="object-cover" sizes="80px" />
          </div>
          <h1 className="font-display text-2xl text-charcoal">Aisha Kapoor</h1>
          <p className="text-xs text-muted-gray mt-1">{INSTAGRAM_HANDLE} · Bangalore</p>
          <p className="text-sm text-warm-gray mt-2 leading-relaxed">
            Shop everything I post — outfits, skincare, gym & kitchen finds.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-4 text-xs py-2 px-5"
          >
            <Instagram size={13} />
            Follow on Instagram
          </a>
        </div>

        {/* Main links */}
        <div className="space-y-3 mb-8">
          {LINKS_PAGE_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-charcoal px-5 py-4 text-cream shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{item.emoji}</span>
                  <span>
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="block text-[11px] text-cream/60">{item.subtitle}</span>
                  </span>
                </span>
                <ArrowUpRight size={16} className="text-cream/70" />
              </a>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center justify-between rounded-2xl bg-off-white border border-light-gray/60 px-5 py-4 text-charcoal shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-medium active:scale-[0.99]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{item.emoji}</span>
                  <span>
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="block text-[11px] text-warm-gray">{item.subtitle}</span>
                  </span>
                </span>
                <ArrowUpRight size={16} className="text-muted-gray" />
              </Link>
            )
          )}
        </div>

        {/* Latest reels — shop the look */}
        <div className="mb-8">
          <h2 className="font-condensed text-xl text-charcoal mb-4">Latest reels — shop the look 🎬</h2>
          <div className="space-y-3">
            {REELS.map((reel) => {
              const products = reelProducts(reel);
              const outfit = reelOutfit(reel);
              const count = products.length + (outfit ? outfit.items.length : 0);
              return (
                <div
                  key={reel.id}
                  className="rounded-2xl bg-off-white border border-light-gray/60 p-4"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-charcoal">{reel.title}</p>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-muted-gray hover:text-charcoal"
                    >
                      <Play size={10} /> Watch <ExternalLink size={9} />
                    </a>
                  </div>
                  <p className="text-[11px] text-warm-gray mb-3">{reel.caption}</p>
                  <div className="space-y-2">
                    {products.map((p) => (
                      <a
                        key={p.id}
                        href={productUrl(p)}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl bg-cream p-2.5"
                      >
                        <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-warm-beige">
                          <Image src={p.image} alt={p.name} fill className="object-cover" sizes="44px" />
                        </div>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-xs font-medium text-charcoal">{p.name}</span>
                          <span className="block text-xs font-display text-charcoal">{p.price}</span>
                        </span>
                        <span className="flex-shrink-0 rounded-full bg-charcoal px-3 py-1.5 text-[10px] font-medium text-cream">
                          Buy Now
                        </span>
                      </a>
                    ))}
                    {outfit && (
                      <Link
                        href="/outfits"
                        className="flex items-center gap-3 rounded-xl bg-soft-pink/40 border border-dashed border-accent-rose/50 p-2.5"
                      >
                        <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-warm-beige">
                          <Image src={outfit.image} alt={outfit.title} fill className="object-cover" sizes="44px" />
                        </div>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-xs font-medium text-charcoal">
                            {outfit.title} — full look ({outfit.items.length} items)
                          </span>
                          <span className="block text-xs font-display text-charcoal">{outfit.total}</span>
                        </span>
                        <span className="flex-shrink-0 rounded-full bg-accent-rose px-3 py-1.5 text-[10px] font-medium text-cream">
                          Shop look
                        </span>
                      </Link>
                    )}
                    {count === 0 && (
                      <p className="text-[11px] text-muted-gray">Links dropping soon ✨</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top picks */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-condensed text-xl text-charcoal">Most-loved right now</h2>
          <Link href="/shop" className="btn-text text-xs">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {topPicks.map((p) => (
            <a
              key={p.id}
              href={productUrl(p)}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="group rounded-2xl bg-off-white border border-light-gray/60 overflow-hidden hover:shadow-medium transition-shadow"
            >
              <div className="relative aspect-square bg-warm-beige">
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-gray">{p.category}</p>
                <p className="text-xs font-medium text-charcoal leading-snug line-clamp-2 mt-0.5">{p.name}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-display text-charcoal">{p.price}</span>
                  <span className="flex items-center gap-1 text-[11px] text-warm-gray group-hover:text-charcoal">
                    <ShoppingBag size={11} /> Shop
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: p.rating }).map((_, j) => (
                    <Star key={j} size={8} className="text-accent-warm fill-accent-warm" />
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-[11px] leading-relaxed text-muted-gray px-4">
          {AFFILIATE_DISCLOSURE_SHORT}
        </p>
      </div>
    </div>
  );
}
