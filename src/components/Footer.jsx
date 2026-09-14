import React from "react";
import { profileData } from "../data/profileData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="page-reveal bg-black pb-10 text-[#9CA3AF]">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="border-t border-neutral-800 pt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
          <p className="min-w-0 truncate text-[0.7rem] tracking-wide text-[#9CA3AF] uppercase font-mono">
            © 2026 LOCHAN HAVALIMANE — ALL RIGHTS RESERVED
          </p>

          <ul className="flex shrink-0 flex-wrap gap-x-6 gap-y-2">
            <li>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe eyebrow text-xs text-[#9CA3AF] hover:text-[#9CA3AF]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe eyebrow text-xs text-[#9CA3AF] hover:text-[#9CA3AF]"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profileData.email}`}
                className="link-wipe eyebrow text-xs text-[#9CA3AF] hover:text-[#9CA3AF]"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="link-wipe eyebrow text-xs text-[#9CA3AF] font-bold hover:text-[#9CA3AF] flex items-center gap-1"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
