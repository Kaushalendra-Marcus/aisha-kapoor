"use client";

const items = [
  "Morning Routine",
  "Oat Latte Girl ☕",
  "Office Life",
  "Leg Day",
  "Healthy Recipes",
  "Bangalore Diaries",
  "Minimal Living",
  "Night Routine",
  "OOTD",
  "Weekend Resets",
  "Skincare",
  "Real Life ✦",
];

export function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="py-5 bg-charcoal overflow-hidden select-none">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5"
          >
            <span className="font-display italic text-lg text-cream/60 font-light whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-cream/20 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
