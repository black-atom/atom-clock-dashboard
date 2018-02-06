import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashBoardRoutes } from './routes';
import MenuNavbar from '../../components/navbar';

export const DashBoard = () => (
  <Switch>
    <MenuNavbar/>
    <DashBoardRoutes/>
  </Switch>
);

