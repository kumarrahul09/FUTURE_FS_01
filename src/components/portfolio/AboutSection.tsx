import { MapPin, Calendar } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-3xl ${
          isVisible ? "animate-reveal-up" : "opacity-0"
        }`}
      >
        {/* Section label */}
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
          About Me
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          A little bit about who I am
        </h2>

        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
          <p>
            I am a motivated and detail-oriented aspiring web developer with a strong foundation
            in front-end technologies like HTML, CSS, and JavaScript. I am passionate about
            creating responsive and visually appealing websites.
          </p>
          <p>
            I am always eager to learn new technologies and improve my problem-solving skills.
            My goal is to build innovative solutions and contribute to impactful projects in the
            tech industry.
          </p>
        </div>

        {/* Meta info */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-primary" />
            Kakinada, India
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar size={15} className="text-primary" />
            Available for opportunities
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
