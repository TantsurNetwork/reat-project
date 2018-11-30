import * as types from './../../constants'
import { editorChanges as initialState } from './../initialState'

export default function editorChanges(state = initialState, { type, payload }) {
    switch (type) {
        case types.EDITOR_CHANGE_FAILURE: {
            return { ...state, parseFailure: true }
        }
        case types.EDITOR_CHANGE_SUCCESS: {
            return {
                ...state,
                parseFailure: false,
                valuesHistory: state.valuesHistory.concat(state.value),
                jsonsHistory: state.jsonsHistory.concat(payload),
                historyLength: ++state.historyLength,
                json: payload,
                id: state.id + 1
            }
        }
        case types.SEND_EDITOR_VALUE: {
            return { ...state, value: payload }
        }
        case types.STEP_BACK: {
            console.warn("STEP_BACK", state)
            return { 
                ...state, 
                id: state.id - 1, 
                value: state.valuesHistory[state.id - 1], 
                json: state.jsonsHistory[state.id - 1] 
            }
        }
        case types.STEP_FORWARD: {
            return { 
                ...state, 
                id: state.id + 1, 
                value: state.valuesHistory[state.id + 1], 
                json: state.jsonsHistory[state.id + 1] 
            }
        }
        default: {
            return state;
        }
    }
}