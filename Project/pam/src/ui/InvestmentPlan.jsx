import React from "react";

const InvestmentPlan = () => {
  // Define your investment plan data
  const investmentPlans = [
    {
      productName: "Alpha Fixed Yield Fund",
      investmentType: "Fixed Income",
      description:
        "A fixed income investment plan offering stable returns over a fixed period.",
    },
    {
      productName: "Digital Asset Growth Fund",
      investmentType: "Cryptocurrency",
      description:
        "Invest in a diversified portfolio of digital assets with high growth potential.",
    },
    {
      productName: "Prime Equity Mutual Fund",
      investmentType: "Mutual Funds",
      description:
        "A mutual fund designed to provide long-term capital growth by investing in stocks.",
    },
    {
      productName: "Dynamic Blend Fund",
      investmentType: "Hybrid",
      description:
        "A blend of fixed income and equity investments for balanced growth and stability.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 h-full w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">
          Our Investment Plans
        </h2>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                {plan.productName}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {plan.investmentType}
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {plan.description}
              </p>
              <button className="mt-6 px-6 py-3 text-[#9e306d] px-4 py-2 rounded-md bg-white border-solid border-2 border-[#9e306d] hover:bg-[#9e306d] hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlan;