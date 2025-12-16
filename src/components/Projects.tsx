import { ExternalLink, Github, Server, Container, GitBranch, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "AWS Uber Clone Infrastructure",
    description:
      "Designed and deployed scalable AWS infrastructure using Terraform. Implemented Application Load Balancer, Auto Scaling Groups, EC2 instances, RDS database, and VPC networking for high availability and fault tolerance.",
    technologies: ["Terraform", "AWS EC2", "RDS", "ALB", "VPC", "Auto Scaling"],
    github: "https://github.com/omdivekar14/aws-uber-clone-infra",
    icon: Server,
    featured: true,
  },
  {
    title: "Swiggy Clone Docker Deployment",
    description:
      "Containerized a full-stack application using Docker. Built and pushed Docker images to Docker Hub, then deployed on AWS EC2 with proper networking configuration.",
    technologies: ["Docker", "Linux", "AWS EC2", "Docker Hub"],
    github: null,
    icon: Container,
  },
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Built an automated Jenkins pipeline for continuous integration and deployment. Integrated GitHub webhooks for automatic builds on code commits.",
    technologies: ["Jenkins", "GitHub", "Linux", "Webhooks"],
    github: null,
    icon: GitBranch,
  },
];

const Projects = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-primary mb-4">Portfolio</span>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world infrastructure and DevOps projects demonstrating practical expertise
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.title}
              className={`card-professional p-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    <project.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="badge badge-accent text-xs mb-2">Featured Project</span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge badge-outline text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline underline-offset-4"
                    >
                      View on GitHub
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.title}
                className={`card-professional ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-secondary text-muted-foreground">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-outline text-xs">
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
