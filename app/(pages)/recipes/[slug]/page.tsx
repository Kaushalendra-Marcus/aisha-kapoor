import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Flame, Users, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

const recipes: Record<
  string,
  {
    title: string;
    tag: string;
    time: string;
    cal: string;
    serves: string;
    image: string;
    intro: string;
    ingredients: string[];
    steps: string[];
    nutrition: { label: string; value: string }[];
    products: { name: string; price: string }[];
  }
> = {
  "oat-latte": {
    title: "Aisha's Oat Latte",
    tag: "Coffee",
    time: "5 min",
    cal: "90 kcal",
    serves: "1",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=80",
    intro: "The exact recipe I make every morning before work. No fancy machine required.",
    ingredients: [
      "1 shot espresso (or 1/2 cup strong instant coffee)",
      "150ml oat milk",
      "1/2 tsp vanilla extract (optional)",
      "1 tsp maple syrup (optional, I usually skip)",
    ],
    steps: [
      "Brew your espresso shot or strong coffee.",
      "Heat the oat milk in a small pan or with a milk frother until warm and slightly foamy.",
      "Pour the coffee into a mug, then slowly pour the steamed oat milk over it.",
      "Add vanilla or maple syrup if using. Stir gently and enjoy immediately.",
    ],
    nutrition: [
      { label: "Calories", value: "90 kcal" },
      { label: "Protein", value: "3g" },
      { label: "Carbs", value: "11g" },
      { label: "Fat", value: "3g" },
    ],
    products: [
      { name: "Oatly Barista Edition oat milk", price: "₹399" },
      { name: "Mini milk frother", price: "₹599" },
      { name: "Ceramic latte mug", price: "₹449" },
    ],
  },
  jhalmuri: {
    title: "Street-style Jhalmuri",
    tag: "Snacks",
    time: "10 min",
    cal: "240 kcal",
    serves: "2",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80",
    intro: "My dadi's recipe but make it Bangalore apartment edition — no street cart required.",
    ingredients: [
      "2 cups puffed rice (muri)",
      "1 small onion, finely chopped",
      "1 tomato, finely chopped",
      "1 green chili, chopped",
      "2 tbsp roasted peanuts",
      "1 tbsp mustard oil",
      "1 tsp chaat masala",
      "Fresh coriander, chopped",
      "Juice of 1/2 lemon",
    ],
    steps: [
      "In a large bowl, combine the puffed rice, onion, tomato, green chili, and peanuts.",
      "Drizzle the mustard oil over everything — this is the key flavor, don't skip it.",
      "Add chaat masala and lemon juice, then toss everything together thoroughly.",
      "Garnish with fresh coriander and serve immediately while the puffed rice is still crunchy.",
    ],
    nutrition: [
      { label: "Calories", value: "240 kcal" },
      { label: "Protein", value: "6g" },
      { label: "Carbs", value: "32g" },
      { label: "Fat", value: "9g" },
    ],
    products: [
      { name: "Cold-pressed mustard oil", price: "₹220" },
      { name: "MDH chaat masala", price: "₹65" },
    ],
  },
  "egg-bowl": {
    title: "High Protein Egg Bowl",
    tag: "Fitness meal",
    time: "15 min",
    cal: "380 kcal",
    serves: "1",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=80",
    intro: "Post gym, no energy, need 30g protein in 15 minutes. This is the answer.",
    ingredients: [
      "3 whole eggs",
      "1/2 cup cooked rice or quinoa",
      "1/2 avocado, sliced",
      "Handful of spinach",
      "1 tbsp olive oil",
      "Salt, pepper, chili flakes to taste",
    ],
    steps: [
      "Scramble or fry the eggs in olive oil with a pinch of salt and pepper.",
      "Wilt the spinach quickly in the same pan for 30 seconds.",
      "Assemble the bowl with rice as the base, top with eggs, spinach, and sliced avocado.",
      "Finish with chili flakes and an extra drizzle of olive oil if you're feeling it.",
    ],
    nutrition: [
      { label: "Calories", value: "380 kcal" },
      { label: "Protein", value: "30g" },
      { label: "Carbs", value: "28g" },
      { label: "Fat", value: "18g" },
    ],
    products: [
      { name: "Borosil glass meal prep containers", price: "₹1,199" },
      { name: "Non-stick frying pan", price: "₹899" },
    ],
  },
  "masala-maggi": {
    title: "5-Minute Masala Maggi",
    tag: "Comfort food",
    time: "5 min",
    cal: "350 kcal",
    serves: "1",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1200&q=80",
    intro: "Late night, deadline week, comfort food emergency. This always delivers.",
    ingredients: [
      "1 pack Maggi noodles",
      "1/2 onion, sliced",
      "1/2 tomato, chopped",
      "Handful of frozen peas",
      "1 egg (optional, but recommended)",
      "Extra chili flakes",
    ],
    steps: [
      "Sauté onion and tomato in a little oil until soft.",
      "Add water according to packet instructions and bring to a boil.",
      "Add the noodles and tastemaker, along with peas, and cook for 2 minutes.",
      "Crack an egg directly into the pan for the last minute if using, stir through, and serve hot.",
    ],
    nutrition: [
      { label: "Calories", value: "350 kcal" },
      { label: "Protein", value: "12g" },
      { label: "Carbs", value: "45g" },
      { label: "Fat", value: "12g" },
    ],
    products: [{ name: "Small steel kadhai", price: "₹449" }],
  },
  "meal-prep-bowl": {
    title: "Sunday Meal Prep Bowl",
    tag: "Meal prep",
    time: "45 min",
    cal: "420 kcal",
    serves: "4",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
    intro: "Rice, dal, sabzi, salad — sorted for the whole work week in under an hour.",
    ingredients: [
      "2 cups rice",
      "1 cup dal (any lentil of choice)",
      "2 cups mixed vegetables (beans, carrot, cauliflower)",
      "1 cucumber, sliced for salad",
      "Spices: turmeric, cumin, salt, oil",
    ],
    steps: [
      "Cook rice and dal separately using your usual method or an instant pot.",
      "Sauté the mixed vegetables with turmeric and cumin until just tender.",
      "Let everything cool slightly before portioning into 4 airtight containers.",
      "Add fresh cucumber salad just before eating, not during storage, to keep it crisp.",
    ],
    nutrition: [
      { label: "Calories", value: "420 kcal" },
      { label: "Protein", value: "16g" },
      { label: "Carbs", value: "68g" },
      { label: "Fat", value: "9g" },
    ],
    products: [
      { name: "Borosil glass meal prep containers", price: "₹1,199" },
      { name: "Instant pot 5L", price: "₹4,999" },
    ],
  },
  "breakfast-smoothie": {
    title: "Healthy Breakfast Smoothie",
    tag: "Breakfast",
    time: "5 min",
    cal: "310 kcal",
    serves: "1",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1200&q=80",
    intro: "Banana, peanut butter, oats, milk. Blend and run out the door.",
    ingredients: [
      "1 ripe banana",
      "1 tbsp peanut butter",
      "1/3 cup rolled oats",
      "1 cup milk (or oat milk)",
      "A few ice cubes",
    ],
    steps: [
      "Add all ingredients to a blender.",
      "Blend on high for 45–60 seconds until smooth and creamy.",
      "Pour into a glass or a to-go bottle and drink immediately.",
    ],
    nutrition: [
      { label: "Calories", value: "310 kcal" },
      { label: "Protein", value: "11g" },
      { label: "Carbs", value: "42g" },
      { label: "Fat", value: "10g" },
    ],
    products: [{ name: "Compact personal blender", price: "₹1,899" }],
  },
};

