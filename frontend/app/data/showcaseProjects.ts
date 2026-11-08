import type { Project, ProjectBrowseResult } from "@/app/utils/projectTypes";
import { filterProjects } from "@/app/utils/showcaseSearch";
import projects from "./showcaseProjects.json";

const extraExamples: [string, string[], string][] = [
  ["Study Room Finder", ["Web"], "Find group study rooms by building, capacity, and time."],
  ["Campus Shuttle Tracker", ["Mobile"], "See sample shuttle arrivals and save a favorite stop."],
  ["Tab Tidy", ["Browser Extension"], "Group tabs by course and restore a saved study session."],
  ["Lab Partner Match", ["Web", "Mobile"], "Find classmates with matching lab availability."],
  ["Syllabus Sync", ["Web"], "Turn a sample syllabus into an assignment checklist."],
  ["Lecture Bookmark", ["Browser Extension"], "Save timestamps and notes while watching recorded lectures."],
  ["Quiet Campus", ["Mobile"], "Browse quiet study spots and compare their amenities."],
  ["Club Fair Map", ["Web", "Mobile"], "Plan a route past club tables at a sample campus fair."],
  ["Reading Queue", ["Web", "Browser Extension"], "Save articles and organize them by course."],
  ["Pocket Pantry", ["Mobile"], "Build a grocery list from pantry staples that are running low."],
  ["Office Hours Queue", ["Web"], "Join a virtual office-hours line and see how many students are ahead."],
  ["Code Snippet Shelf", ["Browser Extension"], "Save code snippets with searchable notes and tags."],
  ["Campus Accessibility Map", ["Web", "Mobile"], "Browse step-free routes and accessible campus entrances."],
  ["Flashcard Sprint", ["Mobile"], "Review flashcard sets and revisit cards that need practice."],
  ["Course Link Checker", ["Browser Extension"], "Spot broken links on a course page."],
  ["Hack Night Planner", ["Web"], "Organize project ideas, teams, and milestones for a club hack night."],
  ["Assignment Focus", ["Web", "Browser Extension"], "Pin an assignment and hide distracting page sections."],
  ["Book Swap Board", ["Web"], "Match used textbook offers with student wish lists."],
  ["Campus Photo Walk", ["Mobile"], "Follow a sample photo route and check off stops as you visit."],
];

const sampleProjects: Project[] = [
  ...projects,
  ...extraExamples.map(([title, categories, description], index): Project => {
    const media = projects[index % projects.length];
    return {
      title,
      slug: `sample-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      shortDescription: description,
      description,
      authorName: "BCCS Sample Team",
      techStack: categories.includes("Web") ? "TypeScript, Next.js"
        : categories.includes("Mobile") ? "React Native, TypeScript" : "JavaScript, WebExtensions",
      categories,
      demoVideoUrl: media.demoVideoUrl,
      imageSrc: media.imageSrc,
      coverTheme: media.coverTheme,
      featured: false,
      isActive: true,
    };
  }),
];

export function projectBySlug(slug: string) {
  return sampleProjects.find((project) => project.slug === slug);
}

export function browseSampleProjects(page: number, category: string, query: string): ProjectBrowseResult {
  const pageSize = 10;
  const featured = sampleProjects.find((project) => project.featured) ?? sampleProjects[0];
  const matching = filterProjects(sampleProjects.filter((project) => project.slug !== featured.slug), category, query);
  const offset = (Math.max(1, page) - 1) * pageSize;
  return {
    featured,
    projects: matching.slice(offset, offset + pageSize),
    totalPages: Math.ceil(matching.length / pageSize),
  };
}
