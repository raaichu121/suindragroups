const StatsSection = () => {
  const stats = [
    { value: "2,199+", label: "Threats Blocked Daily", suffix: "" },
    { value: "$10.5B", label: "Assets Protected", suffix: "" },
    { value: "5,000+", label: "Global Clients", suffix: "" },
    { value: "99.9%", label: "Uptime Guaranteed", suffix: "" },
  ];

  return (
    <section className="relative py-16 bg-primary">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
