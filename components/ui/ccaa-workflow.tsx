const boundaries = {
  original: {
    label: "Original boundary",
    outline: "polygon(17% 39%, 58% 23%, 83% 53%, 68% 78%, 30% 68%)",
    fill: "polygon(19% 41%, 57% 26%, 81% 53%, 67% 75%, 31% 66%)",
    outlineClass: "bg-amber-800",
    fillClass: "bg-amber-100",
  },
  approved: {
    label: "Reviewer-confirmed boundary",
    outline: "polygon(14% 37%, 49% 20%, 75% 31%, 86% 56%, 67% 77%, 29% 65%)",
    fill: "polygon(16% 39%, 49% 23%, 74% 34%, 84% 56%, 66% 74%, 30% 63%)",
    outlineClass: "bg-blue-800",
    fillClass: "bg-blue-100",
  },
};

function BoundaryMap({ version }: { version: keyof typeof boundaries }) {
  const { label, outline, fill, outlineClass, fillClass } = boundaries[version];

  return (
    <div className="space-y-2">
      <p className="text-sm font-bold">{label}</p>
      <div
        aria-hidden="true"
        className="relative aspect-[16/9] overflow-hidden rounded-md border border-slate-300 bg-[#e9eeea]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(#cfdbd2 1px, transparent 1px), linear-gradient(90deg, #cfdbd2 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute -bottom-1/4 left-[4%] top-[-20%] w-[9%] rotate-[24deg] rounded-[50%] bg-sky-300/75" />
        <div className="absolute -left-[10%] top-[36%] h-[9%] w-[120%] -rotate-[9deg] rounded-full border-y border-stone-300 bg-stone-50" />
        <div className={`absolute inset-0 opacity-90 ${outlineClass}`} style={{ clipPath: outline }} />
        <div className={`absolute inset-0 opacity-95 ${fillClass}`} style={{ clipPath: fill }} />
      </div>
    </div>
  );
}

export function CcaaWorkflow() {
  return (
    <section
      id="ccaa-workflow"
      tabIndex={-1}
      aria-labelledby="ccaa-workflow-title"
      className="mb-8 scroll-mt-6 space-y-5 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 sm:p-6"
    >
      <h4 id="ccaa-workflow-title" className="text-balance text-2xl font-bold leading-tight text-neutral-950 dark:text-white md:text-3xl">
        From field records to reviewed maps and reports
      </h4>
      <div className="space-y-4">
        <div>
          <h5 className="font-bold text-neutral-950 dark:text-white">Reusable agent skills</h5>
          <p>
            I encoded how to set up QGIS projects, research historical maps, and assemble reports into Codex skills. Each skill specifies which sources to use, what to produce, and what to verify before handoff.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-neutral-950 dark:text-white">Workflow harness and validation</h5>
          <p>
            I built a Python runner around a shared project record. It tracks approved inputs and stage dependencies, validates saved outputs, and resumes from checkpoints when the recorded inputs and output hashes still match.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-neutral-950 dark:text-white">Human review through a spatial interface</h5>
          <p>
            I built CCAA Decisions so reviewers can compare proposed report wording or map alternatives against source evidence, confirm a choice, and export approved geometry into QGIS. The app tracks which version the reviewer saw.
          </p>
        </div>
      </div>

      <figure className="space-y-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
        <figcaption className="text-sm text-neutral-700 dark:text-neutral-300">
          <span className="font-bold text-neutral-950 dark:text-white">A project boundary revision</span>{" "}
          (illustrative example)
        </figcaption>
        <div className="grid gap-3 sm:grid-cols-2 sm:items-end">
          <BoundaryMap version="original" />
          <BoundaryMap version="approved" />
        </div>
        <p className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-neutral-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-neutral-200">
          Adopting the revised boundary invalidates prior evidence for affected stages. The workflow regenerates affected QGIS figures and rechecks report tables against the approved geometry before delivery.
        </p>
      </figure>
    </section>
  );
}
