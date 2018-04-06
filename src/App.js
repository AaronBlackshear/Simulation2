import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
