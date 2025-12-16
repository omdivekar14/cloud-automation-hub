import { GraduationCap, Award, BadgeCheck, Calendar } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Education = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="education" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className={`mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-mono text-primary mb-2 text-sm">
            <span className="text-accent">$</span> cat education.log
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Academic background and professional credentials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div 
            className={`bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover-lift ${
              isInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              
              <h4 className="text-xl font-semibold text-foreground mb-2">
                B.Sc. in Information Technology
              </h4>
              <p className="text-primary font-mono text-sm mb-3 flex items-center gap-2">
                <span>D G Ruparel College, Mumbai</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Core coursework in programming, databases, networking, web technologies, and software development methodologies.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div 
            className={`bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover-lift ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:scale-110 transition-transform duration-300">
                  <BadgeCheck className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">
                    Microsoft Azure Fundamentals
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-accent/20 text-accent font-mono text-sm rounded">
                      AZ-900
                    </span>
                    <span className="text-muted-foreground text-sm">Microsoft</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Validated knowledge of cloud concepts, Azure services, security, compliance, privacy, and pricing models.
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
