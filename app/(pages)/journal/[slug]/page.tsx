import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { notFound } from "next/navigation";

const entries: Record<
  string,
  {
    date: string;
    day: string;
    title: string;
    tag: string;
    image: string;
    readTime: string;
    body: string[];
  }
> = {
  "reset-sunday-june-28": {
    date: "June 28, 2025",
    day: "Saturday",
    title: "Reset Sunday — cleaned everything, made jhalmuri, felt human again",
    tag: "Weekend",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    readTime: "3 min",
    body: [
      "Woke up at 9 today, which for me is basically sleeping in. No alarm, no rushing, just light coming through the curtains and the sound of the building slowly waking up around me.",
      "I did a full room reset — changed the bedsheets, wiped down the desk, watered the plants, did the laundry I'd been avoiding for a week. There's something almost meditative about cleaning when you're not in a hurry.",
      "Made chai around noon, and then jhalmuri in the evening because I was craving something from home. Spent the rest of the day reading and not looking at my phone much. No content was made. No photos were staged. Just a normal, quiet, good day.",
      "I think we don't talk enough about how good a boring weekend can feel when the rest of your week is loud.",
    ],
  },
  "office-fun-june-25": {
    date: "June 25, 2025",
    day: "Wednesday",
    title: "Office was actually fun today — we had a team lunch and I tried not to be awkward",
    tag: "Office life",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    readTime: "4 min",
    body: [
      "We finally had the team lunch everyone had been talking about for weeks. New restaurant near the office, the kind with overpriced pasta and good ambient lighting.",
      "I ordered the pasta (obviously) and somehow ended up talking too much about my gym routine to my manager, who I'm pretty sure now thinks I only think about squats. Which, fair.",
      "It's easy to forget that office life can have good days too — not every entry needs to be about burnout or Monday dread. Today was just nice. Good food, good people, and I left feeling lighter than when I walked in.",
    ],
  },
  "squat-pr-june-22": {
    date: "June 22, 2025",
    day: "Sunday",
    title: "Hit a new PR on squats 🎉 — and my legs haven't forgiven me since",
    tag: "Gym",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    readTime: "2 min",
    body: [
      "80kg squat. Finally. Three months of being stuck at 72.5kg and today it just happened — clean depth, no shake, no spotter panic.",
      "I genuinely teared up a little at the rack. Not dramatic crying, just the kind of emotional release that happens when something you've worked at quietly for months finally clicks.",
      "My legs, however, have not been so gracious about it. Walking down stairs today felt like a personal attack. Worth it.",
    ],
  },
  "meal-prep-first-time": {
    date: "June 18, 2025",
    day: "Wednesday",
    title: "Tried meal prepping for the first time and it actually saved me",
    tag: "Food",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
    readTime: "5 min",
    body: [
      "Spent about 90 minutes on Sunday cooking rice, dal, a vegetable sabzi, and grilling some chicken. Portioned everything into containers and put them in the fridge.",
      "I've heard people talk about meal prep for years and always assumed it would feel like a chore. It didn't. Having lunch sorted every day this week removed so much decision fatigue — I just grabbed a container and microwaved it.",
      "Why did nobody tell me this earlier. This is going in the permanent rotation.",
    ],
  },
  "hard-week-honest": {
    date: "June 14, 2025",
    day: "Saturday",
    title: "A really hard week, and what got me through it",
    tag: "Real talk",
    image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=1200&q=80",
    readTime: "6 min",
    body: [
      "Not every entry can be a highlight reel, and I don't want this space to feel like one. This week was genuinely hard at work — tight deadlines, a difficult conversation with my manager, and just a general feeling of being stretched too thin.",
      "I almost skipped the gym twice but didn't, and weirdly those were the two sessions that helped the most. Not because exercise fixes everything, but because it gave me 45 minutes where I wasn't thinking about Jira tickets.",
      "I called my mom on Thursday night and cried a little, which I don't do often. It helped. I'm writing this on Saturday morning, coffee in hand, feeling considerably more okay than I did three days ago. That's really all I can say about hard weeks — they pass, slower than you'd like, but they pass.",
    ],
  },
  "new-plant-baby": {
    date: "June 9, 2025",
    day: "Monday",
    title: "New plant baby alert 🌱 — apartment is slowly becoming a jungle",
    tag: "Room",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&q=80",
    readTime: "2 min",
    body: [
      "Bought a monstera and a snake plant this weekend from a little nursery near HSR Layout. My apartment finally feels like a home and not just a place I sleep in between work and gym.",
      "The snake plant is going by the window in my room, and the monstera is taking over a corner near my desk. I've already named them, which my friends say is unhinged. I disagree.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(entries).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = entries[params.slug];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.body[0],
    openGraph: { images: [{ url: entry.image }] },
  };
}

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  const entry = entries[params.slug];
  if (!entry) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="container-site max-w-2xl">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-medium text-warm-gray hover:text-charcoal transition-colors mb-10 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>All journal entries</span>
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="tag-pill">{entry.tag}</span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
            <BookOpen size={11} /> {entry.day}, {entry.date}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
            <Clock size={11} /> {entry.readTime} read
          </span>
        </div>

        <h1 className="font-display text-display-md text-charcoal leading-tight mb-8">
          {entry.title}
        </h1>

        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-soft mb-10">
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <div className="space-y-5 text-warm-gray text-[15px] leading-relaxed font-light">
          {entry.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
