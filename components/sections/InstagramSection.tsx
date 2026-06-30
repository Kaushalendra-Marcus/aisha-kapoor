"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import { Instagram, ExternalLink, Loader2 } from "lucide-react";

const PROFILE_URL = "https://www.instagram.com/aishadiaries.23/";
const HANDLE = "@aishadiaries.23";

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
    <section className="section-padding bg-off-white">
      {/* Loads Instagram's official embed script once; it scans the page
          for .instagram-media blockquotes and renders the real previews. */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
        onReady={() => window.instgrm?.Embeds.process()}
      />

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

        {/* Real Instagram embeds, evenly laid out, equal-width columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
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
              <div className="rounded-2xl overflow-hidden border border-light-gray shadow-soft bg-white">
                <InstagramReelEmbed url={reel.url} />
              </div>
            </motion.div>
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
