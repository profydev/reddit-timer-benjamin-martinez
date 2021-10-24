import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Terms from './pages/Terms';

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
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
