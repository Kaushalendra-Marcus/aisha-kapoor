import type { Metadata } from "next";
import Image from "next/image";
import { ShoppingBag, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Outfits",
  description:
    "Aisha's daily outfits, broken down piece by piece — top, bottom, shoes, bag and accessories, all linked to where you can buy them.",
};

const outfits = [
  {
    title: "Office casual Tuesday",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    total: "₹14,587",
    items: [
      { label: "Top", name: "Beige linen oversized shirt", brand: "H&M", price: "₹1,299" },
      { label: "Bottom", name: "White straight trousers", brand: "Zara", price: "₹2,490" },
      { label: "Shoes", name: "Adidas Stan Smith", brand: "Adidas", price: "₹8,999" },
      { label: "Bag", name: "Mini canvas tote", brand: "Uniqlo", price: "₹1,799" },
    ],
  },
  {
    title: "Weekend brunch look",
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&q=80",
    total: "₹6,940",
    items: [
      { label: "Top", name: "Ribbed knit tank", brand: "Mango", price: "₹1,290" },
      { label: "Bottom", name: "High-waist denim", brand: "Levi's", price: "₹3,499" },
      { label: "Shoes", name: "White leather sneakers", brand: "Bata", price: "₹1,899" },
      { label: "Accessory", name: "Gold hoop earrings", brand: "Accessorize", price: "₹252" },
    ],
  },
  {
    title: "Gym fit",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    total: "₹5,247",
    items: [
      { label: "Top", name: "Seamless sports bra", brand: "Nike", price: "₹1,995" },
      { label: "Bottom", name: "High-waist leggings", brand: "Cultsport", price: "₹1,499" },
      { label: "Shoes", name: "Training shoes", brand: "Under Armour", price: "₹1,753" },
    ],
  },
];

export default function OutfitsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Outfits
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            What I wear, broken down
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            Every outfit, piece by piece — what it is, where it&apos;s from, and 
            what it cost. All links are affiliate links; you pay nothing extra.
          </p>
        </div>

        <div className="space-y-20">
          {outfits.map((outfit) => (
            <div key={outfit.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
                        <a href="#" aria-label={`Shop ${item.name}`}>
                          <ShoppingBag size={14} className="text-muted-gray hover:text-charcoal cursor-pointer transition-colors" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-warm-gray hover:text-charcoal transition-colors mt-6 group"
                >
                  <span>Shop the full look</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
