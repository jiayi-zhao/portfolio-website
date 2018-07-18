import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SplashPage from './SplashPage/SplashPage';
import NavBar from './NavBar/NavBar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      splashLoaded: false,
    }

    this.renderedSplashPage = this.renderedSplashPage.bind(this);
  }

  renderedSplashPage() {
    this.setState({ splashLoaded: true });
  }

  render() {

    const { children } = this.props;

    return (
      <div className="App">
        <SplashPage loaded={this.state.splashLoaded} renderedSplashPage={this.renderedSplashPage}/>
        <NavBar />
        <div style={{marginTop: '15vh'}}>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
