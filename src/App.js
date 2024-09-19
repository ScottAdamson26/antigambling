import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import BlogPost from './BlogPost';
import Blogs from './Blogs'; 
import Profile from './Profile';
import { AuthProvider } from './AuthContext';  // Import the AuthProvider
import Videos from "./Videos";
function App() {
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
            <DesktopNav />
          </div>

          {/* Main content area with a single scroll */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Sidebar Spacer for Desktop */}
            <div className="hidden md:block w-56"></div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-12 pt-8 md:pl-10 md:pr-4 2xl:px-10 font-suse">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/news" element={<Blogs />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path ="/videos" element={<Videos />}/>
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
