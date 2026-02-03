import { Shield, Radar, Zap, FileSearch } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Real-Time Threat Protection",
      description: "Continuous monitoring and instant threat neutralization to keep your systems secure 24/7.",
      features: ["AI-Powered Detection", "Automated Response", "Zero-Day Protection"],
    },
    {
      icon: Radar,
      title: "Rapid Incident Response",
      description: "Our expert team responds within minutes to contain and eliminate threats before damage occurs.",
      features: ["15-Min Response SLA", "Forensic Analysis", "Root Cause Reports"],
    },
    {
      icon: Zap,
      title: "Proactive Threat Hunting",
      description: "Advanced threat intelligence and proactive hunting to identify risks before they become attacks.",
      features: ["Threat Intelligence", "Vulnerability Scanning", "Penetration Testing"],
    },
    {
      icon: FileSearch,
      title: "Compliance & Reporting",
      description: "Comprehensive compliance management and detailed reporting for regulatory requirements.",
      features: ["SOC 2 Reports", "HIPAA Compliance", "Custom Dashboards"],
    },
  ];

  return (
    <section id="solutions" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Solutions
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Security Solutions
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tailored cybersecurity services designed to meet your specific needs and protect your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
