import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from './GlobalStyles.js';

function App() {
  return (
    <Router>
      <GlobalStyles />
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
