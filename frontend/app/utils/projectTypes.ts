export type Project = {
  id?: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  authorName: string;
  techStack: string;
  categories?: string[] | null;
  demoVideoUrl?: string;
  presentationUrl?: string | null;
  websiteUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
  coverTheme: string;
  featured: boolean;
  isActive: boolean;
};

export type ProjectBrowseResult = {
  featured: Project | null;
  projects: Project[];
  totalPages: number;
};
