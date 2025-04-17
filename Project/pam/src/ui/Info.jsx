import React from 'react';

const Info = () => {
  return (
    <section className="w-full h-screen bg-white px-6 md:px-20 py-16">
      <div className="flex flex-col justify-center items-center text-center h-full">
        <h1 className="text-3xl md:text-6xl font-bold text-[#23305a] mb-6">
          What We Do
        </h1>
        <p className="max-w-2xl text-base md:text-xl font-semibold text-gray-700 leading-relaxed">
          At <span className="font-semibold text-[#9e306d]">PAM</span> (Prime Asset Management), we are dedicated to transforming visions into reality.
          We understand that many dreams remain unfulfilled due to challenges like financial instability and lack of genuine support.
          That’s why we exist — to bridge the gap between ambition and achievement.
        </p>
        <p className="max-w-2xl text-base md:text-xl italic text-gray-700 leading-relaxed mt-6">
          Our mission is to empower our valued clients by offering strategic financial solutions designed to make your hard-earned money work for you.
          At <span className="font-semibold text-[#9e306d]">PAM</span>, we don’t just support your goals — we help you achieve them, building a brighter, more secure future together.
        </p>
      </div>
    </section>
  );
};

export default Info;
