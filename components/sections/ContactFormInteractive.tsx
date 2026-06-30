"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function ContactFormInteractive() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setShowToast(false);
        setStatus("idle");
      }, 4000);
    }, 1200);
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-5 sm:right-8 z-50 glass bg-cream/95 text-charcoal border border-accent-rose/30 px-6 py-4 rounded-2xl shadow-large max-w-sm flex items-start gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-accent-rose/10 text-accent-rose flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle size={14} className="text-accent-rose" />
            </div>
            <div>
              <p className="text-xs font-semibold text-charcoal">Message Sent!</p>
              <p className="text-[11px] text-warm-gray mt-1 leading-relaxed">
                Thanks for reaching out! Aisha will review your message and write back soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-off-white rounded-3xl p-8 sm:p-10 border border-light-gray/40 shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-medium text-charcoal mb-1.5 block">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "submitting"}
              className="w-full bg-cream border border-light-gray rounded-xl px-4 py-3 text-sm outline-none focus:border-charcoal transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-charcoal mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="w-full bg-cream border border-light-gray rounded-xl px-4 py-3 text-sm outline-none focus:border-charcoal transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-charcoal mb-1.5 block">Message</label>
            <textarea
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "submitting"}
              className="w-full bg-cream border border-light-gray rounded-xl px-4 py-3 text-sm outline-none focus:border-charcoal transition-colors resize-none disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full justify-center disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cream animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-cream animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-cream animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
