import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/SignUp";
import HomeBackground from './frames/HomeBackground';

function App() {
  return (
    <Router>
      <div className="App" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        {/* HomeBackground component */}
        <HomeBackground>
          <Routes>
            <Route exact path="/" element={<div>hello</div>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </HomeBackground>
      </div>
    </Router>
  );
}

export default App;