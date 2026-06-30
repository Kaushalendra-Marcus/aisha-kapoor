"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";

const perks = [
  "Weekly routine roundup — what I ate, wore, watched",
  "Gym & fitness notes straight from my journal",
  "Early access to new blog posts",
  "Free wallpapers & digital downloads",
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="section-padding bg-dark-brown text-cream overflow-hidden">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-2xl bg-cream/10 flex items-center justify-center mx-auto mb-8"
          >
            <Mail size={20} className="text-cream/70" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] tracking-[0.18em] uppercase text-cream/40 font-medium mb-3"
          >
            Newsletter
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-md text-cream mb-4 leading-tight"
          >
            A little piece of my week,{" "}
            <em className="text-cream/50 font-light">in your inbox</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 text-sm leading-relaxed mb-8"
          >
            No spam. No brand deals disguised as content. Just real stuff — 
            what I&apos;m thinking, doing, wearing, eating. Sundays, usually.
          </motion.p>

          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-2.5 text-left max-w-sm mx-auto mb-10"
          >
            {perks.map((perk) => (
              <div key={perk} className="flex items-start gap-3">
                <Check size={13} className="text-accent-warm mt-0.5 flex-shrink-0" />
                <span className="text-xs text-cream/60">{perk}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check size={20} className="text-green-400" />
                </div>
                <p className="font-display text-xl text-cream">You&apos;re in ✨</p>
                <p className="text-xs text-cream/50">
                  Welcome! Check your inbox — I just sent you something.
                </p>
              </div>
            ) : (
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="flex-1 bg-cream/8 border border-cream/15 text-cream placeholder:text-cream/30 rounded-full px-5 py-3 text-sm outline-none focus:border-cream/40 transition-colors"
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex items-center gap-2 px-5 py-3 bg-cream text-charcoal text-sm font-medium rounded-full hover:bg-off-white transition-colors disabled:opacity-60 flex-shrink-0"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            )}
            <p className="text-[10px] text-cream/25 mt-4">
              2,847 readers · No spam, ever · Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
