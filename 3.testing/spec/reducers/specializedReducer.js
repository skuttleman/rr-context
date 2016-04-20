import specializedReducer from '../../src/reducers/rootReducer'
import {SOME_ACTION, SOME_OTHER_ACTION} from '../../src/actions/actions'

describe('.specializedReducer', () => {
  it('flips boolean', () => {
    expect(specializedReducer(true, {type: SOME_ACTION})).toEqual(false)
    expect(specializedReducer(false, {type: SOME_ACTION})).toEqual(true)
  })

  it('ignores unknown actions', () => {
    expect(specializedReducer(false, {type: SOME_OTHER_ACTION})).toEqual(false)
  })
})