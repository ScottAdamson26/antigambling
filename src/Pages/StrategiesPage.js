import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessKnight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StrategiesPage = () => {
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
    <div className="w-full flex flex-col mt-4 text-white">
      <div className="w-full flex flex-col items-center mb-4">
        <div className="flex flex-row items-center space-x-4 mb-4 font-bold text-4xl">
          <FontAwesomeIcon icon={faChessKnight} />
          <h1>Strategies</h1>
        </div>
        <p className="max-w-4xl text-lg opacity text-center font-semibold opacity-75">
          Don't gamble like a degenerate. We have compiled a resource of some of
          the most popular, logical betting strategies, designed to help you
          minimise the houses edge and beat the game.
        </p>
      </div>

      {/* Strategies */}
      <div className="flex flex-col mt-96">
      <h2 className="text-base uppercase font-bold">All Strategies</h2>
      {/* Strategies Grid */}
        <div className="grid grid-flow-col auto-cols-fr gap-4 mt-4">
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
    </div>
  );
};

export default StrategiesPage;
