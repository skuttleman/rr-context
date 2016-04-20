import ResultsPage from '../../src/components/ResultsPage'
import TestUtils from 'react-addons-test-utils'
import React from 'react'

describe('ResultsPage', ()=> {
  it('renders', () => {
    const output = TestUtils.renderIntoDocument(
      <div id="test-element">
        <ResultsPage dispatch={function(){}} />
      </div>
    )

    const resultsPage = output.getElementsByClassName('resultsPage')
    expect(resultsPage).not.toBeUndefined()
  })
})
