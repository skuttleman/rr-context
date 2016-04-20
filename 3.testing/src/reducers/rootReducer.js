import {combineReducers} from 'redux'
import {SOME_ACTION} from '../actions/actions'

function someSpecializedReducer(state = false, action) {
  switch (action.type) {
    case SOME_ACTION:
      console.log('SOME_ACTION called in someSpecializedReducer')
      return !state
    default:
      return state
  }
}

// Put all your specialized reducers in here
const rootReducer = combineReducers({
  someSpecializedReducer
})

export default rootReducer