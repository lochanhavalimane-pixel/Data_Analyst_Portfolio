import React, { useState } from "react";
import { ArrowUpRight, TrendingUp, BarChart3, Database, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Hero({ onOpenResume }) {
  const [activeMetricTab, setActiveMetricTab] = useState("revenue");

  return (
    <section id="top" class="rule-b pt-20 sm:pt-24 lg:pt-28">
      {/* Top Ticker Bar */}
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="rule-b flex flex-col gap-2 pb-3 eyebrow text-ink/70 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 tracking-eyebrow text-xs">
          <span className="text-ink font-semibold flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-primary"></span>
            {profileData.tagline}
          </span>
          <span className="shrink-0 flex items-center gap-2">
            <span>{profileData.location}</span>
            <span className="text-primary font-bold">/</span>
            <span className="inline-flex items-center gap-1.5 text-primary font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {profileData.availability}
            </span>
          </span>
        </div>
      </div>

      {/* Hero Body Grid */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_clamp(22rem,36vw,34rem)]">
        {/* Left Headline & Narrative */}
        <div className="order-1 mx-auto flex w-full max-w-[110rem] flex-col justify-center px-5 pb-10 pt-8 sm:px-8 sm:pb-14 lg:order-1 lg:mx-0 lg:max-w-none lg:px-12 lg:py-14">
          <h1 className="d-hero max-w-[14ch]">
            <span className="block">
              <span className="block text-ink">TURNING.</span>
              <span className="block text-primary">RAW DATA.</span>
              <span className="block text-ink">INTO REVENUE.</span>
            </span>
          </h1>

          <div className="mt-8 max-w-2xl border-l-2 border-primary pl-5 sm:mt-9 sm:pl-6">
            <p className="text-base sm:text-[1.0625rem] leading-relaxed text-ink/85 font-normal">
              {profileData.leadStory}
            </p>
          </div>

          {/* Action Button Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink px-6 py-4 eyebrow text-xs text-cream transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#livedata"
              className="group inline-flex items-center gap-2 border border-ink/20 px-6 py-4 eyebrow text-xs text-ink transition-all duration-300 hover:border-ink hover:bg-ink/5"
            >
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>Live Analytics Demo</span>
            </a>

            <button
              onClick={onOpenResume}
              className="link-wipe eyebrow text-xs font-bold text-primary py-2 px-1"
            >
              Read Full CV →
            </button>
          </div>
        </div>

        {/* Right High-Impact Analytical Showcase Card */}
        <div className="order-2 lg:order-2 lg:border-l lg:border-rule bg-cream-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-rule pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-primary"></span>
                <span className="eyebrow text-xs text-ink font-bold tracking-eyebrow">
                  Featured Case Study Metric
                </span>
              </div>
              <span className="eyebrow text-[0.65rem] text-primary font-mono bg-primary/10 px-2 py-0.5">
                3,900 ROWS
              </span>
            </div>

            <div className="mt-6">
              <h2 className="d-3 text-ink">
                Customer Shopping Behavior
              </h2>
              <p className="mt-2 text-xs font-mono text-muted uppercase tracking-wider">
                Python (Pandas) • MySQL • Power BI
              </p>
            </div>

            {/* Interactive Tab Toggle */}
            <div className="mt-6 grid grid-cols-2 gap-2 border border-rule p-1 bg-cream/60">
              <button
                onClick={() => setActiveMetricTab("revenue")}
                className={`py-2 px-3 text-xs eyebrow tracking-wider font-semibold transition-all ${
                  activeMetricTab === "revenue"
                    ? "bg-ink text-cream shadow-sm"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                Gender Revenue Split
              </button>
              <button
                onClick={() => setActiveMetricTab("loyalty")}
                className={`py-2 px-3 text-xs eyebrow tracking-wider font-semibold transition-all ${
                  activeMetricTab === "loyalty"
                    ? "bg-ink text-cream shadow-sm"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                Repeat Buyer Lift
              </button>
            </div>

            {/* Dynamic Metric Display */}
            {activeMetricTab === "revenue" ? (
              <div className="mt-6 space-y-4">
                <div className="border border-rule p-4 bg-white/70">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-muted">Male Customers</span>
                    <span className="text-xl font-display text-primary">$157.9K (67.7%)</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full bg-cream overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "67.7%" }}></div>
                  </div>
                </div>

                <div className="border border-rule p-4 bg-white/70">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-muted">Female Customers</span>
                    <span className="text-xl font-display text-ink">$75.2K (32.3%)</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full bg-cream overflow-hidden">
                    <div className="h-full bg-ink" style={{ width: "32.3%" }}></div>
                  </div>
                </div>

                <div className="p-3 bg-primary/5 border-l-2 border-primary text-xs text-ink/80 leading-relaxed">
                  <strong className="text-primary font-semibold">SQL Discovery:</strong> Male buyers generated 2.1× higher gross merchandise volume, concentrated in outerwear and accessories.
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <div className="border border-rule p-4 bg-white/70">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-muted">Repeat Buyers (&gt;5 orders)</span>
                    <span className="text-xl font-display text-primary">38.2% Subscribed</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full bg-cream overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "76%" }}></div>
                  </div>
                </div>

                <div className="border border-rule p-4 bg-white/70">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-muted">First-Time Buyers (1 order)</span>
                    <span className="text-xl font-display text-ink">13.0% Subscribed</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full bg-cream overflow-hidden">
                    <div className="h-full bg-ink" style={{ width: "26%" }}></div>
                  </div>
                </div>

                <div className="p-3 bg-primary/5 border-l-2 border-primary text-xs text-ink/80 leading-relaxed">
                  <strong className="text-primary font-semibold">Strategic Impact:</strong> Customers who made &gt;5 purchases were 2.94× more likely to subscribe, prompting targeted post-order loyalty automations.
                </div>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="mt-8 pt-6 border-t border-rule flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-mono text-muted">
              <Database className="w-4 h-4 text-primary" />
              <span>Cleaned in Python • Queried in MySQL</span>
            </div>
            <a
              href="https://github.com/lochanhavalimane-pixel/Customer-Shopping-Behaviour-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs eyebrow text-primary hover:underline flex items-center gap-1 font-semibold"
            >
              <span>GitHub Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
