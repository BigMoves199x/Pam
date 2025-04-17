import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 md:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-[#23305a] h-12 w-12 md:h-[70px] md:w-[70px] text-white rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
    onClick={onClick}
  >
    <FiChevronRight size={30} className="mx-auto" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 md:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-white h-12 w-12 md:h-[70px] md:w-[70px] text-black rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
    onClick={onClick}
  >
    <FiChevronLeft size={30} className="mx-auto" />
  </div>
);

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full min-h-full bg-black text-white flex items-center justify-center px-4 py-16 md:px-12 relative">
      <div className="w-full max-w-5xl flex items-center justify-center relative">
        <Slider {...settings} className="w-full px-2">
          {/* Slide 1 */}
          <div className="flex justify-center">
            <div className="bg-[#22345cee] backdrop-blur-lg h-auto md:h-[500px] w-full rounded-3xl p-6 sm:p-8 md:p-12 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
                SINC Partners is a service incubation company
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
              </p>
              <button className="bg-gradient-to-r from-[#9e306d] to-[#EFB036] text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:opacity-90 transition">
                Sinc With Us
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex justify-center">
            <div className="bg-white text-black h-auto md:h-[500px] w-full bg-opacity-90 rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
                Come with an idea, leave with a company.
              </h1>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.
              </p>
              <button className="bg-gradient-to-r from-[#9e306d] to-[#EFB036] text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:opacity-90 transition">
                Sinc With Us
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex justify-center">
            <div className="bg-gray-800 text-white h-auto md:h-[500px] w-full bg-opacity-90 rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6">
                We are big on these 3 things:
              </h1>
              <div className="space-y-5">
                {[
                  "Service Incubation & Ecosystem Advocacy",
                  "Building SAAS & Marketing Tech Platforms",
                  "Institutional Innovations",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base md:text-lg">
                    <span className="text-[#EFB036] text-lg sm:text-xl">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#9e306d] to-[#EFB036] text-white font-medium py-2 px-6 sm:py-3 sm:px-8 mt-6 sm:mt-8 rounded-full hover:opacity-90 transition">
                Sinc With Us
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
