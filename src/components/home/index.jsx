import React, { useEffect } from "react";
import AppShell from "../shell";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import HowItWorks from "./components/HowItWorks";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("record", true);
  }, []);

  return (
    <AppShell>
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
    </AppShell>
  );
};

export default Home;
