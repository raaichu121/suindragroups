import { Button } from "@/components/ui/button";
import { Monitor, Database, Cloud, Lock, Cpu, Network } from "lucide-react";

const PlatformSection = () => {
  const features = [
    { icon: Monitor, label: "SIEM Integration" },
    { icon: Database, label: "Log Management" },
    { icon: Cloud, label: "Cloud Security" },
    { icon: Lock, label: "Access Control" },
    { icon: Cpu, label: "AI Analytics" },
    { icon: Network, label: "Network Defense" },
  ];

  return (
    <section id="platform" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Platform
            </h2>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              SOC <span className="text-primary"> Analysis</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-4">
              Threat Detection's New Standard
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our proprietary Security Operations Center platform combines cutting-edge AI 
              with human expertise to deliver unparalleled threat detection and response capabilities. 
              Experience enterprise-grade security that scales with your business.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg">
                Request Demo
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Right Content - Platform Visualization */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 border border-primary/20">
              {/* Central SOC Display */}
              <div className="text-center mb-8">
                <div className="inline-block">
                  
                  <div className="font-display text-2xl font-bold text-foreground mb-1">
                    ON-PREMISE / CLOUD
                  </div>
                  <div className="text-primary font-display text-xl">
                    SECURITY OPERATIONS CENTER
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 rounded-xl p-4 text-center hover:bg-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status Indicators */}
              <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">System Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">24 / 7 Threats Blocked Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
