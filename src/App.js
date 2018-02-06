import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { HomePage } from './containers/home'

class App extends Component {
  render() {
    return (
      <Router>
        <HomePage/>
      </Router>
    );
  }
}

export default App;
