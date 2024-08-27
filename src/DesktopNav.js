// DesktopNav.js
import React from 'react';
import { Link } from 'react-router-dom';

function DesktopNav() {
  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 w-full bg-gray-800 text-white p-4 shadow-md flex justify-between items-center z-20">
        <h1 className="text-lg font-bold">Casino</h1>
        <Link to="/bonuses" className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-bold">
          Get Bonuses
        </Link>
      </div>

      {/* Side Navigation */}
      <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 text-white p-4 w-64 z-10">
        <nav className="space-y-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/bonuses" className="block py-2">Bonuses</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
        </nav>
      </div>
    </>
  );
}

export default DesktopNav;
