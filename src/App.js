import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import BlogPost from './BlogPost';
import Blogs from './Blogs'; 
import Profile from './Profile';
import { AuthProvider } from './AuthContext';  // Import the AuthProvider
import Videos from "./Videos";
import Showcase from "./Showcase";
import Contact from './Contact';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <AuthProvider>  {/* Wrap your app with the AuthProvider */} 
      <div className="bg-background h-screen w-screen overflow-hidden font-suse">
        <Router>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <DesktopNav onToggle={handleSidebarToggle} />
          </div>

          {/* Main content area with a single scroll */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Sidebar Spacer for Desktop */}
            <div className={`hidden md:block transition-all duration-500 ${isSidebarOpen ? "w-56" : "w-20"}`}></div>

            {/* Scrollable Content */}
            <div className={`flex-1 transition-all duration-500 overflow-y-auto pb-12 pt-8 md:pl-10 md:pr-4 2xl:px-10 font-suse`}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/news" element={<Blogs />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path ="/videos" element={<Videos />}/>
                <Route path = "/reviews" element={<Showcase />}/>
                <Route path = "/contact" element={<Contact />}/>

                {/* Add other routes here */}
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </AuthProvider>  
  );
}

export default App;
