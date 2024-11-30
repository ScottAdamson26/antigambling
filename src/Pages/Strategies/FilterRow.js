import React from "react";
import Dropdown from "../../Components/Dropdown";

const filterOptions = [
  {
    label: "Select Type",
    options: ["Probability-Based", "Progressive", "Flat Betting", "Reverse Strategies"],
  },
  {
    label: "Risk Level",
    options: ["Low Risk", "Medium Risk", "High Risk"],
  },
  {
    label: "Game Type",
    options: ["Roulette", "Blackjack", "Baccarat", "Poker"],
  },
  {
    label: "Difficulty",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
];

const FilterRow = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      {filterOptions.map((filter, index) => (
        <Dropdown key={index} label={filter.label} options={filter.options} />
      ))}
    </div>
  );
};

export default FilterRow;
