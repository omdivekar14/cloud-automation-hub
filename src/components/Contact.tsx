import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> ./connect.sh
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-10">
            I'm always open to discussing new projects, opportunities, or just chatting about cloud and DevOps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:your-email@example.com"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 glow-primary"
            >
              <Send className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/omdivekar14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="p-4 bg-secondary border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-accent">©</span> {new Date().getFullYear()} Om Rajesh Divekar. Built with passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
