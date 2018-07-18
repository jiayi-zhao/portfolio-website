import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

// import selfImage from '../../public/images/self.jpg';

// import data from './data.json';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
    }
  }


  getExperiences() {
    fetch('/data.json')
    .then(res => res.json()).then(obj => {
      this.setState({ experiences: obj.experiences });
    })
  }

  componentDidMount() {
    this.getExperiences();
  }

  renderExperiences() {
    var result = [];

    result = this.state.experiences.map(ex => (
      <Grid item xs={11}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <div className='experienceTitle'>{ex.title}</div>
          </Grid>
          <Grid item xs={12}>
            <div className='experienceTime'>{ex.timePlace}</div>
          </Grid>
          <Grid item xs={12}>
            <span className='experienceDescription'>{ex.description}</span>
          </Grid>
        </Grid>
      </Grid>
    ))

    return result;
  }

  render() {
    return (
      <Grid container spacing={40} justify='center'>
        <Grid item xs={10}>
          <Grid container justify='flex-start' spacing={32}>

            <Grid item xs={6}> 
              <img className="selfImage" src='/images/self.jpg' width="100%" alt="selfImage"/>
            </Grid>

            <Grid item xs={6}> 
              <Grid container justify='flex-start' spacing={32}>
                <Grid item xs = {12}>
                  <div className="aboutIntroText">Still a student</div>
                  <div className="aboutIntroText">Aspire to be the best version of me</div>
                </Grid>
                <Grid item xs = {12}>
                  <span className="aboutIntroText">I can be a software engineer, designer, analyst, musician, photographer, food passionist…</span>
                </Grid>
                <Grid item xs = {12}>
                  <span className="aboutIntroText">I wish to make an impact.</span>
                </Grid>
                <Grid item xs = {12}>
                  <div className="aboutIntroText">I’m always open to chat, grab a coffee and connect:</div>
                  <div className="aboutIntroText emailIntroText">jiayizhao @ cmu.edu</div>
                  <div style={{'marginTop': '8px'}}>
                    <span className='aboutLogos'><a href="https://www.linkedin.com/in/jiayi-zhao" target="_blank" ><img src="images/logos/linkedin.png" alt="linkedin" width='25px' /></a></span>
                    <span className='aboutLogos'><a href="https://github.com/jiayi-zhao" target="_blank" ><img src="images/logos/github.png" alt="github" width='25px'/></a></span>
                    <span className='aboutLogos'><a href="https://medium.com/@jiayizhao" target="_blank"><img src="images/logos/medium.png" alt="medium" width='25px' /></a></span>
                    <span className='aboutLogos'><a href="https://www.facebook.com/jiayi.zh" target="_blank"><img src="images/logos/facebook.png" alt="facebook" width='25px' /></a></span>
                    <span className='aboutLogos'><a href="https://www.instagram.com/j.y.zhao/" target="_blank"><img src="images/logos/instagram.png" alt="instagram" width='25px' /></a></span>
                  </div>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Grid container style={{ 'justifyContent': 'flex-end'}} spacing={8}>
                  <div className='aboutTitles'>More About Me</div>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <span></span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Grid container style={{ 'justifyContent': 'flex-end'}} spacing={8}>
                  <div className='aboutTitles'>Experiences</div>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={40} justify='flex-end' style={{'paddingTop': '8px'}}>
                {this.renderExperiences()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Grid container style={{ 'justifyContent': 'flex-end'}} spacing={8}>
                  <div className='aboutTitles'>Skills</div>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <span></span>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    );
  }
}


export default About;