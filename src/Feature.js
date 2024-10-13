import React, { useEffect, useRef, useContext } from 'react';
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function Feature() {
  const { isLoggedIn } =
    useContext(AuthContext);


  const handleNavigation = (path) => {
    navigate(path);
  };
  const navigate = useNavigate();

  return (
    <div className="w-full h-[90vh]  overflow-hidden">

      <div className="flex flex-col h-full bg-gradient-to-b from-zinc-900 to-amber-600 rounded-3xl items-center  justify-center">
        <h1 className="text-5xl text-white font-bold">Join the Fair Side.</h1>
        <h2 className='text-white uppercase font-bold mt-2 opacity-30 tracking-wider	'>Anti Gambling Gambling Club</h2>
        
        {isLoggedIn ? (
          <button
            onClick={() => handleNavigation("/profile")}
            className="flex items-center space-x-3"
          >
            
          
          </button>
        ) : (
          <div className="relative group mt-4">
            <div className="absolute inset-x-0 bottom-0 h-10 bg-amber-700  shadow-lg rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
            <a
              href="/api/discord-login"
              className="relative flex items-center space-x-2 text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-200 ease-in-out shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
              <span>Enter</span>
            </a>
          </div>
        )}
      </div>

 
    </div>
  );
}

export default Feature;
