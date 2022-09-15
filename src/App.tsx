import React from 'react';
import DetermineNavbar from './components/navbar/DetermineNavbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <DetermineNavbar />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
