import * as types from './../../constants'
import { GraphQLClient } from 'graphql-request'

const 
    request = () => ({
        type: types.CREATE_REQUEST
    }),
    requestSuccess = payload => ({
        type: types.CREATE_REQUEST_SUCCESS,
        payload
    }),
    requestFailure = error => ({
        type: types.CREATE_REQUEST_FAILURE,
        error
    });

export default function createJson ({key, title, json}) {
    const gql = new GraphQLClient("http://localhost:4000/graphql", { headers: {} });
    return dispatch => {
        gql.request(
            `mutation createJSON ( $key: String!, $title: String!, $json: String!) {
                createJson(key:$key, title:$title, json:$json) {
                    key,
                    revision
                    title,
                    json
                }
            }`,
            {
                "key": key,
                "title": title,
                "json": json
            }
        )
            .then(payload => {
                console.log('From createJson - (payload) :', payload.createJson);
                dispatch(requestSuccess(payload.createJson));
            })
            .catch(error => {
                console.log('From createJson - (error) :', error);
                dispatch(requestFailure(error));
            })

        dispatch(request());
    }
}