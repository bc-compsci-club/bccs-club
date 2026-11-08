import ProjectDetailPage from "@/app/ui/portal/showcase/ProjectDetailPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPage key={slug} slug={slug} />;
}