export function generateStaticParams() {
  return Object.keys(recipes).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const recipe = recipes[params.slug];
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.intro,
    openGraph: { images: [{ url: recipe.image }] },
  };
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes[params.slug];
  if (!recipe) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="container-site max-w-3xl">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-2 text-xs font-medium text-warm-gray hover:text-charcoal transition-colors mb-10 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>All recipes</span>
        </Link>

        <span className="tag-pill mb-4 inline-flex">{recipe.tag}</span>
        <h1 className="font-display text-display-md text-charcoal leading-tight mb-4">
          {recipe.title}
        </h1>
        <p className="text-warm-gray text-base leading-relaxed mb-8 max-w-xl">{recipe.intro}</p>

        <div className="flex items-center gap-6 mb-10">
          <span className="flex items-center gap-1.5 text-xs text-muted-gray">
            <Clock size={13} /> {recipe.time}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-gray">
            <Flame size={13} /> {recipe.cal}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-gray">
            <Users size={13} /> Serves {recipe.serves}
          </span>
        </div>

        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-soft mb-12">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Ingredients */}
          <div>
            <h2 className="font-display text-display-sm text-charcoal mb-5 font-medium">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-rose mt-1.5 flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div>
            <h2 className="font-display text-display-sm text-charcoal mb-5 font-medium">
              Nutrition (per serving)
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {recipe.nutrition.map((n) => (
                <div key={n.label} className="bg-off-white rounded-xl p-4">
                  <p className="text-[10px] tracking-[0.1em] uppercase text-muted-gray mb-1">
                    {n.label}
                  </p>
                  <p className="font-display text-lg font-medium text-charcoal">{n.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="font-display text-display-sm text-charcoal mb-6 font-medium">
            Method
          </h2>
          <ol className="space-y-5">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-5">
                <span className="font-display text-xl text-muted-gray w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-charcoal leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Products used */}
        <div>
          <h2 className="font-display text-display-sm text-charcoal mb-5 font-medium">
            Products I used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recipe.products.map((product) => (
              <a
                key={product.name}
                href="#"
                className="group flex items-center justify-between bg-off-white rounded-xl px-5 py-4 hover:shadow-card transition-shadow duration-300"
              >
                <div>
                  <p className="text-sm font-medium text-charcoal">{product.name}</p>
                  <p className="text-xs text-warm-gray mt-0.5">{product.price}</p>
                </div>
                <ExternalLink size={13} className="text-muted-gray group-hover:text-charcoal transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
