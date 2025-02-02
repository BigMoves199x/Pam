import React from "react";
import { motion } from "framer-motion";
import Cop from '../assets/Cop.jpg'

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Innovators",
    message:
      "Working with this company was a game-changer. Their professionalism and expertise exceeded my expectations!",
   
  },
  {
    name: "Jane Smith",
    position: "Founder, Creative Minds",
    message:
      "Their team delivered beyond our expectations. I highly recommend their services for any growing business.",
    
  },
];

const stats = [
  { title: "Success Stories", value: "500+" },
  { title: "Goals Achieved", value: "1,200+" },
  { title: "Clients Worldwide", value: "300+" },
  { title: "Awards Won", value: "50+" },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16">
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2 bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-[#9e306d]">
              {stat.value}
            </p>
            <p className="text-lg font-medium text-gray-700">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-6 hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={Cop}
              alt={testimonial.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <p className="text-lg italic text-gray-700 mb-4">
                "{testimonial.message}"
              </p>
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
