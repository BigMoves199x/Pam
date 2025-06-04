import React from "react";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Footer from "../ui/Footer";
import Info from "../ui/Info";

const InvestmentPlan = React.lazy(() => import("../ui/InvestmentPlan"));
const Testimonial = React.lazy(() => import("../ui/Testimonial"));

const Home = () => {
  return (
    <main className="scroll-smooth">
      {/* Hero section */}
      <div id="home">
        <Hero />
      </div>

      {/* Info section */}
      <div id="services">
        <Info />
      </div>

      {/* About section */}
      <div id="about">
        <About />
      </div>

      {/* Investment Plan section */}
      <div id="plans">
        <InvestmentPlan />
      </div>

      {/* Testimonial section */}
      <div id="testimonials">
        <Testimonial />
      </div>

      {/* Contact (Footer) section */}
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
