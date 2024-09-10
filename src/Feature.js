import React from "react";
import logo from "../src/logo.png"; // Import the logo

function Feature() {
  return (
    <div className="relative bg-[url('./sky.png')] bg-cover bg-center text-white rounded-lg shadow-lg mb-8 font-suse h-80 flex flex-col  items-center overflow-visible">
      {/* Left side content */}
      <div className="flex flex-col justify-center items-center h-full pl-8 w-1/2">
        <img src={logo} alt="Logo" className="h-24" />{" "}
      </div>
    </div>
  );
}

export default Feature;
