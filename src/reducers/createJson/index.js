import * as types from './../../constants'
import {getAndCreate as initialState} from './../initialState'

export default function createJson(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_REQUEST: {
            return { ...state, isFetching : true }
        }
        case types.CREATE_REQUEST_FAILURE: {
            return { ...state, error: action.error, isFetching: false }
        }
        case types.CREATE_REQUEST_SUCCESS: {
            return { ...state, payload: action.payload, isFetching: false }
        }
        default: {
            return state;
        }    
    }
}