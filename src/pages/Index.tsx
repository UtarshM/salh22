import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeatureCards from "@/components/FeatureCards";
import AccreditationStrip from "@/components/AccreditationStrip";
import SpecialitiesGrid from "@/components/SpecialitiesGrid";
import VisionCards from "@/components/VisionCards";
import WhySAL from "@/components/WhySAL";
import VideoSeries from "@/components/VideoSeries";
import Testimonials from "@/components/Testimonials";
import InsuranceTieUps from "@/components/InsuranceTieUps";
import InternationalPatients from "@/components/InternationalPatients";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <AboutSection />
    <FeatureCards />
    <AccreditationStrip />
    <SpecialitiesGrid />
    <VisionCards />
    <WhySAL />
    <VideoSeries />
    <Testimonials />
    <InsuranceTieUps />
    <InternationalPatients />
    <Footer />
  </div>
);

export default Index;
