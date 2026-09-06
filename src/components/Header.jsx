import React, { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";

export default function Header({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Live Data", href: "#livedata" },
    { name: "Stack", href: "#stack" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[110rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        {/* Monogram Logo inspired by ainanai.vercel.app */}
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden bg-ink transition-colors duration-500 group-hover:bg-primary">
            <span className="absolute -inset-y-2 left-1/2 w-[2px] -translate-x-1/2 rotate-[28deg] bg-primary transition-all duration-500 group-hover:bg-cream group-hover:rotate-[-28deg]"></span>
            <span className="font-display relative flex text-[0.95rem] leading-none tracking-tight text-cream">
              <span className="-mr-[0.06em] -translate-y-[0.14em]">L</span>
              <span className="translate-y-[0.14em]">H</span>
            </span>
          </span>
          <span className="truncate eyebrow text-ink font-semibold tracking-eyebrow">
            Lochan Havalimane
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-wipe eyebrow text-ink hover:text-primary transition-colors duration-200 tracking-eyebrow text-xs font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2 border border-ink/20 px-3.5 py-1.5 eyebrow text-xs font-semibold text-ink transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
          >
            <FileText className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 border border-ink/20 px-2.5 py-1 text-[0.7rem] eyebrow font-semibold text-ink hover:border-primary hover:text-primary"
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center text-ink hover:text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-rule bg-cream/98 px-6 py-6 shadow-lg backdrop-blur-md">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="eyebrow text-sm font-semibold text-ink hover:text-primary py-2 border-b border-rule/50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
