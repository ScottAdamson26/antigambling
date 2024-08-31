import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGift, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { name: 'Home', path: '/', icon: faHome },
  { name: 'Bonuses', path: '/bonuses', icon: faGift },
  { name: 'About', path: '/about', icon: faInfoCircle },
  { name: 'Contact', path: '/contact', icon: faEnvelope },
];

function DesktopNav() {
  const location = useLocation(); // Get the current path

  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 w-full pl-6 pr-32 py-4 bg-customDark text-white shadow-md flex justify-between items-center z-20">
        <h1 className="text-xl ml-2 font-bold font-suse">Anti Gambling Gambling Club</h1>
        <Link 
          to="/bonuses" 
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Get Bonuses
        </Link>
      </div>

      {/* Side Navigation */}
      <div className="fixed font-semibold text-base left-0 top-16 h-[calc(100vh-4rem)] bg-customDark text-white p-4 pl-6 pt-10 w-64 z-10">
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`flex items-center space-x-3 p-1.5 rounded-lg transition-all shadow-inner ${
                location.pathname === item.path 
                ? 'bg-gradient-to-t from-purple-500 via-purple-600 to-purple-700' 
                : 'bg-gradient-to-t from-customGradientBottom to-customGradientTop hover:bg-purple-600 hover:text-white'
              }`}
            >
              <div className="bg-white p-1 rounded-md w-7 h-7 flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="text-customDark" />
              </div>
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default DesktopNav;
