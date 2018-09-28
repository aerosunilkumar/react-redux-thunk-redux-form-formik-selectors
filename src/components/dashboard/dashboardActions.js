import * as types from "../../actions/types";
import apiFactory from "../../api/api"

const fetchPostsStarted = () => ({
    type: types.FETCH_POSTS_STARTED
});

const fetchPostsSucceeded = data => ({
    type: types.FETCH_POSTS_SUCCEEDED,
    payload: data
});

const fetchPostsFailed = error => ({
    type: types.FETCH_POSTS_FAILED,
    payload: error
});

const baseUrl =
    "https://jsonplaceholder.typicode.com";

const api = apiFactory(baseUrl);

export const fetchPosts = () => dispatch => {
    console.log("Fetching")
    dispatch(fetchPostsStarted())
    api.get(
        `/posts`
    ).then(res => {
        dispatch(fetchPostsSucceeded(res.data));
    },
        error => {
            dispatch(fetchPostsFailed(error.response));
            console.log({
                description: error.toString(),
                fatal: true
            });
        })
}