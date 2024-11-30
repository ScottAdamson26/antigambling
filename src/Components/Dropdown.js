import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      {/* Dropdown Header */}
      <div
        onClick={toggleDropdown}
        className="flex justify-between items-center border-2 border-navPurple text-white text-sm rounded-md py-2 px-4 cursor-pointer bg-transparent"
      >
        <span>{selectedOption}</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-white" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 border border-navPurple rounded-md bg-gray-800 z-10">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleOptionClick(option)}
              className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-white text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
