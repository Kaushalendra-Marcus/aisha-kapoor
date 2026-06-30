import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Longer, SEO-friendly reads from Aisha — morning routines, gym consistency, budget fashion, skincare, and honest lifestyle reflections.",
};

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
  },
  {
    title: "My simple 5-step skincare routine for oily, acne-prone skin",
    excerpt:
      "I spent way too much money before figuring out my skin just needs five things, consistently.",
    tag: "Skincare",
    readTime: "8 min",
    date: "June 8, 2025",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    slug: "skincare-routine-oily-skin",
  },
  {
    title: "Office desk setup on a budget — under ₹20,000",
    excerpt:
      "You don't need an aesthetic Pinterest desk to be productive. Here's mine, and what it cost.",
    tag: "Desk setup",
    readTime: "5 min",
    date: "May 30, 2025",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
    slug: "budget-desk-setup",
  },
  {
    title: "Why I quit trying to look 'aesthetic' on Instagram",
    excerpt:
      "Two years of color-coordinated grids burned me out. Here's what changed and why I feel better now.",
    tag: "Real talk",
    readTime: "6 min",
    date: "May 22, 2025",
    image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=400&q=80",
    slug: "quit-aesthetic-instagram",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Blog
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Longer thoughts
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            The stuff that doesn&apos;t fit in a journal entry or a caption — 
            routines, reflections, honest reviews, and things I wish someone 
            had told me earlier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="img-zoom relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-soft">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="tag-pill">{post.tag}</span>
                <span className="flex items-center gap-1 text-[11px] text-muted-gray">
                  <Clock size={10} /> {post.readTime}
                </span>
              </div>
              <h2 className="font-display text-lg font-medium text-charcoal leading-snug mb-2 group-hover:text-warm-gray transition-colors">
                {post.title}
              </h2>
              <p className="text-warm-gray text-sm leading-relaxed line-clamp-2 mb-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-muted-gray">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
