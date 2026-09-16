import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profileData";
import heroImage from "../assets/hero.png";

export default function Hero({ onOpenResume }) {
  const heroSkills = profileData.tagline.split(" • ");

  return (
    <section id="top" className="hero-enter rule-b pt-20 sm:pt-24 lg:pt-28">
      {/* Top Ticker Bar */}
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="hero-enter-item rule-b hidden flex-col gap-2 pb-3 eyebrow text-ink/70 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 tracking-eyebrow text-xs md:flex">
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
        <div className="hero-enter-item rule-b mb-4 flex flex-col gap-3 pb-3 eyebrow text-ink/70 tracking-eyebrow md:hidden">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] leading-tight tracking-[0.08em]">
            {heroSkills.map((skill) => (
              <span key={skill} className="flex items-start gap-1.5">
                <span className="text-primary" aria-hidden="true">•</span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-rule pt-3 text-[11px] leading-tight tracking-[0.08em]">
            <span>{profileData.location}</span>
            <span className="inline-flex items-center gap-1.5 text-primary font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {profileData.availability}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Body Grid */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_clamp(22rem,36vw,34rem)]">
        {/* Left Headline & Narrative */}
        <div className="order-1 mx-auto flex w-full max-w-[110rem] flex-col justify-center px-5 pb-10 pt-8 sm:px-8 sm:pb-14 lg:order-1 lg:mx-0 lg:max-w-none lg:px-12 lg:py-14">
          <h1 className="d-hero max-w-[14ch]">
            <span className="block">
              <span className="hero-title-line block"><span className="hero-title-text text-ink">TURNING.</span></span>
              <span className="hero-title-line block"><span className="hero-title-text text-primary">RAW DATA.</span></span>
              <span className="hero-title-line block"><span className="hero-title-text text-ink">INTO REVENUE.</span></span>
            </span>
          </h1>

          <div className="hero-enter-item mt-8 max-w-2xl border-l-2 border-primary pl-5 sm:mt-9 sm:pl-6">
            <p className="text-base sm:text-[1.0625rem] leading-relaxed text-ink/85 font-normal">
              <span className="mb-2 block font-semibold text-ink">I'm Lochan Havalimane.</span>
              {profileData.leadStory}
            </p>
          </div>

          {/* Action Button Row */}
          <div className="hero-enter-item mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink px-6 py-4 eyebrow text-xs text-cream transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="eyebrow text-xs font-bold bg-primary text-cream px-4 py-3 transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              Read Full CV →
            </button>
          </div>
        </div>

        <div className="hero-enter-image order-2 lg:order-2 flex items-center justify-center border-t border-rule bg-cream-card px-5 pb-10 pt-6 sm:px-8 sm:pb-12 lg:border-l lg:border-t-0 lg:p-6">
          <div className="w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-rule bg-white shadow-[0_24px_60px_rgba(13,18,26,0.12)]">
            <img
              src={heroImage}
              alt={profileData.name}
              className="h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[clamp(500px,42vw,680px)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
