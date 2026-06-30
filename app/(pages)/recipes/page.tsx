import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Aisha's go-to recipes — coffee, jhalmuri, breakfast bowls, healthy meals and weekend snacks, each with ingredients, nutrition and the products she uses.",
};

const recipes = [
  {
    title: "Aisha's Oat Latte",
    desc: "The exact recipe I make every morning before work.",
    tag: "Coffee",
    time: "5 min",
    cal: "90 kcal",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    slug: "oat-latte",
  },
  {
    title: "Street-style Jhalmuri",
    desc: "My dadi's recipe but make it Bangalore apartment edition.",
    tag: "Snacks",
    time: "10 min",
    cal: "240 kcal",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    slug: "jhalmuri",
  },
  {
    title: "High Protein Egg Bowl",
    desc: "Post gym, no energy, need 30g protein in 15 minutes.",
    tag: "Fitness meal",
    time: "15 min",
    cal: "380 kcal",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
    slug: "egg-bowl",
  },
  {
    title: "5-Minute Masala Maggi",
    desc: "Late night, deadline week, comfort food emergency.",
    tag: "Comfort food",
    time: "5 min",
    cal: "350 kcal",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&q=80",
    slug: "masala-maggi",
  },
  {
    title: "Sunday Meal Prep Bowl",
    desc: "Rice, dal, sabzi, salad — sorted for the whole week.",
    tag: "Meal prep",
    time: "45 min",
    cal: "420 kcal",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    slug: "meal-prep-bowl",
  },
  {
    title: "Healthy Breakfast Smoothie",
    desc: "Banana, peanut butter, oats, milk. Blend and run.",
    tag: "Breakfast",
    time: "5 min",
    cal: "310 kcal",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80",
    slug: "breakfast-smoothie",
  },
];

export default function RecipesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            From my kitchen
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Things I actually cook
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            No 20-step recipes with ingredients you&apos;ll never use again. Just 
            the stuff I make on repeat — coffee, comfort food, post-gym meals, 
            and the occasional weekend project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="group block">
              <div className="img-zoom relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-soft">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="tag-pill bg-cream/90 text-charcoal">{recipe.tag}</span>
                </div>
              </div>
              <h2 className="font-display text-xl font-medium text-charcoal mb-2 group-hover:text-warm-gray transition-colors">
                {recipe.title}
              </h2>
              <p className="text-warm-gray text-sm leading-relaxed mb-4 line-clamp-2">
                {recipe.desc}
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
                  <Clock size={11} /> {recipe.time}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
                  <Flame size={11} /> {recipe.cal}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
