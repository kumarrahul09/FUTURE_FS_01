import { useScrollReveal } from "./useScrollReveal";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools & Workflow",
    items: ["VS Code", "Git & GitHub", "Figma", "Chrome DevTools", "npm"],
  },
  {
    title: "Currently Learning",
    items: ["TypeScript", "Node.js", "REST APIs", "Testing"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-3xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Technologies I work with
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`rounded-2xl bg-background p-6 shadow-sm shadow-foreground/[0.03] ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
