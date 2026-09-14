import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8%" },
    );

    const observeRevealElements = (root = document) => {
      root.querySelectorAll(".heading-reveal:not(.is-visible), .page-reveal:not(.is-visible)").forEach((element) => {
        observer.observe(element);
      });
    };

    observeRevealElements();

    const mutations = new MutationObserver(() => observeRevealElements());
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col selection:bg-primary selection:text-white">
      {/* Top Navigation */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Process />
        <Contact />
      </main>

      {/* Dark Finish Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
