import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Daily Journal",
  description:
    "Real, day-to-day entries from Aisha's life — morning routines, office days, gym sessions, weekend resets and small happy moments.",
};

const entries = [
  {
    date: "June 28, 2025",
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
    date: "June 25, 2025",
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
    date: "June 22, 2025",
    day: "Sunday",
    title: "Hit a new PR on squats — and my legs haven't forgiven me since",
    excerpt:
      "80kg squat. Finally. Three months of being stuck at 72.5 and today it just happened. I cried a little. My legs cried a lot.",
    tag: "Gym",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
    readTime: "2 min",
    slug: "squat-pr-june-22",
  },
  {
    date: "June 18, 2025",
    day: "Wednesday",
    title: "Tried meal prepping for the first time and it actually saved me",
    excerpt:
      "Spent 90 minutes on Sunday and had lunch sorted for the entire week. Why did nobody tell me this earlier.",
    tag: "Food",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
    readTime: "5 min",
    slug: "meal-prep-first-time",
  },
  {
    date: "June 14, 2025",
    day: "Saturday",
    title: "A really hard week, and what got me through it",
    excerpt:
      "Not every entry can be a highlight reel. This week was tough at work, and I want to talk about it honestly.",
    tag: "Real talk",
    image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=500&q=80",
    readTime: "6 min",
    slug: "hard-week-honest",
  },
  {
    date: "June 9, 2025",
    day: "Monday",
    title: "New plant baby alert — apartment is slowly becoming a jungle",
    excerpt:
      "Bought a monstera and a snake plant this weekend. My apartment finally feels like home.",
    tag: "Room",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
    readTime: "2 min",
    slug: "new-plant-baby",
  },
];

export default function JournalPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Daily journal
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            What I&apos;ve been up to
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            Short, honest entries from my actual life. No production, no 
            staging — just whatever happened that day, written the way I&apos;d 
            tell a friend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/journal/${entry.slug}`}
              className="group block"
            >
              <div className="img-zoom relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-soft">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="tag-pill bg-cream/90 text-charcoal">{entry.tag}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={11} className="text-muted-gray" />
                <span className="text-[11px] text-muted-gray">
                  {entry.day}, {entry.date}
                </span>
              </div>
              <h2 className="font-display text-lg font-medium text-charcoal leading-snug mb-2 group-hover:text-warm-gray transition-colors">
                {entry.title}
              </h2>
              <p className="text-warm-gray text-sm leading-relaxed line-clamp-2 mb-2">
                {entry.excerpt}
              </p>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
                <Clock size={10} /> {entry.readTime} read
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
