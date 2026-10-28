import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/content/work";

export function SelectedWork({ all = false }: { all?: boolean }) {
  const studies = all ? projects : projects.slice(0, 3);
  return (
    <section className="bd-work" id="selected-work" aria-labelledby="selected-work-title" data-motion-section>
      <div className="content-shell">
        <div className="bd-complete-heading">
          <div><p className="bd-complete-kicker">Selected work</p><h2 id="selected-work-title">Software with a job to do.</h2></div>
          <p>A closer look at the business problems and workflows behind our projects.</p>
        </div>
        <div className="bd-work-grid">
          {studies.map((project, index) => (
            <article className="bd-work-card" key={project.name} data-work-card>
              <div className="bd-work-meta"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span>{project.type}</span></div>
              <h3>{project.name}</h3>
              <dl>
                <div><dt>The challenge</dt><dd>{project.problem}</dd></div>
                <div><dt>The system</dt><dd>{project.solution}</dd></div>
                <div><dt>Designed for</dt><dd>{project.value}</dd></div>
              </dl>
              <Link href={`/contact?project=${encodeURIComponent(project.name)}`} aria-label={`Discuss a project like ${project.name}`}>Build something like this <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        {!all && <Link className="bd-complete-link" href="/projects">Explore more work <ArrowRight size={17} aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
