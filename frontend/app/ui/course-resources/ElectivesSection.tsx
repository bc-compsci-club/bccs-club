import { courseResources } from "@/utils/courseResources";

export default function ElectivesSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-4">
        Recommended Electives
      </h2>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <ul className="list-disc ml-6 text-gray-800">
          {courseResources.recommendedElectives.map((e, i) => (
            <li key={e + i}>{e}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
