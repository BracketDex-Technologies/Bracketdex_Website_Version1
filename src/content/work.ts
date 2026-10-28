/** Public summaries already recorded in the website's 230aced revision.
 * No client quotes, performance figures or screenshots are inferred here.
 */
export const projects = [
  { name: "Kiosk Learning Lab", category: "Education", type: "Interactive learning", problem: "Shared learning spaces need experiences students can explore independently.", solution: "Kiosk-based interactive learning games with guided, hands-on activities.", value: "Educational concepts presented through an engaging, accessible interface." },
  { name: "WiseMelon", category: "Education", type: "Workflow automation", problem: "School ID-card production involves repetitive data and photo preparation.", solution: "Online data collection, AI-assisted photo preparation, review and batch export.", value: "A connected preparation workflow for school ID-card production." },
  { name: "ReManage Society", category: "Housing", type: "Business platform", problem: "Maintenance, resident communication and gate records live in separate places.", solution: "A shared society workspace with maintenance, communication and visitor management.", value: "Clearer coordination between committees, residents and guards." },
  { name: "NativeBerry", category: "Agriculture", type: "Operations software", problem: "Orders, deliveries and business expenses are difficult to track across separate tools.", solution: "A strawberry business workspace for orders, deliveries, payments, leads and expenses.", value: "Day-to-day supply chain information organised in one view." },
  { name: "CreativeMark Hub", category: "Professional services", type: "Team workspace", problem: "Agency field and office teams need a shared view of client and project work.", solution: "Connected client records, leads, projects, quotations, schedules and reporting.", value: "Fewer disconnected tools for coordinating agency operations." },
  { name: "QuoteFlow", category: "Local business", type: "Document automation", problem: "Rebuilding quotation documents by hand slows down routine customer work.", solution: "A lightweight tool that turns customer and service details into a formatted PDF quotation.", value: "Consistent quotation documents without starting from a blank page." },
] as const;

export const engagementOptions = [
  { number: "01", title: "Shape the right first step", for: "An idea or workflow that needs clarity", description: "Map the problem, users and constraints before committing to a build.", deliverable: "A prioritised scope and delivery roadmap", href: "/contact?service=Discovery" },
  { number: "02", title: "Build a focused release", for: "A product or system ready to take shape", description: "Design, develop and test a useful first release with visible milestones.", deliverable: "Working software, documentation and handover", href: "/contact?service=Software%20development" },
  { number: "03", title: "Improve what already runs", for: "An existing business with operational friction", description: "Connect systems, automate repetitive work and evolve existing software.", deliverable: "A scoped improvement and support plan", href: "/contact?service=Automation" },
] as const;
