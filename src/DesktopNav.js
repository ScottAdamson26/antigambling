import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faEnvelope,
  faEarthAmericas,
  faVideo,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons"; // Import the Discord icon
import logo from "../src/logo.png"; // Import the logo
import { AuthContext } from "./AuthContext"; // Import the AuthContext

const navItems = [
  { name: "Home", path: "/", icon: faHome },
  { name: "Reviews", path: "/reviews", icon: faStar },
  { name: "Videos", path: "/videos", icon: faVideo },
  { name: "Offers", path: "/offers", icon: faGift },
  { name: "Strats", path: "/strats", icon: faEarthAmericas },
  { name: "Contact", path: "/contact", icon: faEnvelope },
];

function DesktopNav() {
  const location = useLocation(); // Get the current path
  const { isLoggedIn, username, avatar, id } = useContext(AuthContext); // Access the AuthContext

  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 w-full pl-6 pr-32 py-4 bg-background text-white flex justify-between items-center z-20">
        <img src={logo} alt="Logo" className="h-10 ml-10 mt-2" /> {/* Logo Image */}
        {isLoggedIn ? (
          // If the user is logged in, show the profile info
          <div className="flex items-center space-x-3">
            <img
              src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} // Use both the user ID and avatar hash
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>{username}</span>
          </div>
        ) : (
          // If the user is not logged in, show the Join the Club button
          <div className="relative group">
            <div className="absolute inset-x-0 bottom-0 h-10 bg-amber-700 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>

            <a
              href="/api/discord-login" // Discord login link
              className="relative flex items-center space-x-2 text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-200 ease-in-out shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
              <span>Join the Club</span>
            </a>
          </div>
        )}
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
                      ? "text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 scale-105"
                      : "text-gray-300 hover:text-white hover:bg-navPurple hover:scale-105"
                  }`}
                >
                  <div
                    className={`p-1 rounded-md w-7 h-7 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                      isActive ? "text-white scale-110" : "text-gray-300 hover:scale-110"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Conditional rendering for Profile and Sign In */}
        {!isLoggedIn ? (
          // Show the Sign In button if the user is not logged in
          <div className="relative group mt-4">
            <div className="absolute inset-x-0 bottom-0 h-10 bg-amber-700 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>

            <a
              href="/api/discord-login" // Discord login link
              className="relative flex flex-col items-center space-x-2  text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-200 ease-in-out shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <div className="space-x-2 flex items-center">
                <FontAwesomeIcon icon={faDiscord} className="text-lg" />
                <span>Sign In</span>
              </div>
            </a>
          </div>
        ) : (
          // Show the Profile button if the user is logged in
          <div className="relative group mt-4">
            <div className="absolute inset-x-0 bottom-0 h-10 bg-zinc-800 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>

            <Link
              to="/profile" // Link to profile
              className="relative flex flex-col items-center space-x-2  text-white bg-gradient-to-r from-zinc-700 via-navBg to-zinc-700 shadow-lg hover:translate-y-0.5 transition-all duration-200 ease-in-out shadow-white-500/50  font-medium rounded-lg  px-5 py-2.5 text-center"
            >
              <div className="space-x-2 flex items-center ">
                <FontAwesomeIcon icon={faUser} className="text-md" />
                <span className="text-sm">Profile</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default DesktopNav;
