import React, { useState, useRef } from 'react'; // Import useRef
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import BlogPost from './BlogPost';  // Import BlogPost component
import Blogs from './Blogs'; 
import Profile from './Profile';
import { AuthProvider } from './AuthContext';  // Import the AuthProvider
import { BlogProvider } from './BlogContext';  // Import the BlogProvider
import { VideoProvider } from './VideoContext';  // Import the VideoProvider
import Videos from './Videos';
import Showcase from './Showcase';
import Contact from './Contact';
import Footer from './Footer2';
import Library from './Pages/Library/Library';
import StrategiesPage from './Pages/Strategies/StrategiesPage';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Ref for the scrollable content area
  const scrollableDivRef = useRef(null);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <BlogProvider> {/* Wrap with BlogProvider */}
        <VideoProvider> {/* Wrap with VideoProvider */}
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
                <div
                  ref={scrollableDivRef} // Add the ref here
                  className={`flex-1 transition-all duration-500 overflow-y-auto pb-12 pt- md:pl-10 md:pr-4 2xl:px-10 font-suse`}
                >
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/news/:slug"
                      element={<BlogPost scrollableDivRef={scrollableDivRef} />} // Pass the ref down
                    />
                    <Route path="/news" element={<Blogs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/reviews" element={<Showcase />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Library" element={<Library />} />
                    <Route path="/Strategies" element={<StrategiesPage />} />


                  </Routes>
                  <Footer/>
                </div>
              </div>
            </Router>
          </div>
        </VideoProvider> {/* Close VideoProvider */}
      </BlogProvider> {/* Close BlogProvider */}
    </AuthProvider>
  );
}

export default App;
