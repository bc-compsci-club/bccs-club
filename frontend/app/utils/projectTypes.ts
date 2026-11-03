export type Project = {
  id?: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  authorName: string;
  techStack: string;
  demoUrl?: string;
  websiteUrl: string;
  githubUrl?: string;
  imageSrc?: string;
  coverTheme: "rose" | "gold" | "violet" | "sky";
  featured: boolean;
  isActive: boolean;
};
