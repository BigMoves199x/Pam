import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 md:right-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-4 bg-[#ee5311] h-12 w-12 md:h-[70px] md:w-[70px] text-white rounded-full shadow-lg hover:bg-[#9e306d] transition duration-300 hidden md:block"
    onClick={onClick}
  >
    <FiChevronRight size={40} className="mx-auto" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-10 md:left-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-4 bg-[#fcd70d] h-12 w-12 md:h-[70px] md:w-[70px] text-white rounded-full shadow-lg hover:bg-[#e5e5e5] transition duration-300 hidden md:block"
    onClick={onClick}
  >
    <FiChevronLeft size={40} className="mx-auto" />
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
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slideClasses = `rounded-3xl w-full max-w-3xl mx-auto h-full md:h-[500px] p-6 sm:p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-xl`;

  return (
    <section className="w-full min-h-full bg-black text-white px-4 py-20 md:px-12 relative">
      <div className="w-full max-w-6xl mx-auto relative">
        <Slider {...settings}>
         
          {/* Slide 1 */}
          <div>
            <div className={`${slideClasses} bg-white text-black`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
                We turn dreams to reality.
              </h1>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.
              </p>
              <button className="bg-black text-white font-semibold py-2 px-8 sm:py-3 sm:px-10 rounded-full hover:opacity-90 transition">
                Join Us
              </button>
            </div>
          </div>

          {/* Slide 1 */}
          <div>
            <div className={`${slideClasses} bg-gray-900 text-white`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6">
                Our Provisions:
              </h1>
              <div className="space-y-5">
                {[
                  "Easy access to woorld class financial Planners.",
                  "Trading brokers at your finger tips",
                  "Solid Consultations on how to navigate your financial management",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base md:text-lg"
                  >
                    <span className="text-[#EFB036] text-lg sm:text-xl">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <button className="bg-black text-white font-semibold py-2 px-8 sm:py-3 sm:px-10 mt-6 sm:mt-8 rounded-full hover:opacity-90 transition">
                Join Us
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
