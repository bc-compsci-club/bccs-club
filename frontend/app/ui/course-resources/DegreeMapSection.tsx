import { courseResources } from "@/utils/courseResources";

export default function DegreeMapSection() {
  const years = courseResources.csFourYearDegreeMap.years;
  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">CS Four-Year Degree Map</h2>
      <div className="bg-gray-50 rounded-lg p-4 shadow max-h-[400px] overflow-y-auto">
        {years.map((y) => (
          <div key={y.year} className="mb-4">
            <div className="font-semibold">Year {y.year}</div>
            <div className="ml-4">
              <div>
                <strong>Fall:</strong>
                <ul className="list-disc ml-6">
                  {y.fall.map((c, idx) => (
                    <li key={c + '-' + idx}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Spring:</strong>
                <ul className="list-disc ml-6">
                  {y.spring.map((c, idx) => (
                    <li key={c + '-' + idx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
