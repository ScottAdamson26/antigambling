import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faEnvelope,
  faEarthAmericas,
  faVideo,
  faStar,
  faUser,
  faOutdent,
  faIndent,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import logo from "../src/logo.png";
import { AuthContext } from "./AuthContext";

const navItems = [
  { name: "Home", path: "/", icon: faHome },
  { name: "Reviews", path: "/reviews", icon: faStar },
  { name: "Videos", path: "/videos", icon: faVideo },
  { name: "Offers", path: "/offers", icon: faGift },
  { name: "News", path: "/news", icon: faEarthAmericas },
  { name: "Contact", path: "/contact", icon: faEnvelope },
];

function DesktopNav({ onToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, username, avatar, id, logoutUser } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const [showText, setShowText] = useState(true); // For controlling text appearance

  useEffect(() => {
    // Delay showing/hiding the text to make the transition smoother
    if (isOpen) {
      setTimeout(() => setShowText(true), 150); // Delay text appearance when opening
    } else {
      setShowText(false); // Immediately hide text when closing
    }
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); // Notify parent component about the state change
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 w-full pl-6 pr-20 py-4 bg-background text-white flex justify-between items-center z-20">
        <img src={logo} alt="Logo" className="h-10 ml-10 mt-2" />
        {isLoggedIn ? (
          <button
            onClick={() => handleNavigation("/profile")}
            className="flex items-center space-x-3"
          >
            <span className="font-suse font-medium">{username}</span>
            <img
              src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`}
              alt="Profile"
              className="w-10 h-10 rounded-full outline outline-2 outline-lightOrange"
            />
          </button>
        ) : (
          <div className="relative group">
            <div className="absolute inset-x-0 bottom-0 h-10 bg-amber-700 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
            <a
              href="/api/discord-login"
              className="relative flex items-center space-x-2 text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-200 ease-in-out shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
              <span>Join the Club</span>
            </a>
          </div>
        )}
      </div>

      {/* Side Navigation Container */}
      <div
        className={`fixed font-normal font-suse text-base left-0 top-12 h-[calc(100vh-3rem)] ml-3 pb-6 pt-10 z-10 flex flex-col justify-between transition-all duration-500 ${
          isOpen ? "w-56" : "w-20"
        }`}
      >
        <div className="">
          <div className="px-2 pb-2 rounded-2xl">
            <nav className="space-y-4">
              {/* Indent/Outdent Button */}
              <button
                onClick={toggleSidebar}
                className={`flex mt-2 items-center py-1 px-3 w-full rounded-2xl shadow-inner tracking-wider transition-all duration-500 ease-in-out transform ${
                  isOpen ? "justify-end" : "justify-end"
                }`}
              >
                <div
                  className={`w-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white transition-all duration-500 ease-in-out transform`}
                >
                  <FontAwesomeIcon icon={isOpen ? faOutdent : faIndent} />
                </div>
              </button>

              {/* Navigation Items */}
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center py-1 px-3 w-full rounded-2xl shadow-inner tracking-wider transition-all duration-500 ease-in-out transform ${
                      isActive
                        ? "text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 scale-105"
                        : "text-gray-300 hover:text-white hover:bg-navPurple hover:scale-105"
                    }`}
                  >
                    <div
                      className={` w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-500 ease-in-out transform ${
                        isActive
                          ? "text-white scale-105"
                          : "text-gray-300 hover:text-white hover:scale-110"
                      }`}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    {isOpen && showText && (
                      <span className="transition-opacity duration-500 text-sm ml-2">
                        {item.name}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="mt-auto">
          {isLoggedIn ? (
            <>
              {/* Fixed size for Sign Out Button */}
              <div className="relative group mt-4">
                <div className="absolute inset-x-0 bottom-0 h-8 bg-amber-700 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
                <button
                  onClick={logoutUser}
                  className={`relative w-full h-10 flex items-center justify-center text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-500 shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 rounded-lg`}
                >
                  <div className="space-x-2 flex items-center">
                    <FontAwesomeIcon icon={faDiscord} className="text-lg" />
                    {isOpen && showText && <span className="text-sm">Sign Out</span>}
                  </div>
                </button>
              </div>

              {/* Fixed size for Profile Button */}
              <div className="relative group mt-4">
                <div className="absolute inset-x-0 bottom-0 h-8 bg-zinc-800 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
                <button
                  onClick={() => handleNavigation("/profile")}
                  className={`relative w-full h-10 flex items-center justify-center text-white bg-gradient-to-r from-zinc-700 via-navBg to-zinc-700 shadow-lg hover:translate-y-0.5 transition-all duration-500 shadow-white-500/50 rounded-lg`}
                >
                  <div className="space-x-2 flex items-center">
                    <FontAwesomeIcon icon={faUser} className="text-md" />
                    {isOpen && showText && <span className="text-sm">Profile</span>}
                  </div>
                </button>
              </div>
            </>
          ) : (
            <div className="relative group mt-4">
            <div className="absolute inset-x-0 bottom-0 h-8 bg-amber-700 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
            <a
              href="/api/discord-login"
              className={`relative w-full h-10 flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-500 shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 rounded-lg`}
            >
              <FontAwesomeIcon icon={faDiscord} className="text-md" />
              {isOpen && showText && <span className="text-sm">Sign In</span>}
            </a>
          </div>
          
          )}
        </div>
      </div>
    </>
  );
}

export default DesktopNav;
