import { GraduationCap, Award, BadgeCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Education = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-primary mb-4">Background</span>
          <h2 className="section-title mb-4">Education & Certifications</h2>
          <p className="section-subtitle mx-auto">
            Academic foundation and professional credentials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div 
            className={`card-professional ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">
                B.Sc. in Information Technology
              </h4>
              <p className="text-primary font-medium">
                D G Ruparel College, Mumbai
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Core coursework in programming, databases, networking, web technologies, and software development methodologies.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div 
            className={`card-professional ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="p-4 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <BadgeCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Microsoft Azure Fundamentals
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-accent text-xs">AZ-900</span>
                    <span className="text-muted-foreground text-sm">Microsoft</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Validated knowledge of cloud concepts, Azure services, security, compliance, and pricing models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;