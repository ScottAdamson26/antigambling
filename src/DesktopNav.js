import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faEnvelope,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons"; // Import the Discord icon
import logo from "../src/logo.png"; // Import the logo

const navItems = [
  { name: "Home", path: "/", icon: faHome },
  { name: "Bonuses", path: "/bonuses", icon: faGift },
  { name: "News", path: "/news", icon: faEarthAmericas },
  { name: "Contact", path: "/contact", icon: faEnvelope },
];

function DesktopNav() {
  const location = useLocation(); // Get the current path

  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 w-full pl-6 pr-32 py-4 bg-background text-white flex justify-between items-center z-20">
        <img src={logo} alt="Logo" className="h-10 ml-10 mt-2" />{" "}
        {/* Logo Image */}
        <Link
          to="/bonuse"
          className="flex items-center space-x-2 text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 hover:bg-gradient-to-br shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />{" "}
          {/* Discord Icon */}
          <span>Join the Club</span>
        </Link>
      </div>

      {/* Side Navigation Container */}
      <div className="fixed font-normal font-suse text-base left-0 top-16 h-[calc(100vh-4rem)] ml-3 py-4 pt-10 w-56 z-10">
        {/* Wrapper for Navigation Items with Background and Outline */}
        <div className="bg-navBg p-4 rounded-2xl">
          <nav className="space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                key={item.name}
                to={item.path} 
                className={`flex items-center space-x-3 py-1.5 px-3 rounded-2xl shadow-inner tracking-wider transition-all duration-500 ease-in-out transform ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600  scale-105' // Updated active state: orange gradient with scale effect
                    : 'text-gray-300 hover:text-white hover:bg-navPurple hover:scale-105' // Non-selected: unchanged
                }`}
              >
                <div className={`p-1 rounded-md w-7 h-7 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                  isActive ? 'text-white scale-110' : 'text-gray-300 hover:scale-110' // Purple icon for selected with scale, grey for non-selected with scale on hover
                }`}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <span className="text-sm">{item.name}</span>
              </Link>
              
              );
            })}
          </nav>
        </div>
        {/* Additional content can be added below this line */}
      </div>
    </>
  );
}

export default DesktopNav;
