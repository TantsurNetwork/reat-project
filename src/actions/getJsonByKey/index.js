import * as types from './../../constants'
import { GraphQLClient } from 'graphql-request'

const
    request = () => ({
        type: types.GET_REQUEST
    }),
    requestSuccess = payload => ({
        type: types.GET_REQUEST_SUCCESS,
        payload
    }),
    requestFailure = error => ({
        type: types.GET_REQUEST_FAILURE,
        error
    });

    export default function getJsonByKey({key, revision}) {
    const gql = new GraphQLClient("http://localhost:4000/graphql", { headers: {} });
    return dispatch => {
        gql.request(
            `query getJsonByKey( $key: String!, $revision: Int ) {
                getJsonByKey(key:$key, revision: $revision) {
                    key,
                    revision
                    title,
                    json
                }
            }`,
            {
                "key": key || "",
                "revision": revision || 1
            }
        )
            .then(payload => {
                console.log('From getJsonByKey - (payload) :', payload.getJsonByKey);
                console.log(dispatch);
                dispatch(requestSuccess(payload.getJsonByKey));
            })
            .catch(error => {
                console.log('From getJsonByKey - (error) :', error);
                dispatch(requestFailure(error));
            })

        dispatch(request());
    }
}

