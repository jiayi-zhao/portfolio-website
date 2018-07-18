import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

// import data from './data.json';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      update: '',
    }
  }

  getIntroduction(){
    fetch('/data.json')
    .then(res => res.json()).then(obj => {
      this.setState({
        description: obj.description,
        update: obj.update,
      })
      // console.log(obj);
    });
  }

  componentDidMount() {
    this.getIntroduction();
  }

  render() {
    return (
      <Grid container spacing={8} justify='center'>
        <Grid item xs={10}>
          <Grid container justify='flex-start' spacing={32}>
            <Grid item xs={7}> 
              <span className='introText'>{this.state.description}</span>
            </Grid>
            <Grid item xs={7}> 
              <span className='introText'>{this.state.update}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Grid container justify='flex-start' spacing={8}>

          </Grid>
        </Grid>
      </Grid>
    );
  }
}


export default Home;