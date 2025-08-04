import { courseResources } from "@/utils/courseResources";

export default function CoreClassesSection() {
  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">CS Major Core Classes</h2>
      <ul className="list-disc ml-6 text-gray-800">
        {courseResources.csMajorCore.map((c, i) => (
          <li key={c + i}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
