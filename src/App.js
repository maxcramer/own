import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home'
import ProList from './components/ProRiders/ProList';
import Nav from './components/Navigation/Nav';
import RidingTips from './components/RidingTips/RidingTips';
import BoardCare from './components/BoardCare/BoardCare';
import PostList from './components/News2/PostList';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="below_navbar">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/prolist" component={ProList} />
            <Route path="/ridingtips" component={RidingTips} />
            <Route path="/postlist" component={PostList} />
            <Route path="/boardcare" component={BoardCare} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
