import { Shield, Server, Users, FileCheck, Headphones, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Managed Security",
      description: "Complete security operations management with 24/7 monitoring, threat detection, and incident response handled by our expert team.",
    },
    {
      icon: Server,
      title: "SOC as a Service",
      description: "Enterprise-grade Security Operations Center capabilities without the overhead of building your own infrastructure.",
    },
    {
      icon: Users,
      title: "Security Consulting",
      description: "Strategic security guidance from industry veterans to assess, plan, and implement your cybersecurity roadmap.",
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description: "Comprehensive compliance assessments for SOC 2, ISO 27001, HIPAA, PCI-DSS, and other regulatory frameworks.",
    },
    {
      icon: Headphones,
      title: "Incident Response",
      description: "Rapid response team ready to contain, investigate, and remediate security incidents when they occur.",
    },
    {
      icon: Settings,
      title: "Security Integration",
      description: "Seamless integration of security tools and technologies into your existing infrastructure and workflows.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How We Help
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We're Here to Assist You
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive cybersecurity services tailored to protect your organization from modern threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
