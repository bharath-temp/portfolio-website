import React from 'react';
import { Link } from 'react-scroll';

import '../App.css';

function Navbar() {
  const mystyle = {
    padding: '1vw',
    color: 'white',
    margin: '0',
  };
  return (
    <div className="navbar">
      <Link
        style={mystyle}
        activeClass="active"
        to="Home"
        spy
        smooth
        offset={0}
        duration={400}
      >
        Home
      </Link>
      <Link
        style={mystyle}
        activeClass="active"
        to="Projects"
        spy
        smooth
        offset={0}
        duration={400}
      >
        Projects
      </Link>
      <Link
        style={mystyle}
        activeClass="active"
        to="Resume"
        spy
        smooth
        offset={0}
        duration={400}
      >
        Resume
      </Link>
      <Link
        style={mystyle}
        activeClass="active"
        to="Contact"
        spy
        smooth
        offset={0}
        duration={400}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
