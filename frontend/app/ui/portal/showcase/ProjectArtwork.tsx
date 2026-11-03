import Image from "next/image";
import { Project } from "@/app/utils/projectTypes";

const fallbackImage = "/images/showcase/focusflow-study-desk.png";

export default function ProjectArtwork({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${compact ? "h-44" : "h-full min-h-72"}`}>
      <Image
        src={project.imageSrc ?? fallbackImage}
        alt={`Photograph representing ${project.title}`}
        fill
        sizes={compact ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 1024px) 100vw, 55vw"}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-800 shadow-sm">
        Member project
      </span>
    </div>
  );
}
