import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="bg-zinc-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Blog</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>
        {/* Burger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar for Desktop */}
      <div className="hidden md:block w-64 h-screen bg-zinc-900 text-white fixed top-0 left-0 pt-20">
        <nav className="space-y-4">
          <a href="/" className="block py-2 px-4 hover:bg-zinc-700">Home</a>
          <a href="/casino" className="block py-2 px-4 hover:bg-zinc-700">Casino</a>
          <a href="/sports" className="block py-2 px-4 hover:bg-zinc-700">Sports</a>
          <a href="/gambling" className="block py-2 px-4 hover:bg-zinc-700">Gambling</a>
          <a href="/contact" className="block py-2 px-4 hover:bg-zinc-700">Help Center</a>
        </nav>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 text-white p-4">
          <a href="/" className="block py-2">Home</a>
          <a href="/casino" className="block py-2">Casino</a>
          <a href="/sports" className="block py-2">Sports</a>
          <a href="/gambling" className="block py-2">Gambling</a>
          <a href="/contact" className="block py-2">Help Center</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;