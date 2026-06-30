import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Aisha Kapoor — Life in Bangalore",
    template: "%s | Aisha Kapoor",
  },
  description:
    "23-year-old Bangalore girl documenting real everyday life — morning routines, office days, gym, recipes, and small happy moments.",
  keywords: [
    "Aisha Kapoor",
    "lifestyle blogger India",
    "Bangalore influencer",
    "daily routine",
    "Indian lifestyle creator",
    "fitness routine India",
    "minimalist lifestyle",
  ],
  authors: [{ name: "Aisha Kapoor" }],
  creator: "Aisha Kapoor",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aishakapoor.in",
    siteName: "Aisha Kapoor",
    title: "Aisha Kapoor — Life in Bangalore",
    description:
      "Real life, honestly documented. Morning routines, office, gym, recipes & more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aisha Kapoor — Life in Bangalore",
    description: "Real life, honestly documented.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
