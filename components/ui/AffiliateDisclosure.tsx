import { Info } from "lucide-react";
import { AFFILIATE_DISCLOSURE_LONG, AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate";

export function AffiliateDisclosure({ variant = "short" }: { variant?: "short" | "long" }) {
  const text = variant === "long" ? AFFILIATE_DISCLOSURE_LONG : AFFILIATE_DISCLOSURE_SHORT;
  return (
    <div className="flex items-start gap-2.5 rounded-2xl border border-light-gray/70 bg-off-white px-4 py-3.5 text-xs leading-relaxed text-warm-gray">
      <Info size={14} className="mt-0.5 flex-shrink-0 text-muted-gray" />
      <p>{text}</p>
    </div>
  );
}
