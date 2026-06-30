"use client";

import { motion } from "framer-motion";
import { Flower, Plane, Monitor, Dumbbell, Star, Home } from "lucide-react";

const timeline = [
  { year: "2003", text: "Born and raised in Kolkata. A city that taught me to love chaos, food, and festivals.", icon: Flower },
  { year: "2021", text: "Moved to Bangalore for placement. New city, one suitcase, zero friends — the beginning.", icon: Plane },
  { year: "2022", text: "Started my first corporate software engineering role. Late nights, fast learning.", icon: Monitor },
  { year: "2023", text: "Joined the gym and posted my first reel. Both changed my life in ways I didn't expect.", icon: Dumbbell },
  { year: "2024", text: "Hit 100K. Quit trying to be perfect online. The real content started here.", icon: Star },
  { year: "2025", text: "Built this website — my own corner of the internet, entirely on my own terms.", icon: Home },
];

export function AboutTimeline() {
  return (
    <div className="max-w-3xl mx-auto relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-light-gray hidden md:block" />
      {/* Mobile left line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-light-gray md:hidden" />

      <div className="space-y-0">
        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex md:items-center py-8"
            >
              {/* Desktop: alternating layout */}
              <div className={`hidden md:flex w-full items-center gap-0 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}>
                {/* Content */}
                <div className="w-[calc(50%-24px)] text-right pr-8 flex flex-col items-end">
                  {isLeft && (
                    <>
                      <span className="font-display text-3xl font-light text-muted-gray mb-2">{item.year}</span>
                      <p className="text-sm text-warm-gray leading-relaxed">{item.text}</p>
                    </>
                  )}
                </div>
                {/* Node */}
                <div className="relative z-10 w-12 flex-shrink-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blush border-2 border-cream shadow-sm flex items-center justify-center">
                    <item.icon size={14} className="text-accent-rose" />
                  </div>
                </div>
                {/* Content right side */}
                <div className="w-[calc(50%-24px)] pl-8 flex flex-col items-start">
                  {!isLeft && (
                    <>
                      <span className="font-display text-3xl font-light text-muted-gray mb-2">{item.year}</span>
                      <p className="text-sm text-warm-gray leading-relaxed">{item.text}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden flex items-start gap-6 pl-14">
                <div className="absolute left-[14px] w-8 h-8 rounded-full bg-blush border-2 border-cream top-7 flex items-center justify-center">
                  <item.icon size={13} className="text-accent-rose" />
                </div>
                <div>
                  <span className="font-display text-2xl font-light text-muted-gray block mb-1">{item.year}</span>
                  <p className="text-sm text-warm-gray leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
