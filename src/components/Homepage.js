import React from 'react';
import '../App.css';

function Homepage() {
  return (
    <div className="homepage" id="Home" style={{ width: '100%', margin: 'auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh',
      }}
      >
        <h1> Bharath Padmaraju </h1>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh',
      }}
      >
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bharathpadmaraju">Linkedin</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/bharathpadmaraju">Github</a>
      </div>
    </div>
  );
}

export default Homepage;
