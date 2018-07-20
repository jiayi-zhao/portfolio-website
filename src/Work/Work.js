import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles';


// import data from './data.json';
import './Work.css';

const styles = theme => ({
  menuText: {
    color: '#A2A2A2',
    letterSpacing: '1.6px',
  },
  selectedMenuText: {
    color: '#000000',
    letterSpacing: '1.6px',
  },
  button: {
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:not(:first-child)': {
      marginTop: '8px',
    }
  },
  menu: {
    top: '15vh',
    // left: '0%',
    zIndex: '50',
    position: 'fixed',
    height: 'calc(100vh - 20vh)',
    borderWidth: '0 1px 0 0',
    borderStyle: 'solid',
  }
});


class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workType: 'software',
      projects: null,
    }
  }

  getProjects(type){
    fetch('/data.json')
    .then(res => res.json()).then(obj => {
      this.setState({
        projects: obj.projects[type],
      })
      // console.log(obj);
    });
  }

  setWorkType() {
    // const { workType } = this.props.state;
    console.log(this.props)

    if(this.props.location && 
       this.props.location.state && 
       this.props.location.state.workType) {
      var type = this.props.location.state.workType;
      this.setState({ workType: type}, this.getProjects(type));
    } else {
      this.getProjects(this.state.workType);
    }
  }


  componentDidMount() {
    this.setWorkType();
    // this.getProjects(this.state.workType);
  }

  handleMenuClick = value => () => {
    this.setState({ workType: value });
    this.getProjects(value);
  }


  renderWorkList() {
    const {classes} = this.props;

    var projects = this.state.projects;

    var results = [];

    results = projects.map(project => (
      <Grid item xs={12}>
      <Grid container spacing={32}> 
        <Grid item xs={12}>
          <img className="selfImage" src={project.pic} width="100%" alt="selfImage"/>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={16}> 
            <Grid item xs={12}>
              <div className='projectTitle'>{project.title}</div>
            </Grid>
            <Grid item xs={12}>
              {project.time ? (
                <div>
                  <span className='projectTime'>
                    {project.time}
                  </span>
                  <span className='projectRole'>
                    {' | ' + project.function}
                  </span>
                </div>
                ) : (
                <span className='projectRole'>
                  {project.function}
                </span>)
                
              }
            </Grid>
            <Grid item xs={12}>
              <span className='projectText'>{project.introduction}</span>
            </Grid>
            <Grid item xs={12}>
              {project.tags.map(tag => (<span className='projectTags'>{'#' + tag}</span>))}
            </Grid>
            <Grid item xs={12}>
              <Link to={"/work/" + project.name} className='projectDetailLink'> see project detail></Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

      </Grid>
      </Grid>
    ));

    return (
      <Grid container spacing={40}> 
          {results}
      </Grid>
    );
  }

  renderMenu() {
    const { classes } = this.props;

    var selected = this.state.workType;

    return(
      <Grid container>
        <List>
          <ListItem key='software' button onClick={this.handleMenuClick('software')} disableRipple classes={{root: classes.button}}>
            <ListItemText primary="Software" classes={ selected==='software' ? { primary: classes.selectedMenuText } : {primary: classes.menuText}}/>
          </ListItem>
          <ListItem key='design' button onClick={this.handleMenuClick('design')} disableRipple classes={{root: classes.button}}>
            <ListItemText primary="Design" classes={ selected==='design' ? { primary: classes.selectedMenuText } : {primary: classes.menuText}}/>
          </ListItem>
          <ListItem key='personal' button onClick={this.handleMenuClick('personal')} disableRipple classes={{root: classes.button}}>
            <ListItemText primary="Personal Projects" classes={ selected==='personal' ? { primary: classes.selectedMenuText } : {primary: classes.menuText}}/>
          </ListItem>
        </List>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    // const { workType } = this.props.
    return (
      <Grid container spacing={8} justify='center'>
        <Grid item xs={10}>
          <Grid container justify='flex-start' spacing={32}>
            <Grid item xs={3} classes={{item: classes.menu}}> 
              {this.renderMenu()}
            </Grid>
          </Grid>
          <Grid container justify='flex-end' spacing={32}>
            <Grid item xs={9} style={{marginTop: '5vh'}}> 
              {this.state.projects ? this.renderWorkList() : null}
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    );
  }
}


export default withStyles(styles)(Work);
