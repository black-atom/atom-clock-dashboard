import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteApp } from './routes';
import Dashboard from './containers/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    );
  }
}

export default App;
