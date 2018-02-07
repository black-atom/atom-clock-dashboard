import React from 'react';
import { DashBoardRoutes } from './routes';
import MenuNavbar from './../../components/navbar';

const DashBoard = () => (
  <div>
    <MenuNavbar/>
    <DashBoardRoutes/>
  </div>
);

export default DashBoard;