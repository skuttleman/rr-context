import ResultsPage from '../../src/components/ResultsPage'
import TestUtils from 'react-addons-test-utils'
import React from 'react'

const fakeStore = {
  getState() {
    return {}
  },

  dispatch() {

  },

  subscribe() {

  }
}

describe('ResultsPage', ()=> {
  it('renders', () => {
    const output = TestUtils.renderIntoDocument(
      <div id="test-element">
        <ResultsPage store={fakeStore} dispatch={function(){}}/>
      </div>
    )

    const resultsPage = output.getElementsByClassName('resultsPage')
    expect(resultsPage).not.toBeUndefined()
  })
})
