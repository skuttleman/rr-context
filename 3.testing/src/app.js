import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import ResultsPage from './components/ResultsPage'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ResultsPage />
  </Provider>,
  document.getElementById('content')
)