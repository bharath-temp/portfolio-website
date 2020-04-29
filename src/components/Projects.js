/*
import React from 'react';
import '../App.css';

function Projects() {
  return (
    <div className="projects" id="Projects" />
  );
}

export default Projects;
*/

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Projects() {
  const items = [
    {
      name: 'Portfolio Website',
      description: "This website you're currently browsing is made with React,"
                          + 'Material-UI, and ----! Checkout the Github link to view the'
                          + 'code, coding practices, CI/CD, and Kanban project planning',
      githubUrl: 'https://github.com/bharathpadmaraju/portfolio-website',
      demoUrl: 'http://localhost:3000/',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      githubUrl: 'https://github.com/bharathpadmaraju/portfolio-website',
      demoUrl: 'http://localhost:3000/',
    },
  ];
  // xs={12} sm={6} md={4} lg={4} xl={3}
  return (
    <div className="projects" id="Projects">
      <Grid container>
        {items.map((item) => (<Item item={item} />))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Item({ item }) {
  const classes = useStyles();
  return (
    <Grid item sm>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button target="_blank" size="small" color="primary" href={item.demoUrl}>
            Live Demo
          </Button>
          <Button target="_blank" size="small" color="primary" href={item.githubUrl}>
            GitHub Source
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
  }).isRequired,
};

export default Projects;
