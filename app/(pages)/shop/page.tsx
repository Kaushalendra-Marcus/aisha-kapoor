import type { Metadata } from "next";
import { ShopInteractive } from "@/components/sections/ShopInteractive";

export const metadata: Metadata = {
  title: "Shop My Favorites",
  description:
    "Every product Aisha uses and genuinely recommends — desk setup, skincare, gym gear, kitchen tools and fashion, all in one place.",
};

export default function ShopPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-4">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Shop my picks
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Things I genuinely love
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            Only things I actually own and use. Every link is an affiliate 
            link — you pay nothing extra, I earn a small commission. Honest 
            recommendations only, always.
          </p>
        </div>

        <ShopInteractive />
      </div>
    </div>
  );
}
