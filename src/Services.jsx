// Services.js
import React from "react";

const services = [
  {
    title: "HTML & CSS",
    description: "Learn the building blocks of web design and create stunning websites with HTML & CSS.",
    icon: "🌐",
  },
  {
    title: "JavaScript & React",
    description: "Master JavaScript and React to build interactive, dynamic web applications.",
    icon: "⚛️",
  },
  {
    title: "Version Control & Git",
    description: "Understand version control systems and collaborate using Git and GitHub.",
    icon: "🛠️",
  },
  {
    title: "Responsive Web Design",
    description: "Design mobile-friendly websites that look great on any device.",
    icon: "📱",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-200" id="service">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-orange-500 border-2 hover:bg-white hover:border-green-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="text-5xl text-black mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
