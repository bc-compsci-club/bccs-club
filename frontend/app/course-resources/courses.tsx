import { useState } from "react";
import { courseResources } from "@/utils/courseResources";
import DegreeMapSection from "../ui/course-resources/DegreeMapSection";

const sections = [
  {
    title: "CS Major Core Classes",
    content: (
      <ul className="list-disc ml-6">
        {courseResources.csMajorCore.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "CS Major Requirements & Prerequisites",
    content: (
      <>
        <strong>Prerequisites:</strong>
        <ul className="list-disc ml-6 mb-2">
          {courseResources.csMajorRequirements.prerequisites.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <strong>Core:</strong>
        <ul className="list-disc ml-6">
          {courseResources.csMajorRequirements.core.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Data Science Minor",
    content: (
      <>
        <strong>Core:</strong>
        <ul className="list-disc ml-6 mb-2">
          {courseResources.dataScienceMinor.core.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <strong>Electives:</strong>
        <ul className="list-disc ml-6">
          {courseResources.dataScienceMinor.electives.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Recommended CS Electives",
    content: (
      <ul className="list-disc ml-6">
        {courseResources.recommendedElectives.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "CS Four-Year Degree Map",
    content: <DegreeMapSection />
  },
  // Add more sections as needed, e.g., Degree Map, Data Science Minor Requirements, etc.
];

export default function CoursesResourcePage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 py-12">
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-2">Course Resource Guide</h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Explore the core classes, requirements, electives, and degree maps for CS majors and Data Science minors at Brooklyn College. Click each section to expand details.
        </p>
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`section-content-${idx}`}
              >
                <span className="text-xl font-semibold">{section.title}</span>
                <span className="ml-2 text-2xl text-purple-400">{open === idx ? "−" : "+"}</span>
              </button>
              <div
                id={`section-content-${idx}`}
                className={`transition-all duration-300 px-6 pb-4 ${open === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
