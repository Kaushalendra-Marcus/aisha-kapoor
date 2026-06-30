import { MetadataRoute } from "next";

const baseUrl = "https://aishakapoor.in";

const staticRoutes = [
  "",
  "/about",
  "/journal",
  "/outfits",
  "/gym",
  "/recipes",
  "/shop",
  "/blog",
  "/downloads",
  "/collabs",
  "/contact",
  "/privacy",
  "/terms",
];

const journalSlugs = [
  "reset-sunday-june-28",
  "office-fun-june-25",
  "squat-pr-june-22",
  "meal-prep-first-time",
  "hard-week-honest",
  "new-plant-baby",
];

const blogSlugs = [
  "honest-morning-routine",
  "budget-shopping-bangalore",
  "gym-consistency-work",
  "skincare-routine-oily-skin",
  "budget-desk-setup",
  "quit-aesthetic-instagram",
];

const recipeSlugs = [
  "oat-latte",
  "jhalmuri",
  "egg-bowl",
  "masala-maggi",
  "meal-prep-bowl",
  "breakfast-smoothie",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const journalEntries = journalSlugs.map((slug) => ({
    url: `${baseUrl}/journal/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const recipeEntries = recipeSlugs.map((slug) => ({
    url: `${baseUrl}/recipes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...journalEntries, ...blogEntries, ...recipeEntries];
}
