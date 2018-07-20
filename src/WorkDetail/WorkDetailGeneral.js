import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './WorkDetail.css';


class WorkDetailGeneral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // project: this.props.project,
    }
  }


  render() {
    var project = this.props.project;

    var contentView = project.content.map(section => {
      if (section.type === 'title') {
        return (
          <Grid item xs={10}>
            <div className='contentSectionTitle'>{section.text}</div>
          </Grid>
        );
      } else if (section.type === 'image') {
        var imageContainers = section.imageContainers;
        var imagesUI = section.imageContainers.map(container => (
          <Grid item xs={container.xs}>
            <Grid container justify='center' spacing={16}>
              {container.images.map(image => (
                <Grid item xs={Math.floor(container.xs/container.col)}>
                  <img src={image.source} alt={image.name} className='generalImages' />
                </Grid>
              ))}
              { container.caption ? (
                  <Grid item xs={12}>
                    <Grid container justify='center'>
                      <Grid item>
                        <div className='imageCaption'>{container.caption}</div>
                      </Grid>
                    </Grid>
                  </Grid>
                  
                ) : <React.Fragment />}
            </Grid>
          </Grid>
        ));
        return (
          <Grid item xs={12}>
            <Grid container justify='center'>
              {imagesUI}
            </Grid>
          </Grid>
        );
      } else if (section.type === 'text') {
        return (
          <Grid item xs={10}>
            <div className='workDetailIntroPrimary'>{section.text}</div>
          </Grid>
        );
      }
      
    });

    return (
      <Grid item xs={10}>
        <Grid container spacing={24} justify='center'>
          {contentView}
        </Grid>
      </Grid>
      
    );
  }
}

export default WorkDetailGeneral;