import React, { useEffect, useState } from "react";
import { X, ExternalLink, CheckCircle2, BarChart2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import InteractiveDemo from "./InteractiveDemo";

export default function ProjectModal({ project, onClose }) {
  const [showBottomClose, setShowBottomClose] = useState(false);

  const handleModalScroll = (event) => {
    const container = event.currentTarget;
    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    setShowBottomClose(distanceFromBottom <= 100);
  };

  useEffect(() => {
    const documentElementOverflowX = document.documentElement.style.overflowX;
    const bodyOverflow = document.body.style.overflow;
    const bodyOverflowX = document.body.style.overflowX;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflowX = documentElementOverflowX;
      document.body.style.overflow = bodyOverflow;
      document.body.style.overflowX = bodyOverflowX;
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex max-w-[100vw] items-center justify-center overflow-x-hidden overflow-y-auto bg-ink/80 backdrop-blur-sm p-0 sm:p-6">
      <div
        className="relative w-[95%] max-w-full max-h-[90vh] overflow-x-hidden overflow-y-auto border border-ink bg-cream p-3 text-ink shadow-2xl sm:w-full sm:max-w-4xl sm:p-10"
        onScroll={handleModalScroll}
        role="dialog"
        aria-modal="true"
      >
        {/* Top Bar */}
        <div className="relative border-b border-rule pb-4">
          <div className="flex items-center justify-between gap-3 md:hidden">
            <span className="eyebrow text-xs font-mono text-primary font-bold">
              CASE STUDY {project.number}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 border border-rule hover:bg-ink hover:text-cream transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between gap-3 md:hidden">
            <span className="eyebrow text-xs text-muted font-semibold">
              {project.category}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-rule hover:border-primary hover:text-primary text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
          </div>

          <div className="hidden items-center justify-between md:flex">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-xs font-mono text-primary font-bold">
                CASE STUDY {project.number}
              </span>
              <span className="text-muted">•</span>
              <span className="eyebrow text-xs text-muted font-semibold">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-rule hover:border-primary hover:text-primary text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
            <button
              onClick={onClose}
              className="p-1.5 border border-rule hover:bg-ink hover:text-cream transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mt-6 max-w-full">
          <h2 className="heading-reveal d-2 text-ink">
            {project.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base font-mono text-primary font-semibold">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="mt-6 grid w-full max-w-full grid-cols-2 gap-3 border border-rule bg-white p-3 sm:grid-cols-4 sm:p-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="border-l-2 border-primary pl-3">
              <span className="text-xs font-mono text-muted uppercase block">{m.label}</span>
              <span className="text-xl font-display text-ink mt-0.5 block">{m.val}</span>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="mt-8 border-t border-rule pt-6">
          <h3 className="eyebrow text-xs font-bold text-ink flex items-center gap-2">
            <span className="h-2 w-2 bg-primary"></span>
            <span>Business Problem Statement</span>
          </h3>
          <p className="mt-3 w-full max-w-full border border-rule bg-white/70 p-3 text-sm leading-relaxed text-ink/85 sm:p-4 sm:text-base">
            {project.problemStatement}
          </p>
        </div>

        {/* Pipeline & Methodology */}
        <div className="mt-8 border-t border-rule pt-6">
          <h3 className="eyebrow text-xs font-bold text-ink flex items-center gap-2">
            <span className="h-2 w-2 bg-primary"></span>
            <span>Data Pipeline &amp; Cleaning Steps</span>
          </h3>
          <ul className="mt-4 max-w-full space-y-2.5 pl-2">
            {project.pipeline.map((step, idx) => (
              <li key={idx} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm text-ink/80">
                <span className="text-primary font-semibold" aria-hidden="true">-&gt;</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.id === "customer-shopping-behaviour" && (
          <div className="mt-8 max-w-full overflow-x-hidden border-t border-rule pt-6">
            <InteractiveDemo embedded />
          </div>
        )}

        {/* Key Findings */}
        <div className="mt-8 border-t border-rule pt-6">
          <h3 className="eyebrow text-xs font-bold text-ink flex items-center gap-2">
            <span className="h-2 w-2 bg-primary"></span>
            <span>Strategic Findings &amp; ROI Recommendations</span>
          </h3>
          <div className="mt-4 max-w-full space-y-3">
            {project.keyInsights.map((insight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">{insight}</p>
              </div>
            ))}
        </div>

        {/* Tech Tags */}
        <div className="mt-8 flex max-w-full flex-wrap gap-2 border-t border-rule pt-6">
          {project.tags.map((t, idx) => (
            <span key={idx} className="px-2.5 py-1 text-xs font-mono bg-ink text-cream">
              {t}
            </span>
          ))}
        </div>

        <div
          className={`mt-8 flex w-full max-w-full flex-wrap items-center justify-between gap-3 pb-8 pointer-events-none transition-opacity duration-300 ${
            showBottomClose ? "opacity-100" : "opacity-0"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto flex shrink-0 items-center gap-1.5 bg-[#E6E4DD] px-3 py-1.5 border border-rule hover:border-primary hover:text-primary text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source Repository</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="pointer-events-auto flex shrink-0 items-center gap-1.5 bg-[#E6E4DD] px-3 py-1.5 border border-rule hover:border-primary hover:text-primary text-xs font-mono transition-colors"
            aria-label="Close project"
          >
            <X className="w-3.5 h-3.5" />
            <span>Close Project</span>
          </button>
        </div>
          </div>
      </div>
    </div>
  );
}
