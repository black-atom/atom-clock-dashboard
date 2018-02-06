import React from 'react';
import Home from './home';
import { Route } from 'react-router-dom';

export const HomePage = () => (
  <Route path='/' component={Home}/>
)

