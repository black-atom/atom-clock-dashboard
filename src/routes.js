import React from 'react';
import { DashBoard } from './containers/dashboard/DashBoard';
import { Route, Switch } from 'react-router-dom';

export const RoutesApp = () => (
  <Switch>
    <Route path='/dashboard' component={DashBoard}/>
  </Switch>
)