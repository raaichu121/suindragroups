import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient hexagon-pattern overflow-hidden pt-20">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-up">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">24/7 Security Monitoring Active</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Experience Peace of Mind with{" "}
              <span className="text-gradient">TridentSOC</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Fortify your digital assets with our cutting-edge cybersecurity solutions. 
              Our 24/7 Security Operations Center provides unmatched protection against evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Start Free Trial
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Eye className="w-5 h-5 text-primary" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Content - Shield Illustration */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/30 animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-primary/20" />
              </div>
              
              {/* Central shield */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border border-primary/30 flex items-center justify-center glow-effect animate-float">
                  <Shield className="w-20 h-20 md:w-28 md:h-28 text-primary" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 left-0 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: "1s" }}>
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-10 right-0 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: "2s" }}>
                <Eye className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
