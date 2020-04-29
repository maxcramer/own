import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home'
import ProRiders from './components/ProRiders/ProRiders';
import Nav from './components/Navigation/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/proRiders" component={ProRiders} />        
          </Switch>
      </div>
    </Router>
  );
}

export default App;
