import ProjectDetailPage from "@/app/ui/portal/showcase/ProjectDetailPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetailPage slug={params.slug} />;
}
