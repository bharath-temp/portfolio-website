import React from 'react';
import '../App.css';
import HomeContent from './HomeContent';

function Homepage() {
  return (
    <div className="homepage" id="Home" style={{ width: '100%', margin: 'auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',
      }}
      >
        <HomeContent />
      </div>
    </div>
  );
}

export default Homepage;
