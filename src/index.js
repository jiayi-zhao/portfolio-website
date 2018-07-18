import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import Home from './Home/Home';
import About from './About/About';

ReactDOM.render(
  <BrowserRouter>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/*<Route path="/resume" component={Resume} />*/}
{/*      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route path="/work/:id" component={WorkDetail} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />*/}
    </Switch>
  </App>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
