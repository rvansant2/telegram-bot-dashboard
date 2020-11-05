import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Pages/Components
 */
import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Defaut Home Route */}
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
