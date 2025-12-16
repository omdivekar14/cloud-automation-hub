import { Cloud, Container, GitBranch, Terminal, Activity, Settings } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS (EC2, RDS, VPC, ALB)", "Microsoft Azure"],
    highlight: true,
  },
  {
    title: "Containerization",
    icon: Container,
    skills: ["Docker", "Kubernetes (Basics)", "Docker Hub"],
  },
  {
    title: "Infrastructure as Code",
    icon: Settings,
    skills: ["Terraform", "AWS CloudFormation"],
    highlight: true,
  },
  {
    title: "CI/CD Pipelines",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "Automated Deployments"],
  },
  {
    title: "Monitoring & Logging",
    icon: Activity,
    skills: ["AWS CloudWatch", "Log Analysis"],
  },
  {
    title: "Scripting & OS",
    icon: Terminal,
    skills: ["Bash Scripting", "Linux (Ubuntu)", "Shell Automation"],
  },
];

const Skills = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-primary mb-4">Technical Expertise</span>
          <h2 className="section-title mb-4">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            Proficient in modern cloud platforms, containerization, and DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-professional ${category.highlight ? 'ring-1 ring-primary/20' : ''} ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${category.highlight ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-outline text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;