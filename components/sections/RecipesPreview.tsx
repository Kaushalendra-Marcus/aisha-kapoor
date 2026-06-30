"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Flame } from "lucide-react";

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
];

export function RecipesPreview() {
  return (
    <section className="section-padding bg-block-yellow">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-warm-gray font-medium mb-2">
              From my kitchen
            </p>
            <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
              Things I actually cook
            </h2>
          </div>
          <Link href="/recipes" className="btn-text group self-start sm:self-auto">
            <span>All recipes</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe, i) => (
            <motion.div
              key={recipe.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/recipes/${recipe.slug}`} className="group block bg-off-white rounded-2xl p-3 hover:shadow-large transition-shadow duration-300">
                <div className="img-zoom relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="tag-pill bg-cream/90 text-charcoal">{recipe.tag}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal mb-2 px-1 group-hover:text-warm-gray transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-4 px-1 line-clamp-2">
                  {recipe.desc}
                </p>
                <div className="flex items-center gap-4 px-1 pb-2">
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
                    <Clock size={11} /> {recipe.time}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
                    <Flame size={11} /> {recipe.cal}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
