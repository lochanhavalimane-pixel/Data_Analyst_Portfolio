import React, { useState, useEffect } from "react";
import { profileData } from "../data/profileData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (IST)
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="page-reveal bg-ink pb-10 text-cream border-t border-cream/15">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12 pt-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="min-w-0 truncate text-[0.7rem] tracking-wide text-cream/50 uppercase font-mono">
              © {new Date().getFullYear()} {profileData.name} — Data Analyst
            </p>
            <span className="hidden sm:inline text-cream/20">•</span>
            <span className="text-[0.7rem] font-mono text-cream/60 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              <span>Bhatkal, IN: {istTime || "11:00 PM IST"}</span>
            </span>
          </div>

          <ul className="flex shrink-0 flex-wrap gap-x-6 gap-y-2">
            <li>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe eyebrow text-xs text-cream/70 hover:text-cream"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe eyebrow text-xs text-cream/70 hover:text-cream"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profileData.email}`}
                className="link-wipe eyebrow text-xs text-cream/70 hover:text-cream"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="link-wipe eyebrow text-xs text-primary font-bold hover:text-white flex items-center gap-1"
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
