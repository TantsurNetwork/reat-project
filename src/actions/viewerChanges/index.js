import * as types from './../../constants'

export const sendViewerChanges = (value, key, level) => {
    return {
        type: types.SEND_VIEWER_CHANGES,
        payload: {
            value,
            key,
            level
        }
    }
}