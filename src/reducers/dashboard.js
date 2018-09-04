import { FETACH_POSTS } from '../actions/dashboard/types';

const initialState = {
    Posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETACH_POSTS:
            console.log("Fetch Case")
            return {
                ...state,
                Posts:action.payload
            };
        // case NEW_POST:
        // return {
        //     ...state,
        //     item:action.payload
        // };
        default:
        return state;
    }
}