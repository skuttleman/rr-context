import {App} from '../../src/components/App'
import TestUtils, {Simulate} from 'react-addons-test-utils'
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

  it('renders a form with an input box', () => {
    const {output} = renderApp()
    const forms = TestUtils.findAllInRenderedTree(output, ({tagName}) => tagName === 'FORM')
    const inputs = TestUtils.findAllInRenderedTree(output, ({name, tagName}) => name === 'phrase' && tagName === 'INPUT')
    expect(forms.length).toEqual(1)
    expect(inputs.length).toEqual(1)
  })

  it('dispatches getLanguages on submit', () => {
    const {output, dispatchSpy} = renderApp()
    const form = TestUtils.findAllInRenderedTree(output, ({tagName}) => tagName === 'FORM')[0]
    const input = TestUtils.findAllInRenderedTree(output, ({name, tagName}) => name === 'phrase' && tagName === 'INPUT')[0]
    actions.getLanguages.and.returnValue('actionSpy')
    spyOn(output, 'setState')


    input.value = 'test phrase'
    Simulate.submit(form)

    expect(output.setState).toHaveBeenCalledWith({ phrase: 'test phrase' })
    expect(dispatchSpy).toHaveBeenCalledWith('actionSpy')
    expect(actions.getLanguages).toHaveBeenCalledWith('test phrase')
  })
})
