import { Cloud, Container, GitBranch, Terminal, Activity, Settings } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Microsoft Azure", level: 80 },
    ],
    color: "primary",
  },
  {
    title: "DevOps Tools",
    icon: Container,
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 60 },
      { name: "Jenkins", level: 75 },
      { name: "GitHub Actions", level: 85 },
    ],
    color: "accent",
  },
  {
    title: "Infrastructure as Code",
    icon: Settings,
    skills: [{ name: "Terraform", level: 80 }],
    color: "primary",
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    skills: [
      { name: "Jenkins Pipelines", level: 75 },
      { name: "GitHub Actions", level: 85 },
    ],
    color: "accent",
  },
  {
    title: "Monitoring",
    icon: Activity,
    skills: [{ name: "CloudWatch", level: 70 }],
    color: "primary",
  },
  {
    title: "Scripting & OS",
    icon: Terminal,
    skills: [
      { name: "Bash", level: 80 },
      { name: "Linux (Ubuntu)", level: 85 },
    ],
    color: "accent",
  },
];

const Skills = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> cat skills.txt
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Proficient in modern cloud platforms, containerization, and automation tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-${category.color}/50 transition-all duration-500 hover-lift group ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10 text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.name}
                      </span>
                      <span className={`text-xs text-${category.color} font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-bar-fill ${isInView ? '' : 'scale-x-0'}`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 100) + (skillIndex * 150) + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
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
