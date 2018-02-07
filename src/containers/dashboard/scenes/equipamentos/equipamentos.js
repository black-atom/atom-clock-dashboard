import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Novo, Gerenciar, Detalhes } from './containers';

export const RoutesEquipamentos = () => (
  <Switch>
    <Route path='/dashboard/equipamentos/novo' component={Novo}/>
    <Route path='/dashboard/equipamentos/gerenciar' component={Gerenciar}/>
    <Route path='/dashboard/equipamentos/detalhes' component={Detalhes}/>
  </Switch>
)