import React from "react";
import { profileData } from "../data/profileData";
import { CheckCircle } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="rule-b py-12 sm:py-16 lg:py-20">
      <ScrollReveal className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <RevealItem className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left Column: Heading & Narrative */}
          <RevealItem>
            <RevealItem className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
              <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">About Me</span>
            </RevealItem>

            <RevealItem as="h2" className="d-1 mt-4">
              <span className="block">
                <span className="block text-ink">DATA ANALYST,</span>
                <span className="block text-primary">PYTHON & SQL DEVELOPER</span>
                <span className="block text-primary">& BI SPECIALIST.</span>
              </span>
            </RevealItem>

            <ScrollReveal className="mt-6 space-y-4 text-ink/80 text-base sm:text-[1.0625rem] leading-relaxed">
              <RevealItem as="p">
                {profileData.summary}
              </RevealItem>
              <RevealItem as="p" className="text-muted">
                I believe data without business context is just noise. Whether cleaning null values in Pandas, writing nested subqueries and window functions in MySQL, or creating dynamic DAX measures in Power BI, my goal is always the same: surface the non-obvious truth that empowers leadership to make faster, higher-ROI moves.
              </RevealItem>
            </ScrollReveal>

            {/* Core Values / Competencies */}
            <ScrollReveal className="mt-8 grid grid-cols-2 gap-4 border-t border-rule pt-6">
              <RevealItem className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Rigorous Statistical Validation</span>
              </RevealItem>
              <RevealItem className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Clean & Performant SQL Queries</span>
              </RevealItem>
              <RevealItem className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Executive-Ready Dashboard Design</span>
              </RevealItem>
              <RevealItem className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-ink">Actionable Business Recommendations</span>
              </RevealItem>
            </ScrollReveal>
          </RevealItem>

          {/* Right Column: Key Stats Grid */}
          <RevealItem className="flex flex-col justify-between">
            <ScrollReveal as="dl" className="grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
              {profileData.stats.map((stat, idx) => (
                <RevealItem as="div" key={idx} className="rule-t pt-4">
                  <dt className="eyebrow text-muted text-xs tracking-eyebrow font-semibold">
                    {stat.label}
                  </dt>
                  <dd className="d-1 mt-2 text-primary">
                    {stat.value}
                  </dd>
                </RevealItem>
              ))}
            </ScrollReveal>
          </RevealItem>
        </RevealItem>
      </ScrollReveal>
    </section>
  );
}
