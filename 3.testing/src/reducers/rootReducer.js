import {combineReducers} from 'redux'
import {SOME_ACTION} from '../actions/actions'

function someSpecializedReducer(state = false, action) {
  switch (action.type) {
    case SOME_ACTION:
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