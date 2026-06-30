import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Gym",
  description:
    "Aisha's gym journey, routine, progress and the exact gear she uses — headphones, shaker, shoes, supplements and more.",
};

const stats = [
  { value: "4×", label: "Per week" },
  { value: "80kg", label: "Squat PR" },
  { value: "8 mo", label: "Consistent" },
  { value: "55kg", label: "Bodyweight" },
];

const split = [
  { day: "Monday", focus: "Push (chest, shoulders, triceps)" },
  { day: "Wednesday", focus: "Pull (back, biceps)" },
  { day: "Friday", focus: "Legs (squats, hip thrusts, calves)" },
  { day: "Saturday", focus: "Full body / accessories" },
];

const essentials = [
  { name: "JBL Tune 520BT headphones", category: "Audio", price: "₹2,499" },
  { name: "Boldfit protein shaker bottle", category: "Gear", price: "₹399" },
  { name: "Under Armour training shoes", category: "Footwear", price: "₹4,999" },
  { name: "Cultsport high-waist leggings", category: "Apparel", price: "₹1,499" },
  { name: "Mamaearth whey protein", category: "Supplements", price: "₹2,199" },
  { name: "Resistance band set", category: "Gear", price: "₹599" },
];

export default function GymPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Gym & fitness
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Gym is my therapy
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            Started October 2023 to get out of my own head after work. No 
            coaches, no fancy programs — just YouTube, patience, and a lot of 
            protein. This is everything about how I train.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card text-center">
              <p className="font-condensed text-3xl text-charcoal mb-1">{stat.value}</p>
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-gray">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Image */}
          <div className="img-zoom relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
              alt="Aisha at the gym"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Split */}
          <div className="order-1 lg:order-2">
            <h2 className="font-condensed text-poster-md text-charcoal mb-6 leading-[0.95]">
              My weekly split
            </h2>
            <div className="space-y-0 mb-10">
              {split.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between py-4 border-b border-light-gray"
                >
                  <span className="text-sm font-medium text-charcoal w-24 flex-shrink-0">
                    {item.day}
                  </span>
                  <span className="text-sm text-warm-gray text-right">{item.focus}</span>
                </div>
              ))}
            </div>
            <p className="text-warm-gray text-sm leading-relaxed">
              Sundays and Tuesdays/Thursdays are rest or light cardio days. I 
              track everything in a notes app — nothing fancy, just sets, reps, 
              and how I felt.
            </p>
          </div>
        </div>

        {/* Essentials */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Trophy size={14} className="text-accent-warm" />
            <h2 className="font-condensed text-poster-md text-charcoal leading-[0.95]">
              Gym essentials I actually use
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {essentials.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex items-center justify-between bg-off-white rounded-2xl p-5 hover:shadow-card transition-shadow duration-300"
              >
                <div>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-muted-gray mb-1">
                    {item.category}
                  </p>
                  <p className="text-sm font-medium text-charcoal mb-1">{item.name}</p>
                  <p className="text-xs text-warm-gray">{item.price}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-muted-gray group-hover:text-charcoal group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
