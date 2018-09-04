import {FETACH_POSTS} from './types'
export const fetchPosts = () => dispatch => {
    console.log("Fetching")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: FETACH_POSTS,
                payload: data
            });
        })
}