"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import {
  Instagram,
  ExternalLink,
  Loader2,
  Users,
  Grid3x3,
  Eye,
  TrendingUp,
} from "lucide-react";

const PROFILE_URL = "https://www.instagram.com/aishadiaries.23/";
const HANDLE = "@aishadiaries.23";

const profile = {
  name: "Aisha Kapoor",
  bio: "Artist · Product Designer, Bangalore — coffee > everything, trying to figure life out",
  followers: "456",
  posts: "19",
};

// Real numbers from Instagram's own Account Insights
const insights = [
  { icon: Eye, value: "963.8K", label: "Reel views" },
  { icon: TrendingUp, value: "584.8K", label: "Accounts reached" },
  { icon: Users, value: "456", label: "Followers" },
  { icon: Grid3x3, value: "19", label: "Posts" },
];

const reachSplit = [
  { label: "Non-followers", value: 99.6, color: "bg-accent-rose" },
  { label: "Followers", value: 0.4, color: "bg-accent-warm" },
];

const reels = [
  { url: "https://www.instagram.com/reel/DZ8gSyUzQ_5/", tag: "Featured reel" },
  { url: "https://www.instagram.com/reel/DaN9ZItz45P/", tag: "Travel · Bike ride" },
  { url: "https://www.instagram.com/reel/DaGZFNuzHBA/", tag: "Night party" },
];

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

/**
 * Instagram's own official embed. Once embed.js runs, Instagram fetches the
 * actual post and replaces this block with a real iframe containing the
 * genuine thumbnail/video, caption, and like count — pulled live from
 * Instagram, not anything written by hand.
 */
function InstagramReelEmbed({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    const observer = new MutationObserver(() => {
      if (cancelled) return;
      if (containerRef.current?.querySelector("iframe")) {
        setLoaded(true);
        observer.disconnect();
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [url]);

  return (
    <div ref={containerRef} className="relative min-h-[420px] flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-off-white text-muted-gray rounded-2xl">
          <Loader2 size={18} className="animate-spin" />
          <span className="text-[11px]">Loading reel…</span>
        </div>
      )}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "0 auto",
          width: "100%",
          minWidth: "270px",
          maxWidth: "100%",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this reel on Instagram
        </a>
      </blockquote>
    </div>
  );
}

export function InstagramSection() {
  return (
    <section className="section-padding bg-off-white relative overflow-hidden">
      {/* Loads Instagram's official embed script once; it scans the page
          for .instagram-media blockquotes and renders the real previews. */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
        onReady={() => window.instgrm?.Embeds.process()}
      />

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
            A few reels worth a watch
          </h2>
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
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-5 self-start sm:self-auto flex-shrink-0"
          >
            <Instagram size={13} />
            <span>View profile</span>
            <ExternalLink size={11} />
          </a>
        </motion.div>

        {/* Real Instagram embeds, evenly laid out, equal-width columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-14">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.12em] uppercase text-warm-gray font-semibold bg-warm-beige px-2.5 py-1 rounded-full">
                  {reel.tag}
                </span>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-gray hover:text-charcoal transition-colors"
                  aria-label={`Open ${reel.tag} reel on Instagram`}
                >
                  <ExternalLink size={13} />
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-light-gray shadow-medium bg-white transition-transform duration-300 hover:-translate-y-1">
                <InstagramReelEmbed url={reel.url} />
              </div>
            </motion.div>
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
              <p className="text-xs font-medium text-charcoal">Who's actually watching</p>
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
