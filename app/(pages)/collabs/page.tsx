"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Youtube, TrendingUp, Users, Eye, Heart } from "lucide-react";

const metrics = [
  { icon: Users, value: "248K", label: "Instagram followers" },
  { icon: Youtube, value: "91K", label: "YouTube subscribers" },
  { icon: Eye, value: "2.3M", label: "Avg. monthly reach" },
  { icon: Heart, value: "5.8%", label: "Avg. engagement rate" },
];

const demographics = [
  { label: "Women", value: 78 },
  { label: "Men", value: 22 },
];

const ageGroups = [
  { range: "18–24", value: 38 },
  { range: "25–34", value: 41 },
  { range: "35–44", value: 15 },
  { range: "45+", value: 6 },
];

const pastWork = [
  "Skincare brand — Instagram reel campaign",
  "Fitness apparel — outfit feature + giveaway",
  "Home decor brand — room tour collaboration",
  "Coffee subscription — recurring content partner",
];

export default function CollabsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mb-20">
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
              Brand collaborations
            </p>
            <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
              Let&apos;s work together
            </h1>
            <p className="text-warm-gray text-base leading-relaxed max-w-lg">
              I partner with brands I&apos;d genuinely use myself — wellness, 
              fashion, home, and lifestyle. My audience trusts honest 
              recommendations over polished ads, and that&apos;s exactly what I deliver.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-warm">
            <Image
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&q=80"
              alt="Aisha Kapoor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-off-white rounded-2xl p-6"
              >
                <Icon size={16} className="text-muted-gray mb-4" />
                <p className="font-display text-3xl font-medium text-charcoal mb-1">
                  {metric.value}
                </p>
                <p className="text-xs text-warm-gray">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Audience demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-display-sm text-charcoal mb-6 font-medium">
              Audience by gender
            </h2>
            <div className="space-y-4">
              {demographics.map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-charcoal font-medium">{d.label}</span>
                    <span className="text-warm-gray">{d.value}%</span>
                  </div>
                  <div className="h-2 bg-warm-beige rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-accent-rose rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-display-sm text-charcoal mb-6 font-medium">
              Audience by age
            </h2>
            <div className="space-y-4">
              {ageGroups.map((d) => (
                <div key={d.range}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-charcoal font-medium">{d.range}</span>
                    <span className="text-warm-gray">{d.value}%</span>
                  </div>
                  <div className="h-2 bg-warm-beige rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-accent-warm rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past work */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={14} className="text-accent-warm" />
            <h2 className="font-display text-display-sm text-charcoal font-medium">
              Past collaborations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pastWork.map((work) => (
              <div
                key={work}
                className="bg-off-white rounded-xl px-5 py-4 text-sm text-charcoal"
              >
                {work}
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-lg bg-warm-beige rounded-3xl p-10">
          <h2 className="font-display text-display-sm text-charcoal mb-2 font-medium">
            Get in touch
          </h2>
          <p className="text-sm text-warm-gray mb-8">
            Tell me about your brand and what you have in mind — I&apos;ll get back 
            to you within 2–3 business days.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Brand name"
              className="w-full bg-cream border border-light-gray rounded-xl px-4 py-3 text-sm outline-none focus:border-charcoal transition-colors"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full bg-cream border border-light-gray rounded-xl px-4 py-3 text-sm outline-none focus:border-charcoal transition-colors"
            />
            <textarea
              placeholder="Tell me about the collaboration"
              rows={4}
              className="w-full bg-cream border border-light-gray rounded-xl px-4 py-3 text-sm outline-none focus:border-charcoal transition-colors resize-none"
            />
            <button type="button" className="btn-primary w-full justify-center">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
