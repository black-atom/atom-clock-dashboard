import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './scenes/main/main';
import { Novo } from './scenes/equipamentos/containers/novo';
import { RoutesEquipamentos } from './scenes/equipamentos/equipamentos';

export const DashBoardRoutes = () => (
  <Switch>
    <Route exact path='/dashboard/main' component={Main}/>
    <Route path='/dashboard/equipamentos' component={RoutesEquipamentos}/>
  </Switch>
);