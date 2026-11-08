"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getProjectAction } from "@/app/lib/actions/getProjectsAction";
import { Project } from "@/app/utils/projectTypes";
import ProjectPresentation from "./ProjectPresentation";
import LazyProjectVideo from "./LazyProjectVideo";

function ProjectDetailSkeleton() {
  return (
    <main aria-busy="true" className="motion-safe:animate-pulse">
      <section className="bg-gradient-to-b from-bc-red/15 to-white px-6 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="h-5 w-28 rounded bg-gray-200" />
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white lg:grid-cols-2">
            <div className="aspect-video bg-gray-200 lg:aspect-auto lg:min-h-72" />
            <div className="space-y-5 p-8 sm:p-12">
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-12 w-3/4 rounded bg-gray-200" />
              <div className="h-6 w-full rounded bg-gray-200" />
              <div className="h-6 w-5/6 rounded bg-gray-200" />
              <div className="h-11 w-36 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-5">
          <div className="h-5 w-32 rounded bg-gray-200" />
          <div className="h-10 w-3/4 rounded bg-gray-200" />
          <div className="h-28 rounded bg-gray-200" />
        </div>
        <div className="h-60 rounded-2xl bg-gray-100" />
      </section>
    </main>
  );
}

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const [project, setProject] = useState<Project | undefined>();
  const [status, setStatus] = useState<"loading" | "found" | "missing" | "unavailable">("loading");

  useEffect(() => {
    let active = true;
    getProjectAction(slug).then((result) => {
      if (!active) return;
      setProject(result.status === "found" ? result.project : undefined);
      setStatus(result.status);
    });
    return () => { active = false; };
  }, [slug]);

  if (status === "loading") return <ProjectDetailSkeleton />;
  if (!project) {
    return (
      <main className="min-h-[50vh] px-6 pt-40 text-center">
        <h1 className="text-3xl font-bold">{status === "unavailable" ? "Project temporarily unavailable" : "Project not found"}</h1>
        <Link href="/showcase" className="mt-5 inline-block font-semibold text-bc-red">Back to showcase</Link>
      </main>
    );
  }

  const presentationUrl = project.presentationUrl?.trim();

  return (
    <main>
      <section className="bg-gradient-to-b from-bc-red/15 to-white px-6 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/showcase" className="inline-flex items-center gap-2 text-sm font-bold text-bc-red hover:text-bc-red/75"><ArrowLeftIcon className="h-4 w-4" /> All projects</Link>
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md lg:grid-cols-2">
            <LazyProjectVideo project={project} />
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-wider text-bc-red">Member project</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{project.title}</h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">{project.shortDescription}</p>
              <p className="mt-7 text-sm text-gray-500">Built by {project.authorName}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-bc-red px-5 py-3 text-sm font-bold text-white hover:bg-bc-red/90">Visit project site <ArrowTopRightOnSquareIcon className="h-4 w-4" /></a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold ${project.websiteUrl ? "border border-bc-red text-bc-red hover:bg-bc-yellow/20" : "bg-bc-red text-white hover:bg-bc-red/90"}`}><CodeBracketIcon className="h-4 w-4" /> Source code</a>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`mx-auto max-w-7xl px-6 py-16 lg:px-8 ${presentationUrl ? "grid lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
        <div className={presentationUrl ? "pb-8 lg:pb-0 lg:pr-8" : undefined}>
          <p className="text-sm font-bold uppercase tracking-wider text-bc-red">About the project</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Designed to solve a real student problem.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{project.description}</p>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-gray-500">Built with</p><p className="mt-2 font-semibold text-gray-800">{project.techStack}</p></div>
        </div>
        {presentationUrl && <ProjectPresentation presentationUrl={presentationUrl} title={project.title} />}
      </section>
    </main>
  );
}
