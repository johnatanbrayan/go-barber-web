import React from 'react';

import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/account/register" component={SignOut} />
  </Switch>
);

export default Routes;
