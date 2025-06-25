import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <div>
        <section id="#about " className="py-24 px-4"></section>
      </div>
      <div>Sanjit Dhakal</div>

      <h1 className="text-3xl font-bold mb-2">Hi, I'm Sanjit Dhakal 👋</h1>
      <p className="text-gray-700 text-lg mb-6">
        I’m a passionate frontend developer who loves building responsive and
        interactive web apps. I enjoy turning ideas into reality using modern
        technologies.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-xl mx-auto p-4">
          <div className="flex items-center space-x-4 bg-blue-50 px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow ">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-10 h-10"
            />
            <div>
              <div className="text-blue-900 font-semibold text-lg mb-1">
                HTML
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full shadow">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            className="w-6 h-6"
          />
          <div className="text-green-800 font-medium">CSS</div>
        </div>

        <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full shadow">
          <img src="/tailwind1.png" alt="Tailwind CSS" className="w-8 h-8" />
          <div className="text-purple-800 font-medium">Tailwind CSS</div>
        </div>

        <div className="flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full shadow">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-6 h-6"
          />
          <div className="text-yellow-800 font-medium">JavaScript</div>
        </div>

        <div className="flex items-center space-x-2 bg-cyan-100 px-4 py-2 rounded-full shadow">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-6 h-6"
          />
          <div className="text-cyan-800 font-medium">React</div>
        </div>
      </div>
    </div>
  );
};

export default About;
