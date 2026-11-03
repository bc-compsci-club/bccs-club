"use server";

import { Project } from "@/app/utils/projectTypes";

const endpoint = process.env.BACKEND_URL
  ? `${process.env.BACKEND_URL}/v1/showcase/projects`
  : undefined;

export async function getProjectsAction(): Promise<Project[]> {
  if (!endpoint) return [];

  try {
    const response = await fetch(endpoint, { next: { revalidate: 60 } });
    return response.ok ? response.json() : [];
  } catch {
    return [];
  }
}

export async function getProjectAction(slug: string): Promise<Project | null> {
  if (!endpoint) return null;

  try {
    const response = await fetch(`${endpoint}/slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    return response.ok ? response.json() : null;
  } catch {
    return null;
  }
}
