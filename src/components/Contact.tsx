import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-primary mb-4">Get In Touch</span>
          <h2 className="section-title mb-4">
            Let's Work Together
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            I'm actively seeking Cloud & DevOps opportunities. Let's discuss how I can contribute to your team's infrastructure and automation goals.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 ${
              isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            <a
              href="mailto:your-email@example.com"
              className="btn-primary w-full sm:w-auto"
            >
              <Send className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>

          <div 
            className={`flex items-center justify-center gap-4 ${
              isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
            }`}
          >
            <a
              href="https://github.com/omdivekar14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div 
          className={`mt-20 pt-8 border-t border-border ${
            isInView ? 'animate-fade-in animation-delay-400' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Om Rajesh Divekar. All rights reserved.</p>
            <p>Cloud & DevOps Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;