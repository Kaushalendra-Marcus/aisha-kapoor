"use client";

import { motion } from "framer-motion";
import { Coffee, Dumbbell, Music2, Shirt } from "lucide-react";

const todayCards = [
  {
    icon: Coffee,
    label: "Current coffee",
    value: "Oat latte, no sugar",
    sub: "Made at home · 7:30 AM",
    color: "bg-[#F5EFE6]",
    iconColor: "text-accent-warm",
  },
  {
    icon: Dumbbell,
    label: "Today's workout",
    value: "Leg day 🦵",
    sub: "Squats & hip thrusts · 6 PM",
    color: "bg-[#EEF0F5]",
    iconColor: "text-[#7A8BAA]",
  },
  {
    icon: Music2,
    label: "On repeat",
    value: "Slow it Down – Benson Boone",
    sub: "Spotify · study playlist",
    color: "bg-[#F5EEF0]",
    iconColor: "text-accent-rose",
  },
  {
    icon: Shirt,
    label: "Outfit today",
    value: "Beige oversized tee",
    sub: "Linen trousers · white sneakers",
    color: "bg-[#F0F5EE]",
    iconColor: "text-[#7AA880]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function TodaySection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-1">
              Right now
            </p>
            <h2 className="font-display text-display-sm text-charcoal">
              What&apos;s going on today
            </h2>
          </div>
          <div className="flex-1 h-px bg-light-gray ml-4 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] text-muted-gray font-medium">Live update</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {todayCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                variants={cardVariants}
                className={`${card.color} rounded-2xl p-5 group hover:shadow-card transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] tracking-[0.14em] uppercase text-warm-gray font-medium">
                    {card.label}
                  </span>
                  <Icon size={16} className={`${card.iconColor} opacity-70`} />
                </div>
                <p className="font-display text-lg font-medium text-charcoal leading-snug mb-1.5">
                  {card.value}
                </p>
                <p className="text-xs text-warm-gray">{card.sub}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
