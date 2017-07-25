import React,{ PureComponent } from 'react'
import Title from '../components/Title'

export default class RecipesContainer extends PureComponent {
  renderRecipe(recipe,index) {
    return (
      <article className="recipe">
        <h1>{ recipe.title }</h1>
        <div>
          <p>{ recipe.summary }</p>
          <ul>
            { recipe.pescatarian && <li></li> }
            { recipe.vegan && <li></li> }
            { recipe.vegetarian && <li></li> }
          </ul>
        </div>
      </article>
      )
    }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe) }
        </main>
      </div>
    )
  }
}
