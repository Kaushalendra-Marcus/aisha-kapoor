"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "248K", label: "Instagram" },
  { value: "91K", label: "YouTube" },
  { value: "2.3M", label: "Monthly reach" },
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const images = hero.querySelectorAll<HTMLElement>("[data-parallax]");
      images.forEach((img) => {
        const depth = parseFloat(img.dataset.parallax || "1");
        img.style.transform = `translate(${x * depth * 20}px, ${y * depth * 20}px)`;
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream pt-20"
    >
      {/* Background floating images */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 3 }}
        animate={{ opacity: 0.8, y: 0, rotate: 3 }}
        transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[12%] right-[8%] hidden md:block"
      >
        <div
          data-parallax="0.3"
          className="w-36 h-48 lg:w-52 lg:h-72 rounded-3xl overflow-hidden shadow-warm"
        >
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
            alt="Aisha portrait"
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 0.6, y: 0, rotate: -2 }}
        transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[20%] right-[18%] hidden lg:block"
      >
        <div
          data-parallax="0.6"
          className="w-28 h-36 lg:w-40 lg:h-52 rounded-2xl overflow-hidden shadow-medium"
        >
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80"
            alt="Morning coffee"
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 2 }}
        animate={{ opacity: 0.5, y: 0, rotate: 2 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[30%] left-[5%] hidden lg:block"
      >
        <div
          data-parallax="0.4"
          className="w-24 h-32 lg:w-36 lg:h-48 rounded-2xl overflow-hidden shadow-soft"
        >
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&q=80"
            alt="Gym"
            fill
            className="object-cover"
            sizes="140px"
          />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <MapPin size={12} className="text-muted-gray" />
            <span className="text-xs tracking-[0.16em] uppercase text-muted-gray font-medium">
              Bangalore, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-xl text-charcoal mb-6 leading-[0.93]"
          >
            Just a girl{" "}
            <em className="text-warm-gray font-light not-italic">living</em>
            <br />
            her ordinary{" "}
            <span className="relative inline-block">
              life
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,6 C20,2 40,8 60,4 C80,0 90,6 100,4"
                  stroke="#E8D5CF"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-warm-gray text-base md:text-lg font-body font-light leading-relaxed max-w-md mb-10"
          >
            Morning routines, office days, gym sessions, cooking experiments —
            real moments, honestly shared. No filter on the life part.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/journal" className="btn-primary">
              Read my journal
            </Link>
            <Link href="/about" className="btn-ghost">
              Who is Aisha?
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-light-gray"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-medium text-charcoal">
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-[0.1em] uppercase text-muted-gray font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-gray">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-muted-gray" />
        </motion.div>
      </motion.div>
    </section>
  );
}
