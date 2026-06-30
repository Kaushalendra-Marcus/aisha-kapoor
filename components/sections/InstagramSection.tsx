"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
    likes: "12.4K",
    comments: "238",
    caption: "Sunday reset complete",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    likes: "9.8K",
    comments: "185",
    caption: "Morning oat latte ritual",
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    likes: "18.2K",
    comments: "412",
    caption: "New PR day",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    likes: "7.3K",
    comments: "156",
    caption: "Office fit check",
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    likes: "11.1K",
    comments: "267",
    caption: "Made jhalmuri today",
  },
  {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    likes: "14.6K",
    comments: "321",
    caption: "Meal prep Sunday",
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
              Latest from the grid
            </h2>
          </div>
          <a
            href="https://instagram.com/aishakapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text group self-start sm:self-auto"
          >
            <Instagram size={13} />
            <span>@aishakapoor</span>
            <ExternalLink size={11} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/aishakapoor"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square rounded-2xl overflow-hidden block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream text-center">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="flex items-center gap-1 text-xs font-medium">
                      <Heart size={12} fill="white" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium">
                      <MessageCircle size={12} fill="white" /> {post.comments}
                    </span>
                  </div>
                  <p className="text-[10px] opacity-80 px-2 leading-tight">{post.caption}</p>
                </div>
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
          className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-8 border-t border-light-gray"
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
