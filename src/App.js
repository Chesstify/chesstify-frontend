import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/games/:username" />
      </Switch>
    </Router>
  );
}

export default App;
