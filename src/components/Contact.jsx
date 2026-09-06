import React, { useState } from "react";
import { profileData } from "../data/profileData";
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="bg-ink py-12 text-cream sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column */}
          <div>
            <h2 className="d-1 text-cream">
              LET'S TALK<br />
              DATA &amp;<br />
              <span className="text-primary">GROWTH.</span>
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profileData.email}`}
                className="group inline-flex items-center gap-4 border border-cream/25 px-6 py-4 eyebrow text-cream transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <span>Send Direct Email</span>
                <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>

              <button
                onClick={() => copyToClipboard(profileData.email, "email")}
                className="inline-flex items-center gap-2 border border-cream/20 px-5 py-4 eyebrow text-xs text-cream/80 hover:border-cream hover:text-cream transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Information List */}
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="eyebrow text-primary text-xs font-bold tracking-eyebrow">
                Have an Opportunity?
              </h3>
              <p className="mt-4 text-sm text-cream/70 leading-relaxed max-w-xs">
                I'm actively seeking full-time Data Analyst, BI Developer, and Analytics Engineering roles where clean queries and strategic models drive measurable revenue.
              </p>
            </div>

            <ul className="space-y-6">
              <li>
                <p className="eyebrow text-cream/45 text-[0.7rem] font-mono">Direct Email</p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="link-wipe mt-1 inline-block text-cream hover:text-primary transition-colors text-sm font-medium font-mono"
                >
                  {profileData.email}
                </a>
              </li>

              <li>
                <p className="eyebrow text-cream/45 text-[0.7rem] font-mono">Mobile Phone</p>
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                    className="link-wipe text-cream hover:text-primary transition-colors text-sm font-medium font-mono"
                  >
                    {profileData.phone}
                  </a>
                  <button
                    onClick={() => copyToClipboard(profileData.phone, "phone")}
                    title="Copy phone"
                    className="text-cream/50 hover:text-cream p-1"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </li>

              <li>
                <p className="eyebrow text-cream/45 text-[0.7rem] font-mono">Location</p>
                <p className="mt-1 text-cream text-sm">
                  {profileData.location}
                </p>
              </li>

              <li>
                <p className="eyebrow text-cream/45 text-[0.7rem] font-mono">Connect Online</p>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-wipe eyebrow text-xs text-cream/80 hover:text-cream flex items-center gap-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-cream/30">•</span>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-wipe eyebrow text-xs text-cream/80 hover:text-cream flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
