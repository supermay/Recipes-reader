import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme())

describe('<Title />',() => {
  const title = shallow(<Title content="Maybe tofu?" />)

  it('has a wrapping h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })
  it('has the content',() => {
    expect(title).to.have.text('Maybe tofu?')
  })
})
