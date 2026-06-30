import { HeroSection } from "@/components/sections/HeroSection";
import { TodaySection } from "@/components/sections/TodaySection";
import { DayInTheLife } from "@/components/sections/DayInTheLife";
import { LatestJournal } from "@/components/sections/LatestJournal";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { OutfitOfWeek } from "@/components/sections/OutfitOfWeek";
import { RecipesPreview } from "@/components/sections/RecipesPreview";
import { GymSection } from "@/components/sections/GymSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ShopFavorites } from "@/components/sections/ShopFavorites";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TodaySection />
      <DayInTheLife />
      <MarqueeSection />
      <AboutTeaser />
      <LatestJournal />
      <InstagramSection />
      <OutfitOfWeek />
      <RecipesPreview />
      <GymSection />
      <ShopFavorites />
      <BlogPreview />
      <NewsletterSection />
    </>
  );
}
