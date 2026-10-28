"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/content/work";

export function SelectedWork({ all = false }: { all?: boolean }) {
  const [category, setCategory] = useState<ProjectCategory>("All projects");
  const studies = all ? projects.filter(project => category === "All projects" || project.group === category) : projects.slice(0, 3);
  return (
    <section className="bd-work" id="selected-work" aria-labelledby="selected-work-title" data-motion-section>
      <div className="content-shell">
        <div className="bd-complete-heading">
          <div><p className="bd-complete-kicker">Selected work</p><h2 id="selected-work-title">{all ? "Selected projects and use cases." : "Software with a job to do."}</h2></div>
          <p>A few systems we’ve built to make everyday work simpler.</p>
        </div>
        {all && <>
          <div className="bd-work-filters" role="group" aria-label="Filter projects by category">
            {projectCategories.map(group => <button type="button" key={group} aria-pressed={category === group} aria-controls="project-results" onClick={() => setCategory(group)}>{group}<span>{group === "All projects" ? projects.length : projects.filter(project => project.group === group).length}</span></button>)}
          </div>
          <p className="bd-work-count" role="status">Showing {studies.length} of {projects.length} projects{category !== "All projects" ? ` · ${category}` : ""}</p>
        </>}
        <div className="bd-work-grid" id="project-results">
          {studies.map((project) => (
            <article className="bd-work-card" key={project.name} data-work-card data-category={project.group}>
              <div className="bd-work-meta"><span>{String(projects.indexOf(project) + 1).padStart(2, "0")} / {project.group}</span></div>
              <h3>{project.name}</h3>
              <dl>
                <div><dt>Category</dt><dd>{project.category} · {project.type}</dd></div>
                <div><dt>System</dt><dd>{project.solution}</dd></div>
                <div><dt>Value</dt><dd>{project.value}</dd></div>
              </dl>
              <ul className="bd-work-tags" aria-label={`${project.name} categories`}><li>{project.category}</li><li>{project.type}</li></ul>
              <Link href={`/contact?project=${encodeURIComponent(project.name)}`} aria-label={`Discuss a project like ${project.name}`}>Build something like this <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        {!all && <Link className="bd-complete-link" href="/projects">Explore more work <ArrowRight size={17} aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
