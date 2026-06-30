"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sun, Coffee, Laptop, Utensils, Dumbbell, Moon, Clock } from "lucide-react";

interface TimelineItem {
  id: string;
  time: string;
  label: string;
  icon: any;
  title: string;
  subtitle: string;
  desc: string;
  quote: string;
  image: string;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "morning",
    time: "07:15 AM",
    label: "Rise",
    icon: Sun,
    title: "Rise & Align",
    subtitle: "Mornings are for quiet resets",
    desc: "I wake up naturally without an alarm most days. Before looking at my phone, I open the curtains to let the Bangalore sunlight fill my apartment, water my Monstera (Monty), and do a quick 10-minute stretch on my mat. It's the only time of day when nothing is expected of me.",
    quote: "Keeping the first hour of the day offline changed everything for my mental health.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    color: "bg-[#FAF6F0]",
  },
  {
    id: "coffee",
    time: "07:30 AM",
    label: "Brew",
    icon: Coffee,
    title: "The Coffee Ritual",
    subtitle: "Sugar-free oat latte, hand-frothed",
    desc: "Making coffee is my love language to myself. I weigh my beans, grind them fresh, and steam organic oat milk with a tiny frother. I don't use sugar—just high-quality espresso and creamy oat milk. I sip it slowly while writing down three things I'm grateful for in my journal.",
    quote: "A perfect latte is 80% patience and 20% froth. Highly non-negotiable.",
    image: "https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?w=800&q=80",
    color: "bg-[#F5EFE6]",
  },
  {
    id: "office",
    time: "09:30 AM",
    label: "Work",
    icon: Laptop,
    title: "The 9-to-6 Grind",
    subtitle: "Writing React code at a software company",
    desc: "My day job is corporate and fast-paced. I log in around 9:30 AM, wear my Sony noise-canceling headphones, and dive into solving tickets, reviewing pull requests, and building dashboard features. I love what I do—it keeps my logical mind sharp, but it's demanding.",
    quote: "Yes, I code in React. No, I still haven't figured out why CSS centering is sometimes a mystery.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    color: "bg-[#EEF0F5]",
  },
  {
    id: "lunch",
    time: "01:00 PM",
    label: "Savor",
    icon: Utensils,
    title: "Savoring Lunch",
    subtitle: "Home-cooked meal prep bowl",
    desc: "I try to cook all my lunches. On Sundays, I spend 90 minutes prepping brown rice, spiced yellow dal, sautéed broccoli, and grilled tofu. In the office, grabbing my pre-made container removes all decision fatigue. Eating clean gives me the energy to survive the afternoon coding meetings.",
    quote: "Meal prep is the ultimate gift your past self gives your future self.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    color: "bg-[#F0F5EE]",
  },
  {
    id: "gym",
    time: "06:00 PM",
    label: "Train",
    icon: Dumbbell,
    title: "Gym Therapy",
    subtitle: "Heavy squats & iron strength",
    desc: "When 6 PM hits, I log off and head straight to the gym. Heavy lifting is where I release all the office tension. Leg day is my absolute favorite—I recently squatted 80kg! When I'm under the barbell, the bugs in my code vanish, and I focus entirely on my breath and form.",
    quote: "The gym doesn't just build my muscles; it builds a quiet resilience that I bring into everything else.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    color: "bg-[#EDE8E0]",
  },
  {
    id: "night",
    time: "09:30 PM",
    label: "Unwind",
    icon: Moon,
    title: "Bedtime Reset",
    subtitle: "Simple skincare & physical books",
    desc: "By 9:30 PM, the screens go away. I wash off the day's sunscreen, do my simple 3-step evening skincare (salicylic cleanser, gel moisturizer, spot cream), and dim the lights. I read a real, physical book (currently into slow fiction) until my eyes get heavy. Sleep by 11 PM.",
    quote: "No phones in bed. Just warm lighting, fresh sheets, and a good story to dream on.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    color: "bg-[#F5EEF0]",
  },
];

export function DayInTheLife() {
  const [activeTab, setActiveTab] = useState<string>("morning");

  const activeItem = timelineData.find((item) => item.id === activeTab) || timelineData[0];

  return (
    <section className="section-padding bg-cream border-t border-light-gray/40 relative overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-soft-pink/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-warm/10 blur-[120px] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-3">
            A day in my life
          </p>
          <h2 className="font-display text-display-md text-charcoal leading-tight">
            How I spend my{" "}
            <br />
            <em className="text-accent-rose font-light">ordinary hours</em>
          </h2>
          <p className="text-warm-gray text-sm leading-relaxed mt-4 max-w-md">
            I work a full-time 9-to-6 job. But outside those hours, I build a life 
            that feels like mine. Click through to walk through a typical day with me.
          </p>
        </div>

        {/* Tab Controls (Apple-style pill selector) */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="flex bg-off-white/80 backdrop-blur-sm p-1.5 rounded-full border border-light-gray/60 flex-nowrap">
            {timelineData.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 select-none whitespace-nowrap ${
                    isActive ? "text-charcoal" : "text-warm-gray hover:text-charcoal"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-cream rounded-full shadow-soft border border-light-gray/20"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={13} className={isActive ? "text-accent-rose" : "text-muted-gray"} />
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-50 hidden sm:inline">({item.time.split(" ")[0]})</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Narrative Card */}
        <div className="relative min-h-[500px] lg:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch rounded-3xl p-8 lg:p-12 ${activeItem.color} transition-colors duration-500 shadow-soft border border-light-gray/40`}
            >
              {/* Text Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-accent-warm mb-4">
                    <Clock size={12} />
                    <span>{activeItem.time}</span>
                  </div>
                  <h3 className="font-display text-display-sm text-charcoal leading-tight mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs font-medium text-warm-gray tracking-wide uppercase mb-6">
                    {activeItem.subtitle}
                  </p>
                  <p className="text-warm-gray text-sm leading-relaxed font-light mb-8 lg:mb-12">
                    {activeItem.desc}
                  </p>
                </div>

                {/* Quote */}
                <div className="border-l-2 border-accent-rose/30 pl-4 py-1 mt-auto">
                  <p className="font-display italic text-[15px] text-charcoal/80 leading-relaxed">
                    &ldquo;{activeItem.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Graphic Side */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[300px] rounded-2xl overflow-hidden shadow-medium bg-cream">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
