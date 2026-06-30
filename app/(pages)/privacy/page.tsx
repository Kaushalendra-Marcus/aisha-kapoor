import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for aishakapoor.in",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site max-w-2xl">
        <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
          Legal
        </p>
        <h1 className="font-display text-display-md text-charcoal mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-warm-gray text-sm leading-relaxed font-light">
          <p>Last updated: June 2026</p>
          <p>
            This website collects limited personal information, primarily the 
            email address you provide when subscribing to the newsletter or 
            downloading a free resource. This information is used only to send 
            you the content you signed up for and is never sold to third parties.
          </p>
          <p>
            We use standard analytics tools to understand how visitors use the 
            site, which may collect non-identifying information such as browser 
            type, pages visited, and time spent on the site.
          </p>
          <p>
            Product links on this site are affiliate links. If you make a 
            purchase through one of these links, we may earn a small commission 
            at no additional cost to you. This does not affect which products 
            are recommended — all recommendations reflect genuine, personal use.
          </p>
          <p>
            You can unsubscribe from the newsletter at any time using the link 
            provided in every email. To request deletion of your data, contact 
            hello@aishakapoor.in.
          </p>
        </div>
      </div>
    </div>
  );
}
