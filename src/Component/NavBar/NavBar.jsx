import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // 👈 import from react-router-dom
import sd from "../../../public/sd.png";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo and name */}
        <div
          className="text-3xl font-extrabold text-white tracking-wide flex items-center gap-2"
          data-aos="fade-right"
        >
          <img src={sd} alt="Logo" className="h-10 w-10" />
          <div>Sanjit Dhakal</div>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-8" data-aos="fade-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white font-medium text-lg hover:text-yellow-300 transition duration-300 hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
