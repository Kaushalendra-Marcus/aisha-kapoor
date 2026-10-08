import type { Metadata } from "next";
import Image from "next/image";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { OUTFITS, withAmazonTag } from "@/lib/affiliate";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Outfits",
  description:
    "Aisha's daily outfits, broken down piece by piece — top, bottom, shoes, bag and accessories, all linked to where you can buy them.",
};

const outfits = OUTFITS;

export default function OutfitsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-8">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Outfits
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            What I wear, broken down
          </h1>
          <p className="text-warm-gray text-base leading-relaxed mb-6">
            Every outfit, piece by piece — what it is, where it&apos;s from, and
            what it cost. All links are affiliate links; you pay nothing extra.
          </p>
          <AffiliateDisclosure variant="long" />
        </div>

        <div className="space-y-20">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="img-zoom relative aspect-[3/4] rounded-3xl overflow-hidden shadow-soft max-w-md">
                <Image
                  src={outfit.image}
                  alt={outfit.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-display-sm text-charcoal">{outfit.title}</h2>
                  <span className="font-display text-xl text-warm-gray">{outfit.total}</span>
                </div>
                <div className="space-y-1">
                  {outfit.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-4 border-b border-light-gray"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] tracking-[0.1em] uppercase text-muted-gray w-16 flex-shrink-0">
                          {item.label}
                        </span>
                        <div>
                          <p className="text-sm text-charcoal font-medium">{item.name}</p>
                          <p className="text-[11px] text-muted-gray">{item.brand}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-display text-charcoal">{item.price}</span>
                        <a
                          href={withAmazonTag(item.affiliateUrl)}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          aria-label={`Shop ${item.name} on Amazon`}
                        >
                          <ShoppingBag size={14} className="text-muted-gray hover:text-charcoal cursor-pointer transition-colors" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  {outfit.reelUrl && (
                    <a
                      href={outfit.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-warm-gray hover:text-charcoal transition-colors group"
                    >
                      <span>Watch the reel</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  <a
                    href={withAmazonTag(outfit.items[0]?.affiliateUrl || "https://www.amazon.in")}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-accent-rose transition-colors group"
                  >
                    <span>Shop the full look on Amazon</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
