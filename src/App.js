import React, { Component } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather'

import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Weather />
      </div>
    );
  }
}

export default App;
