import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Count from '../components/Count';
import Home from '../components/Home';
import Log from '../components/Log';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/count'>Count</Link>
            </li>
            <li>
              <Link to='/log'>Log</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/count'>
            <Count />
          </Route>
          <Route path='/log'>
            <Log />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
