import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home'
// import ProRiders from './components/ProRiders/ProRiders';
import Nav from './components/Navigation/Nav';
import RidingTips from './components/RidingTips/RidingTips';
import News from './components/News/News';
import BoardCare from './components/BoardCare/BoardCare';
// import NewsSinglePost from './components/News/NewsSinglePost/NewsSinglePost';
import PostList from './components/News2/PostList';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/proriders" component={ProRiders} /> */}
          <Route path="/ridingtips" component={RidingTips} />
          <Route path="/news" component={News} />
          <Route path="/postlist" component={PostList} />
          <Route path="/boardcare" component={BoardCare} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
