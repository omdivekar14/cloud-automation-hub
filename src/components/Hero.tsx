import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-hero dot-pattern">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up opacity-0">
            <p className="font-mono text-primary mb-4 text-sm md:text-base">
              <span className="text-accent">$</span> whoami
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 animation-delay-100">
            <span className="text-foreground">Om Rajesh</span>{" "}
            <span className="text-gradient">Divekar</span>
          </h1>
          
          <div className="animate-fade-in-up opacity-0 animation-delay-200">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground mb-6">
              Cloud & DevOps Engineer
              <span className="terminal-cursor" />
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-in-up opacity-0 animation-delay-300">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm md:text-base">Mumbai, India</span>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
            Entry-level Cloud & DevOps Engineer with strong hands-on experience in{" "}
            <span className="text-primary">AWS</span>,{" "}
            <span className="text-primary">Azure</span>,{" "}
            <span className="text-primary">Docker</span>,{" "}
            <span className="text-primary">Terraform</span>, and{" "}
            <span className="text-primary">CI/CD pipelines</span>. Passionate about automation, 
            scalable infrastructure, and continuous learning.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-500">
            <a
              href="https://github.com/omdivekar14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:glow-primary group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:glow-primary group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
