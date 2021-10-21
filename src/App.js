import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/global/Header';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
