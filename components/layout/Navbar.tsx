"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/outfits", label: "Outfits" },
  { href: "/gym", label: "Gym" },
  { href: "/recipes", label: "Recipes" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/collabs", label: "Collabs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-cream/90 backdrop-blur-md border-b border-light-gray/60 shadow-soft"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-display text-[1.35rem] font-medium tracking-[-0.01em] text-charcoal group-hover:text-dark-brown transition-colors">
              Aisha Kapoor
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-muted-gray font-body font-medium">
              Life in Bangalore
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-charcoal"
                    : "text-warm-gray hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/collabs" className="btn-ghost text-xs py-2 px-5">
              Work with me
            </Link>
            <Link href="/#newsletter" className="btn-primary text-xs py-2 px-5">
              Subscribe
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col pt-24 pb-10 px-8"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-4 border-b border-light-gray font-display text-2xl font-light ${
                      pathname === link.href ? "text-charcoal" : "text-warm-gray"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Link href="/#newsletter" onClick={() => setMenuOpen(false)} className="btn-primary justify-center">
                Subscribe to Newsletter
              </Link>
              <Link href="/collabs" onClick={() => setMenuOpen(false)} className="btn-ghost justify-center">
                Work with me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
