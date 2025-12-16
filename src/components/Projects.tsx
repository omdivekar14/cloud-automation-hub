import { ExternalLink, Github, Server, Container, GitBranch } from "lucide-react";

const projects = [
  {
    title: "AWS Uber Clone Infrastructure",
    description:
      "Designed and deployed scalable AWS infrastructure using Terraform. Implemented ALB, Auto Scaling, EC2, RDS, and VPC networking.",
    technologies: ["Terraform", "AWS EC2", "RDS", "ALB", "VPC", "Auto Scaling"],
    github: "https://github.com/omdivekar14/aws-uber-clone-infra",
    icon: Server,
  },
  {
    title: "Swiggy Clone Docker Deployment",
    description:
      "Containerized application using Docker. Pushed images to Docker Hub and deployed on EC2.",
    technologies: ["Docker", "Linux", "AWS EC2", "Docker Hub"],
    icon: Container,
  },
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Built Jenkins pipeline for automated build and deployment. Integrated GitHub with Jenkins for continuous integration.",
    technologies: ["Jenkins", "GitHub", "Linux", "CI/CD"],
    icon: GitBranch,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background dot-pattern">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> ls ./projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/50 transition-all duration-300 hover:glow-primary group card-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-secondary text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-xs text-primary font-mono rounded border border-primary/20"
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
                  className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
