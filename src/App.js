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
        <Route path="/Home" component={Home} />
        <Route path="/proriders" component={ProRiders} />
      </div>
    </Router>
  );
}

export default App;
