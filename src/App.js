import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/search" />
      </Switch>
      <div>
        App Placeholder
      </div>
    </Router>
  );
}

export default App;
