import React from "react";
import { skillsData } from "../data/skillsData";
import { Code2, Database, BarChart3, Binary, Cpu, Wrench } from "lucide-react";

export default function TechStack() {
  const getCategoryIcon = (name) => {
    switch (name) {
      case "Programming Languages": return <Code2 className="w-4 h-4 text-primary" />;
      case "Data Analytics & BI": return <BarChart3 className="w-4 h-4 text-primary" />;
      case "Databases & Storage": return <Database className="w-4 h-4 text-primary" />;
      case "Statistical Analysis & Methodologies": return <Binary className="w-4 h-4 text-primary" />;
      case "Machine Learning & Modeling": return <Cpu className="w-4 h-4 text-primary" />;
      default: return <Wrench className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section id="stack" className="page-reveal rule-b py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
          <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Technical Toolbelt</span>
        </div>

        <h2 className="heading-reveal d-1 mt-4">
          <span className="block">
            <span className="block text-ink">THE TOOLS I</span>
            <span className="block text-primary">REACH FOR.</span>
          </span>
        </h2>

        <div className="mt-10 space-y-8 sm:space-y-10">
          {skillsData.categories.map((category, idx) => (
            <div key={idx} className="rule-t pt-6 grid gap-4 lg:grid-cols-[0.22fr_0.78fr] lg:gap-8">
              {/* Category Label */}
              <div className="flex items-center gap-2 lg:pt-1">
                {getCategoryIcon(category.name)}
                <h3 className="eyebrow text-primary text-xs font-bold tracking-eyebrow">
                  {category.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group border border-rule bg-white p-3.5 transition-all duration-300 hover:border-ink hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-ink group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[0.65rem] font-mono bg-cream px-2 py-0.5 border border-rule/60 text-muted uppercase">
                        {skill.level}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
