import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* You can add more routes here for other pages in the future */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
