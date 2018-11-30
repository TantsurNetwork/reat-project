export const getAndCreate = {
    payload: {
        key: null,
        revision: null,
        title: null,
        json: null,
    },
    error: {
        message: null
    },
    isFetching: false
};

export const editorChanges = {
    parseFailure: false,
    valuesHistory: [],
    jsonsHistory: [],
    historyLength: 0,
    id: -1,
    value: "",
    json: null
}