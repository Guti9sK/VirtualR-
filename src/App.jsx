import React from "react";
import NavBar from "./componentes/NavBar";
import HeroSection from "./componentes/HeroSection";
import FeatureSection from "./componentes/FeatureSection";
import Workflow from "./componentes/Workflow";
import Pricing from "./componentes/Pricing";
import Testimonials from "./componentes/Testimonials";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
