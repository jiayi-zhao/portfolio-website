import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';

import './SplashPage.css';


class GlitchLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeClassName: "glitch glitchFade",
    }
  }

  componentDidAppear() {
    const cb = () => {
      this.setState({ fadeClassName: "glitch glitchFade" });
    }
  }

  componentWillLeave(cb: () => {}) {
    this.setState({ fadeClassName: "" }); 
  }

  render(){
    return (
      <div className="SplashPageMain">
        <div className="intro">
          <div className={this.state.fadeClassName} data-text="Hello">Hello</div> 
          <div className={this.state.fadeClassName} onAnimationEnd={this.props.animationEnd} data-text="I'm Jiayi">I'm Jiayi</div>
        </div>
      </div>
    );
  }
}


class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      render: true,
    }
  }

  animationEnd = () => {
    this.setState({ render: false });
    this.props.renderedSplashPage();
  }



  render() {
    const { classes, ...props } = this.props;

    return (
      <React.Fragment>
        {this.state.render && !this.props.loaded ?
          <GlitchLabel animationEnd={this.animationEnd} />
          : <div/>
        }
      </React.Fragment>
    );
  }
}

export default SplashPage;