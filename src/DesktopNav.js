import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGift, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function DesktopNav() {
  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 w-full pl-6 pr-32 py-4 bg-customDark  text-white shadow-md flex justify-between items-center z-20">
        <h1 className="text-lg font-bold">Anti Gambling Gambling Club</h1>
        <Link to="/bonuses" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
          Get Bonuses
        </Link>
      </div>

      {/* Side Navigation */}
      <div className="fixed font-semibold text-base left-0 top-16 h-[calc(100vh-4rem)] bg-customDark text-white p-4 pt-10 w-64 z-10">
        <nav className="space-y-4">
          <Link 
            to="/" 
            className="flex items-center space-x-3 bg-customDark p-1.5 rounded-lg transition-all hover:bg-purple-600 hover:text-white">
            <div className="bg-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faHome} className="text-customDark" />
            </div>
            <span>Home</span>
          </Link>
          <Link 
            to="/bonuses" 
            className="flex items-center space-x-3 bg-customDark p-1.5 rounded-lg transition-all hover:bg-purple-600 hover:text-white">
            <div className="bg-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faGift} className="text-customDark" />
            </div>
            <span>Bonuses</span>
          </Link>
          <Link 
            to="/about" 
            className="flex items-center space-x-3 bg-customDark p-1.5 rounded-lg transition-all hover:bg-purple-600 hover:text-white">
            <div className="bg-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faInfoCircle} className="text-customDark" />
            </div>
            <span>About</span>
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center space-x-3 bg-customDark p-1.5 rounded-lg transition-all hover:bg-purple-600 hover:text-white">
            <div className="bg-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-customDark" />
            </div>
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default DesktopNav;
