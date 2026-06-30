import type { Metadata } from "next";
import Image from "next/image";
import { AboutTimeline } from "@/components/sections/AboutTimeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hi, I'm Aisha Kapoor — 23, Bangalore, software engineer by day and lifestyle creator by passion. This is the full story.",
};



const facts = [
  { label: "Age", value: "23" },
  { label: "City", value: "Bangalore" },
  { label: "Job", value: "Software Engineer" },
  { label: "MBTI", value: "INFJ-T" },
  { label: "Coffee order", value: "Oat latte, no sugar" },
  { label: "Workout days", value: "4x / week" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        {/* Hero */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            About me
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Hi, I&apos;m Aisha.
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            I&apos;m a 23-year-old software engineer living in Bangalore who happens 
            to document her life online. Not a model, not a celebrity — just 
            someone who got tired of Instagram&apos;s highlight reel and decided to 
            share the real, unfiltered version instead.
          </p>
        </div>

        {/* Image + facts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-24">
          <div className="lg:col-span-2 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-warm">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
              alt="Aisha Kapoor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-5 content-start">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-off-white rounded-2xl p-5">
                <p className="text-[10px] tracking-[0.12em] uppercase text-muted-gray mb-1.5">
                  {fact.label}
                </p>
                <p className="font-display text-lg font-medium text-charcoal">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="max-w-2xl mb-24 space-y-5 text-warm-gray text-[15px] leading-relaxed font-light">
          <h2 className="font-condensed text-poster-md text-charcoal mb-4 leading-[0.95]">
            How this all started
          </h2>
          <p>
            I moved to Bangalore in 2021 for my first job out of college. The 
            transition was rough — new city, new job, no friends, and a work 
            schedule that left no room for anything else. I started posting on 
            Instagram mostly to keep my family updated, and somewhere along the 
            way, strangers started relating to the small, ordinary moments I 
            was sharing.
          </p>
          <p>
            The gym came later, in October 2023, as a way to get out of my own 
            head after long work days. It became one of the few things I&apos;m 
            genuinely consistent about. Cooking came from missing home food. 
            The coffee obsession — honestly, no excuse needed for that one.
          </p>
          <p>
            This website exists because Instagram is rented land. Algorithms 
            change, accounts get shadowbanned, platforms come and go. I wanted 
            one place that&apos;s entirely mine — where I can write longer, share 
            more honestly, and build something that lasts beyond a 24-hour story.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="font-condensed text-poster-md text-charcoal mb-12 leading-[0.95] text-center">
            A quick timeline
          </h2>
          <AboutTimeline />
        </div>
      </div>
    </div>
  );
}
