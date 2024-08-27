// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function App() {
  return (
    <div className="bg-customDark min-h-screen font-anton">
      <Router>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>

        {/* Page Content */}
        <div className="md:ml-64 lg:ml-64 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
           
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
