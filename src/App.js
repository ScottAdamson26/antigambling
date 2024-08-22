import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="md:ml-64"> {/* Adjust for sidebar space */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
