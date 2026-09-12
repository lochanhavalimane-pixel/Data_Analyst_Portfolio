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
    github: "https://github.com/lochanhavalimane-pixel/Customer_Shopping_Behaviour_Analysis",
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

];
