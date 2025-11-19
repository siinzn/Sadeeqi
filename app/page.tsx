import About from "@/components/About";
import AppDesign from "@/components/AppDesign";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black to-emerald-900">
      <Navbar/>
      <HeroSection/>
      <About />
      <Services />
      <AppDesign />
      <Footer />
    </div>
  );
}