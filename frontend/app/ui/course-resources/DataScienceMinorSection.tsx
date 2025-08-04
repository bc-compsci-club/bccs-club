import { courseResources } from "@/utils/courseResources";

export default function DataScienceMinorSection() {
  const minor = courseResources.dataScienceMinorRequirements;
  return (
    <section className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-4">
        Data Science Minor Requirements
      </h2>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <div className="mb-2">
          <strong>Credits:</strong> {minor.credits}
        </div>
        <div className="mb-2">
          <strong>Required Courses:</strong>
          <ul className="list-disc ml-6">
            {minor.required.map((c, i) => (
              <li key={c + i}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <strong>Elective:</strong> {minor.elective}
        </div>
        <div className="mb-2">
          <strong>Prerequisites:</strong>
          <ul className="list-disc ml-6">
            {minor.prerequisites.map((p, i) => (
              <li key={p + i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <strong>Notes:</strong>
          <ul className="list-disc ml-6">
            {minor.notes.map((n, i) => (
              <li key={n + i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
