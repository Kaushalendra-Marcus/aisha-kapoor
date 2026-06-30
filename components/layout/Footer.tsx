import Link from "next/link";
import { Instagram, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Life: [
    { label: "Journal", href: "/journal" },
    { label: "Outfits", href: "/outfits" },
    { label: "Gym", href: "/gym" },
    { label: "Recipes", href: "/recipes" },
  ],
  Discover: [
    { label: "Blog", href: "/blog" },
    { label: "Shop", href: "/shop" },
    { label: "Downloads", href: "/downloads" },
    { label: "About", href: "/about" },
  ],
  Connect: [
    { label: "Newsletter", href: "/#newsletter" },
    { label: "Brand Collabs", href: "/collabs" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark-brown text-cream/70 pt-20 pb-10">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-4">
              <span className="font-display text-2xl text-cream font-light tracking-tight">
                Aisha Kapoor
              </span>
            </Link>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs mb-6">
              23. Bangalore. Software job by day, content creator by heart.
              Documenting real life, one ordinary day at a time.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/aishakapoor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream/60 hover:text-cream transition-all duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://youtube.com/@aishakapoor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream/60 hover:text-cream transition-all duration-200"
              >
                <Youtube size={15} />
              </a>
              <a
                href="mailto:hello@aishakapoor.in"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream/60 hover:text-cream transition-all duration-200"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-medium tracking-[0.14em] uppercase text-cream/30 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/55 hover:text-cream/90 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Aisha Kapoor. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
              Terms
            </Link>
            <span className="text-xs text-cream/20">Bangalore, India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
