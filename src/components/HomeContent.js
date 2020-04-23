import React from 'react';

import grey from '@material-ui/core/colors/grey';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

import Typical from 'react-typical';

function HomeContent() {
  const linkedinLink = 'https://www.linkedin.com/in/bharathpadmaraju';
  const githubLink = 'https://github.com/bharathpadmaraju';
  return (
    <div className="HomeContent">
      <div className="hometext">
        <h1> Bharath Padmaraju </h1>
        <Typical
          steps={['I am a Software Engineer', 1000, 'I am an idiot', 500]}
          loop={Infinity}
        />
      </div>
      <div className="Icons">
        <IconButton target="_blank" href={linkedinLink} style={{ color: grey[50] }}>
          <LinkedInIcon style={{ fontSize: '8vh' }} />
        </IconButton>
        <IconButton target="_blank" href={githubLink} style={{ color: grey[50], size: 'small' }}>
          <GitHubIcon style={{ fontSize: '8vh' }} />
        </IconButton>
      </div>
    </div>
  );
}

export default HomeContent;
