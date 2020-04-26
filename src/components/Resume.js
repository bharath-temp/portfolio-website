import React from 'react';
import '../App.css';

import Image from '../BharathPadmarajuResumeSept.jpg';

const myStyles = {
  width: '36%',
  'border-radius': '14%',
  padding: '2%',
};

function Resume() {
  return (
    <div className="resume" id="Resume">
      <div>
        <img src={Image} alt="Logo" style={myStyles} />
      </div>
    </div>
  );
}

export default Resume;
