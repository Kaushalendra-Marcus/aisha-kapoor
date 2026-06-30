import type { Metadata } from "next";
import { Mail, Instagram, Youtube } from "lucide-react";
import { ContactFormInteractive } from "@/components/sections/ContactFormInteractive";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aisha Kapoor for collaborations, questions, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
              Get in touch
            </p>
            <h1 className="font-display text-display-lg text-charcoal leading-[1.0] mb-6">
              Say hi
            </h1>
            <p className="text-warm-gray text-base leading-relaxed mb-10 max-w-md">
              Whether it&apos;s a brand inquiry, a question about something I 
              posted, or you just want to share your own oat latte recipe — 
              I read everything that comes through here.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@aishakapoor.in"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-off-white flex items-center justify-center group-hover:bg-warm-beige transition-colors">
                  <Mail size={15} className="text-charcoal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <p className="text-xs text-warm-gray">hello@aishakapoor.in</p>
                </div>
              </a>
              <a
                href="https://instagram.com/aishakapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-off-white flex items-center justify-center group-hover:bg-warm-beige transition-colors">
                  <Instagram size={15} className="text-charcoal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Instagram</p>
                  <p className="text-xs text-warm-gray">@aishakapoor</p>
                </div>
              </a>
              <a
                href="https://youtube.com/@aishakapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-off-white flex items-center justify-center group-hover:bg-warm-beige transition-colors">
                  <Youtube size={15} className="text-charcoal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">YouTube</p>
                  <p className="text-xs text-warm-gray">@aishakapoor</p>
                </div>
              </a>
            </div>
          </div>

          <ContactFormInteractive />
        </div>
      </div>
    </div>
  );
}
