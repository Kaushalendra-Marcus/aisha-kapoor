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
    name: "Noise Two Wireless On-Ear Headphones (50-Hr Playtime)",
    category: "Gym",
    desc: "My pick for music on the go — 50-hour playtime, low latency, great for gym and travel.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/517lSvEVVsL._SL800_.jpg",
    tag: "My product pick",
    // Direct dp link so YOUR tag (newshaqseller-21) is applied via withAmazonTag.
    // (The short link you shared carried a different tag, so not using it as-is.)
    affiliateUrl: "https://www.amazon.in/dp/B0B1PXM75C",
    searchKeyword: "Noise wireless bluetooth headphones",
  },
  {
    id: "apple-watch-black-sport",
    name: "Apple Watch Series 11 GPS 46mm (Jet Black)",
    category: "Gym",
    desc: "My everyday smartwatch — tracks workouts, sleep and steps. Worth every rupee.",
    price: "₹36,499",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41mUfdF4HaL._SL800_.jpg",
    tag: "My product pick",
    // Direct dp link so YOUR tag (newshaqseller-21) is applied via withAmazonTag.
    affiliateUrl: "https://www.amazon.in/dp/B0FQFM65B7",
    searchKeyword: "Apple Watch black aluminium sport band",
  },
  {
    id: "nike-defy-black-white",
    name: "Nike Run Defy Running Shoes (Men's)",
    category: "Gym",
    desc: "My gym running shoes — comfy for workouts and all-day wear.",
    price: "₹2,476",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61uGzRfKZAL._SL800_.jpg",
    tag: "My product pick",
    // Direct dp link so YOUR tag (newshaqseller-21) is applied via withAmazonTag.
    affiliateUrl: "https://www.amazon.in/dp/B0DYKNX4PX",
    searchKeyword: "Nike Defy training shoes black white",
  },
  {
    id: "cetaphil-bright-cleanser",
    name: "Cetaphil Brightness Reveal Creamy Cleanser (100g)",
    category: "Skincare",
    desc: "My gentle everyday face cleanser — brightens without drying. Dermat-trusted pick.",
    price: "₹589",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/31Y9BLiraqL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B08L91MJJH",
    searchKeyword: "Cetaphil Bright Healthy Reveal Cleanser",
  },
  {
    id: "mamaearth-ubtan",
    name: "Mamaearth Ubtan Day Cream SPF 30 (Turmeric + Saffron)",
    category: "Skincare",
    desc: "Day cream with SPF 30, turmeric and saffron for brightening — my morning step.",
    price: "₹470",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/31ZXiV+aX6L._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B09D36HNX8",
    searchKeyword: "Mamaearth Ubtan day cream SPF 30",
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
    name: "Vilvah Milk Face Wash + Brightening Serum Combo",
    category: "Skincare",
    desc: "Vilvah milk powder face wash plus brightening serum — my simple 2-step glow routine.",
    price: "₹888",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/31Ldo4JHB8L._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0DXVVR6J2",
    searchKeyword: "brightening face wash serum combo",
  },
  {
    id: "pintola-crunchy-peanut-butter",
    name: "Pintola Peanut Butter Extra Crunchy 1kg + Protein Oats 1kg",
    category: "Kitchen",
    desc: "My gym-fuel breakfast combo — natural crunchy peanut butter plus high-protein oats.",
    price: "₹793",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41h5MgLMQSL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0H112R2FC",
    searchKeyword: "Pintola natural crunchy peanut butter chocolate unsweetened",
  },
  {
    id: "myfitness-protein-peanut-butter",
    name: "MYFITNESS Chocolate Peanut Butter Crunchy (510g, 23g Protein)",
    category: "Kitchen",
    desc: "High-protein crunchy peanut butter — my post-workout spoonful. 23g protein!",
    price: "₹444",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41kyRkHytKL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0CL452KTS",
    searchKeyword: "MYFITNESS chocolate crunchy protein peanut butter",
  },
  {
    id: "pexpo-echo-bottle",
    name: "Pexpo Echo Pro Insulated Water Bottle (2L)",
    category: "Kitchen",
    desc: "2-litre vacuum insulated bottle, ISI certified — keeps water hot or cold for hours.",
    price: "₹1,569",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/415CTKOB2HL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0D4LRS54G",
    searchKeyword: "Pexpo Echo Pro insulated water bottle 2L",
  },
  {
    id: "watermelon-sunscreen-moisturizer",
    name: "Watermelon Sunscreen + Barrier Repair Moisturizer",
    category: "Skincare",
    desc: "Two-in-one sunscreen and barrier moisturizer, watermelon variant — my daily morning step.",
    price: "Check on Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0HGM8FCLH",
    searchKeyword: "watermelon sunscreen barrier moisturizer",
  },
  {
    id: "luxzii-nonwired-innerwear",
    name: "LUXZII Non-Wired Padded Lace Bra Panty Set",
    category: "Fashion",
    desc: "Non-wired padded lace set with adjustable straps — comfort first, every day.",
    price: "₹599",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41H3Bhp7PzL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0GZ6P8GR5",
    searchKeyword: "LUXZII non wired innerwear",
  },
  {
    id: "secret-lives-padded-lingerie",
    name: "Secret Lives Bridal Padded Lingerie Set",
    category: "Fashion",
    desc: "Lace bridal padded set — soft, supportive, made for special days and daily wear.",
    price: "₹897",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41IWBpRuhnL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0DRD7FD4R",
    searchKeyword: "secret lives padded lingerie women",
  },
  {
    id: "secret-lives-padded-wired",
    name: "Secret Lives Padded Wired Bra & Panty Set",
    category: "Fashion",
    desc: "Padded wired set for shape plus support — my pick when the outfit needs it.",
    price: "₹940",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/31yaQXSGYsL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0FLQ6KTT5",
    searchKeyword: "secret lives padded wired bra",
  },
  {
    id: "trendmalls-siroski-black",
    name: "TRENDMALLS Black Georgette Siroski Saree + Blouse",
    category: "Fashion",
    desc: "The black saree from my night party reel — georgette with siroski stone work.",
    price: "₹4,799",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/311QBzo9tiL._SL800_.jpg",
    tag: "Worn in reel 🎬",
    affiliateUrl: "https://www.amazon.in/dp/B0FL769NM9",
    searchKeyword: "TRENDMALLS georgette siroski black suit",
  },
  {
    id: "trendmalls-embroidery-black",
    name: "TRENDMALLS Black Georgette Embroidery Saree + Blouse",
    category: "Fashion",
    desc: "Black georgette saree with resham thread embroidery — elegant for festive nights.",
    price: "₹3,999",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41wtHVp+KbL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0FL6TZ5B6",
    searchKeyword: "TRENDMALLS georgette embroidery black suit",
  },
  {
    id: "tigywigy-satin-night-suit",
    name: "TIGYWIGY Satin Top & Pyjama Set (Onion Pink)",
    category: "Fashion",
    desc: "Satin top and pyjama set — soft, comfy nights in onion pink.",
    price: "₹499",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/31FfMZ2rsmS._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B099644MGW",
    searchKeyword: "TIGYWIGY satin top pyjama set",
  },
  {
    id: "zurity-striped-shirt",
    name: "Zurity Striped Cotton Casual Shirt (Coffee Brown)",
    category: "Fashion",
    desc: "Vertical striped cotton shirt with spread collar — easy everyday casual.",
    price: "₹399",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41GRu0gHMCL._SL800_.jpg",
    tag: "My product pick",
    affiliateUrl: "https://www.amazon.in/dp/B0GF36NZNH",
    searchKeyword: "Zurity striped cotton casual shirt",
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

export const PRODUCT_CATEGORIES = ["All", "Desk setup", "Skincare", "Gym", "Kitchen", "Fashion", "Room"];

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
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
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
    productIds: ["trendmalls-siroski-black", "trendmalls-embroidery-black"],
  },
  {
    id: "wedding-look",
    url: "https://www.instagram.com/reel/DaD1WAcTROK/",
    title: "Wedding guest look",
    caption: "What I wore to a wedding — full breakdown.",
    outfitId: "office-casual-tuesday",
    productIds: [],
  },
  {
    id: "reel-denxsqnib-a",
    url: "https://www.instagram.com/reel/DeNXsQNib_A/",
    title: "Latest reel",
    caption: "Fresh from @aishadiaries.23 — tap to watch.",
    productIds: [],
  },
  {
    id: "reel-dcb-ymeqakh",
    url: "https://www.instagram.com/reel/Dcb_yMeqakh/",
    title: "Latest reel",
    caption: "Fresh from @aishadiaries.23 — tap to watch.",
    productIds: [],
  },
  {
    id: "reel-daa0oj-z1rv",
    url: "https://www.instagram.com/reel/Daa0Oj-z1rv/",
    title: "Latest reel",
    caption: "Fresh from @aishadiaries.23 — tap to watch.",
    productIds: [],
  },
  {
    id: "reel-dasroihc0kz",
    url: "https://www.instagram.com/reel/DasroiHC0KZ/",
    title: "Latest reel",
    caption: "Fresh from @aishadiaries.23 — tap to watch.",
    productIds: [],
  },
  {
    id: "reel-dayrppsz-hm",
    url: "https://www.instagram.com/reel/DaYRPPSz_Hm/",
    title: "Latest reel",
    caption: "Fresh from @aishadiaries.23 — tap to watch.",
    productIds: [],
  },
  {
    id: "reel-daqaf-rcdl7",
    url: "https://www.instagram.com/reel/DaQAF-rCdL7/",
    title: "Latest reel",
    caption: "Fresh from @aishadiaries.23 — tap to watch.",
    productIds: [],
  },
  // DaGZFNuzHBA (night party) already exists above — not duplicated.
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
