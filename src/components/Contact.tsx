import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`max-w-3xl mx-auto text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> ./connect.sh
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Something
            <span className="text-gradient"> Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm actively seeking Cloud & DevOps opportunities. Let's discuss how I can contribute to your team.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${
              isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            <a
              href="mailto:your-email@example.com"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gradient-primary text-primary-foreground font-bold rounded-2xl transition-all duration-300 hover:opacity-90 hover:scale-105 glow-primary text-lg"
            >
              <Send className="w-6 h-6" />
              <span>Get In Touch</span>
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
              className="group p-5 bg-card border border-border rounded-2xl text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover-lift relative overflow-hidden"
            >
              <Github className="w-7 h-7 relative z-10" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-card border border-border rounded-2xl text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover-lift relative overflow-hidden"
            >
              <Linkedin className="w-7 h-7 relative z-10" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="group p-5 bg-card border border-border rounded-2xl text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover-lift relative overflow-hidden"
            >
              <Mail className="w-7 h-7 relative z-10" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div 
          className={`mt-24 pt-8 border-t border-border ${
            isInView ? 'animate-fade-in animation-delay-400' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm font-mono">
              <span className="text-accent">©</span> {new Date().getFullYear()} Om Rajesh Divekar
            </p>
            <p className="text-muted-foreground text-sm">
              Built with passion for <span className="text-primary">Cloud</span> & <span className="text-accent">DevOps</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
