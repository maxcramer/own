import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRiderList from './FullRiderList';
import Rider from './Rider';

const ProRoutes = () => (
  <Switch>
    <Route exact path='/proriders' componet={FullRiderList}/>
    <Route path='/proriders/:id' component={Rider}/>
  </Switch>
)

export default ProRoutes;