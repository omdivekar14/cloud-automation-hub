import { Cloud, Container, GitBranch, Terminal, Activity, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Microsoft Azure"],
    color: "text-primary",
  },
  {
    title: "DevOps Tools",
    icon: Container,
    skills: ["Docker", "Kubernetes (Basics)", "Jenkins", "GitHub Actions"],
    color: "text-accent",
  },
  {
    title: "Infrastructure as Code",
    icon: Settings,
    skills: ["Terraform"],
    color: "text-primary",
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions"],
    color: "text-accent",
  },
  {
    title: "Monitoring",
    icon: Activity,
    skills: ["CloudWatch"],
    color: "text-primary",
  },
  {
    title: "Scripting & OS",
    icon: Terminal,
    skills: ["Bash", "Linux (Ubuntu)"],
    color: "text-accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> cat skills.txt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary group card-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-sm text-muted-foreground rounded-md font-mono border border-border hover:border-primary/30 hover:text-foreground transition-colors"
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
