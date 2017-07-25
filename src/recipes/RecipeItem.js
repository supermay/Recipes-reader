import React, { PureComponent } from 'react'

export default class RecipeItem extends PureComponent {
  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className='recipe'>
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><span role="img" aria-label="vegan"></span></li> }
            { !vegan && vegetarian && <li><span role="img" aria-label="vegaratian"></span></li> }
            { pescatarian && <li><span role="img" aria-label="pescatarian"></span></li> }
          </ul>
        </div>
      </article>
    )
  }
}
