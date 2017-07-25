import React, { PureComponent } from 'react'
import './LikeButton.css'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
// for the properties
import PropTypes from 'prop-types'

export default class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += 'liked'}
    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
    this.props.onChange()
  }

  render(){
    const {liked} = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked? 'You like this' : null}
        </span>
        </p>
    )
  }

}
