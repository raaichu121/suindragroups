import { AlertTriangle, TrendingUp, Clock } from "lucide-react";

const ChallengeSection = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Evolving Cyber Threats",
      description: "Cybercriminals are becoming more sophisticated, using AI-powered attacks and advanced persistent threats.",
    },
    {
      icon: TrendingUp,
      title: "Rising Attack Frequency",
      description: "Organizations face an average of 1,200 attack attempts per week, with ransomware incidents increasing 300%.",
    },
    {
      icon: Clock,
      title: "Limited Response Time",
      description: "The average time to identify a breach is 207 days. Every minute counts when your systems are compromised.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why You Need Protection
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Challenge
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            In today's digital landscape, cybersecurity isn't optional it's essential for survival.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <challenge.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">
                {challenge.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
