import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/Pescatarian.svg'
import Vegetarian from '../images/Vegetarian.svg'
import Vegan from '../images/Vegan.svg'
import LikeButton from '../components/LikeButton'


export default class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegerarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  }
// newly added , check the framework in the reader
  toggleLike() {
    const { _id, liked } = this.props
    this.props.onChange(_id, { liked: !liked})
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className='recipe'>
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
          </ul>
        </div>
        <LikeButton onChange={this.toggleLike.bind(this)}/>
      </article>
    )
  }
}
