import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="w-full h-full">
            <div className="w-full h-full py-14 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="max-w-5xl mx-auto">
                    <Slider {...settings}>
                        {/* First Slide */}
                        <div>
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="bg-gray-800 bg-opacity-90 rounded-3xl p-8 md:p-12 w-full md:max-w-3xl shadow-lg">
                                    <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                                        SINC Partners is a service incubation company
                                    </h1>
                                    <p className="text-gray-300 text-base md:text-lg mt-4">
                                        Connecting experts in product development and growth marketing
                                        willing to offer their services to amazing startups in exchange
                                        for minute equity (usually 0.5% to 2%).
                                    </p>
                                    <button className="bg-gradient-to-r from-[#9e306d] to-[#EFB036] text-white font-medium py-3 px-8 mt-6 rounded-full hover:opacity-90 transition">
                                        Sinc With Us
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Second Slide */}
                        <div>
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="bg-gray-800 bg-opacity-90 rounded-3xl p-8 md:p-12 w-full md:max-w-3xl shadow-lg">
                                    <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                                        Come with an idea, leave with a company.
                                    </h1>
                                    <p className="text-gray-300 text-base md:text-lg mt-4">
                                        You, alongside seasoned service partners and investors,
                                        expedite the growth and market entry of your startup.
                                    </p>
                                    <button className="bg-gradient-to-r from-[#9e306d] to-[#EFB036] text-white font-medium py-3 px-8 mt-6 rounded-full hover:opacity-90 transition">
                                        Sinc With Us
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Third Slide */}
                        <div>
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="bg-gray-800 bg-opacity-90 rounded-3xl p-8 md:p-12 w-full md:max-w-3xl shadow-lg">
                                    <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                                        We are big on these 3 things:
                                    </h1>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center justify-center gap-4 text-gray-300 text-base md:text-lg">
                                            <span className="text-[#EFB036]">✓</span>
                                            <p>Service Incubation & Ecosystem Advocacy</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 text-gray-300 text-base md:text-lg">
                                            <span className="text-[#EFB036]">✓</span>
                                            <p>Building SAAS & Marketing Tech Platforms</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 text-gray-300 text-base md:text-lg">
                                            <span className="text-[#EFB036]">✓</span>
                                            <p>Institutional Innovations</p>
                                        </div>
                                    </div>
                                    <button className="bg-gradient-to-r from-[#9e306d] to-[#EFB036] text-white font-medium py-3 px-8 mt-6 rounded-full hover:opacity-90 transition">
                                        Sinc With Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default About;
