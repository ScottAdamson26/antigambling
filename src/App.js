import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import BlogPost from './BlogPost';
function App() {
  return (
    <div className="bg-background h-screen w-screen overflow-hidden font-suse">
      <Router>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>

        {/* Main content area with a single scroll */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Sidebar Spacer for Desktop */}
          <div className="hidden md:block w-56"></div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pb-12 pt-8 px-10 font-suse">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
