import React, { useState } from "react";
import { BarChart3, Filter, Code2, Copy, Check, Sparkles, ArrowRight } from "lucide-react";

export default function InteractiveDemo({ embedded = false }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedSQL, setCopiedSQL] = useState(false);
  const [activeView, setActiveView] = useState("chart");

  const categoryData = {
    all: {
      categoryName: "All Product Categories (3,900 Transactions)",
      maleRev: 157.9,
      femaleRev: 75.2,
      totalOrders: 3900,
      maleOrders: 2614,
      femaleOrders: 1286,
      maleAOV: 60.41,
      femaleAOV: 58.48,
      topItem: "Winter Outerwear & Accessories",
      repeatSubRate: 38.2,
      firstTimeSubRate: 13.0,
      sql: `-- SQL Analysis across all 3,900 transactions
SELECT 
  gender,
  COUNT(transaction_id) AS total_orders,
  ROUND(SUM(purchase_amount_usd) / 1000, 1) AS revenue_k,
  ROUND(AVG(purchase_amount_usd), 2) AS avg_order_val,
  ROUND(SUM(CASE WHEN subscription_status = 'Yes' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1) AS sub_rate_pct
FROM customer_transactions
GROUP BY gender
ORDER BY revenue_k DESC;`
    },
    clothing: {
      categoryName: "Clothing & Outerwear (1,730 Transactions)",
      maleRev: 74.8,
      femaleRev: 32.4,
      totalOrders: 1730,
      maleOrders: 1190,
      femaleOrders: 540,
      maleAOV: 62.85,
      femaleAOV: 60.0,
      topItem: "Heavy Coats & Sweaters",
      repeatSubRate: 41.5,
      firstTimeSubRate: 14.2,
      sql: `-- SQL Category breakdown: Clothing & Outerwear
SELECT 
  gender,
  COUNT(transaction_id) AS total_orders,
  ROUND(SUM(purchase_amount_usd) / 1000, 1) AS revenue_k,
  ROUND(AVG(purchase_amount_usd), 2) AS avg_order_val
FROM customer_transactions
WHERE category = 'Clothing'
GROUP BY gender;`
    },
    footwear: {
      categoryName: "Footwear & Boots (960 Transactions)",
      maleRev: 42.1,
      femaleRev: 21.6,
      totalOrders: 960,
      maleOrders: 645,
      femaleOrders: 315,
      maleAOV: 65.27,
      femaleAOV: 68.57,
      topItem: "All-Weather Hiking Boots",
      repeatSubRate: 34.0,
      firstTimeSubRate: 11.8,
      sql: `-- SQL Category breakdown: Footwear
SELECT 
  gender,
  COUNT(transaction_id) AS total_orders,
  ROUND(SUM(purchase_amount_usd) / 1000, 1) AS revenue_k,
  ROUND(AVG(purchase_amount_usd), 2) AS avg_order_val
FROM customer_transactions
WHERE category = 'Footwear'
GROUP BY gender;`
    },
    accessories: {
      categoryName: "Accessories & Gear (1,210 Transactions)",
      maleRev: 41.0,
      femaleRev: 21.2,
      totalOrders: 1210,
      maleOrders: 779,
      femaleOrders: 431,
      maleAOV: 52.63,
      femaleAOV: 49.18,
      topItem: "Leather Wallets & Belts",
      repeatSubRate: 36.8,
      firstTimeSubRate: 12.5,
      sql: `-- SQL Category breakdown: Accessories
SELECT 
  gender,
  COUNT(transaction_id) AS total_orders,
  ROUND(SUM(purchase_amount_usd) / 1000, 1) AS revenue_k,
  ROUND(AVG(purchase_amount_usd), 2) AS avg_order_val
FROM customer_transactions
WHERE category = 'Accessories'
GROUP BY gender;`
    }
  };

  const current = categoryData[selectedCategory];
  const totalRev = current.maleRev + current.femaleRev;
  const malePct = ((current.maleRev / totalRev) * 100).toFixed(1);
  const femalePct = ((current.femaleRev / totalRev) * 100).toFixed(1);

  const copySQL = () => {
    navigator.clipboard.writeText(current.sql);
    setCopiedSQL(true);
    setTimeout(() => setCopiedSQL(false), 2000);
  };

  const wrapperClass = embedded ? "" : "rule-b py-12 sm:py-16 lg:py-20 bg-cream-card";
  const innerClass = embedded ? "" : "mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12";

  return (
    <section id={embedded ? undefined : "livedata"} className={wrapperClass}>
      <div className={innerClass}>
        <div className="space-y-8">
          {!embedded && (
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
                  <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Live Analytics Explorer</span>
                </div>
                <h2 className="d-1 mt-4">
                  <span className="block text-ink">INTERACTIVE</span>
                  <span className="block text-primary">DATA INSIGHTS.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted max-w-xl">
                  Filter my real-world findings from the <strong>Customer Shopping Behaviour</strong> analysis. Test assumptions dynamically and inspect the underlying SQL queries.
                </p>
              </div>

              <div className="flex items-center gap-2 border border-rule p-1 bg-cream self-start md:self-auto">
                <button
                  onClick={() => setActiveView("chart")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs eyebrow font-semibold transition-all ${
                    activeView === "chart" ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5 text-primary" />
                  <span>Visual Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveView("sql")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs eyebrow font-semibold transition-all ${
                    activeView === "sql" ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-primary" />
                  <span>Query Logic</span>
                </button>
              </div>
            </div>
          )}

          {embedded && (
            <div className="border-b border-rule pb-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true"></span>
                <span className="eyebrow text-ink/70 tracking-eyebrow text-xs">Live Analytics Explorer</span>
              </div>
              <p className="mt-3 text-sm text-muted max-w-xl">
                Explore the customer behavior data interactively and inspect the underlying SQL logic behind these findings.
              </p>
            </div>
          )}

          <div className={`flex flex-wrap items-center gap-2 ${embedded ? "border-t border-rule pt-4" : "border-y border-rule py-4"}`}>
            <span className="text-xs font-mono text-muted mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-primary" />
              <span>Filter Category:</span>
            </span>

            {[
              { id: "all", label: "All Categories (3.9K Rows)" },
              { id: "clothing", label: "Clothing & Outerwear" },
              { id: "footwear", label: "Footwear & Boots" },
              { id: "accessories", label: "Accessories" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs eyebrow font-semibold border transition-all ${
                  selectedCategory === tab.id
                    ? "border-primary bg-primary text-white"
                    : "border-rule bg-white/80 text-ink hover:border-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeView === "chart" ? (
            <div className="grid gap-8 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-8 border border-rule bg-white p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-rule pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-ink">{current.categoryName}</h3>
                      <p className="text-xs font-mono text-muted mt-0.5">Demographic Revenue Discrepancy</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-muted block">Combined Revenue</span>
                      <span className="d-3 text-primary">${totalRev.toFixed(1)}K USD</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline text-sm mb-2">
                        <span className="font-semibold text-ink flex items-center gap-2">
                          <span className="h-3 w-3 bg-primary inline-block"></span>
                          <span>Male Customers ({current.maleOrders.toLocaleString()} Orders)</span>
                        </span>
                        <span className="font-mono font-bold text-primary">
                          ${current.maleRev}K ({malePct}%)
                        </span>
                      </div>
                      <div className="h-8 w-full bg-cream border border-rule overflow-hidden relative">
                        <div
                          className="h-full bg-primary flex items-center justify-end pr-3 transition-all duration-700 ease-out"
                          style={{ width: `${malePct}%` }}
                        >
                          <span className="text-[0.7rem] font-mono text-white font-bold">{malePct}%</span>
                        </div>
                      </div>
                      <div className="mt-1.5 flex justify-between text-xs font-mono text-muted">
                        <span>Avg Order Value: ${current.maleAOV.toFixed(2)}</span>
                        <span>Share of Segment: {malePct}%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline text-sm mb-2">
                        <span className="font-semibold text-ink flex items-center gap-2">
                          <span className="h-3 w-3 bg-ink inline-block"></span>
                          <span>Female Customers ({current.femaleOrders.toLocaleString()} Orders)</span>
                        </span>
                        <span className="font-mono font-bold text-ink">
                          ${current.femaleRev}K ({femalePct}%)
                        </span>
                      </div>
                      <div className="h-8 w-full bg-cream border border-rule overflow-hidden relative">
                        <div
                          className="h-full bg-ink flex items-center justify-end pr-3 transition-all duration-700 ease-out"
                          style={{ width: `${femalePct}%` }}
                        >
                          <span className="text-[0.7rem] font-mono text-white font-bold">{femalePct}%</span>
                        </div>
                      </div>
                      <div className="mt-1.5 flex justify-between text-xs font-mono text-muted">
                        <span>Avg Order Value: ${current.femaleAOV.toFixed(2)}</span>
                        <span>Share of Segment: {femalePct}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-4 bg-cream/50 p-4">
                  <div className="border-l-2 border-primary pl-3">
                    <span className="eyebrow text-xs text-muted block">Repeat Buyers (&gt;5 Purchases)</span>
                    <span className="text-xl font-display text-primary mt-1 block">
                      {current.repeatSubRate}% Conversion
                    </span>
                    <span className="text-xs text-ink/75 block mt-1">High affinity loyalty candidate</span>
                  </div>
                  <div className="border-l-2 border-ink/40 pl-3">
                    <span className="eyebrow text-xs text-muted block">First-Time Buyers (1 Purchase)</span>
                    <span className="text-xl font-display text-ink mt-1 block">
                      {current.firstTimeSubRate}% Conversion
                    </span>
                    <span className="text-xs text-ink/75 block mt-1">Baseline cold onboarding rate</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 border border-rule bg-white p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 eyebrow text-xs text-primary font-bold tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Analytical Takeaway</span>
                  </div>

                  <h4 className="d-3 text-ink mt-4">
                    {(current.maleRev / current.femaleRev).toFixed(1)}× Revenue Velocity
                  </h4>

                  <p className="mt-4 text-xs sm:text-sm text-ink/80 leading-relaxed">
                    In this segment, male shoppers represent an overwhelming proportion of total volume. Shifting top-of-funnel ad spend towards male demographics yields double the transaction efficiency.
                  </p>

                  <div className="mt-6 space-y-3 border-t border-rule pt-4 text-xs text-ink/80">
                    <div className="flex justify-between py-1 border-b border-rule/50">
                      <span className="font-mono text-muted">Top Sub-Item:</span>
                      <span className="font-semibold text-ink">{current.topItem}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-rule/50">
                      <span className="font-mono text-muted">Loyalty Lift Factor:</span>
                      <span className="font-semibold text-primary font-mono">
                        {(current.repeatSubRate / current.firstTimeSubRate).toFixed(2)}× higher
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-mono text-muted">Total Segment Rows:</span>
                      <span className="font-semibold text-ink font-mono">{current.totalOrders}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-rule">
                  <a
                    href="#work"
                    className="w-full text-center group flex items-center justify-center gap-2 bg-ink py-3 px-4 eyebrow text-xs text-cream hover:bg-primary transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-rule bg-ink text-cream p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cream/70">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span>MySQL Analytics Pipeline • Grouping by Demographics</span>
                </div>
                <button
                  onClick={copySQL}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-cream/10 hover:bg-primary text-cream transition-colors"
                >
                  {copiedSQL ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSQL ? "Copied!" : "Copy SQL"}</span>
                </button>
              </div>
              <pre className="mt-6 font-mono text-xs sm:text-sm text-cream/90 overflow-x-auto leading-relaxed p-4 bg-black/40 border border-cream/10">
                <code>{current.sql}</code>
              </pre>
              <p className="mt-4 text-xs font-mono text-cream/60">
                * Executed in MySQL with execution plan indexing on gender and category columns.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

