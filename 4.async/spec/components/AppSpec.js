import {App} from '../../src/components/App'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import actions from '../../src/actions/actions'

describe('App', ()=> {
  beforeEach(() => {
    spyOn(actions, 'getLanguages')
    spyOn(actions, 'getLikelihood')
  })

  const renderApp = () => {
    const dispatchSpy = jasmine.createSpy('dispatchSpy')
    const output = TestUtils.renderIntoDocument(
      <App languages={[]} likelihood={{}} dispatch={dispatchSpy} />
    )
    return {output, dispatchSpy}
  }

  it('renders', () => {
    const {output} = renderApp()
    const app = TestUtils.scryRenderedDOMComponentsWithClass(output, 'app')

    expect(app).toBeDefined()
  })
})
