import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-blue-100 via-white to-pink-100 p-8"
    >
      {/* Left: Text */}
      <div
        className="flex-1 text-center md:text-left space-y-6"
        data-aos="fade-right"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          Hi, I'm <span className="text-blue-600">Sanjit Dhakal</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          A passionate Frontend Developer skilled in ReactJS, TailwindCSS,
          JavaScript, and more. I love building beautiful & responsive web apps
          🚀
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Right: Lottie Animation */}
      <div
        className="flex-1 mt-8 md:mt-0 flex justify-center"
        data-aos="fade-left"
      >
        <img
          src=""
          alt="Developer Illustration"
          className="w-72 md:w-96 rounded-xl shadow-lg border-4 border-blue-300"
        />
      </div>
    </section>
  );
};

export default Hero;
