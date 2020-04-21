import React from 'react';

import Navbar from './components/Navbar.js';
import Homepage from './components/Homepage.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
