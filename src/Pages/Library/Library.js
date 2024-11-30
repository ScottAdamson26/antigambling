import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FAQ from "./FAQ";
import Casinos from "./Casinos"; // Import the new Casinos component
import Strategies from "./Strategies";
import FamousMoments from "./FamousMoments";

const Library = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 text-white">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-row items-center space-x-4 mb-4 font-bold text-4xl">
          <FontAwesomeIcon icon={faBook} />
          <h1>Library</h1>
        </div>
        <p className="max-w-4xl text-lg text-center font-semibold opacity-75">
          This library serves as the ultimate directory for all things related to gambling. Seek and yee shall find.
        </p>
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
