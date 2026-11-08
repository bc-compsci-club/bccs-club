"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { browseProjectsAction } from "@/app/lib/actions/getProjectsAction";
import { Project, ProjectBrowseResult } from "@/app/utils/projectTypes";
import { filterProjects } from "@/app/utils/showcaseSearch";
import ProjectArtwork from "./ProjectArtwork";

const categories = ["Web", "Browser Extension", "Mobile"];

function visiblePages(page: number, totalPages: number): number[] {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);

  const start = Math.max(1, Math.min(page - 1, totalPages - 2));
  const end = Math.min(totalPages, start + 2);
  const pages = [1];
  for (let number = start; number <= end; number++) {
    if (number > 1 && number < totalPages) pages.push(number);
  }
  if (totalPages > 1) pages.push(totalPages);
  return pages;
}

function ProjectSkeleton() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-gray-200 bg-white motion-safe:animate-pulse">
      <div className="h-44 bg-gray-200" />
      <div className="space-y-4 p-6">
        <div className="h-3 w-20 rounded bg-gray-200" />
        <div className="h-6 w-2/3 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="mt-6 h-4 w-24 rounded bg-gray-200" />
      </div>
    </div>
  );
}

function ProjectLabels({ project }: { project: Project }) {
  const labels = [...new Set(project.categories ?? [])];
  if (project.featured) labels.unshift("Featured Project");
  if (!labels.length) return null;

  return <p className="text-xs font-bold uppercase tracking-wider text-bc-red">{labels.join(" · ")}</p>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <ProjectArtwork project={project} compact />
      <div className="p-6">
        <ProjectLabels project={project} />
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
  const moreProjectsHeading = useRef<HTMLDivElement>(null);
  const [catalog, setCatalog] = useState<ProjectBrowseResult | null>(null);
  const [catalogError, setCatalogError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<{ key: string; data: ProjectBrowseResult | null } | null>(null);

  useEffect(() => {
    let active = true;
    browseProjectsAction(1, "", "").then((data) => {
      if (!active) return;
      setCatalog(data);
      setCatalogError(data === null);
    });
    return () => { active = false; };
  }, []);

  const featured = catalog?.featured;
  const query = search.trim();
  const requestKey = catalog && catalog.totalPages > 1 && (page !== 1 || category || query)
    ? JSON.stringify([page, category, query])
    : null;
  const currentResult = result?.key === requestKey ? result : null;

  useEffect(() => {
    if (!requestKey || currentResult) return;
    let active = true;
    const timer = setTimeout(() => {
      browseProjectsAction(page, category, query).then((data) => {
        if (active) setResult({ key: requestKey, data });
      });
    }, 250);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [requestKey, currentResult, page, category, query]);

  const loading = (!catalog && !catalogError) || (requestKey !== null && !currentResult);
  const searchFailed = catalogError || currentResult?.data === null;
  const moreProjects = requestKey
    ? currentResult?.data?.projects ?? []
    : filterProjects(catalog?.projects ?? [], category, query);
  const totalPages = Math.max(1, currentResult?.data?.totalPages ?? catalog?.totalPages ?? 1);
  const currentPage = Math.min(page, totalPages);
  const pages = visiblePages(currentPage, totalPages);
  const pageButtonClass = "inline-flex h-9 min-w-9 items-center justify-center px-2 text-sm font-semibold disabled:opacity-40";

  function goToPage(nextPage: number) {
    setPage(nextPage);
    moreProjectsHeading.current?.focus({ preventScroll: true });
    moreProjectsHeading.current?.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <main>
      <section className="bg-gradient-to-b from-bc-red/15 via-bc-red/5 to-white px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wider text-bc-red">Brooklyn College CS Club</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Project showcase</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">A few things our members have been building, learning from, and sharing with the community.</p>
          {featured ? <div className="mt-12 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md lg:grid-cols-[1.1fr_0.9fr]">
            <ProjectArtwork project={featured} />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <ProjectLabels project={featured} />
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">{featured.title}</h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">{featured.description}</p>
              <p className="mt-6 text-sm text-gray-500">By {featured.authorName}</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href={`/showcase/${featured.slug}`} className="inline-flex items-center gap-2 rounded-md bg-bc-red px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-bc-red/90">
                  View project <ArrowRightIcon className="h-4 w-4" />
                </Link>
                {featured.githubUrl && <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-3 text-sm font-bold text-bc-red hover:text-bc-red/75">GitHub ↗</a>}
              </div>
            </div>
          </div> : loading && <div className="mt-12"><ProjectSkeleton /></div>}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div ref={moreProjectsHeading} tabIndex={-1} className="scroll-mt-6 outline-none">
          <p className="text-sm font-bold uppercase tracking-wider text-bc-red">Explore</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">More projects</h2>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <label className="flex flex-1 flex-col gap-1.5 text-sm font-semibold text-gray-700">
            Search projects
            <input
              type="search"
              value={search}
              maxLength={200}
              onChange={(event) => { setSearch(event.target.value); setPage(1); }}
              placeholder="Search by project, author, or keyword"
              className="rounded-md border border-gray-300 bg-white px-3 py-2.5 font-normal focus:border-bc-red focus:outline-bc-red"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-gray-700 sm:w-52">
            Category
            <select
              value={category}
              onChange={(event) => { setCategory(event.target.value); setPage(1); }}
              className="rounded-md border border-gray-300 bg-white px-3 py-2.5 font-normal focus:border-bc-red focus:outline-bc-red"
            >
              <option value="">All categories</option>
              {categories.map((name) => <option key={name}>{name}</option>)}
            </select>
          </label>
        </div>
        <div aria-busy={loading} className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }, (_, index) => <ProjectSkeleton key={index} />)
            : moreProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        {!loading && moreProjects.length === 0 && (
          <p role="status" className="py-8 text-center text-gray-600">
            {searchFailed ? "Projects couldn’t load. Please try again shortly."
              : !featured ? "No projects have been published yet."
              : "No projects match your search and category."}
          </p>
        )}
        {catalog && (
          <nav aria-label="Project pages" className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              type="button"
              aria-label="Previous page"
              disabled={loading || currentPage <= 1}
              onClick={() => goToPage(currentPage - 1)}
              className={`${pageButtonClass} text-bc-red`}
            >
              <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
            </button>
            {pages.map((number, index) => (
              <span key={number} className="inline-flex items-center gap-1.5 sm:gap-2">
                {index > 0 && number - pages[index - 1] > 1 && (
                  <span aria-hidden="true" className="text-sm text-gray-500">…</span>
                )}
                <button
                  type="button"
                  aria-label={`Page ${number}`}
                  aria-current={number === currentPage ? "page" : undefined}
                  disabled={loading}
                  onClick={() => goToPage(number)}
                  className={`${pageButtonClass} ${number === currentPage ? "text-bc-red" : "text-gray-500 hover:text-bc-red"}`}
                >
                  {number}
                </button>
              </span>
            ))}
            <button
              type="button"
              aria-label="Next page"
              disabled={loading || currentPage >= totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className={`${pageButtonClass} text-bc-red`}
            >
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}
