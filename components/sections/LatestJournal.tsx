"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const journals = [
  {
    date: "June 28",
    day: "Saturday",
    title: "Reset Sunday — cleaned everything, made jhalmuri, felt human again",
    excerpt:
      "Woke up at 9 (rare), did a full room reset, made chai, and just spent the day doing absolutely nothing productive. It was perfect.",
    tag: "Weekend",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80",
    readTime: "3 min",
    slug: "reset-sunday-june-28",
  },
  {
    date: "June 25",
    day: "Wednesday",
    title: "Office was actually fun today — we had a team lunch and I tried not to be awkward",
    excerpt:
      "We finally had the team lunch everyone had been talking about for weeks. I ordered the pasta and talked too much about my gym routine to my manager.",
    tag: "Office life",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80",
    readTime: "4 min",
    slug: "office-fun-june-25",
  },
  {
    date: "June 22",
    day: "Sunday",
    title: "Hit a new PR on squats — and my legs haven't forgiven me since",
    excerpt:
      "80kg squat. Finally. Three months of being stuck at 72.5 and today it just happened. I cried a little. My legs cried a lot.",
    tag: "Gym",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
    readTime: "2 min",
    slug: "squat-pr-june-22",
  },
];

export function LatestJournal() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-2">
              Daily journal
            </p>
            <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
              What I&apos;ve been up to
            </h2>
          </div>
          <Link href="/journal" className="btn-text group self-start sm:self-auto">
            <span>All entries</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Featured + Side entries */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <Link href={`/journal/${journals[0].slug}`} className="group block">
              <div className="img-zoom relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 shadow-soft">
                <Image
                  src={journals[0].image}
                  alt={journals[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag-pill bg-cream/90 text-charcoal">{journals[0].tag}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={12} className="text-muted-gray" />
                <span className="text-[11px] text-muted-gray">
                  {journals[0].day}, {journals[0].date} · {journals[0].readTime} read
                </span>
              </div>
              <h3 className="font-display text-display-sm text-charcoal leading-tight mb-3 group-hover:text-warm-gray transition-colors duration-200">
                {journals[0].title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed line-clamp-2">
                {journals[0].excerpt}
              </p>
            </Link>
          </motion.div>

          {/* Side entries */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {journals.slice(1).map((entry, i) => (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/journal/${entry.slug}`} className="group flex gap-4">
                  <div className="img-zoom relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-soft">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="tag-pill text-[9px] py-0.5 px-2">{entry.tag}</span>
                      <span className="text-[10px] text-muted-gray">{entry.date}</span>
                    </div>
                    <h3 className="font-display text-[1.05rem] font-medium text-charcoal leading-tight group-hover:text-warm-gray transition-colors line-clamp-3">
                      {entry.title}
                    </h3>
                    <p className="text-xs text-muted-gray mt-1.5">{entry.readTime} read</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
