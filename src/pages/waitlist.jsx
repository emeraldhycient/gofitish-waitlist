import React from "react";
import About from "../components/waitlist/about";
import Blog from "../components/waitlist/blog";
import Footer from "../components/waitlist/footer";
import HeroSection from "../components/waitlist/heroSection";
import Join from "../components/waitlist/join";
import Navbar from "../components/waitlist/navbar";
import Podcast from "../components/waitlist/podcast";
import Stream from "../components/waitlist/Stream";
import Vetted from "../components/waitlist/vetted";

function Waitlist() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <div id="joinwaitlist">
        <Join />
      </div>
      <Podcast />
      <Vetted />
      <Stream />
      <Blog />
      <div id="joinwaitlist2">
        <Join />
      </div>
      <Footer />
    </div>
  );
}

export default Waitlist;
