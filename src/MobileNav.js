// MobileNav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-gray-800 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Casino</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/bonuses" className="block py-2">Bonuses</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
