import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Casinos = () => {
  // Hardcoded list of casinos
  const casinos = [
    "Casino Royale",
    "Golden Nugget",
    "Lucky Star",
    "High Roller",
    "Emerald Bay",
    "Sunset Strip",
    "Diamond Dreams",
    "Red Velvet",
    "Blue Horizon",
    "Silver Sands",
  ];

  return (
    <div className="w-full flex flex-col mt-4">
      <div className="flex flex-row items-center space-x-4 hover:cursor-pointer">
        <h2 className="text-base uppercase font-bold">Casinos</h2>
        <FontAwesomeIcon icon={faChevronRight} className="font-xs hidden" />
      </div>

      {/* Casino Grid */}
      <div className="grid grid-flow-col auto-cols-fr gap-4 mt-4">
        {casinos.map((casino, index) => (
          <div
            key={index}
            className={`h-[200px] w-full rounded-md bg-gradient-to-b ${
              index % 5 === 0
                ? "from-red-400 to-pink-600"
                : index % 5 === 1
                ? "from-green-400 to-blue-600"
                : index % 5 === 2
                ? "from-purple-400 to-indigo-600"
                : index % 5 === 3
                ? "from-yellow-400 to-orange-600"
                : "from-teal-400 to-cyan-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Casinos;
