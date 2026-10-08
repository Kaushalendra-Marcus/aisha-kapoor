// ─────────────────────────────────────────────────────────────
// Central affiliate system — Amazon India ready.
// HOW TO GO LIVE (2 min per product):
// 1. Join Amazon Associates India → get your Tracking ID (looks like: aisha-21)
// 2. Put it in AMAZON_TAG below.
// 3. Replace each product's `affiliateUrl` with your real SiteStripe link.
// Until then, buttons fall back to Amazon.in search so nothing is dead.
// ─────────────────────────────────────────────────────────────

export const AMAZON_TAG = "newshaqseller-21"; // ← user's own Associates tracking ID (extracted from their SiteStripe link)

export const INSTAGRAM_URL = "https://www.instagram.com/aishadiaries.23/";
export const INSTAGRAM_HANDLE = "@aishadiaries.23";

export function withAmazonTag(url: string): string {
  if (!url || url === "#") return amazonSearchUrl("");
  if (!url.includes("amazon.in")) return url;
  if (AMAZON_TAG.startsWith("YOUR")) return url; // no tag yet → return as-is
  if (url.includes("tag=")) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}tag=${AMAZON_TAG}`;
}

export function amazonSearchUrl(query: string): string {
  const base = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
  if (AMAZON_TAG.startsWith("YOUR")) return base;
  return `${base}&tag=${AMAZON_TAG}`;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  desc: string;
  price: string;
  rating: number;
  image: string;
  tag: string;
  // Paste your real Amazon SiteStripe link here. Fallback = Amazon search.
  affiliateUrl: string;
  searchKeyword: string;
}

export function productUrl(p: Pick<Product, "affiliateUrl" | "searchKeyword">): string {
  if (p.affiliateUrl && p.affiliateUrl !== "#") return withAmazonTag(p.affiliateUrl);
  return amazonSearchUrl(p.searchKeyword || "");
}

// ── SHOP PRODUCTS — replace affiliateUrl with your real links ──
export const PRODUCTS: Product[] = [
  {
    id: "noise-wireless-headphones",
    name: "Noise Wireless Bluetooth Headphones",
    category: "Gym",
    desc: "My pick for music on the go — long playtime, low latency, great for gym and travel.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
    tag: "My product pick",
    // Direct dp link so YOUR tag (newshaqseller-21) is applied via withAmazonTag.
    // (The short link you shared carried a different tag, so not using it as-is.)
    affiliateUrl: "https://www.amazon.in/dp/B0B1PXM75C",
    searchKeyword: "Noise wireless bluetooth headphones",
  },
  {
    id: "apple-watch-black-sport",
    name: "Apple Watch (Black Aluminium, Sport Band)",
    category: "Gym",
    desc: "My everyday smartwatch — tracks workouts, sleep and steps. Full Apple experience on the wrist.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    tag: "My product pick",
    // Direct dp link so YOUR tag (newshaqseller-21) is applied via withAmazonTag.
    affiliateUrl: "https://www.amazon.in/dp/B0FQFM65B7",
    searchKeyword: "Apple Watch black aluminium sport band",
  },
  {
    id: "nike-defy-black-white",
    name: "Nike Defy All Day Training Shoes (Black/White)",
    category: "Gym",
    desc: "My gym training shoes — comfy for workouts and all-day wear. Black/white goes with everything.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    tag: "My product pick",
    // Direct dp link so YOUR tag (newshaqseller-21) is applied via withAmazonTag.
    affiliateUrl: "https://www.amazon.in/dp/B0DYKNX4PX",
    searchKeyword: "Nike Defy training shoes black white",
  },
  {
    id: "cetaphil-bright-cleanser",
    name: "Cetaphil Bright Healthy Reveal Cleanser",
    category: "Skincare",
    desc: "My gentle everyday face cleanser — brightens without drying. Dermat-trusted pick.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B08L91MJJH",
    searchKeyword: "Cetaphil Bright Healthy Reveal Cleanser",
  },
  {
    id: "mamaearth-niacinamide-moisturizer",
    name: "Mamaearth Niacinamide Hydration Moisturizer",
    category: "Skincare",
    desc: "Lightweight daily moisturizer with niacinamide — hydration plus brightening in one step.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0HHNT898T",
    searchKeyword: "Mamaearth niacinamide moisturizer hydration brightening",
  },
  {
    id: "brightening-facewash-serum-combo",
    name: "Brightening Face Wash + Serum Combo",
    category: "Skincare",
    desc: "Face wash plus brightening serum combo — my simple 2-step glow routine.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0DXVVR6J2",
    searchKeyword: "brightening face wash serum combo",
  },
  {
    id: "pintola-crunchy-peanut-butter",
    name: "Pintola Natural Crunchy Peanut Butter (Chocolate, Unsweetened)",
    category: "Kitchen",
    desc: "My gym-fuel breakfast — natural crunchy peanut butter, no refined sugar. Chocolate flavour!",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0H112R2FC",
    searchKeyword: "Pintola natural crunchy peanut butter chocolate unsweetened",
  },
  {
    id: "myfitness-protein-peanut-butter",
    name: "MYFITNESS Chocolate Crunchy Protein Peanut Butter",
    category: "Kitchen",
    desc: "High-protein crunchy peanut butter — my post-workout spoonful. Chocolate crunch ftw.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0CL452KTS",
    searchKeyword: "MYFITNESS chocolate crunchy protein peanut butter",
  },
  {
    id: "sony-xm5",
    name: "Sony WH-1000XM5",
    category: "Desk setup",
    desc: "I bought this 8 months ago and I use it 6 hours every day. Worth every rupee.",
    price: "₹26,990",
    rating: 5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    tag: "Daily use",
    affiliateUrl: "https://www.amazon.in/s?k=Sony+WH-1000XM5",
    searchKeyword: "Sony WH-1000XM5 headphones",
  },
  {
    id: "dot-key-moisturizer",
    name: "Dot & Key Barrier Repair Moisturizer",
    category: "Skincare",
    desc: "Indian skincare that actually works. Gentle, non-sticky, affordable.",
    price: "₹499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    tag: "Repurchase",
    affiliateUrl: "https://www.amazon.in/s?k=Dot+and+Key+Barrier+Repair+Moisturizer",
    searchKeyword: "Dot and Key Barrier Repair Moisturizer",
  },
  {
    id: "ikea-bekant",
    name: "Ikea Bekant Desk",
    category: "Desk setup",
    desc: "Clean, minimal, huge. My WFH setup would not exist without this.",
    price: "₹14,990",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    tag: "Room setup",
    affiliateUrl: "https://www.amazon.in/s?k=Ikea+Bekant+desk",
    searchKeyword: "Ikea Bekant desk",
  },
  {
    id: "mamaearth-ubtan",
    name: "Mamaearth Ubtan Face Wash (Turmeric + Saffron)",
    category: "Skincare",
    desc: "Morning routine staple. Turmeric and saffron for that natural glow — my real pick.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B09D36HNX8",
    searchKeyword: "Mamaearth Ubtan Face Wash",
  },
  {
    id: "jbl-520bt",
    name: "JBL Tune 520BT headphones",
    category: "Gym",
    desc: "On every single gym session. Battery lasts the whole week.",
    price: "₹2,499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    tag: "Gym essential",
    affiliateUrl: "https://www.amazon.in/s?k=JBL+Tune+520BT",
    searchKeyword: "JBL Tune 520BT",
  },
  {
    id: "milton-bottle",
    name: "Milton steel water bottle 1L",
    category: "Gym",
    desc: "Keeps water cold for hours. Survived being dropped a hundred times.",
    price: "₹699",
    rating: 5,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    tag: "Daily use",
    affiliateUrl: "https://www.amazon.in/s?k=Milton+steel+water+bottle+1+litre",
    searchKeyword: "Milton steel water bottle 1 litre",
  },
  {
    id: "borosil-mealprep",
    name: "Borosil glass meal prep containers",
    category: "Kitchen",
    desc: "Microwave safe, doesn't stain, makes meal prep so much easier.",
    price: "₹1,199",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    tag: "Kitchen",
    affiliateUrl: "https://www.amazon.in/s?k=Borosil+glass+meal+prep+containers",
    searchKeyword: "Borosil glass meal prep containers",
  },
  {
    id: "fabindia-bedsheet",
    name: "Fabindia cotton bedsheet set",
    category: "Room",
    desc: "Soft, breathable, and somehow still looks new after a year.",
    price: "₹2,890",
    rating: 4,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    tag: "Room setup",
    affiliateUrl: "https://www.amazon.in/s?k=Fabindia+cotton+bedsheet+king+size",
    searchKeyword: "Fabindia cotton bedsheet",
  },
];

export const PRODUCT_CATEGORIES = ["All", "Desk setup", "Skincare", "Gym", "Kitchen", "Room"];

// ── OUTFITS — each item gets its own affiliate link ──
export interface OutfitItem {
  label: string;
  name: string;
  brand: string;
  price: string;
  affiliateUrl: string;
  searchKeyword: string;
}

export interface Outfit {
  id: string;
  title: string;
  image: string;
  total: string;
  reelUrl?: string;
  items: OutfitItem[];
}

export const OUTFITS: Outfit[] = [
  {
    id: "office-casual-tuesday",
    title: "Office casual Tuesday",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    total: "₹14,587",
    reelUrl: "https://www.instagram.com/reel/DaD1WAcTROK/",
    items: [
      { label: "Top", name: "Beige linen oversized shirt", brand: "H&M", price: "₹1,299", affiliateUrl: "https://www.amazon.in/s?k=beige+linen+oversized+shirt+women", searchKeyword: "beige linen oversized shirt women" },
      { label: "Bottom", name: "White straight trousers", brand: "Zara", price: "₹2,490", affiliateUrl: "https://www.amazon.in/s?k=white+straight+trousers+women", searchKeyword: "white straight trousers women" },
      { label: "Shoes", name: "Adidas Stan Smith", brand: "Adidas", price: "₹8,999", affiliateUrl: "https://www.amazon.in/s?k=Adidas+Stan+Smith+women", searchKeyword: "Adidas Stan Smith women" },
      { label: "Bag", name: "Mini canvas tote", brand: "Uniqlo", price: "₹1,799", affiliateUrl: "https://www.amazon.in/s?k=mini+canvas+tote+bag+women", searchKeyword: "mini canvas tote bag women" },
    ],
  },
  {
    id: "weekend-brunch",
    title: "Weekend brunch look",
    image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&q=80",
    total: "₹6,940",
    items: [
      { label: "Top", name: "Ribbed knit tank", brand: "Mango", price: "₹1,290", affiliateUrl: "https://www.amazon.in/s?k=ribbed+knit+tank+top+women", searchKeyword: "ribbed knit tank top women" },
      { label: "Bottom", name: "High-waist denim", brand: "Levi's", price: "₹3,499", affiliateUrl: "https://www.amazon.in/s?k=Levis+high+waist+jeans+women", searchKeyword: "Levis high waist jeans women" },
      { label: "Shoes", name: "White leather sneakers", brand: "Bata", price: "₹1,899", affiliateUrl: "https://www.amazon.in/s?k=white+sneakers+women", searchKeyword: "white sneakers women" },
      { label: "Accessory", name: "Gold hoop earrings", brand: "Accessorize", price: "₹252", affiliateUrl: "https://www.amazon.in/s?k=gold+hoop+earrings+women", searchKeyword: "gold hoop earrings women" },
    ],
  },
  {
    id: "gym-fit",
    title: "Gym fit",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    total: "₹5,247",
    items: [
      { label: "Top", name: "Seamless sports bra", brand: "Nike", price: "₹1,995", affiliateUrl: "https://www.amazon.in/s?k=Nike+sports+bra+women", searchKeyword: "Nike sports bra women" },
      { label: "Bottom", name: "High-waist leggings", brand: "Cultsport", price: "₹1,499", affiliateUrl: "https://www.amazon.in/s?k=cultsport+leggings+women", searchKeyword: "cultsport leggings women" },
      { label: "Shoes", name: "Training shoes", brand: "Under Armour", price: "₹1,753", affiliateUrl: "https://www.amazon.in/s?k=under+armour+training+shoes+women", searchKeyword: "under armour training shoes women" },
    ],
  },
];

// ── LINK-IN-BIO: what your Instagram bio link (/links) shows ──
export interface InstaLink {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  emoji?: string;
  external?: boolean;
}

export const LINKS_PAGE_ITEMS: InstaLink[] = [
  {
    id: "latest-reel",
    title: "Latest reel — Shop the look",
    subtitle: "Outfit of the week + exact links",
    href: "/outfits",
    emoji: "✨",
  },
  {
    id: "favorites",
    title: "My everyday favorites",
    subtitle: "Skincare, gym, desk & kitchen",
    href: "/shop",
    emoji: "🛒",
  },
  {
    id: "gym",
    title: "Gym routine + gear",
    subtitle: "What I actually use",
    href: "/gym",
    emoji: "💪",
  },
  {
    id: "recipes",
    title: "Easy recipes I make",
    subtitle: "Meal prep + kitchen tools",
    href: "/recipes",
    emoji: "🍳",
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "@aishadiaries.23 — follow for daily life",
    href: INSTAGRAM_URL,
    emoji: "📸",
    external: true,
  },
  {
    id: "collab",
    title: "Work with me",
    subtitle: "Brand collabs & inquiries",
    href: "/collabs",
    emoji: "💼",
  },
];

export const AFFILIATE_DISCLOSURE_SHORT =
  "As an Amazon Associate I earn from qualifying purchases. You pay nothing extra.";

export const AFFILIATE_DISCLOSURE_LONG =
  "Heads up: some links on this page are affiliate links (mostly Amazon.in). If you buy through them, I earn a small commission at no extra cost to you. I only recommend things I actually use and love. As an Amazon Associate I earn from qualifying purchases.";

// ── REELS → PRODUCTS mapping ("Shop this reel") ──
// HOW TO ADD YOUR LATEST REEL (30 seconds):
// 1. Open your reel in Instagram app → Share → Copy link
// 2. Add one entry below: { id, url, title, productIds }
// 3. productIds = ids from PRODUCTS above (e.g. "sony-xm5"), outfitId = id from OUTFITS
export interface Reel {
  id: string;
  url: string;
  title: string;
  caption: string;
  productIds: string[];
  outfitId?: string;
}

export const REELS: Reel[] = [
  {
    id: "featured-reel",
    url: "https://www.instagram.com/reel/DZ8gSyUzQ_5/",
    title: "Featured reel",
    caption: "My most-watched reel — the gear in it is linked below.",
    productIds: ["sony-xm5", "jbl-520bt"],
  },
  {
    id: "bike-ride",
    url: "https://www.instagram.com/reel/DaN9ZItz45P/",
    title: "Travel · Bike ride",
    caption: "What I carried on my bike trip — shop it here.",
    productIds: ["milton-bottle", "jbl-520bt"],
  },
  {
    id: "night-party",
    url: "https://www.instagram.com/reel/DaGZFNuzHBA/",
    title: "Night party look",
    caption: "The full party outfit, piece by piece.",
    outfitId: "weekend-brunch",
    productIds: [],
  },
  {
    id: "wedding-look",
    url: "https://www.instagram.com/reel/DaD1WAcTROK/",
    title: "Wedding guest look",
    caption: "What I wore to a wedding — full breakdown.",
    outfitId: "office-casual-tuesday",
    productIds: [],
  },
  // ← PASTE YOUR NEW REEL HERE, e.g.:
  // { id: "my-new-reel", url: "https://www.instagram.com/reel/XXXX/", title: "My latest reel", caption: "...", productIds: ["dot-key-moisturizer"] },
];

export function reelProducts(reel: Reel): Product[] {
  return reel.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export function reelOutfit(reel: Reel): Outfit | undefined {
  return reel.outfitId ? OUTFITS.find((o) => o.id === reel.outfitId) : undefined;
}
