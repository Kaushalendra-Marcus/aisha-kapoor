"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "My honest morning routine — what I actually do vs. what I post",
    excerpt:
      "The 5 AM wake-up, the 10-step skincare, the matcha? Yeah, about that. Here's what really happens before I leave for office.",
    tag: "Lifestyle",
    readTime: "7 min",
    date: "June 26, 2025",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    slug: "honest-morning-routine",
    featured: true,
  },
  {
    title: "Budget shopping in Bangalore — where I actually buy my clothes",
    excerpt:
      "Linking a ₹12K haul is easy. Here's where you can get the same vibe for ₹2,500.",
    tag: "Fashion",
    readTime: "5 min",
    date: "June 20, 2025",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80",
    slug: "budget-shopping-bangalore",
    featured: false,
  },
  {
    title: "How I stay consistent at the gym when I'm exhausted from work",
    excerpt:
      "I don't have magic motivation. I have systems, and this is all of them.",
    tag: "Fitness",
    readTime: "6 min",
    date: "June 14, 2025",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80",
    slug: "gym-consistency-work",
    featured: false,
  },
];

export function BlogPreview() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-2">
              Blog
            </p>
            <h2 className="font-display text-display-md text-charcoal">
              Longer thoughts
            </h2>
          </div>
          <Link href="/blog" className="btn-text group self-start sm:self-auto">
            <span>All posts</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <Link href={`/blog/${posts[0].slug}`} className="group block">
              <div className="img-zoom relative aspect-[16/9] rounded-3xl overflow-hidden mb-5 shadow-soft">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="tag-pill">{posts[0].tag}</span>
                <span className="flex items-center gap-1 text-[11px] text-muted-gray">
                  <Clock size={10} /> {posts[0].readTime} read
                </span>
                <span className="text-[11px] text-muted-gray">{posts[0].date}</span>
              </div>
              <h3 className="font-display text-display-sm text-charcoal leading-tight mb-3 group-hover:text-warm-gray transition-colors duration-200">
                {posts[0].title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed line-clamp-2">
                {posts[0].excerpt}
              </p>
            </Link>
          </motion.div>

          {/* Side */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group flex gap-4">
                  <div className="img-zoom relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="tag-pill text-[9px] py-0.5 px-2">{post.tag}</span>
                      <span className="text-[10px] text-muted-gray">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-base font-medium text-charcoal leading-snug group-hover:text-warm-gray transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-gray mt-1.5">{post.date}</p>
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
