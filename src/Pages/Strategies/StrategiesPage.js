import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import FilterRow from ".//FilterRow";

const StrategiesPage = () => {
  // Hardcoded extended list of strategies
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
    "Progressive Betting",
    "Anti-Martingale",
    "Unit System",
    "All-In Strategy",
    "Edge Sorting",
    "Card Counting",
    "Bankroll Management",
    "Expected Value Betting",
    "Arbitrage Betting",
    "Value Betting",
    "Dutching",
    "Hedging Bets",
    "Cover Betting",
    "Regression Betting",
    "Split Martingale",
    "Momentum Betting",
    "Random Walk",
    "Hybrid Systems",
    "Risk Reduction Strategy",
    "Leveraged Bets",
  ];

  // Gradient options
  const gradients = [
    "from-indigo-400 to-blue-600",
    "from-orange-400 to-yellow-600",
    "from-pink-400 to-red-600",
    "from-green-400 to-teal-600",
    "from-purple-400 to-violet-600",
  ];

  // Helper function to get a random gradient
  const getRandomGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="w-full flex flex-col mt-8 text-white p-4">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-row items-center space-x-4 mb-4 font-bold text-4xl">
          <FontAwesomeIcon icon={faChessKnight} />
          <h1>Strategies</h1>
        </div>
        <p className="max-w-4xl text-lg text-center font-semibold opacity-75">
          Don't gamble like a degenerate. We have compiled a resource of some of
          the most popular, logical betting strategies, designed to help you
          minimise the house's edge and beat the game.
        </p>
      </div>

      
      {/* Strategies ection */}
      <div className="flex flex-col mt-4">
        <h2 className="text-base uppercase font-bold mb-4">All Strategies</h2>
        <FilterRow />

        <div className="relative mt-6">
          {/* Blurred Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 filter blur-lg">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className={`h-[100px] w-full rounded-md bg-gradient-to-b ${getRandomGradient()}`}
              ></div>
            ))}
          </div>
          {/* "Coming Soon" Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold uppercase text-white opacity-90">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategiesPage;
