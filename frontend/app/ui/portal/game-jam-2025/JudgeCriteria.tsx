import React from "react";

const criterias = [
  {
    topic: "Interactivity, Game Play, and Rules",
    description:
      "The game prompts players to interact with it and provides rules and features that allow them to understand the game goals.",
  },
  {
    topic: "Creativity",
    description:
      "The game should include novel or unique aspects, either through a truly new concept or a novel application of an existing concept or concepts.",
  },
  {
    topic: "Theme",
    description:
      "The game should clearly demonstrate through concept, gameplay, story, or characters, the prompt/concept.",
  },
  {
    topic: "Depth of Play",
    description: "While not all future development must be shown during the jam, plans for future expansion of the game or multiple varied gameplay features should be presented."
  },
  {
    topic: "Video Presentation",
    description: "The team presents their proposed game clearly to the audience through a 5-minute video presentation."
  }
];

export default function JudgeCriteria() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl space-y-6 font-bold leading-10 tracking-tight text-gray-900">
          Judge Criteria
        </h2>
        <ul
          role="list"
          className="py-3 grid-cols-2 md:grid-cols-3 gap-3"
        >
          {criterias.map((criteria) => {
            return <div className="py-2" key={criteria.topic}>
                <h1 className="font-semibold">{criteria.topic}</h1>
                <p className="text-sm">{criteria.description}</p>
            </div>
          })}
        </ul>
      </div>
    </div>
  );
}
