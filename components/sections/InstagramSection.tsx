"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  ExternalLink,
  Users,
  Grid3x3,
  Eye,
  TrendingUp,
  ShoppingBag,
  Play,
} from "lucide-react";
import { REELS, reelProducts, reelOutfit, type Reel } from "@/lib/affiliate";

const PROFILE_URL = "https://www.instagram.com/aishadiaries.23/";
const HANDLE = "@aishadiaries.23";

const profile = {
  name: "Aisha Kapoor",
  bio: "Artist · Product Designer, Bangalore — coffee > everything, trying to figure life out",
  followers: "100K+",
  posts: "100+",
};

// Real numbers from Instagram's own Account Insights
const insights = [
  { icon: Eye, value: "10M", label: "Reel views" },
  { icon: TrendingUp, value: "584.8K", label: "Accounts reached" },
  { icon: Users, value: "100K+", label: "Followers" },
  { icon: Grid3x3, value: "100+", label: "Posts" },
];

const reachSplit = [
  { label: "Non-followers", value: 99.6, color: "bg-accent-rose" },
  { label: "Followers", value: 0.4, color: "bg-accent-warm" },
];

const reels = REELS;

// Soft gradient covers — one per reel. Always visible, no external
// script needed (Instagram's embed.js often fails to load / stays blank).
const REEL_COVERS = [
  "linear-gradient(150deg, #E9CFC6 0%, #C4857A 55%, #8E5A52 100%)",
  "linear-gradient(150deg, #D4E0EA 0%, #93A9C4 55%, #5B7186 100%)",
  "linear-gradient(150deg, #F0D894 0%, #C99B5F 55%, #7A5A30 100%)",
  "linear-gradient(150deg, #EDE6DA 0%, #B9A892 55%, #6E5F4C 100%)",
  "linear-gradient(150deg, #E3B7A9 0%, #A86A5E 55%, #5F3A33 100%)",
  "linear-gradient(150deg, #C9D8E4 0%, #7E97B0 55%, #44586C 100%)",
];

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const shoppableCount = reelProducts(reel).length + (reelOutfit(reel) ? 1 : 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="bg-warm-beige px-2.5 py-1 rounded-full text-[10px] tracking-[0.12em] uppercase text-warm-gray font-semibold">
          {reel.title}
        </span>
        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-gray hover:text-charcoal transition-colors"
          aria-label={`Open ${reel.title} reel on Instagram`}
        >
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Cover — always renders, tap to watch on Instagram */}
      <a
        href={reel.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-medium transition-transform duration-300 hover:-translate-y-1"
        style={{ background: REEL_COVERS[index % REEL_COVERS.length] }}
        aria-label={`Watch ${reel.title} on Instagram`}
      >
        {/* Decorative rings */}
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
        <div className="absolute -bottom-14 -left-14 h-56 w-56 rounded-full bg-black/10" />

        {/* Top row */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            <Instagram size={11} /> Reel
          </span>
          {shoppableCount > 0 && (
            <span className="rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold text-charcoal">
              {shoppableCount} buyable {shoppableCount === 1 ? "item" : "items"}
            </span>
          )}
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-charcoal shadow-large transition-transform duration-300 group-hover:scale-110">
            <Play size={22} fill="currentColor" className="ml-1" />
          </span>
        </div>

        {/* Bottom caption */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-10">
          <p className="text-sm font-medium text-white">{reel.title}</p>
          <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-white/80">
            {reel.caption}
          </p>
        </div>
      </a>

      {/* Actions */}
      <div className="mt-3 flex gap-2">
        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost flex-1 justify-center px-2 py-2 text-xs"
        >
          <Play size={11} /> Watch
        </a>
        {shoppableCount > 0 && (
          <a
            href={`/shop#reel-${reel.id}`}
            className="btn-primary flex-1 justify-center px-2 py-2 text-xs"
          >
            <ShoppingBag size={12} /> Shop look
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function InstagramSection() {
  return (
    <section className="section-padding bg-off-white relative overflow-hidden">

      {/* Ambient background blur, same treatment as DayInTheLife for consistency */}
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] rounded-full bg-soft-pink/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/5 w-[380px] h-[380px] rounded-full bg-accent-warm/10 blur-[130px] pointer-events-none" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-2">
            On Instagram
          </p>
          <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
            Watch the reel, shop the look
          </h2>
          <p className="mt-3 text-sm text-warm-gray max-w-lg">
            Came from Instagram?{" "}
            <a href="/links" className="font-medium text-charcoal underline underline-offset-4 hover:text-accent-rose">
              Shop everything I post here
            </a>{" "}
            — one tap, all links.
          </p>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-cream rounded-3xl p-5 sm:p-6 shadow-soft border border-light-gray/60 mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent-rose/30">
              <Image src="/images/profile1.png" alt={profile.name} fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-display text-base font-medium text-charcoal">{profile.name}</p>
                <span className="text-[10px] tracking-wide text-muted-gray">{HANDLE}</span>
              </div>
              <p className="text-xs text-warm-gray mt-0.5 max-w-sm leading-relaxed">{profile.bio}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-charcoal">
                <span><strong className="font-semibold">{profile.followers}</strong> <span className="text-muted-gray">followers</span></span>
                <span><strong className="font-semibold">{profile.posts}</strong> <span className="text-muted-gray">posts</span></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 self-start sm:self-auto flex-shrink-0">
            <a
              href="/links"
              className="btn-primary text-xs py-2.5 px-5"
            >
              <span>Shop my Instagram</span>
            </a>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2.5 px-5"
            >
              <Instagram size={13} />
              <span>View profile</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </motion.div>

        {/* Reel cards — always visible, tap to watch on Instagram */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start mb-14">
          {reels.map((reel, i) => (
            <ReelCard key={reel.url} reel={reel} index={i} />
          ))}
        </div>

        {/* Real account insights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp size={13} className="text-accent-warm" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-muted-gray font-medium">
              Account insights
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {insights.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-card">
                  <Icon size={15} className="text-muted-gray mb-3" />
                  <p className="font-condensed text-2xl text-charcoal">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.08em] uppercase text-muted-gray mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Reach breakdown — proof these reels travel well beyond the existing audience */}
          <div className="bg-cream rounded-2xl p-5 sm:p-6 border border-light-gray/60">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-charcoal">Who&apos;s actually watching</p>
              <p className="text-[11px] text-muted-gray">584.8K accounts reached</p>
            </div>
            <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-warm-beige">
              {reachSplit.map((seg) => (
                <div
                  key={seg.label}
                  className={seg.color}
                  style={{ width: `${seg.value}%` }}
                  title={`${seg.label}: ${seg.value}%`}
                />
              ))}
            </div>
            <div className="flex items-center gap-5 mt-3">
              {reachSplit.map((seg) => (
                <div key={seg.label} className="flex items-center gap-1.5 text-[11px] text-warm-gray">
                  <span className={`w-2 h-2 rounded-full ${seg.color}`} />
                  <span>{seg.label}</span>
                  <span className="text-charcoal font-medium">{seg.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
