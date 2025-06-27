import React from "react";

const Project = () => {
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Hello from Project</h2>
      <a
        href="https://khajakhana.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/KhajaKhana.png"
          alt="Khaja Khana"
          className="w-full max-w-md rounded shadow"
        />
      </a>
    </div>
  );
};

export default Project;
