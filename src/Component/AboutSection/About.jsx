import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    name: "HTML",
    color: "bg-blue-50",
    textColor: "text-blue-900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "HTML is the standard markup language used to create web pages. It structures content on the web.",
  },
  {
    name: "CSS",
    color: "bg-green-100",
    textColor: "text-green-800",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "CSS is used to style and layout web pages — including design, colors, and fonts.",
  },
  {
    name: "Tailwind CSS",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    icon: "/tailwind1.png",
    description:
      "Tailwind CSS is a utility-first CSS framework that enables fast UI building with custom designs.",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "JavaScript brings interactivity to websites. It allows dynamic behavior and event handling.",
  },
  {
    name: "React",
    color: "bg-cyan-100",
    textColor: "text-cyan-800",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "React is a JavaScript library for building modern user interfaces and dynamic single-page apps.",
  },
];

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleSkill = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center" id="about">
      <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">
        Hi, I'm Sanjit Dhakal 👋
      </h1>
      <p className="text-gray-600 text-lg mb-10" data-aos="fade-up">
        I’m a passionate frontend developer who loves building responsive and
        interactive web apps. I enjoy turning ideas into reality using modern
        technologies.
      </p>

      <h2 className="text-2xl font-semibold mb-6" data-aos="fade-right">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            onClick={() => toggleSkill(index)}
            className={`${skill.color} cursor-pointer p-6 rounded-2xl shadow-lg transition-transform hover:scale-105`}
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-center space-x-4 mb-2">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              <h3 className={`text-xl font-bold ${skill.textColor}`}>
                {skill.name}
              </h3>
            </div>
            {activeSkill === index && (
              <p className="text-gray-700 mt-3 text-sm transition-opacity duration-300">
                {skill.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
