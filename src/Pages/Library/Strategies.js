import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Strategies = () => {
  // Hardcoded list of strategies
  const strategies = [
    "Martingale System",
    "Paroli System",
    "D'Alembert System",
    "Fibonacci System",
    "Labouchere System",
    "Oscar's Grind",
    "Flat Betting",
    "1-3-2-6 System",
    "Kelly Criterion",
    "Reverse Martingale",
  ];

  return (
    <div className="w-full flex flex-col mt-6">
      <div className="flex flex-row items-center space-x-4 hover:cursor-pointer">
        <h2 className="text-base uppercase font-bold">Strategies</h2>
        <FontAwesomeIcon icon={faChevronRight} className="font-xs hidden" />
      </div>

      {/* Strategies Grid */}
      <div className="grid grid-flow-col auto-cols-fr gap-4 mt-6">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className={`h-[100px] w-full rounded-md bg-gradient-to-b ${
              index % 5 === 0
                ? "from-indigo-400 to-blue-600"
                : index % 5 === 1
                ? "from-orange-400 to-yellow-600"
                : index % 5 === 2
                ? "from-pink-400 to-red-600"
                : index % 5 === 3
                ? "from-green-400 to-teal-600"
                : "from-purple-400 to-violet-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
