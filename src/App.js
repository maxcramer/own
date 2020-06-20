import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home'
import ProList from './components/ProRiders/ProList';
import Nav from './components/Navigation/Nav';
import RidingTips from './components/RidingTips/RidingTips';
import BoardCare from './components/BoardCare/BoardCare';
import PostList from './components/News2/PostList';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import firebaseClient from './firebaseClient';

class App extends Component {

  state = {
    sideDrawerOpen: false,
  }

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  async componentDidMount() {
    firebaseClient.setup()
	const data = await firebaseClient.loadDatabase();
    this.setState({ database: data });
  }

    render() {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
        <Router>
            <div style={{ height: '100%' }}>
                <Nav drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <div className="below_navbar">
                    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/prolist" component={ProList} />
                    <Route path="/ridingtips" component={RidingTips} />
                    <Route path="/postlist" component={PostList} />
                    <Route path="/boardcare" component={BoardCare} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
