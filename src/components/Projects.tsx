import { ExternalLink, Github, Server, Container, GitBranch, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "AWS Uber Clone Infrastructure",
    description:
      "Designed and deployed scalable AWS infrastructure using Terraform. Implemented ALB, Auto Scaling, EC2, RDS, and VPC networking for high availability.",
    technologies: ["Terraform", "AWS EC2", "RDS", "ALB", "VPC", "Auto Scaling"],
    github: "https://github.com/omdivekar14/aws-uber-clone-infra",
    icon: Server,
    featured: true,
  },
  {
    title: "Swiggy Clone Docker Deployment",
    description:
      "Containerized full-stack application using Docker. Pushed images to Docker Hub and deployed on EC2 with proper networking.",
    technologies: ["Docker", "Linux", "AWS EC2", "Docker Hub"],
    icon: Container,
  },
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Built Jenkins pipeline for automated build and deployment. Integrated GitHub webhooks for continuous integration.",
    technologies: ["Jenkins", "GitHub", "Linux", "CI/CD"],
    icon: GitBranch,
  },
];

const Projects = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> ls ./projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Real-world infrastructure and DevOps projects demonstrating hands-on expertise
          </p>
        </div>

        <div className="space-y-6">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className={`bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-500 hover-lift group relative overflow-hidden ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              {/* Featured badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-xs font-mono text-primary">Featured</span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-gradient-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-10 h-10" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-secondary text-sm text-primary font-mono rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group/link"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">View Source Code</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.title}
                className={`bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/50 transition-all duration-500 hover-lift group ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-secondary text-primary group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-xs text-primary font-mono rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
