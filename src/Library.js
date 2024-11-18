import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FAQ from "./Components/FAQ";
import Casinos from "./Components/Casinos"; // Import the new Casinos component
import Strategies from "./Components/Strategies";
import FamousMoments from "./Components/FamousMoments";

const Library = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 text-white">
      {/* Header */}
      <div className="header flex flex-row items-center space-x-8 text-4xl text-white">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
        </div>
        <h1 className="text-white text-4xl font-bold">Library</h1>
      </div>

      {/* Casinos Section */}
      <Casinos />
      <Strategies/>
      <FamousMoments/>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Library;
