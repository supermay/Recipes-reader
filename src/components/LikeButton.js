import React, { PureComponent } from 'react'
import './LikeButton.css'

export default class LikeButton extends PureComponent {
  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += 'liked'}
    return classes
  }

  toggleLike() {
    console.log('Like button clicked!')
  }

  render(){
    const liked = false
    return (
      <p className={ this.className() }>
        <button onClick={ this.toggleLike.bind(this) }>
          { liked ?  '❤️' : '♡'  }
        </button>
        <span className="likes">{ liked? 'You like this' : null}
        </span>
        </p>
    )
  }

}
