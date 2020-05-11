import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRiderList from './FullRiderList';
import Rider from './Rider';

const ProRoutes = () => (
    <Switch>
        <Route exact path='/prorider' componet={FullRiderList} />
        <Route path='/prorider/:id' component={Rider} />
    </Switch>
)

export default ProRoutes;