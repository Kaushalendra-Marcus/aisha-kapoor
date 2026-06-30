"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, Play, Heart, MessageCircle } from "lucide-react";

const PROFILE_URL = "https://www.instagram.com/aishadiaries.23/";
const HANDLE = "@aishadiaries.23";

const spotlightReels = [
  {
    url: "https://www.instagram.com/reel/DZ8gSyUzQ_5/",
    tag: "Featured reel",
    poster: "Watch the one\neveryone's sending",
    caption: "Before office vs. after office — the whiplash is real.",
    likes: "32.6K",
    comments: "584",
    bg: "bg-charcoal",
    text: "text-cream",
    sub: "text-cream/50",
    ring: "border-cream/10",
    chip: "bg-cream/10 text-cream/80",
    btnBg: "bg-cream text-charcoal",
    accent: "text-accent-warm",
  },
  {
    url: "https://www.instagram.com/reel/DaN9ZItz45P/",
    tag: "Travel · Bike ride",
    poster: "Open road,\nno destination",
    caption: "Full tank, empty schedule, best kind of Sunday.",
    likes: "18.9K",
    comments: "351",
    bg: "bg-block-yellow",
    text: "text-charcoal",
    sub: "text-charcoal/55",
    ring: "border-charcoal/10",
    chip: "bg-charcoal/10 text-charcoal/75",
    btnBg: "bg-charcoal text-cream",
    accent: "text-dark-brown",
  },
  {
    url: "https://www.instagram.com/reel/DaGZFNuzHBA/",
    tag: "Night party",
    poster: "City lights,\ngood people",
    caption: "Last one before the work week catches up.",
    likes: "13.2K",
    comments: "276",
    bg: "bg-dark-brown",
    text: "text-cream",
    sub: "text-cream/50",
    ring: "border-cream/10",
    chip: "bg-cream/10 text-cream/80",
    btnBg: "bg-cream text-dark-brown",
    accent: "text-accent-rose",
  },
];

export function InstagramSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-2">
              On Instagram
            </p>
            <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
              A few reels worth a watch
            </h2>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text group self-start sm:self-auto"
          >
            <Instagram size={13} />
            <span>{HANDLE}</span>
            <ExternalLink size={11} />
          </a>
        </motion.div>

        {/* Spotlight reel cards — poster-style, matches the site's own design language */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {spotlightReels.map((reel, i) => (
            <motion.a
              key={reel.url}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 aspect-[3/4] overflow-hidden border ${reel.bg} ${reel.text} ${reel.ring} transition-transform duration-300 hover:-translate-y-1 shadow-soft`}
            >
              {/* Top: tag + play */}
              <div className="flex items-start justify-between">
                <span className={`text-[10px] tracking-[0.14em] uppercase font-semibold px-3 py-1.5 rounded-full ${reel.chip}`}>
                  {reel.tag}
                </span>
                <span className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${reel.chip}`}>
                  <Play size={12} fill="currentColor" className="translate-x-0.5" />
                </span>
              </div>

              {/* Middle: poster headline */}
              <div className="my-6">
                <h3 className="font-condensed text-2xl sm:text-[1.7rem] leading-[1.02] whitespace-pre-line">
                  {reel.poster}
                </h3>
                <p className={`text-[13px] leading-relaxed mt-3 max-w-[22ch] ${reel.sub}`}>
                  {reel.caption}
                </p>
              </div>

              {/* Bottom: stats + CTA */}
              <div>
                <div className={`flex items-center gap-4 mb-4 text-[11px] font-medium ${reel.sub}`}>
                  <span className="flex items-center gap-1.5">
                    <Heart size={11} className={reel.accent} fill="currentColor" /> {reel.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle size={11} className={reel.accent} fill="currentColor" /> {reel.comments}
                  </span>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity group-hover:opacity-90 ${reel.btnBg}`}>
                  Watch on Instagram
                  <ExternalLink size={11} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-8 border-t border-light-gray"
        >
          {[
            { value: "248K", label: "Followers" },
            { value: "5.8%", label: "Avg. engagement" },
            { value: "2.3M", label: "Monthly reach" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-condensed text-2xl text-charcoal">{stat.value}</p>
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-gray mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
