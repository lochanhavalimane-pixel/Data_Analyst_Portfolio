import React, { useEffect } from "react";
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profileData } from "../data/profileData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border-2 border-ink overflow-y-auto shadow-2xl p-6 sm:p-12 text-ink print:p-0 print:border-none"
        role="dialog"
        aria-modal="true"
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between border-b border-rule pb-4 mb-8 print:hidden">
          <span className="eyebrow text-xs text-primary font-bold">
            • Data Analyst
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-rule hover:border-primary hover:text-primary text-xs font-mono transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 border border-rule hover:bg-ink hover:text-cream transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Content */}
        <div className="resume-paper font-sans">
          {/* Header */}
          <div className="text-center border-b border-rule pb-6">
            <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-ink">
              {profileData.name}
            </h1>
            <p className="mt-1 text-sm text-muted font-medium">
              {profileData.location}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-ink/80">
              <a href={`tel:${profileData.phone}`} className="hover:text-primary">{profileData.phone}</a>
              <span>—</span>
              <a href={`mailto:${profileData.email}`} className="hover:text-primary">{profileData.email}</a>
              <span>—</span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:underline">LinkedIn</a>
              <span>—</span>
              <a href={profileData.github} target="_blank" rel="noreferrer" className="text-primary hover:underline">GitHub</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 border-b border-rule pb-6">
            <h2 className="eyebrow text-xs font-bold text-primary tracking-eyebrow mb-2">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
              {profileData.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mt-6 border-b border-rule pb-6">
            <h2 className="eyebrow text-xs font-bold text-primary tracking-eyebrow mb-3">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-ink">Anjuman Institute Of Technology And Management, Bhatkal</span>
                  <span className="font-mono text-muted text-xs">2023 — 2027</span>
                </div>
                <div className="flex justify-between text-xs text-ink/80 mt-0.5">
                  <span>Bachelor of Engineering in Computer Science (CSE)</span>
                  <span className="font-mono font-semibold text-primary">CGPA: 7.32</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-ink">SDM College, Ujire</span>
                  <span className="font-mono text-muted text-xs">2021 — 2023</span>
                </div>
                <div className="flex justify-between text-xs text-ink/80 mt-0.5">
                  <span>Pre-University Course (PCMS)</span>
                  <span className="font-mono font-semibold text-primary">Percentage: 90.33%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-ink">Anand Ashram High School, Bhatkal</span>
                  <span className="font-mono text-muted text-xs">2020 — 2021</span>
                </div>
                <div className="flex justify-between text-xs text-ink/80 mt-0.5">
                  <span>SSLC</span>
                  <span className="font-mono font-semibold text-primary">Percentage: 87.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-6 border-b border-rule pb-6">
            <h2 className="eyebrow text-xs font-bold text-primary tracking-eyebrow mb-3">
              TECHNICAL SKILLS
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-ink/85">
              <li><strong>• Programming:</strong> Python, SQL, Java</li>
              <li><strong>• Data Analytics:</strong> Pandas, NumPy, Matplotlib, Seaborn, Power BI, Microsoft Excel</li>
              <li><strong>• Databases:</strong> MySQL, MongoDB</li>
              <li><strong>• Statistical Analysis:</strong> Data Cleaning, Exploratory Data Analysis (EDA), ETL, Hypothesis Testing, KPI Analysis</li>
              <li><strong>• Machine Learning:</strong> Regression, Classification, Clustering, Feature Engineering, Scikit-learn</li>
              <li><strong>• Tools:</strong> Jupyter Notebook, Git, GitHub, VS Code</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mt-6 border-b border-rule pb-6">
            <h2 className="eyebrow text-xs font-bold text-primary tracking-eyebrow mb-3">
              PROJECTS
            </h2>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-xs sm:text-sm text-ink">
                  Customer Shopping Behaviour Analysis: <span className="font-mono font-normal text-muted">Python, MySQL, Power BI</span>
                </h3>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-ink/80 pl-4 list-disc">
                <li>Analyzed shopping behavior across 3,900 transactions in Python to uncover spending patterns and customer segments, guiding strategic business decisions.</li>
                <li>Cleaned and engineered the dataset by imputing missing ratings, standardizing columns, and creating age_group and purchase_frequency features to prepare data for analysis.</li>
                <li>Conducted SQL-based analysis in MySQL, revealing male customers generated <strong>2× more revenue</strong> than female customers ($157.9K vs. $75.2K).</li>
                <li>Identified that repeat buyers (&gt;5 purchases) were nearly <strong>3× more likely to subscribe</strong>, informing loyalty program recommendations.</li>
                <li>Built an interactive Power BI dashboard with dynamic filters to visualize revenue and sales trends across categories and age groups.</li>
                <li className="list-none -ml-4 font-mono text-primary text-[0.75rem]">
                  Repository: github.com/lochanhavalimane-pixel/Customer_Shopping_Behaviour_Analysis
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h2 className="eyebrow text-xs font-bold text-primary tracking-eyebrow mb-3">
              CERTIFICATIONS
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-ink/85">
              <li className="flex justify-between">
                <span>• Data Analytics Job Simulation – Quantium (Forage)</span>
                <span className="font-mono text-muted">Aug 2026</span>
              </li>
              <li className="flex justify-between">
                <span>• Data Analytics Job Simulation – Deloitte (Forage)</span>
                <span className="font-mono text-muted">Jun 2026</span>
              </li>
              <li className="flex justify-between">
                <span>• Networking Basics – Cisco Networking Academy</span>
                <span className="font-mono text-muted">Nov 2025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
