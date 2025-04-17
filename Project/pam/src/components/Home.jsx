import React from "react";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Footer from "../ui/Footer";
import Info from "../ui/Info";

const InvestmentPlan = React.lazy(() => import("../ui/InvestmentPlan"));
const Testimonial = React.lazy(() => import("../ui/Testimonial"));

const Home = () => {
  return (
    <main>
      <Hero />
      <Info />
      <About />
      <InvestmentPlan />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
