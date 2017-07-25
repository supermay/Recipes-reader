import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import RecipesContainer from './recipes/RecipesContainer'

class App extends Component {
  render() {
    return (
      <div>
      <Title content="All recipes" />
      <RecipesContainer recipes={[]} />
      </div>
    );
  }
}

export default App;
