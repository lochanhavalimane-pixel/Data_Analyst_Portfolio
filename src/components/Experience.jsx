import React from "react";
import { profileData } from "../data/profileData";
import ScrollReveal, { RevealItem } from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="rule-b py-12 sm:py-16 lg:py-20">
      <ScrollReveal className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <RevealItem className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
          {/* Left Column: Sticky Title */}
          <RevealItem className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
              <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Simulations & Track Record</span>
            </div>
            <h2 className="d-1 mt-4">
              <span className="block">
                <span className="block text-ink">WHERE I'VE</span>
                <span className="block text-primary">TRAINED &amp; SHIPPED.</span>
              </span>
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Real-world simulated enterprise scenarios, commercial transaction datasets, forensic data audits, and network infrastructure fundamentals.
            </p>
          </RevealItem>

          {/* Right Column: Timeline Cards */}
          <ScrollReveal className="space-y-8">
            {profileData.certifications.map((item, idx) => (
              <RevealItem key={idx} as="article" className="rule-t pt-6 first:border-t-0 first:pt-0">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <h3 className="d-3 text-ink">
                    {item.organization}
                  </h3>
                  <span className="shrink-0 eyebrow text-muted font-mono text-xs">
                    {item.date}
                  </span>
                </div>

                <p className="mt-2 text-base font-semibold text-ink flex items-center gap-2">
                  <span>{item.title}</span>
                  <span className="text-muted font-normal">— Simulated Industry Role</span>
                </p>

                <p className="mt-1 text-xs font-mono text-primary uppercase tracking-wider">
                  {item.skills.join(" • ")}
                </p>

                <p className="mt-4 text-sm sm:text-base text-ink/80 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Execution Highlights */}
                <ScrollReveal as="ul" className="mt-4 space-y-2.5">
                  {idx === 0 && (
                    <>
                      <RevealItem as="li" className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-xs sm:text-sm text-ink/75">
                        <span className="mt-[0.55em] h-[2px] w-3 shrink-0 bg-primary" aria-hidden="true"></span>
                        <span>Analyzed supermarket transaction datasets using statistical benchmarking to evaluate customer chip buying habits.</span>
                      </RevealItem>
                      <RevealItem as="li" className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-xs sm:text-sm text-ink/75">
                        <span className="mt-[0.55em] h-[2px] w-3 shrink-0 bg-primary" aria-hidden="true"></span>
                        <span>Formulated trial and control store pairings based on similarity metrics (sales, customer volume) to assess campaign uplift.</span>
                      </RevealItem>
                      <RevealItem as="li" className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-xs sm:text-sm text-ink/75">
                        <span className="mt-[0.55em] h-[2px] w-3 shrink-0 bg-primary" aria-hidden="true"></span>
                        <span>Packaged statistical findings into non-technical, visual commercial recommendations for category managers.</span>
                      </RevealItem>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <RevealItem as="li" className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-xs sm:text-sm text-ink/75">
                        <span className="mt-[0.55em] h-[2px] w-3 shrink-0 bg-primary" aria-hidden="true"></span>
                        <span>Audited enterprise ledger datasets to detect outliers, anomalous expenditure patterns, and compliance variances.</span>
                      </RevealItem>
                      <RevealItem as="li" className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-xs sm:text-sm text-ink/75">
                        <span className="mt-[0.55em] h-[2px] w-3 shrink-0 bg-primary" aria-hidden="true"></span>
                        <span>Built executive dashboards visualizing financial transactions with interactive risk indicators and drill-down capabilities.</span>
                      </RevealItem>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <RevealItem as="li" className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-xs sm:text-sm text-ink/75">
                        <span className="mt-[0.55em] h-[2px] w-3 shrink-0 bg-primary" aria-hidden="true"></span>
                        <span>Mastered IP addressing, packet transmission, network topologies, and client-server models underlying real-time data pipelines.</span>
                      </RevealItem>
                    </>
                  )}
                </ScrollReveal>
              </RevealItem>
            ))}
          </ScrollReveal>
        </RevealItem>
      </ScrollReveal>
    </section>
  );
}
