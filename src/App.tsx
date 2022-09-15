import React from 'react';
import DesktopNavbar from './components/navbar/desktopNav/DesktopNavbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <DesktopNavbar />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
