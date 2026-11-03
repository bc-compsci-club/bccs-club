"use client";

import Link from "next/link";
import { ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { sampleProjects } from "@/app/data/showcaseProjects";
import { getProjectsAction } from "@/app/lib/actions/getProjectsAction";
import { Project } from "@/app/utils/projectTypes";
import ProjectArtwork from "./ProjectArtwork";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <ProjectArtwork project={project} compact />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-bc-red">{project.techStack.split(",")[0]}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h2>
        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">{project.shortDescription}</p>
        <p className="mt-5 text-xs text-gray-500">By {project.authorName}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <Link href={`/showcase/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-bc-red hover:text-bc-red/75">
            View project <ArrowRightIcon className="h-4 w-4" />
          </Link>
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-bc-red"><CodeBracketIcon className="h-4 w-4" /> GitHub</a>}
        </div>
      </div>
    </article>
  );
}

export default function ShowcasePage() {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);

  useEffect(() => {
    getProjectsAction().then((apiProjects) => {
      const activeProjects = apiProjects.filter((project) => project.isActive);
      if (activeProjects.length) setProjects(activeProjects);
    });
  }, []);

  const featured = projects.find((project) => project.featured) ?? projects[0];
  const moreProjects = projects.filter((project) => project.slug !== featured?.slug);

  if (!featured) return null;

  return (
    <main>
      <section className="bg-gradient-to-b from-bc-red/15 via-bc-red/5 to-white px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wider text-bc-red">Brooklyn College CS Club</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Project showcase</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">A few things our members have been building, learning from, and sharing with the community.</p>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md lg:grid-cols-[1.1fr_0.9fr]">
            <ProjectArtwork project={featured} />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-wider text-bc-red">Featured project</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">{featured.title}</h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">{featured.description}</p>
              <p className="mt-6 text-sm text-gray-500">{featured.techStack} · By {featured.authorName}</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href={`/showcase/${featured.slug}`} className="inline-flex items-center gap-2 rounded-md bg-bc-red px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-bc-red/90">
                  View project <ArrowRightIcon className="h-4 w-4" />
                </Link>
                {featured.githubUrl && <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-3 text-sm font-bold text-bc-red hover:text-bc-red/75">GitHub ↗</a>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div><p className="text-sm font-bold uppercase tracking-wider text-bc-red">Explore</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">More projects</h2></div>
          <p className="hidden max-w-sm text-right text-sm text-gray-500 sm:block">Every project starts with curiosity and gets stronger through feedback.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {moreProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </main>
  );
}
