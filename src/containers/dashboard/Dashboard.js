import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Equipamentos } from './scenes/equipamentos/equipamentos';
import { Main } from './scenes/main/main';

const DashBoard = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/equipamentos' component={Equipamentos}/>
    </Switch>
  </main>
);

export default DashBoard;
