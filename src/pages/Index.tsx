import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
