import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRiderList from './FullRiderList';
import Rider from './Rider';

const ProRoutes = () => (
    <Switch>
        <Route exact path='/proriderlist' componet={FullRiderList} />
        <Route path='/proriderlist/:id' component={Rider} />
    </Switch>
   )

export default ProRoutes;