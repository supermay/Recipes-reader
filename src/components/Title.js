import React, { PureComponent } from 'react'

export default class Title extends PureComponent {
  render() {
    return (
      <h1> {this.props.content } </h1>
    )
  }
}
