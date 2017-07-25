import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import LikeButton from './LikeButton'
import spies from 'chai-spies'

chai.use(chaiEnzyme())
chai.use(spies)

describe('<LikeButton />', () => {
  const button = shallow(<LikeButton />)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('like')
  })

  it('has an initial state for "liked", that is "false"', () => {
  expect(button.state('liked')).to.eq(false)
  })

  describe('click it', () => {
   it('toggles the "liked" state', () => {
     // initial
     expect(button.state('liked')).to.eq(false)

     // first click
     button.find('button').simulate('click')
     expect(button.state('liked')).to.eq(true)

     // second click
     button.find('button').simulate('click')
     expect(button.state('liked')).to.eq(false)
   })
 })
})

describe('<LikeButton />', () => {
  const toggleLike = chai.spy()
  const button = shallow(<LikeButton liked={false} onChange={toggleLike} />)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('like')
  })

  describe('clicking the button', () => {
    it('calls "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike).to.have.been.called.exactly.once()
    })
  })
})
