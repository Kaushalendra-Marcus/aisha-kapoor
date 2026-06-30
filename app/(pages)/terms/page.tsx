import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for aishakapoor.in",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site max-w-2xl">
        <p className="text-[11px] tracking-[0.18em] uppercase text-muted-gray font-medium mb-4">
          Legal
        </p>
        <h1 className="font-display text-display-md text-charcoal mb-8">Terms of Use</h1>
        <div className="space-y-6 text-warm-gray text-sm leading-relaxed font-light">
          <p>Last updated: June 2026</p>
          <p>
            By using this website, you agree to use its content for personal, 
            non-commercial purposes only. All recipes, journal entries, blog 
            content, photography and downloadable resources are the property 
            of Aisha Kapoor unless otherwise stated, and may not be reproduced 
            or redistributed without permission.
          </p>
          <p>
            Recommendations and reviews on this site reflect personal opinion 
            and experience. Affiliate links are used throughout, and we may 
            earn a commission from qualifying purchases. This site is not 
            responsible for the products or services offered by third-party 
            retailers linked from this site.
          </p>
          <p>
            Premium digital products sold through this site are for personal 
            use only and are non-refundable once downloaded, except where 
            required by law.
          </p>
          <p>
            We reserve the right to update these terms at any time. Continued 
            use of the site after changes constitutes acceptance of the 
            updated terms.
          </p>
        </div>
      </div>
    </div>
  );
}
