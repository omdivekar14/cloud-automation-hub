import { Github, Linkedin, Mail, MapPin, ChevronDown, Cloud, Server, Terminal as TerminalIcon } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Hero = () => {
  const { displayedText, isComplete } = useTypingEffect("Cloud & DevOps Engineer", 80, 800);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20">
        <Cloud className="w-16 h-16 md:w-24 md:h-24 text-primary floating" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-20 opacity-15">
        <Server className="w-12 h-12 md:w-20 md:h-20 text-accent floating-delayed" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10">
        <TerminalIcon className="w-10 h-10 md:w-16 md:h-16 text-primary floating" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>
          </div>

          <div className="animate-fade-in-up opacity-0 animation-delay-100">
            <p className="font-mono text-primary mb-4 text-sm md:text-base">
              <span className="text-accent">$</span> whoami
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 animation-delay-200">
            <span className="text-foreground">Om Rajesh</span>{" "}
            <span className="text-gradient">Divekar</span>
          </h1>
          
          <div className="animate-fade-in-up opacity-0 animation-delay-300">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground mb-6 h-10">
              {displayedText}
              <span className={`terminal-cursor ${isComplete ? '' : ''}`} />
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-in-up opacity-0 animation-delay-400">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm md:text-base">Mumbai, India</span>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-500">
            Entry-level Cloud & DevOps Engineer with strong hands-on experience in{" "}
            <span className="text-primary font-medium">AWS</span>,{" "}
            <span className="text-primary font-medium">Azure</span>,{" "}
            <span className="text-primary font-medium">Docker</span>,{" "}
            <span className="text-primary font-medium">Terraform</span>, and{" "}
            <span className="text-primary font-medium">CI/CD pipelines</span>. Passionate about automation, 
            scalable infrastructure, and continuous learning.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href="https://github.com/omdivekar14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary/50 backdrop-blur-sm hover:bg-secondary border border-border rounded-xl transition-all duration-300 hover:border-primary/50 hover:glow-primary hover-lift group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary/50 backdrop-blur-sm hover:bg-secondary border border-border rounded-xl transition-all duration-300 hover:border-primary/50 hover:glow-primary hover-lift group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 glow-primary animate-glow-pulse"
            >
              <Mail className="w-5 h-5" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
