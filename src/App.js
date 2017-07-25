import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title content="Why always say Hello to world?"/>
        </div>
        <p className="App-intro">
          <Title content="All recipes"/>
        </p>
      </div>
    );
  }
}

export default App;
