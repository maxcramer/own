import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rider from './pros/Rider';
import ProRidersPage from './ProRiderPage';

const ProList = () => (
  <Switch>
    <Route exact path='/prolist' component={ProRidersPage}/>
    <Route path='/prolist/:id' component={Rider}/>
  </Switch>
)

export default ProList;