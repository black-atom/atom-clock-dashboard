import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
    );
  }
}

export default App;
