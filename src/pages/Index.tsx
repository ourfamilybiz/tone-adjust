import Header from "@/components/Header";
import HeroTool from "@/components/HeroTool";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import BeforeAfter from "@/components/BeforeAfter";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroTool />
      <HowItWorks />
      <UseCases />
      <BeforeAfter />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
