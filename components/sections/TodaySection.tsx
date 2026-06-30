"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Dumbbell, Music2, Shirt, Play, Pause } from "lucide-react";

// Soundwave bar component
function SoundwaveBar({ delay, isPlaying }: { delay: number; isPlaying: boolean }) {
  return (
    <motion.div
      className="w-0.5 bg-accent-rose rounded-full"
      animate={isPlaying ? {
        height: ["4px", "14px", "6px", "16px", "4px"],
      } : {
        height: "4px",
      }}
      transition={isPlaying ? {
        duration: 0.8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      } : { duration: 0.3 }}
    />
  );
}

// Steam wave component  
function SteamWave({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, bottom: "100%" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 0.6, 0], y: -20 }}
      transition={{ duration: 1.5, repeat: Infinity, delay, ease: "easeOut" }}
    >
      <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
        <path
          d="M4 18 C2 14 6 10 4 6 C2 2 6 0 4 0"
          stroke="#B8956A"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(22);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.15));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="section-padding bg-block-pink overflow-hidden">
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
              Right now
            </p>
            <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
              What I&apos;m doing today
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] text-warm-gray font-medium">Live update</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Coffee Card */}
          <motion.div
            variants={cardVariants}
            className="stat-card group relative"
            onMouseEnter={() => setIsCoffeeHovered(true)}
            onMouseLeave={() => setIsCoffeeHovered(false)}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[10px] tracking-[0.14em] uppercase text-warm-gray font-medium">
                Current coffee
              </span>
              <div className="relative">
                <Coffee size={16} className="text-accent-warm opacity-70" />
                <AnimatePresence>
                  {isCoffeeHovered && (
                    <>
                      <SteamWave x={0} delay={0} />
                      <SteamWave x={6} delay={0.3} />
                      <SteamWave x={12} delay={0.6} />
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <p className="font-display text-lg font-medium text-charcoal leading-snug mb-1.5">
              Oat latte, no sugar
            </p>
            <p className="text-xs text-warm-gray">Made at home · 7:30 AM</p>
          </motion.div>

          {/* Workout Card */}
          <motion.div
            variants={cardVariants}
            className="stat-card group"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[10px] tracking-[0.14em] uppercase text-warm-gray font-medium">
                Today&apos;s workout
              </span>
              <Dumbbell size={16} className="text-[#7A8BAA] opacity-70" />
            </div>
            <p className="font-display text-lg font-medium text-charcoal leading-snug mb-1.5">
              Leg day
            </p>
            <p className="text-xs text-warm-gray">Squats & hip thrusts · 6 PM</p>
          </motion.div>

          {/* Music Card */}
          <motion.div
            variants={cardVariants}
            className="stat-card group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] tracking-[0.14em] uppercase text-warm-gray font-medium">
                On repeat
              </span>
              <Music2 size={16} className="text-accent-rose opacity-70" />
            </div>
            <p className="font-display text-base font-medium text-charcoal leading-snug mb-1">
              Slow it Down
            </p>
            <p className="text-xs text-warm-gray mb-4">Benson Boone · study playlist</p>
            
            {/* Progress bar */}
            <div className="w-full h-1 bg-blush/40 rounded-full mb-3 overflow-hidden">
              <motion.div
                className="h-full bg-accent-rose rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="w-7 h-7 rounded-full bg-accent-rose/10 hover:bg-accent-rose/20 flex items-center justify-center transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={11} className="text-accent-rose" />
                ) : (
                  <Play size={11} className="text-accent-rose fill-accent-rose" />
                )}
              </button>
              {/* Soundwave bars */}
              <div className="flex items-end gap-0.5 h-4">
                {[0, 0.1, 0.2, 0.15, 0.05].map((delay, i) => (
                  <SoundwaveBar key={i} delay={delay} isPlaying={isPlaying} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Outfit Card */}
          <motion.div
            variants={cardVariants}
            className="stat-card group"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[10px] tracking-[0.14em] uppercase text-warm-gray font-medium">
                Outfit today
              </span>
              <Shirt size={16} className="text-[#7AA880] opacity-70" />
            </div>
            <p className="font-display text-lg font-medium text-charcoal leading-snug mb-1.5">
              Beige oversized tee
            </p>
            <p className="text-xs text-warm-gray">Linen trousers · white sneakers</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
