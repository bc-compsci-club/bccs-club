"use client";

import { useState } from "react";
import { Project } from "@/app/utils/projectTypes";

export default function ProjectDemo({ project }: { project: Project }) {
  const [count, setCount] = useState(25);
  const [done, setDone] = useState(false);

  return (
    <section aria-label={`${project.title} interactive demo`} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-bc-red">Interactive preview</p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">Try the prototype</h2>
        </div>
        <span className="rounded-full bg-bc-yellow/30 px-3 py-1 text-xs font-semibold text-gray-700">Demo mode</span>
      </div>
      <div className="mt-6 rounded-xl bg-gradient-to-br from-bc-red/10 to-bc-yellow/20 p-6">
        <p className="text-sm font-semibold text-gray-700">{project.title} focus block</p>
        <p className="mt-2 text-5xl font-bold tabular-nums text-gray-900">{String(count).padStart(2, "0")}:00</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button onClick={() => setCount((value) => (value === 5 ? 25 : value - 5))} className="rounded-md bg-bc-red px-4 py-2 text-sm font-semibold text-white hover:bg-bc-red/90">
            {count === 5 ? "Reset session" : "Shorten by 5 min"}
          </button>
          <button onClick={() => setDone(!done)} className="rounded-md border border-bc-red px-4 py-2 text-sm font-semibold text-bc-red hover:bg-white">
            {done ? "Marked complete" : "Mark task done"}
          </button>
        </div>
        {done && <p className="mt-4 text-sm font-medium text-emerald-700">Nice work—your session was saved locally for this preview.</p>}
      </div>
    </section>
  );
}
