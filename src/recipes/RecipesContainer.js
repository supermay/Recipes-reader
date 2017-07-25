import React,{ PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'

export default class RecipesContainer extends PureComponent {
// newly added things
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    updateRecipe: PropTypes.func.isRequired,
  }
  renderRecipe(recipe,index) {
    const { updateRecipe } = this.props
    return <RecipeItem
    key={index}
    onChange = {updateRecipe}
    {...recipe} />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}
