import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRiderList from './FullRiderList';
import Rider from './Rider';

const ProList = () => (
  <Switch>
    <Route exact path='/prolist' componet={FullRiderList}/>
    <Route path='/prolist/:id' component={Rider}/>
  </Switch>
)

export default ProList;