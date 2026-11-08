import PresentationViewer from "./PresentationViewer";

export default function ProjectPresentation({ presentationUrl, title }: { presentationUrl: string; title: string }) {
  return (
    <aside className="border-t border-gray-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      <h2 className="text-sm font-bold uppercase tracking-wider text-bc-red">Project presentation</h2>
      <PresentationViewer presentationUrl={presentationUrl} title={title} />
    </aside>
  );
}
