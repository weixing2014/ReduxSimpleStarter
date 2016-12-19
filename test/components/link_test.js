import React from 'react'
import {shallow} from 'enzyme'
import Link from '../../src/components/link';
import sinon from 'sinon'

function setup(children = '', active = false) {
  const actions = {
    onClick: sinon.spy()
  }

  const component = shallow(
    <Link active={active} {...actions}>{children}</Link>
  )

  return {
    component,
    actions,
    span: component.find('span'),
    a: component.find('a'),
  }
}

describe('Link Component' , () => {
  it('has link text', () => {
    const {a} = setup('Text')

    expect(a.text()).to.equal('Text')
  });

  it('should call onClick when clicking', () => {
    const {a, actions} = setup()
    a.simulate('click', { preventDefault() {} })
    expect(actions.onClick.called).to.be.true
  })

  it('should not be clickable if active', () => {
    const {a, span, actions} = setup('Text', true)

    expect(a).to.have.length(0)
    expect(span.text()).to.equal('Text')

    span.simulate('click', { preventDefault() {} })
    expect(actions.onClick.called).to.be.false
  })

});
