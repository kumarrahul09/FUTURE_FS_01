import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Greeting tag */}
        <div className="animate-reveal-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
            Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.05] tracking-tight animate-reveal-up delay-100"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Rahul Kumar Gupta
        </h1>

        {/* Title */}
        <p className="mt-4 text-lg sm:text-xl text-primary font-semibold tracking-wide uppercase animate-reveal-up delay-200">
          Web Developer
        </p>

        {/* Bio */}
        <p
          className="mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed animate-reveal-up delay-300"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          Passionate about creating responsive and visually appealing websites.
          Building innovative solutions with modern front-end technologies.
        </p>

        {/* Social links */}
        <div className="mt-8 flex items-center justify-center gap-4 animate-reveal-up delay-400">
          <a
            href="https://github.com/kumarrahul09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-28a4b13b6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kumarsahrahul456@gmail.com"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-up delay-500">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors active:scale-[0.97]"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-reveal-up delay-600">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
