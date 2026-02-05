import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            About Us
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Protecting Your Digital World
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are a leading SOC (Security Operations Center) provider,
            dedicated to safeguarding organizations against cyber threats with
            cutting-edge technology and expert analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-display text-2xl font-bold text-foreground mb-6">
              About Us
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Contributing to the development of secure digital solutions with a focus on ecommerce platforms and cybersecurity practices, while supporting collaborative, project-based initiatives with partner organizations.
            </p>
            <h4 className="font-display text-2xl font-bold text-foreground mb-6">
              Our Mission
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To provide unparalleled cybersecurity services that empower
              businesses to operate securely in an increasingly digital world.
              We combine advanced tools with human expertise to detect, respond
              to, and prevent cyber threats.
            </p>
            
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h4 className="font-display text-2xl font-bold text-foreground mb-6">
              Inquiry Form
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
