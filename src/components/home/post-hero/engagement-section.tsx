import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { engagementOptions } from "@/content/work";

export function EngagementSection() {
  return (
    <section className="bd-engagement" aria-labelledby="engagement-title" data-motion-section>
      <div className="content-shell">
        <div className="bd-complete-heading"><div><p className="bd-complete-kicker">A practical starting point</p><h2 id="engagement-title">Start where you are.</h2></div><p>You may need a roadmap, a new product or a better way to run everyday work. We shape the engagement around the problem.</p></div>
        <div className="bd-engagement-grid">
          {engagementOptions.map(option => <article key={option.number}>
            <span className="bd-engagement-number">{option.number}</span>
            <h3>{option.title}</h3><p className="bd-engagement-for">{option.for}</p><p>{option.description}</p>
            <p className="bd-engagement-deliverable"><Check size={16} aria-hidden="true" />{option.deliverable}</p>
            <Link href={option.href}>Discuss this approach <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </article>)}
        </div>
        <p className="bd-engagement-note">Scope, milestones, ownership, pricing and support are agreed before work starts. Timelines depend on the requirements and integrations involved.</p>
      </div>
    </section>
  );
}
