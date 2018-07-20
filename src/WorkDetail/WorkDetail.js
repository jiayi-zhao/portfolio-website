import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import './WorkDetail.css';

import WorkDetailPhotography from './WorkDetailPhotography';
import WorkDetailGeneral from './WorkDetailGeneral';


class WorkDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: null,
    }
  }

  getProject(id){
    fetch('/work_detail/' + id + '.json')
    .then(res => res.json()).then(obj => {
      this.setState({
        project: obj,
      })
      // console.log(obj);
    });
  }

  componentDidMount() {
    const projectID = this.props.match.params.id;
    this.getProject(projectID);
    // this.getProjects(this.state.workType);
  }

  render() {
    var project = this.state.project

    return (
      <Grid container spacing={24} justify='center'>
        {project ? (
          <React.Fragment>
          <Grid item xs={10}>
            <Link to={{pathname: "/work", state: {workType: project.type}}} className='projectDetailLink'>{'<back'}</Link>
          </Grid>
          <Grid item xs={10}>
            <Grid container justify='center' spacing={24}>
              <Grid item xs={10}>
                <div className='workDetailTitle'>{project.title}</div>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={10}>
            <Grid container justify='center' spacing={24}>

              <Grid item xs={10}>
                <Grid container spacing={8} >
                  <Grid item xs={3}>
                    <div className='workDetailIntroSecondary'>description</div>
                  </Grid>
                  <Grid item xs={9}>
                    <span className='workDetailIntroPrimary'>{project.description}</span>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={10}>
                <Grid container spacing={8} >
                  <Grid item xs={3}>
                    <div className='workDetailIntroSecondary'>role</div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className='workDetailIntroPrimary'>{project.role}</div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={10}>
                <Grid container spacing={8} >
                  <Grid item xs={3}>
                    <div className='workDetailIntroSecondary'>highlight</div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className='workDetailIntroPrimary'>{project.tags.join(', ')}</div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          { project.name==='photography'? (
              <WorkDetailPhotography project={project} />
            ) : <WorkDetailGeneral project={project} />}
          </React.Fragment>
          ) : null }
      </Grid>
      
    );
  }
}

export default WorkDetail;