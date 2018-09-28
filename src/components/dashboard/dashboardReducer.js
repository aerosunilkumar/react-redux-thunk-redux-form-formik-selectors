import * as types from "../../actions/types";
import initialState from "../../reducers/initialState";

const dashboardReducer = (
  state = initialState.dashboardData,
  action
) => {
  switch (action.type) {
    case types.FETCH_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        posts: [],
        postsError:false
      };
    case types.FETCH_POSTS_SUCCEEDED:
      return {
        ...state,
        posts: action.payload,
        postsError:false,
        isLoading: false
      };
      case types.FETCH_POSTS_FAILED:
      return {
        ...state,
        posts: [],
        postsError:action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default dashboardReducer;
