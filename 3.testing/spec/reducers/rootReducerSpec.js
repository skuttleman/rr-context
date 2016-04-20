import rootReducer from '../../src/reducers/rootReducer'
import {SOME_ACTION, SOME_OTHER_ACTION} from '../../src/actions/actions'

describe('.rootReducer', () => {
    it('flips boolean', () => {
        expect(
            rootReducer({'someSpecializedReducer': true}, {type: SOME_ACTION}))
            .toEqual({'someSpecializedReducer': false})
        expect(
            rootReducer({'someSpecializedReducer': false}, {type: SOME_ACTION}))
            .toEqual({'someSpecializedReducer': true})
    })

    it('ignores unknown actions', () => {
        expect(
            rootReducer({'someSpecializedReducer': false}, {type: SOME_OTHER_ACTION}))
            .toEqual({'someSpecializedReducer': false})
    })
})