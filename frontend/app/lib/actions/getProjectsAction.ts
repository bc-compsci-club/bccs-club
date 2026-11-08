"use server";

import { browseSampleProjects, projectBySlug } from "@/app/data/showcaseProjects";
import { Project, ProjectBrowseResult } from "@/app/utils/projectTypes";

const endpoint = process.env.BACKEND_URL
  ? `${process.env.BACKEND_URL.replace(/\/+$/, "")}/v1/showcase/projects`
  : undefined;

const useSamples = process.env.SHOWCASE_DEMO === "1";

export async function browseProjectsAction(
  page: number,
  category: string,
  query: string,
): Promise<ProjectBrowseResult | null> {
  if (useSamples) return browseSampleProjects(page, category, query);
  if (!endpoint) return null;

  try {
    const params = new URLSearchParams({ page: String(page), category, query });
    const response = await fetch(`${endpoint}/browse?${params}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
}

export async function getProjectAction(slug: string): Promise<
  { status: "found"; project: Project } | { status: "missing" | "unavailable" }
> {
  if (useSamples) {
    const project = projectBySlug(slug);
    return project?.isActive ? { status: "found", project } : { status: "missing" };
  }
  if (!endpoint) return { status: "unavailable" };

  try {
    const response = await fetch(`${endpoint}/slug/${encodeURIComponent(slug)}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (response.status === 404) return { status: "missing" };
    if (!response.ok) return { status: "unavailable" };
    const project: Project = await response.json();
    return project.isActive ? { status: "found", project } : { status: "missing" };
  } catch {
    return { status: "unavailable" };
  }
}
