import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate send (replace with real backend later)
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-3xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Let's work together
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-6 ${
              isVisible ? "animate-slide-left delay-200" : "opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out if you'd like to collaborate, have a question, or just want to say hi.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:kumarsahrahul456@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={16} />
                </span>
                kumarsahrahul456@gmail.com
              </a>
              <a
                href="tel:+917857960156"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={16} />
                </span>
                +91 7857960156
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={16} />
                </span>
                Kakinada, India
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-5 ${
              isVisible ? "animate-slide-right delay-300" : "opacity-0"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-60"
            >
              <Send size={15} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
