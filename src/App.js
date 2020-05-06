import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home'
import ProRiders from './components/ProRiders/ProRiders';
import Nav from './components/Navigation/Nav';
import RidingTips from './components/RidingTips/RidingTips';
import News from './components/News/News';
import BoardCare from './components/BoardCare/BoardCare';
import SinglePost from './components/News/SinglePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/proriders" component={ProRiders} />
          <Route path="/ridingtips" component={RidingTips} />
          <Route path="/news" component={News} />
          <Route path="/boardcare" component={BoardCare} />
          <Route path="/articles/article{id}" component={SinglePost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
