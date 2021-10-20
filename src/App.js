import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
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
