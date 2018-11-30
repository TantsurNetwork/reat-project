import { combineReducers } from 'redux';
import createJson from './createJson'
import getJsonByKey from './getJsonByKey'
import editorChanges from './editorChanges'

const reducers = combineReducers({
    createJson,
    getJsonByKey,
    editorChanges
})

export default reducers;