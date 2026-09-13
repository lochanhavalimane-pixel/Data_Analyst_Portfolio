import React from "react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover & Audit",
      desc: "I audit raw data schemas, identify missing values, spot integrity flaws, and define the exact mathematical metrics that measure business success."
    },
    {
      num: "02",
      title: "Clean & Engineer",
      desc: "Handling nulls, imputing medians, standardizing categorical columns, and engineering new strategic features (cohort bins, purchase frequency, recency)."
    },
    {
      num: "03",
      title: "Query & Model",
      desc: "Writing performant SQL joins, CTEs, and window functions; testing statistical significance (p-values, A/B variance) and training predictive models."
    },
    {
      num: "04",
      title: "Synthesize & Impact",
      desc: "Delivering dynamic Power BI reports, executive dashboards, and clear, actionable recommendations that business leadership can execute on immediately."
    }
  ];

  return (
    <section id="process" className="page-reveal rule-b py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
          <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Analytical Methodology</span>
        </div>

        <h2 className="heading-reveal d-1 mt-4">
          <span className="block">
            <span className="block text-ink">A PROCESS THAT</span>
            <span className="block text-primary">SURVIVES MESSY DATA.</span>
          </span>
        </h2>

        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <li key={idx} className="rule-t pt-5 border-t border-rule">
              <div className="flex items-baseline gap-3">
                <span className="d-2 text-primary font-display">{s.num}</span>
                <h3 className="text-lg font-bold text-ink tracking-tight">{s.title}</h3>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-ink/75 leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
