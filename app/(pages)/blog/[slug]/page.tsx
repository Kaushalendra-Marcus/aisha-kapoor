import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  {
    title: string;
    tag: string;
    readTime: string;
    date: string;
    image: string;
    intro: string;
    sections: { heading: string; paragraphs: string[] }[];
  }
> = {
  "honest-morning-routine": {
    title: "My honest morning routine — what I actually do vs. what I post",
    tag: "Lifestyle",
    readTime: "7 min",
    date: "June 26, 2025",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    intro:
      "The 5 AM wake-up, the 10-step skincare, the matcha? Yeah, about that. Here's what actually happens before I leave for office, no filter.",
    sections: [
      {
        heading: "The wake-up time nobody talks about",
        paragraphs: [
          "I wake up at 7:15, not 5 AM. I've tried the 5 AM thing three separate times in my life and each time I was a zombie by 2 PM. My body simply does not want to function before 7.",
          "The first 15 minutes are spent doing absolutely nothing productive — just lying there, scrolling, slowly accepting that the day has started.",
        ],
      },
      {
        heading: "Skincare: three steps, not ten",
        paragraphs: [
          "Face wash, moisturizer, sunscreen. That's it. I went through a phase of buying every K-beauty product on the internet and my skin actually got worse. Less really was more.",
          "On good days I'll add a vitamin C serum. On bad days I genuinely just splash water on my face and call it done.",
        ],
      },
      {
        heading: "Coffee, obviously",
        paragraphs: [
          "This part is real — I do make an oat latte every single morning, and it is genuinely the highlight of my morning, not staged content. I've timed it: it takes me 5 minutes start to finish.",
        ],
      },
      {
        heading: "The part that's never filmed",
        paragraphs: [
          "Most mornings involve me standing in front of my closet for way too long, deciding I have nothing to wear despite having a full closet, and eventually grabbing the same five outfits I always reach for.",
          "I leave the house at 8:40 for a 9:30 login, every single day, cutting it closer than I'd like to admit.",
        ],
      },
    ],
  },
  "budget-shopping-bangalore": {
    title: "Budget shopping in Bangalore — where I actually buy my clothes",
    tag: "Fashion",
    readTime: "5 min",
    date: "June 20, 2025",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80",
    intro:
      "Linking a ₹12K haul is easy. Here's where you can get the same vibe for ₹2,500, because not everyone has an influencer budget — including, often, me.",
    sections: [
      {
        heading: "Commercial Street and Chickpet",
        paragraphs: [
          "Most of my basics — plain tees, linen shirts, casual trousers — come from here. You have to dig a little, but the prices are unbeatable and the quality is often surprisingly good.",
        ],
      },
      {
        heading: "Thrift and resale apps",
        paragraphs: [
          "I've found some of my favorite pieces secondhand. It takes patience to scroll through listings, but the savings (and the sustainability angle) make it worth it.",
        ],
      },
      {
        heading: "Sale season strategy",
        paragraphs: [
          "I buy basics during End of Season Sale and save my full-price budget for the one or two statement pieces I actually want each season. This has genuinely cut my clothing spend in half.",
        ],
      },
    ],
  },
  "gym-consistency-work": {
    title: "How I stay consistent at the gym when I'm exhausted from work",
    tag: "Fitness",
    readTime: "6 min",
    date: "June 14, 2025",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1200&q=80",
    intro:
      "I don't have magic motivation. I have systems, and this post is all of them, laid out plainly.",
    sections: [
      {
        heading: "I never decide in the moment",
        paragraphs: [
          "If I wait until 6 PM to decide whether I feel like going to the gym, I will always say no. My gym days are decided on Sunday for the entire week, no exceptions, no negotiating with myself later.",
        ],
      },
      {
        heading: "The gym bag lives packed",
        paragraphs: [
          "Removing friction matters more than motivation. My gym bag stays packed by the door at all times so there's zero excuse about not having clean clothes or a charged headphone.",
        ],
      },
      {
        heading: "Lower the bar on bad days",
        paragraphs: [
          "On exhausted days, the rule isn't 'go hard' — it's 'just show up for 20 minutes.' Almost every time, I end up staying for the full session once I'm there. The hardest part is always just walking in.",
        ],
      },
    ],
  },
  "skincare-routine-oily-skin": {
    title: "My simple 5-step skincare routine for oily, acne-prone skin",
    tag: "Skincare",
    readTime: "8 min",
    date: "June 8, 2025",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
    intro:
      "I spent way too much money before figuring out my skin just needs five things, consistently, instead of fifteen things occasionally.",
    sections: [
      {
        heading: "Step 1–2: cleanse and tone",
        paragraphs: [
          "A gentle salicylic acid cleanser in the morning and evening, followed by an alcohol-free toner. This combination alone fixed most of my breakout issues within a month.",
        ],
      },
      {
        heading: "Step 3–4: treat and moisturize",
        paragraphs: [
          "A lightweight niacinamide serum, followed by an oil-free gel moisturizer. The biggest mistake I made for years was skipping moisturizer because my skin was oily — that actually made things worse.",
        ],
      },
      {
        heading: "Step 5: sunscreen, non-negotiable",
        paragraphs: [
          "Every single day, rain or shine, indoors or out. This one habit has done more for my skin than every expensive serum I've ever bought combined.",
        ],
      },
    ],
  },
  "budget-desk-setup": {
    title: "Office desk setup on a budget — under ₹20,000",
    tag: "Desk setup",
    readTime: "5 min",
    date: "May 30, 2025",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80",
    intro:
      "You don't need an aesthetic Pinterest desk to be productive. Here's mine, and exactly what it cost to put together.",
    sections: [
      {
        heading: "The desk and chair",
        paragraphs: [
          "An Ikea desk and a budget ergonomic chair made up the bulk of my spend, around ₹16,000 combined. Worth every rupee for the back support alone after years of WFH.",
        ],
      },
      {
        heading: "Lighting and small touches",
        paragraphs: [
          "A warm desk lamp and a small plant brought the whole space together for under ₹1,500. Lighting changed the feel of my entire room more than I expected.",
        ],
      },
    ],
  },
  "quit-aesthetic-instagram": {
    title: "Why I quit trying to look 'aesthetic' on Instagram",
    tag: "Real talk",
    readTime: "6 min",
    date: "May 22, 2025",
    image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=1200&q=80",
    intro:
      "Two years of color-coordinated grids burned me out completely. Here's what changed, and why I feel so much better now.",
    sections: [
      {
        heading: "The exhaustion of curating",
        paragraphs: [
          "I used to plan posts a week in advance, color-matching captions to my feed's palette. It took the joy out of actually living the moments I was supposed to be capturing.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "I started posting things the day they happened, with whatever lighting and outfit I actually had on. Engagement didn't drop — if anything, people responded more to the unpolished version of my life.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.intro,
    openGraph: { images: [{ url: post.image }] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="container-site max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium text-warm-gray hover:text-charcoal transition-colors mb-10 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>All blog posts</span>
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="tag-pill">{post.tag}</span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted-gray">
            <Clock size={11} /> {post.readTime}
          </span>
          <span className="text-[11px] text-muted-gray">{post.date}</span>
        </div>

        <h1 className="font-display text-display-md text-charcoal leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-warm-gray text-base leading-relaxed mb-10">{post.intro}</p>

        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-soft mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <div className="space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-display-sm text-charcoal mb-4 font-medium">
                {section.heading}
              </h2>
              <div className="space-y-4 text-warm-gray text-[15px] leading-relaxed font-light">
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
