import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import './NavBar.css';


class NavBar extends Component {


  render() {

    return (
      <Grid container spacing={8} justify='center' className='NavBarContainer'>
        <Grid item xs={10}>
          <Grid container spacing={8} alignItems='center'>
            <Grid item xs={6}>
              <Grid container justify='flex-start' alignItems='flex-end'>
                <Link className="menuLink" to="/"><div class="logo">Jiayi Zhao</div></Link>
              </Grid>
              
            </Grid>
            <Grid item xs={6}>
              <Grid container justify='flex-end'>
                <Grid item xs={6}>
                  <div class="menu">
                    <Link className="menuLink" to="/work"><p>work</p></Link>
                    <Link className="menuLink" to="/about"><p>about</p></Link>
                    <a href="/resume.pdf" target='_blank' className="menuLink"><p>resume</p></a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    );
  }
}

export default NavBar;


{/*<div class="menu">
              <Link className="menuLink" to="/work"><p>work</p></Link>
              <Link className="menuLink" to="/about"><p>about</p></Link>
              <Link className="menuLink" to="/resume"><p>resume</p></Link>
            </div>*/}