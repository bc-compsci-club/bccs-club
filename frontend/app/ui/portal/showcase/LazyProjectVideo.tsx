"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { Project } from "@/app/utils/projectTypes";

export default function LazyProjectVideo({ project }: { project: Project }) {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="relative aspect-video overflow-hidden bg-gray-900 lg:aspect-auto lg:min-h-72">
      {!ready && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800" />}
      {ready && project.demoVideoUrl && !failed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={project.demoVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          aria-label={`${project.title} demo video`}
        />
      ) : ready ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bc-red/90 to-gray-900 p-8 text-center text-white">
          <div>
            <PlayIcon aria-hidden="true" className="mx-auto h-10 w-10 text-bc-yellow" />
            <p className="mt-3 font-semibold">{failed ? "Demo video unavailable" : "Demo video coming soon"}</p>
          </div>
        </div>
      ) : null}
      <span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Project demo</span>
    </div>
  );
}
