import { connect } from "react-redux";
import dashboardComponent from "./dashboardComponent.js";
import { fetchPosts } from "./dashboardActions";
import {
    getPostsSelector,
    getIsLoadingSelector,
    getPostsErrorSelector
}
    from './dashboardSelector';

const mapStateToProps = state => ({
    isLoading: getIsLoadingSelector(state),
    posts: getPostsSelector(state),
    postsError: getPostsErrorSelector(state)
});

const mapDispatchToProps = {
    fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(
    dashboardComponent
);
