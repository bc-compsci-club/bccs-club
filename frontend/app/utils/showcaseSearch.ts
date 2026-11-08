import type { Project } from "./projectTypes";

export function filterProjects(projects: Project[], category: string, query: string) {
  const term = query.trim().toLowerCase();
  return projects.filter((project) => {
    if (category && !project.categories?.includes(category)) return false;
    return [project.title, project.authorName, project.shortDescription, project.description, project.techStack]
      .some((field) => field.toLowerCase().includes(term));
  });
}
