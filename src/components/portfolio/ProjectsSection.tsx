import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
}

const projects: Project[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects with smooth animations.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/kumarrahul09",
  },
  {
    name: "Weather Dashboard",
    description:
      "A weather app that fetches real-time data from an API and displays current conditions and forecasts with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/kumarrahul09",
  },
  {
    name: "Task Manager App",
    description:
      "A to-do list application with local storage persistence, task filtering, and a minimal, user-friendly interface.",
    tech: ["React", "CSS Modules", "LocalStorage"],
    github: "https://github.com/kumarrahul09",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-3xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Things I've built
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`group rounded-2xl border border-border bg-card p-6 flex flex-col transition-shadow duration-300 hover:shadow-md hover:shadow-foreground/[0.04] ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              {/* Project name */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-primary/8 text-primary text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={15} />
                  Code
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={15} />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
