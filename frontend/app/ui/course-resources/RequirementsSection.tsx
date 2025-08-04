import { courseResources } from "@/utils/courseResources";

export default function RequirementsSection() {
  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">CS Major Requirements & Prerequisites</h2>
      <div className="mb-2">
        <strong>Prerequisites:</strong>
        <ul className="list-disc ml-6">
          {courseResources.csMajorRequirements.prerequisites.map((p, i) => (
            <li key={p + i}>{p}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Core:</strong>
        <ul className="list-disc ml-6">
          {courseResources.csMajorRequirements.core.map((c, i) => (
            <li key={c + i}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
