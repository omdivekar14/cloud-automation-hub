import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> cat education.log
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 card-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-6">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                B.Sc. in Information Technology
              </h4>
              <p className="text-primary font-mono text-sm mb-2">
                D G Ruparel College, Mumbai
              </p>
              <p className="text-muted-foreground text-sm">
                Studied core concepts in programming, databases, networking, and software development.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-background border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 card-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-secondary text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent/30 transition-colors">
              <BadgeCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Microsoft Azure Fundamentals
                </h4>
                <p className="text-accent font-mono text-sm">AZ-900</p>
                <p className="text-muted-foreground text-xs mt-2">
                  Cloud concepts, Azure services, security, compliance, and pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
