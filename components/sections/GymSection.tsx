"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

const stats = [
  { value: "4×", label: "Gym per week" },
  { value: "80kg", label: "Squat PR" },
  { value: "8 mo", label: "Consistent" },
];

const gymSnaps = [
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80",
];

const favorites = [
  { name: "JBL Tune 520BT headphones", href: "#" },
  { name: "Boldfit protein shaker bottle", href: "#" },
  { name: "Under Armour training shoes", href: "#" },
  { name: "Mamaearth whey protein", href: "#" },
];

export function GymSection() {
  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] tracking-[0.18em] uppercase text-cream/40 font-medium mb-3">
              Gym & fitness
            </p>
            <h2 className="font-condensed text-poster-md text-cream mb-5 leading-[0.95]">
              Gym is my therapy
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed max-w-sm mb-8">
              Started in October 2023 because I wanted to get out of my head 
              after work. Now I go 4 times a week and track everything obsessively. 
              No coaches. No influencer programs. Just YouTube, patience, and 
              too much protein.
            </p>

            {/* Stats */}
            <div className="flex gap-3 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-cream/[0.06] border border-cream/10 rounded-xl px-4 py-3">
                  <p className="font-condensed text-2xl text-cream">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-cream/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Gym essentials */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={13} className="text-accent-warm" />
                <span className="text-[11px] tracking-[0.14em] uppercase text-cream/40">
                  What I actually use
                </span>
              </div>
              <div className="space-y-2">
                {favorites.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between py-2.5 border-b border-cream/10 hover:border-cream/30 transition-colors group"
                  >
                    <span className="text-sm text-cream/70 group-hover:text-cream transition-colors">
                      {item.name}
                    </span>
                    <ArrowRight size={12} className="text-cream/30 group-hover:text-cream/70 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </div>

            <Link href="/gym" className="inline-flex items-center gap-2 text-sm font-medium text-cream/60 hover:text-cream transition-colors group">
              <span>See full gym page</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Right - Photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="img-zoom relative aspect-[2/3] rounded-2xl overflow-hidden">
              <Image
                src={gymSnaps[0]}
                alt="Gym"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 25vw"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="img-zoom relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={gymSnaps[1]}
                  alt="Gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
              <div className="img-zoom relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={gymSnaps[2]}
                  alt="Gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
