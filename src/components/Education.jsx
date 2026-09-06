import React from "react";
import { profileData } from "../data/profileData";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="rule-b py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
              <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Academic Background</span>
            </div>
            <h2 className="d-1 mt-4">
              <span className="block text-ink">EDUCATION &amp;</span>
              <span className="block text-primary">CREDENTIALS.</span>
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Formal engineering rigor combined with deep mathematical, statistical, and computer science foundations.
            </p>
          </div>

          {/* Right Column: Institutions */}
          <div className="space-y-8">
            {profileData.education.map((edu, idx) => (
              <article key={idx} className="rule-t pt-6 first:border-t-0 first:pt-0">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <h3 className="d-3 text-ink">
                    {edu.institution}
                  </h3>
                  <span className="shrink-0 eyebrow text-muted font-mono text-xs">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-base font-semibold text-ink">
                    {edu.degree}
                  </p>
                  <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs font-bold border border-primary/20">
                    {edu.score}
                  </span>
                </div>

                <p className="mt-1 text-xs font-mono text-muted">
                  Location: {edu.location}, Karnataka, India
                </p>

                <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                  {edu.details}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
