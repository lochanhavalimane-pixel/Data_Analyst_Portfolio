import React from "react";
import { profileData } from "../data/profileData";
import { GraduationCap, Award, Compass, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="page-reveal rule-b py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left Column: Heading & Narrative */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
              <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">About Me</span>
            </div>

            <h2 className="heading-reveal d-1 mt-4">
              <span className="block">
                <span className="block text-ink">DATA ANALYST,</span>
                <span className="block text-primary">PYTHON & SQL DEVELOPER</span>
                <span className="block text-primary">& BI SPECIALIST.</span>
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-ink/80 text-base sm:text-[1.0625rem] leading-relaxed">
              <p>
                {profileData.summary}
              </p>
              <p className="text-muted">
                I believe data without business context is just noise. Whether cleaning null values in Pandas, writing nested subqueries and window functions in MySQL, or creating dynamic DAX measures in Power BI, my goal is always the same: surface the non-obvious truth that empowers leadership to make faster, higher-ROI moves.
              </p>
            </div>

            {/* Core Values / Competencies */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-rule pt-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Rigorous Statistical Validation</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Clean & Performant SQL Queries</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Executive-Ready Dashboard Design</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Actionable Business Recommendations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Grid & Education Highlights */}
          <div className="flex flex-col justify-between">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="rule-t pt-4">
                  <dt className="eyebrow text-muted text-xs tracking-eyebrow font-semibold">
                    {stat.label}
                  </dt>
                  <dd className="d-1 mt-2 text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-rule pt-6 bg-cream-card p-6 border border-rule">
              <div className="flex items-center gap-2 text-xs eyebrow text-primary font-bold tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Engineering Foundation</span>
              </div>
              <p className="mt-3 text-sm text-ink/85 leading-relaxed">
                Pursuing Bachelor of Engineering in Computer Science & Engineering (CSE) at <strong>Anjuman Institute of Technology & Management, Bhatkal</strong> (CGPA: 7.32) while completing industry job simulations for Quantium and Deloitte.
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted">
                <span>Class of 2027</span>
                <span className="text-primary font-semibold">Pre-University: 90.33%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
