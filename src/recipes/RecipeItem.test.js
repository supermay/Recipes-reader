import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import Vegetarian from '../images/Vegetarian.svg'
import Vegan from '../images/Vegan.svg'
import Pescatarian from '../images/Pescatarian.svg'

chai.use(chaiEnzyme())

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipeItem />',() => {
  const container = shallow(<RecipeItem { ...recipe} />)
  it('is wrapped in a article tag with class name "recipe"',() => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains a the title',() => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  it('has a carrot image',() => {
    expect(container.find('li')).to.contain(<img src={Vegetarian} alt="vegetarian" />)
  })

  it('doesn\'t have a corn image',() => {
    expect(container.find('li')).not.to.contain(<img src={Vegan} alt="vegan" />)
  })

  it('doesn\'t have a fish image',() => {
    expect(container.find('li')).not.to.contain(<img src={Pescatarian} alt="pescatarian" />)
  })



})
