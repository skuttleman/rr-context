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
      <div>
        <ResultsPage store={fakeStore}/>
      </div>
    )

    const resultsPage = output.getElementsByClassName('resultsPage')[0]
    expect(resultsPage).toBeDefined()
    expect(resultsPage.innerHTML).toContain('Hello from ResultsPage.js!')
  })

  it('dispatches someAction on mount', () => {
    spyOn(fakeStore, 'dispatch')
    const output = TestUtils.renderIntoDocument(
      <div>
        <ResultsPage store={fakeStore}/>
      </div>
    )

    expect(fakeStore.dispatch).toHaveBeenCalledWith({type: 'SOME_ACTION'})
  })
})
