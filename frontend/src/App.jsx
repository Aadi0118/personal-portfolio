import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes will go here: About, Projects, Contact */}
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2026 Aditya Kumar Sinha</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
