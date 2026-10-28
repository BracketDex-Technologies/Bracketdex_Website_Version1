import { marketingContent } from "./marketing";
import { engagementOptions } from "./work";

export type PageCard = { title: string; description: string };
export type PageSection = { label: string; title: string; description?: string; cards?: readonly PageCard[]; list?: readonly string[] };
export type StaticPageContent = { title: string; description: string; eyebrow: string; primaryCta?: string; secondaryCta?: string; sections: readonly PageSection[] };

const deliveryCards = [
  { title: "A scope you can act on", description: "Requirements, priorities, dependencies and milestones agreed before development begins." },
  { title: "Visibility as we build", description: "Working demos, clear progress updates and a shared place for decisions and feedback." },
  { title: "A considered handover", description: "Source code, deployment guidance, documentation and a support plan appropriate to the system." },
];

export const pageContent = {
  services: {
    title: "Technology that earns its place in your business.", eyebrow: "Services",
    description: "Custom software, AI, automation and cloud infrastructure, built around the people and processes that use them.", primaryCta: "Discuss Your Project", secondaryCta: "View Projects",
    sections: [
      { label: "Our capabilities", title: "Build, connect and improve.", description: "Choose a starting point. We will help define the right scope and technical approach.", cards: marketingContent.services },
      { label: "Delivery", title: "A clear path from idea to release.", description: "Decisions, review points and responsibilities stay visible throughout the work.", cards: marketingContent.process.map(step => ({ title: `${step.step}. ${step.title}`, description: step.description })) },
      { label: "Your handover", title: "More than a launch date.", cards: deliveryCards },
      { label: "Technology", title: "The tools fit the problem.", description: "We select a stack around your existing systems, scale, operating costs and team.", cards: marketingContent.technologyStack.map(group => ({ title: group.category, description: group.items.join(" · ") })) },
    ],
  },
  solutions: {
    title: "Make the way you work work better.", eyebrow: "Solutions",
    description: "From a first product to an established operation, we turn the bottlenecks in your business into focused software initiatives.", primaryCta: "Discuss Your Challenge", secondaryCta: "View Services",
    sections: [
      { label: "Starting points", title: "Different stages. Practical next steps.", cards: marketingContent.homepage.problemGroups.map(group => ({ title: group.title, description: group.challenges.join(" · ") })) },
      { label: "What we build", title: "A system for the outcome you need.", cards: marketingContent.solutions.map(solution => ({ title: solution.title, description: solution.outcome })) },
      { label: "Working together", title: "An engagement shaped around you.", cards: engagementOptions.map(option => ({ title: option.title, description: `${option.description} ${option.deliverable}.` })) },
      { label: "Our approach", title: "Why Choose BracketDex", description: "Business context before technology.", cards: marketingContent.whyChooseUs.slice(3) },
    ],
  },
  industries: {
    title: "Built around the realities of your industry.", eyebrow: "Industries",
    description: "Software for the workflows, teams and customer experiences that make your operation different.", primaryCta: "Discuss Your Workflow", secondaryCta: "View Solutions",
    sections: [
      { label: "Where we can help", title: "Industry context. Engineering depth.", cards: marketingContent.industries },
      { label: "Discovery", title: "We start with how the work happens.", description: "Domain knowledge comes from understanding the people, data and constraints behind a process.", list: ["Map the current workflow and its handoffs", "Identify access, reporting and integration requirements", "Agree data handling and review responsibilities", "Prioritise a useful first release with your team"] },
      { label: "Delivery", title: "Designed for everyday use.", cards: deliveryCards },
    ],
  },
  projects: {
    title: "Useful software. Real business context.", eyebrow: "Projects",
    description: "Explore selected BracketDex systems for learning, housing, business operations and automation.", primaryCta: "Discuss a Similar Project", secondaryCta: "View Services",
    sections: [{ label: "Your project", title: "The next system starts with your workflow.", description: "Tell us what is slowing your team down, what already works and what success would look like. We can then agree a useful next step.", cards: deliveryCards }],
  },
  about: {
    title: "Engineering with a business purpose.", eyebrow: "About BracketDex",
    description: "We help growing businesses build, automate and evolve the software they rely on. Based in Pune, we collaborate with teams remotely.", primaryCta: "Start a Conversation", secondaryCta: "View Services",
    sections: [
      { label: "Why we exist", title: "Make useful technology accessible.", description: "Businesses should be able to improve the way they operate without getting lost in unnecessary complexity. BracketDex brings discovery, design, software engineering and ongoing improvement into one working relationship." },
      { label: "Our direction", title: "A clear reason to build.", cards: [{ title: "Mission", description: "Help businesses improve efficiency, automate processes and grow with modern technology." }, { title: "Vision", description: marketingContent.company.vision }] },
      { label: "How we work", title: "Clear decisions. Shared ownership.", cards: [{ title: "Business first", description: "Understand the workflow and the people before choosing the technology." }, { title: "Progress you can see", description: "Use milestones, demos and direct communication to keep decisions grounded." }, { title: "Built for what comes next", description: "Consider maintainability, documentation and a practical handover from the start." }] },
    ],
  },
  contact: {
    title: "Tell us what you want to make better.", eyebrow: "Start a conversation",
    description: "Share an idea, an existing system or an operational bottleneck. A clear first conversation starts with your business context.",
    sections: [{ label: "Your brief", title: "A few details are enough to start.", description: "Tell us about your users, the problem, your existing tools and any timing constraints. If you are still working out the scope, that is a useful place to begin." }],
  },
} as const satisfies Record<string, StaticPageContent>;
