import React from "react";
import PythonLogo from "../assets/stack/Python.png";
import SQLLogo from "../assets/stack/SQL.png";
import JavaLogo from "../assets/stack/Java.png";
import PowerBILogo from "../assets/stack/PowerBI.png";
import ExcelLogo from "../assets/stack/Microsoft_Excel.png";
import PandasLogo from "../assets/stack/Pandas.png";
import NumPyLogo from "../assets/stack/NumPy.png";
import MatplotlibLogo from "../assets/stack/Matplotlib.png";
import SeabornLogo from "../assets/stack/Seaborn.png";
import MySQLLogo from "../assets/stack/MySQL.png";
import MongoDBLogo from "../assets/stack/MongoDB.png";
import JupyterLogo from "../assets/stack/Jupyter.png";
import VSCodeLogo from "../assets/stack/VS_Code.png";
import GitLogo from "../assets/stack/Git.png";
import GitHubLogo from "../assets/stack/GitHub.png";

const stackGroups = [
  {
    name: "Programming Languages",
    items: [
      { name: "Python", logo: PythonLogo },
      { name: "SQL", logo: SQLLogo },
      { name: "Java", logo: JavaLogo },
    ],
  },
  {
    name: "Data Analytics & BI",
    items: [
      { name: "Power BI", logo: PowerBILogo },
      { name: "Microsoft Excel", logo: ExcelLogo },
      { name: "Pandas", logo: PandasLogo },
      { name: "NumPy", logo: NumPyLogo },
      { name: "Matplotlib", logo: MatplotlibLogo },
      { name: "Seaborn", logo: SeabornLogo },
    ],
  },
  {
    name: "Databases & Storage",
    items: [
      { name: "MySQL", logo: MySQLLogo },
      { name: "MongoDB", logo: MongoDBLogo },
    ],
  },
  {
    name: "Tools & Environment",
    items: [
      { name: "Jupyter", logo: JupyterLogo },
      { name: "VS Code", logo: VSCodeLogo },
      { name: "Git", logo: GitLogo },
      { name: "GitHub", logo: GitHubLogo },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="page-reveal rule-b py-5 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
          <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Technical Toolbelt</span>
        </div>

        <h2 className="heading-reveal d-1 mt-4">
          <span className="block">
            <span className="block text-ink">THE TOOLS I</span>
            <span className="block text-primary">REACH FOR.</span>
          </span>
        </h2>

        <div className="mt-7 space-y-0">
          {stackGroups.map((group) => (
            <div
              key={group.name}
              className="rule-t py-3 sm:py-4 lg:grid lg:grid-cols-[22%_78%] lg:items-center lg:gap-6"
            >
              <div className="mb-2 lg:mb-0">
                <h3 className="eyebrow text-primary text-[0.68rem] font-bold tracking-[0.18em] text-left">
                  {group.name}
                </h3>
              </div>

              <div className="flex min-w-0 flex-wrap items-start justify-start gap-x-5 gap-y-4 sm:gap-x-6 sm:gap-y-5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex w-[86px] min-w-[86px] flex-col items-center justify-start text-center sm:w-[96px] lg:w-[104px]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-[42px] w-[42px] object-contain sm:h-[46px] sm:w-[46px] lg:h-[50px] lg:w-[50px]"
                    />
                    <span className="mt-2 text-[10px] leading-tight text-ink/80 sm:text-[11px] lg:text-[12px]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
