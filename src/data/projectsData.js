export const projectsData = [
  {
    id: "customer-shopping-behaviour",
    number: "01",
    year: "2026",
    title: "Customer Shopping Behaviour Analysis",
    subtitle: "Python • MySQL • Power BI Dashboard",
    category: "Commercial Analytics & BI",
    featured: true,
    summary: "End-to-end commercial analysis across 3,900 consumer transactions. Uncovered a 2× male revenue gap ($157.9K vs $75.2K) and discovered repeat buyers (>5 purchases) are 3× more likely to subscribe, delivering actionable loyalty retention strategies.",
    metrics: [
      { label: "Transactions", val: "3,900" },
      { label: "Male Revenue", val: "$157.9K" },
      { label: "Female Revenue", val: "$75.2K" },
      { label: "Repeat Buyer Lift", val: "2.94×" }
    ],
    tags: ["Python", "Pandas", "MySQL", "Power BI", "Data Cleaning", "Feature Engineering", "DAX"],
    github: "https://github.com/lochanhavalimane-pixel/Customer-Shopping-Behaviour-Analysis",
    liveDemoAvailable: true,
    problemStatement: "The retail business needed to understand why subscription conversion stagnated despite high footfall, and whether marketing budgets were allocated efficiently across demographic segments.",
    pipeline: [
      "Extracted and ingested 3,900 transaction records into Python (Pandas/NumPy).",
      "Handled nulls and missing customer ratings via median imputation by category.",
      "Engineered new strategic features: age_group (Gen Z, Millennial, Gen X, Boomer) and purchase_frequency tiers.",
      "Loaded clean dataset into MySQL database for relational cohort queries and SQL aggregation.",
      "Built dynamic, interactive Power BI executive dashboard with cross-filtering slicers by gender, category, and review score."
    ],
    keyInsights: [
      "Male shoppers generated 67.7% ($157.9K) of total revenue versus female shoppers ($75.2K), primarily concentrated in outerwear and accessories.",
      "Shoppers with >5 previous transactions converted to subscriptions at a 38.2% rate versus only 13.0% for first-time buyers (nearly 3× higher).",
      "Gen X and Boomer demographics exhibited the highest average order value (AOV) despite lower transaction frequencies."
    ],
    sqlSnippet: `SELECT 
  gender,
  COUNT(transaction_id) AS total_orders,
  ROUND(SUM(purchase_amount_usd), 2) AS total_revenue,
  ROUND(AVG(purchase_amount_usd), 2) AS avg_order_value,
  ROUND(SUM(CASE WHEN subscription_status = 'Yes' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS sub_conversion_pct
FROM customer_transactions
GROUP BY gender
ORDER BY total_revenue DESC;`
  },
  {
    id: "supply-chain-inventory-kpi",
    number: "02",
    year: "2026",
    title: "Supply Chain & Inventory KPI Analytics",
    subtitle: "SQL • Python • Power BI",
    category: "Operational Intelligence",
    featured: true,
    summary: "Multi-echelon inventory tracking dashboard modeling stockout probabilities, supplier lead-time variance, and safety stock requirements across 1,200+ SKUs.",
    metrics: [
      { label: "SKUs Monitored", val: "1,200+" },
      { label: "Stockout Reduction", val: "-22%" },
      { label: "Holding Cost Saved", val: "18.4%" },
      { label: "On-Time Delivery", val: "94.2%" }
    ],
    tags: ["SQL", "Python", "Power BI", "ETL", "Forecasting", "DAX"],
    github: "https://github.com/lochanhavalimane-pixel",
    liveDemoAvailable: false,
    problemStatement: "Frequent stockouts during seasonal demand peaks were costing the enterprise significant revenue while slow-moving inventory tied up capital in secondary distribution centers.",
    pipeline: [
      "Engineered SQL ETL pipeline calculating rolling 30-day run rates and supplier lead time standard deviations.",
      "Applied statistical safety stock calculations (Z-score 95% service level) in Python.",
      "Designed Power BI report featuring stock velocity tiers (ABC Analysis) and automated reorder alerts."
    ],
    keyInsights: [
      "Top 15% of SKUs (Category A) generated 78% of gross margin but experienced 64% of backorders.",
      "Lead time variance from top 2 overseas suppliers was the single biggest contributor to stockout risk, not raw demand spikes."
    ],
    sqlSnippet: `WITH RunRate AS (
  SELECT 
    sku_id,
    AVG(daily_sales) AS avg_daily_demand,
    STDDEV(daily_sales) AS std_demand
  FROM warehouse_shipments
  WHERE shipment_date >= CURRENT_DATE - INTERVAL 60 DAY
  GROUP BY sku_id
)
SELECT 
  r.sku_id,
  r.avg_daily_demand,
  ROUND(1.65 * SQRT(avg_lead_time * POWER(r.std_demand, 2) + POWER(r.avg_daily_demand, 2) * POWER(lead_time_std, 2)), 0) AS recommended_safety_stock
FROM RunRate r
JOIN supplier_benchmarks s ON r.sku_id = s.sku_id;`
  },
  {
    id: "saas-churn-cohort-retention",
    number: "03",
    year: "2025",
    title: "SaaS Retention & Customer Churn Modeling",
    subtitle: "Python • Scikit-learn • Pandas • Seaborn",
    category: "Predictive Analytics",
    featured: true,
    summary: "Predictive classification and RFM cohort segmentation on 12,000+ subscription accounts, identifying leading indicators of customer drop-off with 86.4% ROC-AUC accuracy.",
    metrics: [
      { label: "Accounts Modeled", val: "12,000+" },
      { label: "ROC-AUC Score", val: "86.4%" },
      { label: "Early Warning", val: "30 Days" },
      { label: "Nurture Lift", val: "3.2×" }
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Feature Importance"],
    github: "https://github.com/lochanhavalimane-pixel",
    liveDemoAvailable: false,
    problemStatement: "Customer success teams were responding to cancellations reactively rather than identifying churn precursors during months 1 to 3 of onboarding.",
    pipeline: [
      "Extracted product telemetry event logs and billing timestamps.",
      "Calculated RFM metrics (Recency of active session, Frequency of core feature usage, Monetary contract value).",
      "Trained and evaluated Logistic Regression and Random Forest classifiers with 5-fold cross-validation.",
      "Generated SHAP feature importance plots to present to non-technical executives."
    ],
    keyInsights: [
      "Users who failed to invite at least 2 team members within 14 days had a 74% churn probability within 90 days.",
      "Session duration declines in month 2 was a stronger churn signal than support ticket volume."
    ],
    sqlSnippet: `SELECT 
  cohort_month,
  COUNT(user_id) AS total_users,
  ROUND(SUM(CASE WHEN retained_m1 = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1) AS m1_retention,
  ROUND(SUM(CASE WHEN retained_m3 = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1) AS m3_retention,
  ROUND(SUM(CASE WHEN retained_m6 = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1) AS m6_retention
FROM subscription_cohorts
GROUP BY cohort_month
ORDER BY cohort_month ASC;`
  },
  {
    id: "hospital-admission-eda",
    number: "04",
    year: "2025",
    title: "Hospital Admission & Length of Stay EDA",
    subtitle: "Python • Seaborn • Hypothesis Testing",
    category: "Healthcare Analytics",
    featured: false,
    summary: "Statistical analysis of 5,400+ clinical admission records investigating determinants of extended length-of-stay and 30-day readmission risk to optimize bed turnover.",
    metrics: [
      { label: "Patients", val: "5,400+" },
      { label: "p-value", val: "< 0.001" },
      { label: "Overstay Risk", val: "-14%" },
      { label: "Departments", val: "8" }
    ],
    tags: ["Python", "Hypothesis Testing", "EDA", "Statistical Analysis", "Matplotlib", "Healthcare"],
    github: "https://github.com/lochanhavalimane-pixel",
    liveDemoAvailable: false,
    problemStatement: "Hospital administrators faced emergency department boarding bottlenecks due to unpredictable discharge variances in post-acute care wards.",
    pipeline: [
      "Rigorous data cleaning: outlier removal in triage duration and missing lab value imputation.",
      "Bivariate correlation analysis and non-parametric hypothesis testing (Mann-Whitney U, Chi-Square).",
      "Visualized diagnostic distributions across age clusters and admission sources in Seaborn."
    ],
    keyInsights: [
      "Patients admitted via weekend emergency transfers experienced a statistically significant 1.8-day increase in total length of stay (p < 0.001).",
      "Pre-discharge checklist automation reduced weekend discharge delay variance by 26%."
    ],
    sqlSnippet: `SELECT 
  department_name,
  admission_type,
  COUNT(patient_id) AS total_admissions,
  ROUND(AVG(length_of_stay_days), 2) AS avg_los,
  ROUND(SUM(is_readmitted_30d) * 100.0 / COUNT(*), 2) AS readmission_rate_pct
FROM hospital_admissions
GROUP BY department_name, admission_type
HAVING COUNT(patient_id) >= 50
ORDER BY avg_los DESC;`
  }
];
