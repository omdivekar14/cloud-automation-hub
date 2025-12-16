import { Github, Linkedin, Mail, MapPin, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="section-container py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <div className="animate-fade-in-up opacity-0">
              <span className="badge badge-accent mb-6">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0 animation-delay-100 tracking-tight">
              Om Rajesh Divekar
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-fade-in-up opacity-0 animation-delay-200">
              Cloud & DevOps Engineer
            </h2>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-6 animate-fade-in-up opacity-0 animation-delay-300">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl animate-fade-in-up opacity-0 animation-delay-400">
              Entry-level Cloud & DevOps Engineer with hands-on experience in AWS, Azure, Docker, Terraform, and CI/CD pipelines. Passionate about building scalable infrastructure and automation solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up opacity-0 animation-delay-500">
              <a href="#contact" className="btn-primary">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="https://github.com/omdivekar14"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/omdivekar14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in opacity-0 animation-delay-300">
            <div className="relative">
              {/* Tech stack visual */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                  <div className="text-center p-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-2 right-4 badge badge-primary shadow-md animate-fade-in opacity-0 animation-delay-400">
                AWS
              </div>
              <div className="absolute top-1/4 -left-8 badge badge-accent shadow-md animate-fade-in opacity-0 animation-delay-500">
                Docker
              </div>
              <div className="absolute bottom-1/4 -right-4 badge badge-primary shadow-md animate-fade-in opacity-0 animation-delay-600">
                Terraform
              </div>
              <div className="absolute -bottom-2 left-8 badge badge-outline bg-card shadow-md animate-fade-in opacity-0 animation-delay-500">
                Azure AZ-900
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;