import type { Metadata } from "next";
import { ShopInteractive } from "@/components/sections/ShopInteractive";
import { ShopByReel } from "@/components/sections/ShopByReel";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "My Store — Shop Everything I Use",
  description:
    "Aisha's store: every product she uses and genuinely recommends — desk setup, skincare, gym gear, kitchen tools and fashion. All buyable on Amazon.",
};

export default function ShopPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-4">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            My store 🛍️
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Everything I use, you can buy
          </h1>
          <p className="text-warm-gray text-base leading-relaxed mb-6">
            Dekho, pasand karo, kharido. Only things I actually own and use —
            every card below has a <strong className="text-charcoal">Buy Now</strong> button
            that takes you straight to Amazon. You pay nothing extra, I earn a
            small commission.
          </p>
          <AffiliateDisclosure variant="long" />
        </div>

        <div className="mt-12">
          <ShopByReel />
        </div>

        <div className="mb-4">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-2">
            All products
          </p>
          <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
            Browse the full shelf
          </h2>
        </div>

        <ShopInteractive />
      </div>
    </div>
  );
}
