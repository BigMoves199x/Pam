import React from 'react';
import chart from '../assets/chart.png';
import project from '../assets/project.jpg'

const Info = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={project}
            alt="Chart Illustration"
            className="w-full max-w-sm md:max-w-md h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-7xl font-extrabold text-[#23305a] mb-6">
            What We Do
          </h1>
          <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
            We are dedicated to transforming visions into reality.
            We understand that many dreams remain unfulfilled due to challenges like financial instability and lack of genuine support.
            That’s why we exist to bridge the gap between ambition and achievement.
          </p>
          {/* <p className="text-base md:text-lg italic text-gray-700 leading-relaxed">
            Our mission is to empower our valued clients by offering strategic financial solutions designed to make your hard-earned money work for you.
            At <span className="font-semibold text-[#9e306d]">PAM</span>, we don’t just support your goals — we help you achieve them, building a brighter, more secure future together.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Info;
