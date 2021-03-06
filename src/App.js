import React, { Component } from 'react';
import Title from './components/Title'
import RecipesContainer from './recipes/RecipesContainer'

const recipes = [
  {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
  },
  {
    title: 'Spare ribs',
    summary: 'Spare ribs are a variety of pork ribs cooked and eaten in various cuisines around the world. They are cut from the lower portion of the pig specifically the belly and breastbone, behind the shoulder, and include 11 to 13 long bones.',
    vegan: false,
    vegetarian: false,
    pescatarian: false,
  },
  {
    title: 'Agedashi Tofu',
    summary: 'Agedashi Tofu is one of those magical dishes where a few simple ingredients come together in a harmonizing synergy that elevates the dish from humble to divine. It is made with blocks of soft tofu that are coated in a thin layer of potato starch before being lightly fried.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
  },
]

// remember to update the seed
class App extends Component {
  constructor(){
    super()
    this.state = { recipes: recipes}
  }
  updateRecipe(id,updateAttributes){
    const { recipes } = this.props
    this.setState({
      recipes: recipes.map((recipe) => {
        // Match the change and the recipe
        if (recipes._id !== id) return recipe
        // following thing is to create a new object
        return Object.assign({},recipe, updateAttributes)
      })
    })

  }
  render() {
    const { recipes } = this.state
    return (
      <div>
      <Title content="All recipes" />
      <RecipesContainer
      recipes={ recipes }
      updateRecipe={ this.updateRecipe.bind(this)} />
      </div>
    );
  }
}

export default App;
