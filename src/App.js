import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import UserGames from './components/UserGames';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/games/:username' component={UserGames} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
