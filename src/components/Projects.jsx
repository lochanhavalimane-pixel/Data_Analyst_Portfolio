import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectModal from "./ProjectModal";
import ScrollReveal, { RevealItem } from "./ScrollReveal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="rule-b py-12 sm:py-16 lg:py-20">
      <ScrollReveal className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <RevealItem>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
                <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Case Studies</span>
              </div>
              <h2 className="d-1 mt-4">
                <span className="block text-ink">INSIGHTS, NOT</span>
                <span className="block text-primary">SIDE PROJECTS.</span>
              </h2>
            </div>
          </RevealItem>

          <RevealItem>
            <p className="max-w-md text-sm sm:text-base text-muted">
              Production-grade exploratory data analyses, SQL pipelines, and Power BI dashboards built to resolve real operational and commercial bottlenecks.
            </p>
          </RevealItem>
        </div>

        {/* Project Cards Grid */}
        <ScrollReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => (
            <RevealItem
              key={project.id}
              as="article"
              className="group relative flex flex-col justify-between border border-rule bg-cream-card p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:border-ink hover:shadow-md"
              onClick={() => setActiveProject(project)}
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="eyebrow text-xs font-mono text-muted">
                    {project.number} · {project.year}
                  </span>
                  <span className="text-xl text-ink/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary">
                    ↗
                  </span>
                </div>

                <h3 className="d-3 mt-4 text-ink group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-primary font-semibold">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white p-3 border border-rule">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="border-l border-primary/50 pl-2">
                      <span className="text-[0.65rem] font-mono text-muted uppercase block">{m.label}</span>
                      <span className="text-sm font-display text-ink font-bold block mt-0.5">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[0.7rem] font-mono bg-cream border border-rule text-ink">
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[0.7rem] font-mono text-muted">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <span className="text-xs eyebrow font-bold text-primary group-hover:underline">
                  View Full Case Study →
                </span>
              </div>
            </RevealItem>
          ))}
        </ScrollReveal>
      </ScrollReveal>

      {/* Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
