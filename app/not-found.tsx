import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="font-display text-display-lg text-charcoal mb-4">404</p>
      <h1 className="font-display text-display-sm text-charcoal mb-4">
        This page wandered off somewhere
      </h1>
      <p className="text-warm-gray text-sm max-w-xs mb-8">
        Maybe it&apos;s at the gym, maybe it&apos;s getting coffee. Either way, it&apos;s not here.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
