"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CozyDimmer() {
  const [isCozy, setIsCozy] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("aisha_cozy_mode");
    if (stored === "true") {
      setIsCozy(true);
      document.documentElement.setAttribute("data-cozy", "true");
    }
  }, []);

  const toggle = () => {
    const next = !isCozy;
    setIsCozy(next);
    if (next) {
      document.documentElement.setAttribute("data-cozy", "true");
      localStorage.setItem("aisha_cozy_mode", "true");
    } else {
      document.documentElement.removeAttribute("data-cozy");
      localStorage.setItem("aisha_cozy_mode", "false");
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      aria-label={isCozy ? "Disable cozy mode" : "Enable cozy mode"}
      aria-pressed={isCozy}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2 px-4 py-2.5
        rounded-full text-sm font-medium
        backdrop-blur-md
        border transition-[box-shadow,border-color,color,background-color]
        duration-500 select-none cursor-pointer
        ${
          isCozy
            ? "bg-amber-900/90 border-amber-700/50 text-amber-100 shadow-lg shadow-amber-900/30"
            : "bg-white/80 border-white/60 text-stone-700 shadow-lg shadow-black/10"
        }
      `}
    >
      {/* Flame icon */}
      <AnimatePresence mode="wait">
        {isCozy ? (
          <motion.span
            key="flame"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center"
          >
            {/* Wiggling candle flame SVG */}
            <motion.svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                rotate: [0, -4, 4, -3, 3, 0],
                scaleX: [1, 0.92, 1.08, 0.95, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Outer flame */}
              <path
                d="M8 1 C8 1 4 6 4 10.5 C4 13.5 5.5 16 8 16 C10.5 16 12 13.5 12 10.5 C12 6 8 1 8 1Z"
                fill="url(#flameGradient)"
                opacity="0.9"
              />
              {/* Inner bright core */}
              <path
                d="M8 5 C8 5 6 8.5 6 11 C6 12.6 6.9 14 8 14 C9.1 14 10 12.6 10 11 C10 8.5 8 5 8 5Z"
                fill="url(#coreGradient)"
              />
              {/* Candle body */}
              <rect x="5.5" y="16" width="5" height="3.5" rx="1" fill="#D4B483" />
              <rect x="6" y="16" width="4" height="0.8" rx="0.4" fill="#BFA070" />
              <defs>
                <linearGradient id="flameGradient" x1="8" y1="1" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#DC2626" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="coreGradient" x1="8" y1="5" x2="8" y2="14" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FEF9C3" />
                  <stop offset="100%" stopColor="#FDE68A" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="text-base leading-none"
            aria-hidden="true"
          >
            🕯️
          </motion.span>
        )}
      </AnimatePresence>

      {/* Label */}
      <AnimatePresence mode="wait">
        {isCozy ? (
          <motion.span
            key="on"
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.2 }}
          >
            ✓ Cozy
          </motion.span>
        ) : (
          <motion.span
            key="off"
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.2 }}
          >
            Cozy mode
          </motion.span>
        )}
      </AnimatePresence>

      {/* Active amber glow ring */}
      <AnimatePresence>
        {isCozy && (
          <motion.span
            key="glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: "0 0 16px 4px rgba(217, 119, 6, 0.35)",
            }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
