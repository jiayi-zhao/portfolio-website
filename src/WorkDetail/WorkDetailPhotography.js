import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './WorkDetail.css';


class WorkDetailPhotography extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // project: this.props.project,
    }
  }

  // getProject(id){
  //   fetch('/work_detail/' + id + '.json')
  //   .then(res => res.json()).then(obj => {
  //     this.setState({
  //       project: obj,
  //     })
  //     // console.log(obj);
  //   });
  // }

  // componentDidMount() {
  //   const projectID = this.props.match.params.id;
  //   this.getProject(projectID);
  //   // this.getProjects(this.state.workType);
  // }

  render() {
    var project = this.props.project;

    var contentView = project.content.map(section => (
      <React.Fragment>
        <Grid item xs={12}>
          <div className='contentSectionTitle'>{section.name}</div>
        </Grid>
        <Grid item xs={12}>
            {section.pics.map(pic => (
              <span key={pic.name}>
                <img src={pic.source} alt={pic.name} className='photographyImages' />
              </span>
            ))}
        </Grid>
      </React.Fragment>
    ));

    return (
      <Grid item xs={10}>
        <Grid container spacing={24}>
          {contentView}
        </Grid>
      </Grid>
      
    );
  }
}

export default WorkDetailPhotography;