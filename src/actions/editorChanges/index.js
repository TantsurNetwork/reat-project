import * as types from './../../constants'
import createJson from './../createJson'

export const 
    editorChangeSuccess = payload => {
        // createJson({});
        
        return {
            type: types.EDITOR_CHANGE_SUCCESS,
            payload
        }
    },

    editorChangeFailure = () => {
        return {
            type: types.EDITOR_CHANGE_FAILURE
        }
    },

    sendEditorValue = (payload) => {
        return {
            type: types.SEND_EDITOR_VALUE,
            payload
        }
    },

    stepBack = () => {
        return {
            type: types.STEP_BACK
        }
    },

    stepForward = () => {
        return {
            type: types.STEP_FORWARD
        }
    };