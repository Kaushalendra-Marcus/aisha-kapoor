import type { Metadata } from "next";
import { Download, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Free wallpapers, planners, and templates from Aisha — plus premium digital products like the workout planner and habit tracker.",
};

const freebies = [
  {
    name: "Phone wallpaper pack — neutral tones",
    desc: "10 minimal wallpapers in cream, beige and soft pink.",
    badge: "Free",
  },
  {
    name: "Desktop wallpaper pack",
    desc: "5 calming desktop backgrounds for your workspace.",
    badge: "Free",
  },
  {
    name: "Printable weekly planner",
    desc: "A simple, undated weekly planner — print and reuse.",
    badge: "Free",
  },
];

const premium = [
  {
    name: "The Habit Tracker",
    desc: "A 90-day digital habit tracker with reflection prompts, the exact one I use.",
    price: "₹199",
  },
  {
    name: "Gym Progress Planner",
    desc: "Track sets, reps, PRs and progress photos in one organized template.",
    price: "₹249",
  },
  {
    name: "Notion Life Dashboard",
    desc: "My actual Notion setup — routines, budget, goals, all in one workspace.",
    price: "₹499",
  },
  {
    name: "Budget Planner (Google Sheets)",
    desc: "The exact spreadsheet I use to track monthly spending and savings goals.",
    price: "₹149",
  },
];

export default function DownloadsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
            Downloads
          </p>
          <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
            Free & premium tools
          </h1>
          <p className="text-warm-gray text-base leading-relaxed">
            A few of the things I made for myself first — planners, trackers, 
            wallpapers — now available for you too. Free ones need just an 
            email, premium ones are a one-time purchase.
          </p>
        </div>

        {/* Free section */}
        <div className="mb-20">
          <h2 className="font-display text-display-sm text-charcoal mb-8 font-medium">
            Free downloads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {freebies.map((item) => (
              <div key={item.name} className="bg-off-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="tag-pill">{item.badge}</span>
                  <Download size={15} className="text-muted-gray" />
                </div>
                <h3 className="text-sm font-medium text-charcoal mb-2">{item.name}</h3>
                <p className="text-xs text-warm-gray leading-relaxed mb-6">{item.desc}</p>
                <button className="btn-ghost w-full justify-center text-xs py-2.5">
                  Get for free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Premium section */}
        <div>
          <h2 className="font-display text-display-sm text-charcoal mb-8 font-medium">
            Premium products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {premium.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between bg-charcoal text-cream rounded-2xl p-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lock size={11} className="text-cream/40" />
                    <span className="text-[10px] tracking-[0.1em] uppercase text-cream/40">
                      Premium
                    </span>
                  </div>
                  <h3 className="text-sm font-medium mb-1.5">{item.name}</h3>
                  <p className="text-xs text-cream/50 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
                <div className="text-right flex-shrink-0 pl-4">
                  <p className="font-display text-xl mb-2">{item.price}</p>
                  <button className="text-xs font-medium bg-cream text-charcoal rounded-full px-4 py-2 hover:bg-off-white transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
