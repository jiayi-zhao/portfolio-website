import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route path="/work/:id" component={WorkDetail} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </App>, 
  document.getElementById('root'));
registerServiceWorker();
