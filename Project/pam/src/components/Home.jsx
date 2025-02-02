import React from "react";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Footer from "../ui/Footer";

const InvestmentPlan = React.lazy(() => import("../ui/InvestmentPlan"));
const Testimonial = React.lazy(() => import("../ui/Testimonial"));

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <InvestmentPlan />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
