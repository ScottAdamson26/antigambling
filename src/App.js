import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen font-rubik">
      <Router>
        <Navbar />
        <div className="flex pt-16">
          {/* Adjust for sidebar space */}
          <div className="hidden md:block w-64"></div>
          <main className="flex-1 p-4 md:p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
