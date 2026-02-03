import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionsSection from "@/components/SolutionsSection";
import PlatformSection from "@/components/PlatformSection";
import ServicesSection from "@/components/ServicesSection";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ChallengeSection />
      <SolutionsSection />
      <PlatformSection />
      <ServicesSection />
      <About />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
