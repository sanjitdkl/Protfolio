import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sd from "../../../public/sd.png";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div
          className="text-3xl font-extrabold text-white tracking-wide flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={sd}
            alt=""
            className="h-10 w-10 gap-2 justify-center items-center"
          />
          <div>Sanjit Dhakal</div>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium text-lg hover:text-yellow-300 transition duration-300 hover:underline"
              data-aos="fade-down"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
