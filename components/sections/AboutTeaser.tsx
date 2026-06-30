"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Coffee, Dumbbell, Moon, Sparkles, Leaf } from "lucide-react";

const tags = [
  { icon: Coffee, label: "Coffee addict" },
  { icon: Dumbbell, label: "Gym rat" },
  { icon: Moon, label: "Night owl" },
  { icon: Sparkles, label: "Minimalist" },
  { icon: Leaf, label: "Bangalore girl" },
];

export function AboutTeaser() {
  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Main image */}
              <div className="img-zoom absolute inset-0 rounded-3xl overflow-hidden shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
                  alt="Aisha Kapoor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-medium"
              >
                <p className="text-[10px] tracking-[0.14em] uppercase text-muted-gray mb-1 flex items-center gap-1.5">
                  <MapPin size={10} /> Based in
                </p>
                <p className="font-display text-xl font-medium text-charcoal">Bangalore</p>
                <p className="text-xs text-warm-gray mt-0.5">Software eng × Creator</p>
              </motion.div>
              {/* Decorative dot grid */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle, #B5AFA8 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
              A little about me
            </p>
            <h2 className="font-display text-display-md text-charcoal leading-[1.05] mb-6">
              Hi, I&apos;m Aisha.{" "}
              <em className="text-warm-gray font-light">
                Nice to meet you.
              </em>
            </h2>

            <div className="space-y-4 text-warm-gray text-[15px] leading-relaxed font-light max-w-md">
              <p>
                I&apos;m 23, I live in Bangalore, and I work a 9-to-6 at a software company. 
                Outside of that, I document my everyday life — the morning coffee, 
                the gym sessions, the Sunday cooking, the little wins and the bad days.
              </p>
              <p>
                I&apos;m not trying to sell you a perfect life. I just like sharing 
                the real one — because I think ordinary is actually pretty beautiful, 
                when you pay attention.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 mb-10">
              {tags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <span key={tag.label} className="tag-pill">
                    <Icon size={11} className="mr-1" />
                    {tag.label}
                  </span>
                );
              })}
            </div>

            <Link href="/about" className="btn-text group">
              <span>Read more about me</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
