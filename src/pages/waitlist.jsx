import React from "react";
import About from "../components/waitlist/about";
import HeroSection from "../components/waitlist/heroSection";
import Join from "../components/waitlist/join";
import Navbar from "../components/waitlist/navbar";

function Waitlist() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Join />
    </div>
  );
}

export default Waitlist;
