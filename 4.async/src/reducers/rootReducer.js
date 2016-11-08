import {
  GET_LANGUAGES, RECEIVE_LANGUAGES, GET_LIKELIHOOD, RECEIVE_LIKELIHOOD
} from '../actions/actions'

export const languages = (state = [], {type, languages}) => {
  switch (type) {
    case GET_LANGUAGES:
      return []
    case RECEIVE_LANGUAGES:
      return languages
    default:
      return state
  }
}

export const likelihood = (state = {}, {type, language, likelihood}) => {
  switch (type) {
    case GET_LANGUAGES:
      return {}
    case RECEIVE_LIKELIHOOD:
      const object = Object.keys(state).reduce((object, key) => {
        object[key] = state[key]
        return object
      }, {})
      object[language] = likelihood
      return object
    default:
      return state
  }
}

export default {
  languages,
  likelihood
}
