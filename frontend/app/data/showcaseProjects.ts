import { Project } from "@/app/utils/projectTypes";

// Shown when a local database has not been seeded yet. These make the
// showcase immediately reviewable and can be replaced by API-managed projects.
export const sampleProjects: Project[] = [
  {
    id: "sample-focusflow",
    title: "FocusFlow",
    slug: "focusflow",
    shortDescription: "A gentle study planner built around focused work sessions.",
    description:
      "FocusFlow helps students turn a large assignment into a calm, achievable plan. Create a task, choose a focus block, and keep a short history of completed sessions.",
    authorName: "Maya Rodriguez",
    techStack: "Next.js, TypeScript, Tailwind CSS",
    websiteUrl: "https://example.com/focusflow",
    githubUrl: "https://github.com/bc-compsci-club",
    imageSrc: "/images/showcase/focusflow-study-desk.png",
    coverTheme: "rose",
    featured: true,
    isActive: true,
  },
  {
    id: "sample-campus-cart",
    title: "Campus Cart",
    slug: "campus-cart",
    shortDescription: "Find affordable meals and groceries near campus.",
    description:
      "Campus Cart is a map-first guide to student-friendly food options. It groups places by walk time and lets members save a short list for busy days.",
    authorName: "Jordan Lee",
    techStack: "React, Node.js, PostgreSQL",
    websiteUrl: "https://example.com/campus-cart",
    githubUrl: "https://github.com/bc-compsci-club",
    imageSrc: "/images/showcase/campus-cart-groceries.png",
    coverTheme: "gold",
    featured: false,
    isActive: true,
  },
  {
    id: "sample-weather-window",
    title: "Weather Window",
    slug: "weather-window",
    shortDescription: "A focused forecast for planning your commute.",
    description:
      "Weather Window gives students a quick read on today’s conditions, rain windows, and the best time to leave for campus—without the noise of a full weather dashboard.",
    authorName: "Avery Chen",
    techStack: "JavaScript, Weather API, CSS",
    websiteUrl: "https://example.com/weather-window",
    githubUrl: "https://github.com/bc-compsci-club",
    imageSrc: "/images/showcase/weather-window-commute.png",
    coverTheme: "sky",
    featured: false,
    isActive: true,
  },
  {
    id: "sample-budget-bites",
    title: "Budget Bites",
    slug: "budget-bites",
    shortDescription: "Small spending insights for the week ahead.",
    description:
      "Budget Bites turns a handful of purchases into a simple weekly picture. The prototype keeps categories approachable and shows one useful next step instead of a wall of charts.",
    authorName: "Nia Williams",
    techStack: "Python, Flask, Chart.js",
    websiteUrl: "https://example.com/budget-bites",
    githubUrl: "https://github.com/bc-compsci-club",
    imageSrc: "/images/showcase/budget-bites-desk.png",
    coverTheme: "violet",
    featured: false,
    isActive: true,
  },
];

export function projectBySlug(slug: string) {
  return sampleProjects.find((project) => project.slug === slug);
}
